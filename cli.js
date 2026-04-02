#!/usr/bin/env node

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const MCP_URL = "https://docs.reap.video/mcp";
const APP_URL = "https://reap.video";
const DOCS_URL = "https://docs.reap.video";
const API_URL = "https://docs.reap.video/api-reference";
const SKILLS_SOURCE = "https://docs.reap.video";

const args = process.argv.slice(2);
const command = args[0] || "";
const PKG = path.basename(process.argv[1]) || "reap-ai";

if (command === "mcp") {
  handleMcp(args.slice(1));
} else if (command === "setup") {
  handleSetup();
} else if (command === "help" || command === "--help" || command === "-h") {
  printHelp();
} else if (command === "") {
  handleDefault();
} else {
  printHelp();
}

function handleDefault() {
  console.log(`
\x1b[1m\x1b[36m🎬 reap — AI Video Clipping & Repurposing\x1b[0m

  Turn long videos into viral shorts, captions, and social posts.
  Powered by reap.video — 16,000+ creators, 396,000+ clips generated.

\x1b[1mInstall agent skills:\x1b[0m
  \x1b[33mnpx skills add ${SKILLS_SOURCE}\x1b[0m

\x1b[1mSet up MCP server:\x1b[0m
  \x1b[2mnpx ${PKG} mcp cursor\x1b[0m       Cursor IDE
  \x1b[2mnpx ${PKG} mcp claude\x1b[0m       Claude Desktop
  \x1b[2mnpx ${PKG} mcp vscode\x1b[0m       VS Code

\x1b[1mOr install MCP directly:\x1b[0m
  \x1b[33mnpx add-mcp ${MCP_URL}\x1b[0m

\x1b[1mLinks:\x1b[0m
  App       ${APP_URL}
  Docs      ${DOCS_URL}
  API       ${API_URL}
  MCP       ${MCP_URL}

\x1b[2mRun npx ${PKG} help for all commands.\x1b[0m
`);

  promptSkillsInstall();
}

function promptSkillsInstall() {
  if (!process.stdin.isTTY) return;

  process.stdout.write(
    "\x1b[1mInstall reap skills into your AI agent? (Y/n): \x1b[0m"
  );

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.once("data", (key) => {
    process.stdin.setRawMode(false);
    process.stdin.pause();

    const answer = key.trim().toLowerCase();
    console.log(answer || "y");

    if (answer === "" || answer === "y" || answer === "yes") {
      console.log(
        `\n\x1b[36mRunning: npx skills add ${SKILLS_SOURCE}\x1b[0m\n`
      );
      try {
        const child = spawn("npx", ["skills", "add", SKILLS_SOURCE], {
          stdio: "inherit",
          shell: true,
        });
        child.on("close", (code) => {
          if (code === 0) {
            console.log(
              "\n\x1b[32m✓ reap skills installed successfully.\x1b[0m"
            );
          }
          process.exit(code || 0);
        });
        child.on("error", () => {
          console.log(
            `\n\x1b[33mCouldn't run skills CLI. Install manually:\x1b[0m`
          );
          console.log(`  npx skills add ${SKILLS_SOURCE}\n`);
          process.exit(0);
        });
      } catch {
        console.log(
          `\n\x1b[33mCouldn't run skills CLI. Install manually:\x1b[0m`
        );
        console.log(`  npx skills add ${SKILLS_SOURCE}\n`);
        process.exit(0);
      }
    } else {
      console.log(
        `\n\x1b[2mSkipped. Run later with: npx skills add ${SKILLS_SOURCE}\x1b[0m\n`
      );
      process.exit(0);
    }
  });
}

function handleSetup() {
  console.log(`
\x1b[1m\x1b[36m🎬 reap — Quick Start\x1b[0m

  \x1b[1m1.\x1b[0m Sign up at \x1b[36m${APP_URL}\x1b[0m
  \x1b[1m2.\x1b[0m Upload a video or paste a YouTube URL
  \x1b[1m3.\x1b[0m Get AI-generated clips, captions, and social posts

\x1b[1mFor AI agents:\x1b[0m
  Install skills:    \x1b[33mnpx skills add ${SKILLS_SOURCE}\x1b[0m
  Add MCP server:    \x1b[33mnpx add-mcp ${MCP_URL}\x1b[0m

\x1b[1mFor developers:\x1b[0m
  API docs:          ${API_URL}
  Get API key:       ${APP_URL} → Profile → Settings → API Keys
`);

  openBrowser(APP_URL);
}

function handleMcp(args) {
  const client = (args[0] || "").toLowerCase();

  const configs = {
    claude: {
      label: "Claude Desktop",
      file: "claude_desktop_config.json",
      config: JSON.stringify(
        { mcpServers: { reap: { url: MCP_URL } } },
        null,
        2
      ),
    },
    "claude-code": {
      label: "Claude Code",
      file: "Terminal",
      config: `claude mcp add reap ${MCP_URL}`,
      isCommand: true,
    },
    cursor: {
      label: "Cursor",
      file: ".cursor/mcp.json",
      config: JSON.stringify(
        { mcpServers: { reap: { url: MCP_URL } } },
        null,
        2
      ),
      writePath: ".cursor/mcp.json",
    },
    vscode: {
      label: "VS Code",
      file: ".vscode/mcp.json",
      config: JSON.stringify(
        { mcpServers: { reap: { url: MCP_URL } } },
        null,
        2
      ),
      writePath: ".vscode/mcp.json",
    },
    windsurf: {
      label: "Windsurf",
      file: "~/.windsurf/mcp.json",
      config: JSON.stringify(
        { mcpServers: { reap: { url: MCP_URL } } },
        null,
        2
      ),
    },
  };

  if (!client || !configs[client]) {
    console.log(`
\x1b[1m🔌 reap MCP Server\x1b[0m

  Choose your AI client:

  \x1b[2mnpx ${PKG} mcp cursor\x1b[0m        Cursor
  \x1b[2mnpx ${PKG} mcp claude\x1b[0m        Claude Desktop
  \x1b[2mnpx ${PKG} mcp claude-code\x1b[0m   Claude Code (CLI)
  \x1b[2mnpx ${PKG} mcp vscode\x1b[0m        VS Code
  \x1b[2mnpx ${PKG} mcp windsurf\x1b[0m      Windsurf

  Or use the universal installer:
  \x1b[33mnpx add-mcp ${MCP_URL}\x1b[0m

  Also install agent skills:
  \x1b[33mnpx skills add ${SKILLS_SOURCE}\x1b[0m
`);
    return;
  }

  const { label, file, config, isCommand, writePath } = configs[client];

  if (writePath && !isCommand) {
    tryWriteConfig(writePath, config, label);
  } else {
    console.log(`
\x1b[1m🔌 reap MCP — ${label}\x1b[0m

  \x1b[2mFile: ${file}\x1b[0m

\x1b[36m${config}\x1b[0m

  ${isCommand ? "Run the command above in your terminal." : `Add the config above to \x1b[1m${file}\x1b[0m and restart ${label}.`}

  \x1b[2mAlso install agent skills: npx skills add ${SKILLS_SOURCE}\x1b[0m
`);
  }
}

function tryWriteConfig(relPath, configJson, label) {
  const fullPath = path.resolve(process.cwd(), relPath);
  const dir = path.dirname(fullPath);

  try {
    let existing = {};
    if (fs.existsSync(fullPath)) {
      try {
        existing = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      } catch {}
    }

    const incoming = JSON.parse(configJson);

    if (existing.mcpServers && existing.mcpServers.reap) {
      console.log(`
\x1b[32m✓ reap MCP already configured in ${relPath}\x1b[0m

  \x1b[2mRestart ${label} to pick up any changes.\x1b[0m
  \x1b[2mAlso install agent skills: npx skills add ${SKILLS_SOURCE}\x1b[0m
`);
      return;
    }

    const merged = {
      ...existing,
      mcpServers: {
        ...(existing.mcpServers || {}),
        ...incoming.mcpServers,
      },
    };

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(merged, null, 2) + "\n");

    console.log(`
\x1b[32m✓ reap MCP server added to ${relPath}\x1b[0m

  Restart ${label} to connect.

  \x1b[2mAlso install agent skills: npx skills add ${SKILLS_SOURCE}\x1b[0m
`);
  } catch (err) {
    console.log(`
\x1b[1m🔌 reap MCP — ${label}\x1b[0m

  \x1b[33mCouldn't write to ${relPath} automatically.\x1b[0m
  Add this to \x1b[1m${relPath}\x1b[0m manually:

\x1b[36m${configJson}\x1b[0m

  \x1b[2mAlso install agent skills: npx skills add ${SKILLS_SOURCE}\x1b[0m
`);
  }
}

function printHelp() {
  console.log(`
\x1b[1m\x1b[36m🎬 reap — AI Video Clipping & Repurposing\x1b[0m

\x1b[1mUsage:\x1b[0m
  npx ${PKG} [command]

\x1b[1mCommands:\x1b[0m
  (no command)    Install agent skills interactively
  mcp [client]    Set up MCP server for your AI client
  setup           Quick start guide (opens reap.video)
  help            Show this message

\x1b[1mExamples:\x1b[0m
  npx ${PKG}                  Install reap skills
  npx ${PKG} mcp cursor      Add MCP to Cursor
  npx ${PKG} mcp claude      Add MCP to Claude Desktop
  npx ${PKG} setup           Open reap.video

\x1b[1mDirect installers:\x1b[0m
  npx skills add ${SKILLS_SOURCE}
  npx add-mcp ${MCP_URL}

\x1b[1mLinks:\x1b[0m
  App       ${APP_URL}
  Docs      ${DOCS_URL}
  API       ${API_URL}
  MCP       ${MCP_URL}
`);
}

function openBrowser(url) {
  try {
    const plat = process.platform;
    if (plat === "darwin") execSync(`open ${url}`);
    else if (plat === "win32") execSync(`start ${url}`);
    else execSync(`xdg-open ${url}`);
  } catch {}
}
