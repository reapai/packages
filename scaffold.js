#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { PACKAGES } = require("./package-configs");

const cliSource = fs.readFileSync(path.join(__dirname, "cli.js"), "utf8");
const outDir = path.join(__dirname, "dist");

for (const [pkg, config] of Object.entries(PACKAGES)) {
  const pkgDir = path.join(outDir, pkg);
  fs.mkdirSync(pkgDir, { recursive: true });

  const pkgCli = cliSource.replace(
    /npx reap-ai/g,
    `npx ${pkg}`
  );

  const pkgJson = {
    name: pkg,
    version: "0.1.0",
    description: config.description,
    bin: { [pkg]: "./cli.js" },
    keywords: config.keywords,
    author: "reap <hello@reap.video> (https://reap.video)",
    license: "MIT",
    homepage: config.homepage,
    repository: {
      type: "git",
      url: "https://github.com/reapai/cli",
    },
    engines: {
      node: ">=16",
    },
  };

  fs.writeFileSync(
    path.join(pkgDir, "package.json"),
    JSON.stringify(pkgJson, null, 2) + "\n"
  );
  fs.writeFileSync(path.join(pkgDir, "cli.js"), pkgCli);
  fs.chmodSync(path.join(pkgDir, "cli.js"), "755");
  fs.writeFileSync(path.join(pkgDir, "README.md"), config.readme);

  console.log(`✅ ${pkg}/ ready  →  ${config.homepage}`);
}

const names = Object.keys(PACKAGES);
console.log(`\nAll ${names.length} packages scaffolded in ${outDir}/`);
console.log(`\nTo publish all:\n`);
console.log(`  cd ${outDir}`);
console.log(`  for pkg in ${names.join(" ")}; do`);
console.log(`    cd $pkg && npm publish --access public && cd ..`);
console.log(`  done`);
console.log();
