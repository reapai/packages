const PACKAGES = {
  "ai-video": {
    description: "AI video editor CLI — clip, caption, dub, and repurpose videos from the terminal",
    keywords: ["ai video", "ai video editor", "video editor ai", "ai video tool", "video editing ai", "ai video generator", "ai video maker", "text based video editing", "ai video processing", "mcp"],
    homepage: "https://reap.video/ai-video-editor",
    readme: `# ai-video

The AI video editor you run from your terminal. Clip long videos into shorts, add captions in 98+ languages, dub audio in 80+ languages, and publish everywhere — powered by [reap](https://reap.video).

## Why ai-video?

Manual video editing doesn't scale. A single podcast episode takes 2-4 hours to turn into social clips by hand. \`ai-video\` connects you to reap's processing engine so you can automate the entire pipeline: upload a video, get back publish-ready shorts with captions, reframing, and platform-optimized formats.

## Quick Start

\`\`\`bash
npx ai-video setup
\`\`\`

## Add AI Agent Skills

Install reap's video editing skills into Cursor, Claude, or any MCP-compatible agent:

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server

Let your AI agent clip, caption, and dub videos through natural conversation:

\`\`\`bash
npx ai-video mcp cursor
npx ai-video mcp claude
npx ai-video mcp vscode
\`\`\`

Or the universal one-liner:

\`\`\`bash
npx add-mcp https://docs.reap.video/mcp
\`\`\`

## What reap does

- **[AI Video Clipping](https://reap.video/tools/ai-video-clipping)** — Detects high-engagement moments and cuts them into vertical shorts for TikTok, Reels, and YouTube Shorts
- **[AI Caption Generator](https://reap.video/tools/ai-captioning)** — Animated subtitles in 98+ languages with word-level highlighting and 50+ style presets
- **[AI Dubbing](https://reap.video)** — Natural voice dubbing in 80+ languages, not robotic TTS
- **[AI Video Editor](https://reap.video/ai-video-editor)** — Edit through the transcript, remove filler words, clean noise, add B-roll
- **[Smart Reframing](https://reap.video/tools/ai-video-clipping)** — Speaker-tracked cropping for any aspect ratio (9:16, 1:1, 4:5)
- **[Social Scheduler](https://reap.video)** — Publish and schedule clips directly to YouTube, TikTok, Instagram, and LinkedIn
- **[REST API](https://docs.reap.video/api-reference)** — Programmatic access to every feature with async processing and webhooks
- **[MCP Server](https://reap.video/mcp)** — Use reap from Claude, Cursor, VS Code, Windsurf, or any MCP client

## Pricing

Free plan available. Paid plans start at $10/mo. [See pricing →](https://reap.video/pricing)

## Links

| Resource | URL |
|----------|-----|
| App | https://reap.video |
| Documentation | https://docs.reap.video |
| API Reference | https://docs.reap.video/api-reference |
| MCP Server | https://docs.reap.video/mcp |
| Agent Skills | \`npx skills add https://docs.reap.video\` |

## License

MIT © [reap](https://reap.video)
`,
  },

  "clip-video": {
    description: "AI video clipper — turn long videos into viral TikTok, Reels, and YouTube Shorts automatically",
    keywords: ["clip video", "video clipper", "clip video online", "video clipping tool", "cut video into clips", "video to shorts", "long video to shorts", "auto clip video", "ai clipper", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# clip-video

Turn any long video into scroll-stopping short clips. \`clip-video\` uses AI to find the best moments in podcasts, interviews, webinars, and vlogs, then cuts, reframes, and captions them for TikTok, Instagram Reels, and YouTube Shorts.

Powered by [reap](https://reap.video) — the AI video clipper trusted by 16,000+ creators.

## How it works

1. Upload a long video or paste a YouTube URL
2. AI analyzes the transcript, visuals, and pacing to find viral-worthy moments
3. Each clip is automatically reframed to vertical (9:16), captioned, and scored for engagement
4. Download or publish directly to your social platforms

One 30-minute video → 10-20 publish-ready shorts in minutes, not hours.

## Quick Start

\`\`\`bash
npx clip-video setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server — Clip Videos from Any AI Agent

\`\`\`bash
npx clip-video mcp cursor
npx clip-video mcp claude
\`\`\`

Or:

\`\`\`bash
npx add-mcp https://docs.reap.video/mcp
\`\`\`

## Features

| Feature | What it does |
|---------|-------------|
| [AI Clip Detection](https://reap.video/tools/ai-video-clipping) | Finds high-engagement moments using transcript + visual analysis |
| [Speaker Reframing](https://reap.video/tools/ai-video-clipping) | Tracks the speaker's face and crops to vertical automatically |
| [Animated Captions](https://reap.video/tools/ai-captioning) | 50+ caption styles with word-by-word animation in 98+ languages |
| [Virality Scoring](https://reap.video/tools/ai-video-clipping) | Ranks clips by predicted engagement so you post the best ones first |
| [AI Dubbing](https://reap.video) | Dub your clips into 80+ languages with natural-sounding voices |
| [Social Publishing](https://reap.video) | Schedule and publish clips to TikTok, YouTube, Instagram, and LinkedIn |
| [REST API](https://docs.reap.video/api-reference) | Automate clipping at scale with async webhooks |
| [MCP Server](https://reap.video/mcp) | Clip videos from Claude, Cursor, or any MCP-compatible agent |

## Who uses clip-video?

- **Podcasters** turning episodes into 15-20 social clips per episode
- **YouTubers** repurposing long-form into Shorts without re-editing
- **Agencies** scaling clip production across multiple client accounts
- **Marketers** extracting highlights from webinars and demos
- **Educators** breaking lectures into bite-sized learning clips

## Pricing

Free plan available. Paid plans from $10/mo. [Compare plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "ai-clips": {
    description: "Generate AI-powered short clips from long videos — automated clipping for social media at scale",
    keywords: ["ai clips", "ai clip generator", "ai short clips", "generate clips ai", "auto generate video clips", "ai highlight clips", "short form video ai", "ai shorts generator", "social media clips ai", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# ai-clips

Generate publish-ready short clips from any long video using AI. No timeline editing, no manual scrubbing — just upload and get clips.

Built on [reap](https://reap.video), the AI video engine behind 396,000+ clips generated.

## The problem

You recorded a great podcast, webinar, or interview. Now you need 10-15 clips for TikTok, Reels, and Shorts. Manually finding moments, cutting, adding captions, and reformatting takes 3-5 hours. AI clips does it in minutes.

## What you get

Upload one long video and receive:
- **AI-selected highlight clips** scored by engagement potential
- **Vertical reframing** with speaker tracking (9:16 for TikTok/Reels/Shorts)
- **Animated captions** in 98+ languages with customizable styles
- **Platform-optimized exports** for every major social network
- **Engagement scores** so you know which clips to post first

## Quick Start

\`\`\`bash
npx ai-clips setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server

Generate clips by talking to your AI agent:

\`\`\`bash
npx ai-clips mcp cursor
npx ai-clips mcp claude
npx ai-clips mcp vscode
\`\`\`

## Capabilities

- **[AI Clipping](https://reap.video/tools/ai-video-clipping)** — Multi-signal analysis: face focus, voice tone, pacing, and transcript highlights
- **[Captioning](https://reap.video/tools/ai-captioning)** — 98+ languages, 50+ animated styles, word-level timing
- **[Dubbing](https://reap.video)** — Localize clips into 80+ languages with natural AI voices
- **[B-Roll Generation](https://reap.video/ai-video-editor)** — AI-generated B-roll to fill visual gaps
- **[Scheduling](https://reap.video)** — Built-in calendar for publishing across all platforms
- **[API](https://docs.reap.video/api-reference)** — Batch process videos programmatically with webhook callbacks
- **[MCP](https://reap.video/mcp)** — Use from Claude, Cursor, Windsurf, VS Code, or any MCP client

## Numbers

| Metric | Value |
|--------|-------|
| Clips generated | 396,000+ |
| Users | 16,000+ |
| Caption languages | 98+ |
| Dubbing languages | 80+ |
| Avg clips per video | ~17 |

## Pricing

Start free. Paid plans from $10/mo. [See pricing →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "reap-ai": {
    description: "reap CLI — AI video clipping, captioning in 98+ languages, dubbing in 80+ languages, and MCP server setup",
    keywords: ["reap ai", "reap video", "reap video editor", "reap mcp", "reap api", "reap cli", "reap clipping", "reap captions", "reap dubbing", "mcp server video"],
    homepage: "https://reap.video",
    readme: `# reap-ai

The official CLI for [reap](https://reap.video) — the AI video editor that clips, captions, dubs, and publishes your content across every platform.

## What is reap?

reap is an AI video processing platform that turns long-form content into short-form social media clips. Upload a podcast, interview, webinar, or any long video and get back publish-ready shorts with animated captions, speaker reframing, and optional AI dubbing in 80+ languages.

Unlike generic video editors, reap is purpose-built for the repurposing workflow: one input video → many output clips → scheduled across all platforms.

## Quick Start

\`\`\`bash
npx reap-ai setup
\`\`\`

## Add AI Agent Skills

Install reap's full skill set into your AI coding agent:

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

This gives your agent the ability to clip videos, generate captions, create dubs, manage projects, and publish content — all through natural conversation.

## MCP Server Setup

\`\`\`bash
npx reap-ai mcp cursor       # Cursor IDE
npx reap-ai mcp claude       # Claude Desktop
npx reap-ai mcp claude-code  # Claude Code CLI
npx reap-ai mcp vscode       # VS Code
npx reap-ai mcp windsurf     # Windsurf
\`\`\`

Or use the universal installer:

\`\`\`bash
npx add-mcp https://docs.reap.video/mcp
\`\`\`

## Platform

| Feature | Details |
|---------|---------|
| [AI Video Clipping](https://reap.video/tools/ai-video-clipping) | Prompt-first clip detection with virality scoring |
| [AI Captioning](https://reap.video/tools/ai-captioning) | 98+ languages, 50+ animated styles, word-level sync |
| [AI Dubbing](https://reap.video) | 80+ languages with natural voice synthesis |
| [AI Video Editor](https://reap.video/ai-video-editor) | Transcript-based editing, filler removal, noise cleanup, B-roll |
| [Smart Reframing](https://reap.video/tools/ai-video-clipping) | Speaker-tracked cropping for 9:16, 1:1, 4:5, 16:9 |
| [Social Scheduler](https://reap.video) | Direct publishing to YouTube, TikTok, Instagram, LinkedIn |
| [REST API](https://docs.reap.video/api-reference) | Full programmatic access with async processing and webhooks |
| [MCP Server](https://reap.video/mcp) | Agent-ready interface for Claude, Cursor, VS Code, and more |
| [Agent Skills](https://docs.reap.video) | \`npx skills add https://docs.reap.video\` |

## Why reap over alternatives?

- **AI dubbing in 80+ languages** — Vizard, OpusClip, and Submagic don't do dubbing
- **Starts at $10/mo** — Most competitors start at $16-29/mo
- **Built-in social scheduler** — No separate tool needed for publishing
- **MCP + API + CLI** — Three interfaces to the same engine for any workflow
- **B-roll generation** — AI-generated visuals to fill gaps in talking-head clips

## Links

- **App**: https://reap.video
- **Docs**: https://docs.reap.video
- **API**: https://docs.reap.video/api-reference
- **MCP**: https://docs.reap.video/mcp
- **Skills**: \`npx skills add https://docs.reap.video\`
- **Pricing**: https://reap.video/pricing

## License

MIT © [reap](https://reap.video)
`,
  },

  "reap-video": {
    description: "reap video processing CLI — turn podcasts, webinars, and interviews into social-ready short clips with AI",
    keywords: ["reap video", "reap video editor", "reap video tool", "video processing cli", "video automation tool", "podcast to clips", "webinar to clips", "interview clips ai", "video repurposing platform", "mcp"],
    homepage: "https://reap.video",
    readme: `# reap-video

The video processing CLI from [reap](https://reap.video). Turn podcasts, webinars, interviews, and any long-form video into social-ready short clips with AI.

## Use Cases

### Podcasters
Record once, clip 15-20 times. reap finds the best sound bites, reframes for vertical, adds animated captions, and schedules them across TikTok, YouTube Shorts, Instagram Reels, and LinkedIn.

### Agencies
Process multiple client videos in parallel. Brand templates keep fonts, colors, and logos consistent. Team workspaces let editors collaborate without stepping on each other.

### Marketers
Turn one webinar recording into a month of social content. AI highlights the most quotable moments, captions them for silent autoplay, and exports in every platform format.

### Educators
Break 60-minute lectures into 2-3 minute learning segments. Captions in 98+ languages make content accessible globally. AI dubbing in 80+ languages opens new markets.

## Quick Start

\`\`\`bash
npx reap-video setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server

\`\`\`bash
npx reap-video mcp cursor
npx reap-video mcp claude
\`\`\`

## Everything reap does

- [AI Video Clipping](https://reap.video/tools/ai-video-clipping) — Find and extract the best moments automatically
- [AI Captioning](https://reap.video/tools/ai-captioning) — Animated subtitles in 98+ languages
- [AI Dubbing](https://reap.video) — Voice dubbing in 80+ languages
- [AI Video Editor](https://reap.video/ai-video-editor) — Transcript editing, filler removal, B-roll
- [Social Scheduler](https://reap.video) — Calendar-based publishing to all platforms
- [REST API](https://docs.reap.video/api-reference) — Automate everything programmatically
- [MCP Server](https://reap.video/mcp) — Agent-ready video processing

## License

MIT © [reap](https://reap.video)
`,
  },

  "ai-editor": {
    description: "AI video editor CLI — edit video through text, remove filler words, clean audio, add B-roll and captions automatically",
    keywords: ["ai editor", "ai video editor", "ai editor tool", "text based video editor", "ai edit video", "automatic video editor", "ai video editing", "edit video with ai", "ai powered editor", "mcp"],
    homepage: "https://reap.video/ai-video-editor",
    readme: `# ai-editor

Edit video without a timeline. \`ai-editor\` connects you to [reap](https://reap.video)'s AI video editor — edit through the transcript, remove filler words, clean background noise, add B-roll, and generate captions in 98+ languages.

## Why edit video with AI?

Traditional video editors force you into timelines, keyframes, and frame-by-frame scrubbing. For talking-head content — podcasts, interviews, webinars, vlogs — that's overkill. AI editing lets you work with the transcript instead: delete a sentence, and the video cut follows. It's editing as fast as you can read.

## Quick Start

\`\`\`bash
npx ai-editor setup
\`\`\`

## Add AI Agent Skills

Install reap's editing skills into Cursor, Claude, or any MCP-compatible agent:

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server — Edit Videos from Any AI Agent

\`\`\`bash
npx ai-editor mcp cursor
npx ai-editor mcp claude
npx ai-editor mcp vscode
\`\`\`

Or the universal installer:

\`\`\`bash
npx add-mcp https://docs.reap.video/mcp
\`\`\`

## What the AI editor does

| Feature | How it helps |
|---------|-------------|
| [Transcript Editing](https://reap.video/ai-video-editor) | Edit video by editing text — delete words, rearrange sections, trim silences |
| [Filler Word Removal](https://reap.video/ai-video-editor) | Automatically detect and remove "um", "uh", "like", "you know" |
| [Noise Cleanup](https://reap.video/ai-video-editor) | AI-powered background noise reduction for clean, studio-quality audio |
| [AI B-Roll](https://reap.video/ai-video-editor) | Generate contextual B-roll to cover jump cuts and add visual interest |
| [Animated Captions](https://reap.video/tools/ai-captioning) | 98+ languages, 50+ styles with word-level animation and highlighting |
| [AI Dubbing](https://reap.video) | Natural voice dubbing in 80+ languages — not robotic TTS |
| [Smart Reframing](https://reap.video/tools/ai-video-clipping) | Speaker-tracked cropping for 9:16, 1:1, 4:5, and 16:9 |
| [AI Clipping](https://reap.video/tools/ai-video-clipping) | Find and extract the best moments from long videos automatically |
| [Social Scheduler](https://reap.video) | Publish edited clips directly to TikTok, YouTube, Instagram, and LinkedIn |

## reap vs traditional editors

| | reap AI Editor | Premiere Pro | DaVinci Resolve | Descript |
|---|---|---|---|---|
| Edit via transcript | Yes | No | No | Yes |
| AI clipping | Yes | No | No | Limited |
| AI dubbing (80+ languages) | Yes | No | No | No |
| Animated captions (98+ languages) | Yes | Plugin needed | Plugin needed | Limited |
| AI B-roll generation | Yes | No | No | No |
| Built-in social publishing | Yes | No | No | No |
| MCP / Agent integration | Yes | No | No | No |
| Starting price | $10/mo | $23/mo | Free/$299 | $24/mo |

## Who it's for

- **Podcasters** — Clean up episodes, remove filler, add captions, clip highlights
- **YouTubers** — Edit talking-head videos 5x faster through the transcript
- **Agencies** — Process client videos at scale with brand templates and team workspaces
- **Course creators** — Edit lectures, add multilingual captions, break into modules
- **Marketers** — Turn webinar recordings into polished social content

## Links

| Resource | URL |
|----------|-----|
| AI Video Editor | https://reap.video/ai-video-editor |
| AI Clipping | https://reap.video/tools/ai-video-clipping |
| AI Captioning | https://reap.video/tools/ai-captioning |
| API Reference | https://docs.reap.video/api-reference |
| MCP Server | https://reap.video/mcp |
| Agent Skills | \`npx skills add https://docs.reap.video\` |
| Pricing | https://reap.video/pricing |

## License

MIT © [reap](https://reap.video)
`,
  },

  "repurpose-video": {
    description: "AI video repurposing tool — one long video becomes 20+ social clips for TikTok, Reels, Shorts, and LinkedIn",
    keywords: ["repurpose video", "video repurposing", "repurpose video content", "video repurposing tool", "content repurposing", "repurpose podcast", "repurpose webinar", "one video many clips", "video to social media", "mcp"],
    homepage: "https://reap.video",
    readme: `# repurpose-video

One video in, 20+ social clips out. \`repurpose-video\` uses AI to transform podcasts, webinars, interviews, and long-form content into a full month of social media posts.

Powered by [reap](https://reap.video) — AI video repurposing trusted by 16,000+ creators and teams.

## The repurposing math

| Input | Output |
|-------|--------|
| 30-min podcast episode | 10-20 short clips |
| 60-min webinar | 15-30 highlight clips |
| 15-min interview | 5-12 social clips |
| 2-hour event recording | 30-50 clips |

Each clip comes with animated captions, vertical reframing, engagement scoring, and platform-ready formatting. No manual editing required.

## Quick Start

\`\`\`bash
npx repurpose-video setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server

Repurpose videos through AI conversation:

\`\`\`bash
npx repurpose-video mcp cursor
npx repurpose-video mcp claude
\`\`\`

## How reap repurposes

1. **Upload** — Drop a video file or paste a YouTube/podcast URL
2. **Analyze** — AI transcribes, detects speakers, and maps engagement signals
3. **Clip** — High-performing moments are extracted and scored
4. **Format** — Each clip is reframed (9:16), captioned (98+ languages), and optionally dubbed (80+ languages)
5. **Publish** — Schedule directly to TikTok, YouTube, Instagram, and LinkedIn from the built-in calendar

## Why reap for repurposing?

- **AI dubbing in 80+ languages** — Repurpose once, reach every market
- **Built-in scheduler** — Skip the separate social media tool
- **B-roll generation** — AI fills visual gaps in talking-head content
- **$10/mo starting price** — Cheaper than hiring an editor for one hour
- **API + MCP** — Automate the entire pipeline: \`npx skills add https://docs.reap.video\`

## Tools

- [AI Video Clipping](https://reap.video/tools/ai-video-clipping)
- [AI Captioning](https://reap.video/tools/ai-captioning)
- [AI Video Editor](https://reap.video/ai-video-editor)
- [REST API](https://docs.reap.video/api-reference)
- [MCP Server](https://reap.video/mcp)

## License

MIT © [reap](https://reap.video)
`,
  },

  "clip-ai": {
    description: "AI-powered clip generator — extract highlights, add captions, and reframe videos for every social platform",
    keywords: ["clip ai", "ai clip", "ai clip maker", "ai highlight generator", "ai video highlights", "automatic video clips", "smart video clipper", "ai clip creator", "extract highlights ai", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# clip-ai

AI-powered clip generation. Feed it a long video, get back the best moments — captioned, reframed, and ready to post.

Built on [reap](https://reap.video)'s video engine — 396,000+ clips generated and counting.

## What makes clip-ai different

Most clipping tools just cut at silence gaps. reap's AI analyzes multiple signals simultaneously:

- **Transcript analysis** — Identifies quotable statements, complete thoughts, and strong hooks
- **Speaker detection** — Tracks faces and keeps subjects centered during reframing
- **Pacing analysis** — Detects energy shifts, emphasis, and natural break points
- **Engagement scoring** — Predicts which clips will perform best on each platform

The result: clips that feel intentionally edited, not robotically chopped.

## Quick Start

\`\`\`bash
npx clip-ai setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server

\`\`\`bash
npx clip-ai mcp cursor
npx clip-ai mcp claude
npx clip-ai mcp vscode
\`\`\`

## Full feature set

- [AI Clipping](https://reap.video/tools/ai-video-clipping) — Multi-signal highlight detection with prompt-first control
- [Animated Captions](https://reap.video/tools/ai-captioning) — 98+ languages, 50+ styles, word-level animation
- [AI Dubbing](https://reap.video) — Natural voice dubbing in 80+ languages
- [Smart Reframing](https://reap.video/tools/ai-video-clipping) — Speaker-tracked cropping for vertical, square, and widescreen
- [B-Roll](https://reap.video/ai-video-editor) — AI-generated visuals to enhance clips
- [Social Scheduler](https://reap.video) — Publish directly to TikTok, YouTube, Instagram, LinkedIn
- [API](https://docs.reap.video/api-reference) — Programmatic clip generation at scale
- [MCP](https://reap.video/mcp) — Agent-ready clipping from any AI client

## Pricing

Free plan available. Paid from $10/mo. [See plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "video-clips": {
    description: "Create video clips from long content — AI clipping, captioning, and publishing for TikTok, YouTube Shorts, and Reels",
    keywords: ["video clips", "make video clips", "create video clips", "video clips maker", "short video clips", "video clips for social media", "video clips generator", "youtube video clips", "tiktok video clips", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# video-clips

Create short video clips from long-form content automatically. Upload a podcast, webinar, interview, or vlog and get social-ready clips for TikTok, YouTube Shorts, Instagram Reels, and LinkedIn.

Powered by [reap](https://reap.video) — AI video clipping and captioning for creators and teams.

## How to make video clips with AI

Traditional workflow: Watch the full video → Find good moments → Cut manually → Add captions → Reformat for each platform → Export. Time: 2-4 hours.

With video-clips: Upload → AI finds the best moments → Clips are reframed, captioned, and formatted automatically. Time: minutes.

## Quick Start

\`\`\`bash
npx video-clips setup
\`\`\`

## Add AI Agent Skills

\`\`\`bash
npx skills add https://docs.reap.video
\`\`\`

## MCP Server — Make Clips from Any AI Agent

\`\`\`bash
npx video-clips mcp cursor
npx video-clips mcp claude
\`\`\`

## What's included

| Feature | Description |
|---------|-------------|
| [AI Clip Detection](https://reap.video/tools/ai-video-clipping) | Finds the highest-engagement moments in your video |
| [Animated Captions](https://reap.video/tools/ai-captioning) | 98+ languages, 50+ animated styles |
| [AI Dubbing](https://reap.video) | Dub clips into 80+ languages with natural voices |
| [Vertical Reframing](https://reap.video/tools/ai-video-clipping) | Auto-crop to 9:16, 1:1, or 4:5 with speaker tracking |
| [B-Roll Generation](https://reap.video/ai-video-editor) | AI-generated visuals for talking-head content |
| [Social Publishing](https://reap.video) | Schedule clips to TikTok, YouTube, Instagram, LinkedIn |
| [REST API](https://docs.reap.video/api-reference) | Batch processing with webhook notifications |
| [MCP Server](https://reap.video/mcp) | Use from Claude, Cursor, VS Code, or any MCP agent |

## Formats supported

**Input**: MP4, MOV, WebM, MKV, AVI, YouTube URLs, podcast RSS feeds

**Output**: TikTok (9:16), YouTube Shorts (9:16), Instagram Reels (9:16), Instagram Feed (1:1, 4:5), LinkedIn (16:9, 1:1), Facebook (16:9), Twitter/X (16:9)

## Pricing

Free plan available. Paid plans from $10/mo. [Compare plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "ai-video-editor": {
    description: "AI video editor — edit videos through text, auto-clip highlights, add captions in 98+ languages, dub in 80+ languages",
    keywords: ["ai video editor", "best ai video editor", "ai video editing tool", "video editor ai", "ai powered video editor", "automatic video editor", "ai editing software", "text based video editor", "online ai video editor", "mcp"],
    homepage: "https://reap.video/ai-video-editor",
    readme: `# ai-video-editor

The AI video editor that replaces timelines with text. Edit through the transcript, auto-clip highlights, add animated captions in 98+ languages, and dub in 80+ languages.

Built by [reap](https://reap.video) — trusted by 16,000+ creators and teams.

## What makes this different from Premiere, Resolve, or CapCut?

Traditional editors make you scrub timelines frame-by-frame. reap's AI video editor lets you work with the transcript: delete a sentence and the video cut follows. It handles the repetitive work — filler removal, noise cleanup, captioning, reframing — so you focus on storytelling.

## Quick Start

\\\`\\\`\\\`bash
npx ai-video-editor setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx ai-video-editor mcp cursor
npx ai-video-editor mcp claude
npx ai-video-editor mcp vscode
\\\`\\\`\\\`

## Full Feature Set

| Feature | Description |
|---------|-------------|
| [Transcript Editing](https://reap.video/ai-video-editor) | Edit video by editing text — cut, rearrange, trim |
| [AI Clipping](https://reap.video/tools/ai-video-clipping) | Auto-detect viral moments from long-form content |
| [Animated Captions](https://reap.video/tools/ai-captioning) | 98+ languages, 50+ styles, word-level animation |
| [AI Dubbing](https://reap.video) | Natural voice dubbing in 80+ languages |
| [Filler Removal](https://reap.video/ai-video-editor) | Auto-remove "um", "uh", "like", "you know" |
| [Noise Cleanup](https://reap.video/ai-video-editor) | Studio-quality audio from any recording |
| [AI B-Roll](https://reap.video/ai-video-editor) | Generated visuals to fill jump cuts |
| [Smart Reframing](https://reap.video/tools/ai-video-clipping) | Speaker-tracked crop for 9:16, 1:1, 4:5, 16:9 |
| [Social Scheduler](https://reap.video) | Publish to TikTok, YouTube, Instagram, LinkedIn |
| [REST API](https://docs.reap.video/api-reference) | Automate editing at scale |
| [MCP Server](https://reap.video/mcp) | Edit videos from any AI agent |

## reap vs the field

| | reap | Premiere Pro | DaVinci Resolve | Descript | CapCut |
|---|---|---|---|---|---|
| Edit via transcript | Yes | No | No | Yes | No |
| AI clipping | Yes | No | No | Limited | Limited |
| AI dubbing (80+ langs) | Yes | No | No | No | No |
| Captions (98+ langs) | Yes | Plugin | Plugin | Limited | Yes |
| B-roll generation | Yes | No | No | No | No |
| Social publishing | Yes | No | No | No | Limited |
| MCP + API | Yes | No | No | No | No |
| Starting price | $10/mo | $23/mo | Free/$299 | $24/mo | Free/$8/mo |

## Links

- **App**: https://reap.video
- **AI Video Editor**: https://reap.video/ai-video-editor
- **Docs**: https://docs.reap.video
- **API**: https://docs.reap.video/api-reference
- **MCP**: https://reap.video/mcp
- **Skills**: \`npx skills add https://docs.reap.video\`
- **Pricing**: https://reap.video/pricing

## License

MIT © [reap](https://reap.video)
`,
  },

  "ai-shorts": {
    description: "AI shorts generator — turn long videos into TikTok, YouTube Shorts, and Instagram Reels automatically",
    keywords: ["ai shorts", "ai shorts generator", "ai shorts maker", "youtube shorts ai", "tiktok shorts ai", "instagram reels ai", "auto generate shorts", "long video to shorts ai", "short form video ai", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# ai-shorts

Turn any long video into TikTok, YouTube Shorts, and Instagram Reels — automatically. Upload once, get 10-20 publish-ready shorts with captions, reframing, and engagement scoring.

Powered by [reap](https://reap.video) — 396,000+ shorts generated.

## The math

| Input | Shorts you get |
|-------|---------------|
| 15-min interview | 5-12 shorts |
| 30-min podcast | 10-20 shorts |
| 60-min webinar | 15-30 shorts |
| 2-hour event | 30-50 shorts |

Each short comes with animated captions (98+ languages), vertical reframing, engagement scores, and platform-ready formatting. No editing skills required.

## Quick Start

\\\`\\\`\\\`bash
npx ai-shorts setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx ai-shorts mcp cursor
npx ai-shorts mcp claude
\\\`\\\`\\\`

## How it works

1. **Upload** — Drop a video or paste a YouTube URL
2. **AI analyzes** — Transcript, speaker detection, pacing, energy shifts
3. **Shorts generated** — Each clip is reframed (9:16), captioned, and scored
4. **Publish** — Schedule directly to TikTok, YouTube, Instagram, LinkedIn

## Features

- [AI Clip Detection](https://reap.video/tools/ai-video-clipping) — Multi-signal highlight discovery
- [Animated Captions](https://reap.video/tools/ai-captioning) — 98+ languages, 50+ styles
- [AI Dubbing](https://reap.video) — Localize shorts into 80+ languages
- [Smart Reframing](https://reap.video/tools/ai-video-clipping) — Speaker-tracked vertical cropping
- [Social Scheduler](https://reap.video) — Built-in calendar for multi-platform publishing
- [API](https://docs.reap.video/api-reference) — Automate short generation at scale
- [MCP](https://reap.video/mcp) — Generate shorts from any AI agent

## Pricing

Free plan available. Paid from $10/mo. [See plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "video-to-shorts": {
    description: "Convert long videos to shorts — AI-powered video to TikTok, Reels, and YouTube Shorts converter",
    keywords: ["video to shorts", "long video to shorts", "convert video to shorts", "video to youtube shorts", "video to tiktok", "video to reels", "video converter shorts", "make shorts from video", "video shorts maker", "mcp"],
    homepage: "https://reap.video/tools/ai-video-clipping",
    readme: `# video-to-shorts

Convert any long video into shorts for TikTok, YouTube, and Instagram. Paste a URL or upload a file — AI handles the clipping, captioning, reframing, and formatting.

Built on [reap](https://reap.video)'s video engine.

## Before and after

**Before**: Watch full video → find moments → cut manually → add captions → reformat for each platform → export 3 times. Time: 3-5 hours.

**After**: Upload → AI finds the best moments → shorts are captioned, reframed, and formatted for every platform. Time: minutes.

## Quick Start

\\\`\\\`\\\`bash
npx video-to-shorts setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx video-to-shorts mcp cursor
npx video-to-shorts mcp claude
\\\`\\\`\\\`

## Supported conversions

| Input | Output formats |
|-------|---------------|
| YouTube video URL | TikTok (9:16), Shorts (9:16), Reels (9:16) |
| Podcast MP4/MOV | Vertical shorts with speaker reframing |
| Webinar recording | Highlight clips with captions |
| Interview footage | Quote-driven shorts with animated text |
| Lecture/course video | Bite-sized learning segments |

## What's included

- [AI Clipping](https://reap.video/tools/ai-video-clipping) — Finds the best moments in your video
- [Vertical Reframing](https://reap.video/tools/ai-video-clipping) — Speaker-tracked 9:16 crop
- [Animated Captions](https://reap.video/tools/ai-captioning) — 98+ languages, 50+ styles
- [AI Dubbing](https://reap.video) — 80+ languages for global reach
- [Engagement Scoring](https://reap.video/tools/ai-video-clipping) — Know which shorts to post first
- [Social Publishing](https://reap.video) — Schedule to all platforms from one calendar
- [API](https://docs.reap.video/api-reference) — Batch convert videos programmatically
- [MCP](https://reap.video/mcp) — Convert videos from any AI agent

## Pricing

Free to start. Paid from $10/mo. [Compare plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "video-dub": {
    description: "AI video dubbing CLI — dub videos into 80+ languages with natural-sounding AI voices",
    keywords: ["video dub", "ai dubbing", "dub video", "video dubbing tool", "ai voice dubbing", "translate video audio", "multilingual video", "video localization", "ai dub", "mcp"],
    homepage: "https://reap.video",
    readme: `# video-dub

Dub any video into 80+ languages with natural-sounding AI voices. Not robotic TTS — actual voice dubbing that preserves tone, pacing, and emotion.

Powered by [reap](https://reap.video) — the only AI video platform with clipping + captioning + dubbing in one tool.

## Why dubbing matters

93% of the internet doesn't speak English natively. A single dubbed video can unlock audiences in India, Brazil, Germany, Japan, Indonesia, and 75+ more markets. Traditional dubbing costs $1,000+ per language. AI dubbing through reap costs a fraction and takes minutes, not weeks.

## Quick Start

\\\`\\\`\\\`bash
npx video-dub setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx video-dub mcp cursor
npx video-dub mcp claude
\\\`\\\`\\\`

## Supported languages

80+ dubbing languages including: English, Spanish, Portuguese, French, German, Italian, Japanese, Korean, Chinese (Mandarin), Hindi, Arabic, Turkish, Indonesian, Vietnamese, Thai, Dutch, Polish, Russian, Swedish, and many more.

Use the API to get the full list:
\\\`\\\`\\\`
GET https://public.reap.video/api/v1/automation/get-dubbing-languages
\\\`\\\`\\\`

## The full reap platform

Dubbing is just one part of the pipeline. reap also gives you:

- [AI Clipping](https://reap.video/tools/ai-video-clipping) — Turn long videos into short clips
- [Animated Captions](https://reap.video/tools/ai-captioning) — Subtitles in 98+ languages
- [AI Video Editor](https://reap.video/ai-video-editor) — Transcript-based editing, filler removal, B-roll
- [Smart Reframing](https://reap.video/tools/ai-video-clipping) — Auto-crop for any aspect ratio
- [Social Scheduler](https://reap.video) — Publish to every platform from one calendar
- [REST API](https://docs.reap.video/api-reference) — Automate dubbing at scale
- [MCP Server](https://reap.video/mcp) — Dub videos from any AI agent

## Why reap for dubbing?

Most competitors (Vizard, OpusClip, Submagic, Descript) don't offer dubbing at all. reap is the only platform that combines clipping + captioning + dubbing in one workflow, starting at $10/mo.

## License

MIT © [reap](https://reap.video)
`,
  },

  "captions-ai": {
    description: "AI caption generator — animated video captions and subtitles in 98+ languages with 50+ style presets",
    keywords: ["captions ai", "ai captions", "auto captions", "video captions ai", "caption generator ai", "automatic captions", "ai subtitle generator", "animated captions", "video subtitles ai", "mcp"],
    homepage: "https://reap.video/tools/ai-captioning",
    readme: `# captions-ai

Generate animated video captions in 98+ languages. Word-by-word highlighting, 50+ style presets, emoji support, and platform-ready formatting for TikTok, YouTube, Instagram, and LinkedIn.

Powered by [reap](https://reap.video).

## Why AI captions?

- **85% of social videos are watched on mute** — captions are mandatory, not optional
- **Captioned videos get 40% more engagement** on average
- Manual captioning takes 30-60 minutes per video — AI does it in seconds
- Supporting 98+ languages means global reach from day one

## Quick Start

\\\`\\\`\\\`bash
npx captions-ai setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx captions-ai mcp cursor
npx captions-ai mcp claude
\\\`\\\`\\\`

## Caption features

| Feature | Details |
|---------|---------|
| Languages | 98+ including Hinglish and other romanized scripts |
| Styles | 50+ animated presets (word-by-word, highlight, karaoke) |
| Timing | Word-level sync for precise animation |
| Translation | Translate captions across languages automatically |
| Emoji | AI-generated contextual emoji support |
| Brand kits | Custom fonts, colors, and positioning |
| Export | Burned-in video or downloadable SRT/VTT files |

## Also included with reap

Captions are part of the complete reap platform:

- [AI Clipping](https://reap.video/tools/ai-video-clipping) — Auto-clip highlights from long videos
- [AI Dubbing](https://reap.video) — Voice dubbing in 80+ languages
- [AI Video Editor](https://reap.video/ai-video-editor) — Transcript editing, noise cleanup, B-roll
- [Smart Reframing](https://reap.video/tools/ai-video-clipping) — Vertical crop with speaker tracking
- [Social Scheduler](https://reap.video) — Publish captioned clips everywhere
- [REST API](https://docs.reap.video/api-reference) — Batch caption generation
- [MCP Server](https://reap.video/mcp) — Add captions from any AI agent

## Pricing

Free plan available. Paid from $10/mo. [See plans →](https://reap.video/pricing)

## License

MIT © [reap](https://reap.video)
`,
  },

  "ai-captions": {
    description: "Auto-generate video captions with AI — 98+ languages, animated styles, word-level sync, and subtitle translation",
    keywords: ["ai captions", "ai caption", "auto caption video", "ai subtitles", "generate captions ai", "video captions automatic", "ai closed captions", "caption video ai", "subtitle generator ai", "mcp"],
    homepage: "https://reap.video/tools/ai-captioning",
    readme: `# ai-captions

Auto-generate accurate video captions with AI. 98+ languages, animated word-by-word styles, emoji highlights, and built-in translation — ready for TikTok, YouTube Shorts, Instagram Reels, and LinkedIn.

Built on [reap](https://reap.video)'s captioning engine.

## The problem with manual captions

Typing captions by hand: 30-60 minutes per video. Syncing timing: another 15-30 minutes. Translating for other markets: hours. Formatting for each platform: more time.

AI captions: upload a video, get perfectly synced animated captions in seconds. In any of 98+ languages.

## Quick Start

\\\`\\\`\\\`bash
npx ai-captions setup
\\\`\\\`\\\`

## Add AI Agent Skills

\\\`\\\`\\\`bash
npx skills add https://docs.reap.video
\\\`\\\`\\\`

## MCP Server

\\\`\\\`\\\`bash
npx ai-captions mcp cursor
npx ai-captions mcp claude
npx ai-captions mcp vscode
\\\`\\\`\\\`

## What you get

- **98+ languages** — Including romanized scripts (Hinglish, Romanji, etc.)
- **50+ animated styles** — Word-by-word, highlight, karaoke, minimal, bold
- **Word-level timing** — Every word synced to the millisecond
- **Translation** — Auto-translate captions to any supported language
- **Brand templates** — Lock down fonts, colors, size, and positioning
- **Emoji support** — Contextual emoji generation
- **Export options** — Burned-in video, SRT, VTT subtitle files

## The complete platform

AI captions is one piece of reap. You also get:

- [AI Video Clipping](https://reap.video/tools/ai-video-clipping) — Turn long videos into viral shorts
- [AI Dubbing](https://reap.video) — Natural voice dubbing in 80+ languages
- [AI Video Editor](https://reap.video/ai-video-editor) — Transcript editing, filler removal, B-roll
- [Social Scheduler](https://reap.video) — Publish everywhere from one calendar
- [REST API](https://docs.reap.video/api-reference) — Automate captioning at any scale
- [MCP Server](https://reap.video/mcp) — Caption videos from any AI agent
- [Agent Skills](https://docs.reap.video) — \`npx skills add https://docs.reap.video\`

## License

MIT © [reap](https://reap.video)
`,
  },
};

module.exports = { PACKAGES };
