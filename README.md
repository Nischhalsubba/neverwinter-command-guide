<div align="center">

# Neverwinter Command Guide

**A searchable, structured Neverwinter command reference designed to make console commands, syntax, examples, and practical usage easier to understand.**

![Top language](https://img.shields.io/github/languages/top/Nischhalsubba/neverwinter-command-guide?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/neverwinter-command-guide?style=flat-square)
![Repo size](https://img.shields.io/github/repo-size/Nischhalsubba/neverwinter-command-guide?style=flat-square)

[Browse source](https://github.com/Nischhalsubba/neverwinter-command-guide/tree/main) · [Issues](https://github.com/Nischhalsubba/neverwinter-command-guide/issues)

</div>

## Overview

**Neverwinter Command Guide** is documented as a reference product: users need to find a command, understand what it does, see the required syntax or arguments, and copy an example without confusing verified behavior with speculation.

<details open>
<summary><strong>🏗️ Interactive reference architecture</strong></summary>

```mermaid
flowchart LR
    PLAYER["Player"] --> SEARCH["Search / browse guide"]
    DATA["Command catalog"] --> SEARCH
    SEARCH --> ENTRY["Command entry"]
    ENTRY --> SYNTAX["Syntax / arguments"]
    ENTRY --> EXAMPLE["Example"]
    ENTRY --> NOTES["Source / caveats"]
    SYNTAX --> COPY["Copy / use command"]
    EXAMPLE --> COPY
```

</details>

## Player flow

```mermaid
flowchart TD
    NEED["Need a command"] --> FIND["Search / browse"] --> OPEN["Open command entry"] --> VERIFY["Review syntax and notes"] --> COPY["Copy example"] --> GAME["Use in Neverwinter"]
```

## Audience guide

| Audience | Focus |
|---|---|
| Players | Fast command lookup and understandable examples |
| Developers | Search, data model, filtering and copy behavior |
| Designers | Reference density, scanning, responsive search and states |
| Maintainers | Provenance, verification date, version notes and corrections |

## Getting started

The Next.js app and its lockfile are in [`web/`](./web), not the repository root. Use Node.js 22+ and npm 10+ as declared by [`web/package.json`](./web/package.json).

```bash
git clone https://github.com/Nischhalsubba/neverwinter-command-guide.git
cd neverwinter-command-guide/web
npm ci
npm run dev
```

Open http://localhost:3000 to browse the guide locally. To verify a production build, run `npm run check` from the same `web/` directory. Run `npm run build` before `npm start`, since `start` serves a built application.

For more background, see the [application documentation](./web/README.md) and the [quality workflow](./.github/workflows/quality.yml).

## Content quality

Separate verified commands from uncertain or historical notes. Use consistent syntax formatting, explain arguments, preserve source context, and avoid presenting outdated commands as current game behavior.

## SEO & discoverability

Use natural terms such as **Neverwinter commands, Neverwinter console commands, command guide, command syntax, Neverwinter keybind commands, and Neverwinter command reference** only where supported by actual catalog content.

## Contribution flow

```mermaid
flowchart LR
    COMMAND["Command addition / correction"] --> SOURCE["Verify source"] --> DATA["Update entry"] --> TEST["Check search / formatting"] --> DOCS["Record notes / version"] --> PR["Pull request"]
```
