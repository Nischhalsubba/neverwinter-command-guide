# Neverwinter Command Guide — Product and Engineering Case Study

> A comprehensive product, content, SEO, accessibility, frontend architecture, and maintenance case study for the Neverwinter Command Guide repository. This document is intentionally detailed so future maintainers, portfolio reviewers, designers, engineers, and AI coding agents can understand the project without turning `lib/commands-data.js` into a sacred cave painting. Documentation: humanity's desperate attempt to leave breadcrumbs before the next refactor eats the trail.

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Repository Snapshot](#repository-snapshot)
3. [Product Context](#product-context)
4. [Problem Statement](#problem-statement)
5. [Target Users](#target-users)
6. [Product Principles](#product-principles)
7. [Information Architecture](#information-architecture)
8. [Command Data Model](#command-data-model)
9. [Content and Editorial Strategy](#content-and-editorial-strategy)
10. [Search and Discovery Strategy](#search-and-discovery-strategy)
11. [SEO and Programmatic Pages](#seo-and-programmatic-pages)
12. [Route and Page Strategy](#route-and-page-strategy)
13. [Frontend Architecture](#frontend-architecture)
14. [Design System Direction](#design-system-direction)
15. [Accessibility Strategy](#accessibility-strategy)
16. [Responsive Strategy](#responsive-strategy)
17. [Motion Strategy](#motion-strategy)
18. [Copy, Syntax, and Example Rules](#copy-syntax-and-example-rules)
19. [Command Verification Strategy](#command-verification-strategy)
20. [Content Expansion Strategy](#content-expansion-strategy)
21. [Quality Assurance Strategy](#quality-assurance-strategy)
22. [Performance Strategy](#performance-strategy)
23. [Privacy, Legal, and Fan-Project Notes](#privacy-legal-and-fan-project-notes)
24. [Maintenance Playbook](#maintenance-playbook)
25. [Risk Register](#risk-register)
26. [Roadmap](#roadmap)
27. [Portfolio Review Notes](#portfolio-review-notes)
28. [AI Coding Agent Notes](#ai-coding-agent-notes)
29. [Appendix A: Suggested Command Schema](#appendix-a-suggested-command-schema)
30. [Appendix B: Suggested Category Schema](#appendix-b-suggested-category-schema)
31. [Appendix C: Manual QA Matrix](#appendix-c-manual-qa-matrix)
32. [Appendix D: Editorial Checklist](#appendix-d-editorial-checklist)
33. [Appendix E: Glossary](#appendix-e-glossary)
34. [Disclaimer](#disclaimer)

---

## Executive Summary

**Neverwinter Command Guide** is a focused, fan-made reference site for Neverwinter slash commands, chat tools, whispers, emotes, utility commands, screenshot commands, combat-log commands, aliases, command examples, and category-based discovery.

The project is built with Next.js, React, App Router pages, static command detail routes, a central command dataset, route-level metadata, search-oriented content structure, GSAP motion, global CSS design tokens, and SEO-oriented architecture. Unlike a generic wiki or catch-all fan site, this repository has a narrow product promise: help players find, understand, copy, and use Neverwinter commands quickly.

The site is designed around real lookup behavior. Players often remember fragments of a command instead of the exact syntax. A player may remember that `/r` replies to a whisper but not remember the full label. Another player may need `/CombatLog 1` before using a parser but not know how to disable it. Another may want screenshot commands, emotes, party chat, guild chat, officer chat, zone chat, or stuck recovery without digging through scattered forum posts and half-updated references, because naturally even basic command syntax has to become an archaeological exercise.

This case study documents the product reasoning, content model, editorial rules, search strategy, SEO strategy, accessibility principles, design direction, frontend architecture, risks, and maintenance practices required to keep the project useful and trustworthy.

---

## Repository Snapshot

| Attribute | Value |
|---|---|
| Repository | `Nischhalsubba/neverwinter-command-guide` |
| Visibility | Public |
| Default branch | `main` |
| App type | Fan-made static command reference site |
| Framework | Next.js `15.5.14` |
| UI runtime | React `19.1.0` |
| Routing | Next.js App Router |
| Motion | GSAP `3.14.2` |
| Styling | Global CSS and component styling |
| Data source | Local command dataset in `lib/commands-data.js` |
| Rendering model | Static generation for command pages |
| Main product surface | `/commands` searchable command archive |
| Supporting surfaces | homepage, category pages, emotes, utility pages, command detail pages |
| Package status | Private package, public repository |
| Maintainer | Nischhal Raj Subba |

---

## Product Context

Neverwinter is an MMO with many chat, social, utility, display, and command-line style shortcuts. These commands can help with:

- alliance communication
- zone communication
- guild communication
- party communication
- private whispers
- replying to whispers
- emotes and roleplay
- screenshots
- frame-rate display
- combat logging
- help and recovery
- stuck character handling

The problem is not only that commands exist. The problem is that players need them at specific moments. They may be trying to coordinate a run, reply to a whisper, turn on combat logs before a dungeon, take a clean screenshot, or recover a stuck character. At those moments, a command guide should be fast, readable, and copy-ready.

A search-first command guide is valuable because it turns command knowledge into an interface:

- users search by syntax
- users browse by category
- users scan common commands first
- users open detail pages for examples
- users copy syntax directly
- users learn aliases and notes
- users understand uncertainty when commands are undocumented or patch-sensitive

---

## Problem Statement

### User problem

Players need quick command help, but command information is often scattered, outdated, incomplete, or written in a way that assumes users already know what they are looking for.

### Content problem

Raw command lists are technically useful but often unfriendly. They may include syntax without context, aliases without examples, undocumented behavior without warnings, and utility commands without practical notes.

### Product problem

A command guide must support both quick lookup and exploratory browsing. Users might know the exact command, category, intended action, or only a vague memory of what they want.

### SEO problem

Many users arrive through specific search intent such as “Neverwinter whisper command,” “Neverwinter combat log command,” or “Neverwinter screenshot command.” A single large page does not serve long-tail intent as well as structured command detail routes.

### Trust problem

Fan-made game references can become stale. The site must avoid presenting undocumented, patch-sensitive, or unverified behavior as absolute truth.

---

## Target Users

### 1. New players

New players need simple explanations and examples. They may not understand chat channels, aliases, command syntax, or when commands are useful.

Needs:

- plain-language descriptions
- copy-ready syntax
- common examples
- clear categories
- minimal jargon

### 2. Returning players

Returning players may remember command fragments but not exact syntax.

Needs:

- fast search
- alias lookup
- category browsing
- most-used command shortcuts
- detail pages for reminders

### 3. Endgame players

Endgame players may need utility commands for combat logs, screenshots, party communication, and coordination.

Needs:

- combat log guidance
- chat and whisper syntax
- utility notes
- reliable examples
- fast mobile lookup

### 4. Guild and alliance organizers

Organizers need party, guild, officer, alliance, and zone communication commands.

Needs:

- communication command clusters
- examples with realistic coordination language
- alias coverage
- category pages

### 5. Content maintainers

Maintainers need a predictable data model and editorial rules to add commands safely.

Needs:

- command schema
- content checklist
- verification states
- QA process
- category rules
- SEO checklist

### 6. Portfolio reviewers

Portfolio reviewers need to see product thinking beyond “I made a page.”

Needs:

- product rationale
- IA strategy
- SEO strategy
- accessibility direction
- frontend architecture
- content system design

---

## Product Principles

### 1. Search-first, not decoration-first

The command archive is the product. Visual polish supports lookup, but search and command comprehension matter most.

### 2. Copy-ready syntax

A command reference should make syntax easy to copy, read, and distinguish from surrounding prose.

### 3. Examples should feel real

Examples should reflect how players actually communicate. Fake examples make the site feel decorative and oddly corporate, which is impressive in the worst way.

### 4. Categories should match player intent

Players think in tasks: chat, whispers, utility, screenshots, emotes, display controls. The IA should reflect that.

### 5. Detail pages should serve long-tail intent

Every meaningful command deserves its own page when the command can attract specific search or help intent.

### 6. Uncertainty should be visible

Undocumented or patch-sensitive commands should carry notes rather than being presented as guaranteed behavior.

### 7. Stay narrow

This is not a full wiki. The project is strongest when it focuses on command reference and does not mutate into a catch-all fansite with lore, builds, mounts, and the existential weight of every MMO spreadsheet ever created.

---

## Information Architecture

The site follows a layered information architecture.

```mermaid
flowchart TD
    HOME[Homepage] --> COMMANDS[/commands archive]
    HOME --> CATEGORIES[Category pages]
    HOME --> FEATURED[Most-used commands]
    COMMANDS --> DETAIL[Command detail pages]
    CATEGORIES --> DETAIL
    DETAIL --> COMMANDS
    DETAIL --> CATEGORY[Related category]
    HOME --> EMOTES[/emotes]
    HOME --> UTILITY[/utility]
```

### Homepage

The homepage acts as orientation. It should:

- explain what the guide covers
- surface major command groups
- highlight common commands
- route users toward the command archive
- reinforce that this is a fan-made reference

### Commands archive

`/commands` is the main search and browse surface.

It should support:

- search by syntax
- search by title
- search by aliases
- search by description
- category filtering
- featured or most-used commands
- full archive browsing

### Category pages

Category pages serve intent clusters.

Examples:

- Chat commands
- Private messaging commands
- Party and guild commands
- Utility commands
- Emotes
- Display commands

### Command detail pages

Command detail pages serve specific queries.

Each page should include:

- syntax
- title
- description
- example
- aliases
- category
- note if needed
- related commands or category link
- SEO metadata

---

## Command Data Model

The current command dataset stores structured command entries in `lib/commands-data.js`.

### Existing fields

The command entries use fields such as:

- `id`
- `syntax`
- `title`
- `description`
- `example`
- `aliases`
- `category`
- `section`
- `anchor`
- `letter`
- `note`
- `noteText`

### Why this model works

The model is compact and friendly to static generation. A local dataset is enough because the command library is narrow, curated, and editorially managed.

### Recommended future fields

As the guide expands, consider adding:

- `verificationStatus`
- `source`
- `lastVerifiedAt`
- `patchNotes`
- `platformNotes`
- `relatedCommandIds`
- `searchTerms`
- `riskLevel`

### Command data rule

Every command entry should be valid as both a card and a detail page. If the entry only works in one layout, the model is leaking presentation assumptions. Naturally the data will not apologize for this. Data never does.

---

## Content and Editorial Strategy

The site should be written as a practical guide, not a lore-heavy fan page or a raw technical dump.

### Editorial voice

The content should be:

- direct
- player-friendly
- practical
- copy-ready
- clear about uncertainty
- light on fluff
- specific with examples

### Command entry structure

Every command entry should answer:

1. What is the command?
2. What does it do?
3. What syntax should I type?
4. What is a realistic example?
5. Are there aliases?
6. Does it have any caveat?

### Notes strategy

Use notes for:

- undocumented behavior
- availability caveats
- safer usage advice
- commands that vary by client or patch
- commands with on/off values
- commands that may confuse new players

### Example strategy

Examples should be realistic but harmless.

Good examples:

- `/p Ready for the next pull`
- `/z LFM for master trial`
- `/all Looking for dragon runs`
- `/tell Character@Handle, hello`

Avoid examples that include:

- harassment
- personal information
- account names beyond generic placeholders
- trading scams
- exploit instructions
- false official claims

---

## Search and Discovery Strategy

The site is search-first in two senses:

1. **Internal search** inside the command archive.
2. **External search** through SEO and command-specific pages.

### Internal search should match

- syntax: `/r`, `/tell`, `/CombatLog 1`
- aliases: `/w`, `/t`, `/whisper`
- title: Private Message, Zone Chat
- category: Chat, Utility, Emotes
- description: whisper, screenshot, combat log

### Search UX rules

- Search input should be prominent.
- Empty results should explain what was searched.
- Category filters should be visible and easy to reset.
- Featured commands should not disappear into decoration.
- Copy buttons should be clear and reliable.
- Command cards should be scannable.

### Discovery patterns

| User intent | Best surface |
|---|---|
| “I know the exact command” | Search box |
| “I know the task” | Category shortcut |
| “I need common commands” | Most-used section |
| “I need more context” | Detail page |
| “I am browsing socially” | Emotes page |
| “I need technical utility” | Utility page |

---

## SEO and Programmatic Pages

The site has strong SEO potential because commands naturally map to long-tail search queries.

### SEO goals

- index command detail pages
- support long-tail command searches
- use descriptive metadata
- keep pages fast and static
- provide canonical URLs
- generate sitemap entries
- avoid thin duplicate pages

### Example long-tail queries

- Neverwinter whisper command
- Neverwinter reply command
- Neverwinter alliance chat command
- Neverwinter zone chat command
- Neverwinter combat log command
- Neverwinter screenshot command
- Neverwinter emote command
- Neverwinter stuck command

### Metadata strategy

The site should use route-level metadata for:

- homepage
- command archive
- category pages
- command detail pages
- utility pages
- emote pages

### Structured data caution

The app includes structured data for website/search behavior. Keep it accurate. Do not add misleading official organization markup or imply affiliation with rights holders. SEO is not a license to impersonate authority, despite what the internet keeps trying to prove.

---

## Route and Page Strategy

### Core routes

| Route | Purpose |
|---|---|
| `/` | Orientation and entry points |
| `/commands` | Searchable full archive |
| `/commands/[slug]` | Individual command detail |
| `/categories` or `/categories/[category]` | Category-based browsing |
| `/emotes` | Social/emote-focused commands |
| `/utility` | Utility and support commands |
| `/about` | Project explanation and fan-project context |

### Page responsibilities

A page should not do everything. Keep each route focused.

| Page type | Primary job |
|---|---|
| Homepage | Introduce and route users |
| Archive | Search and filter all commands |
| Category page | Serve task-based clusters |
| Detail page | Explain one command deeply |
| About page | Explain project scope and disclaimer |

---

## Frontend Architecture

The app uses a compact static architecture.

```mermaid
flowchart TD
    DATA[lib/commands-data.js] --> ARCHIVE[components/command-library.jsx]
    DATA --> GRID[components/command-preview-grid.jsx]
    DATA --> DETAIL[app/commands/[slug]]
    DATA --> CATEGORY[category pages]
    LAYOUT[app/layout.jsx] --> PAGES[App Router pages]
    LAYOUT --> META[Global metadata]
    LAYOUT --> FOOTER[SiteFooter]
    LAYOUT --> MOTION[MotionLayer]
    CSS[app/globals.css] --> PAGES
```

### Key files

| Path | Role |
|---|---|
| `app/layout.jsx` | Global metadata, fonts, shell, structured data |
| `app/globals.css` | Design tokens, palette, base styles |
| `components/command-library.jsx` | Searchable command archive |
| `components/command-preview-grid.jsx` | Reusable command grids |
| `components/site-header.jsx` | Shared navigation/header |
| `components/site-footer.jsx` | Shared footer and disclaimer area |
| `components/motion-layer.jsx` | Motion/animation layer |
| `lib/commands-data.js` | Command dataset, categories, helper content |
| `lib/site.js` | Site-level constants such as canonical URL |

### Architecture principle

Keep data centralized and presentation reusable. If every route invents its own command display logic, the site will become a tiny command museum where every room has different labels and nobody knows why.

---

## Design System Direction

The visual system balances fantasy mood with reference clarity.

### Desired feeling

The UI should feel:

- premium
- arcane but readable
- editorial
- fast to scan
- command-focused
- polished without being noisy
- game-aware but not game-cluttered

### Visual elements

- deep dark surfaces
- restrained gold accents
- cool cyan highlights
- syntax panels
- subtle gradients
- strong card boundaries
- accessible focus states
- consistent metadata badges

### Design risks

| Risk | Why it matters |
|---|---|
| Too much fantasy decoration | Reduces readability |
| Too little structure | Cards become hard to scan |
| Weak contrast | Dark UI becomes inaccessible |
| Overanimated cards | Search feels slower |
| Inconsistent command cards | Users must relearn layout |

### Design rule

Syntax should visually stand apart from prose. Users need to recognize command text instantly.

---

## Accessibility Strategy

Accessibility matters because command lookup is often urgent. Users might be multitasking during gameplay, using a second screen, or viewing on mobile.

### Current principles to preserve

- semantic headings
- strong contrast
- visible focus states
- skip link support
- readable syntax blocks
- clear interactive affordances
- mobile-friendly search/filter layout

### Accessibility checklist

- Search input has accessible label.
- Copy buttons have descriptive labels.
- Keyboard users can reach every command card action.
- Focus order is logical.
- Category filters expose selected state.
- Color is not the only state indicator.
- Syntax blocks remain readable at small widths.
- Motion does not block use.
- Links have meaningful text.
- Headings follow a logical outline.

### Copy button accessibility

A copy action should announce success through visible text or accessible status messaging. A silent copy button is just a tiny confidence trick with an icon.

---

## Responsive Strategy

The site must work well on mobile because players may search commands from a phone while the game is open on another screen.

### Mobile priorities

1. Search remains visible.
2. Cards stack cleanly.
3. Syntax blocks do not overflow awkwardly.
4. Copy actions are tappable.
5. Category filters are easy to use.
6. Detail pages remain readable.
7. Header navigation does not hide the main task.

### Tablet priorities

- use multi-column layouts only when scanning remains comfortable
- keep filter controls visible
- preserve card hierarchy

### Desktop priorities

- support fast scanning
- show category sections clearly
- make detail pages feel editorial and complete
- preserve whitespace without wasting it like a luxury brochure for one slash command

---

## Motion Strategy

GSAP is used for motion polish.

### Motion goals

- reinforce page atmosphere
- smooth entry states
- avoid distracting from command lookup
- keep performance stable
- respect reduced-motion preferences where possible

### Motion rules

- Do not animate core readability away.
- Avoid long delays before content appears.
- Do not animate every card in a heavy list if it hurts responsiveness.
- Use motion to guide attention, not to show that GSAP exists.

### Reduced motion

Add or preserve reduced-motion fallbacks for users who prefer less animation.

---

## Copy, Syntax, and Example Rules

### Syntax rules

- Always include the leading slash.
- Use placeholders clearly, such as `<message>` or `<player>`.
- Keep casing consistent with common usage when known.
- For on/off commands, show both enabled and disabled forms where useful.

### Description rules

- Lead with what the command does.
- Avoid vague language like “used for stuff.” Humanity has suffered enough.
- Explain caveats in notes.
- Keep descriptions short on cards.
- Use detail pages for deeper explanation.

### Alias rules

- Include common aliases.
- Keep alias formatting consistent.
- Avoid claiming aliases that are not verified.
- Explain when aliases may vary.

### Example rules

- Examples should be realistic.
- Examples should be safe and non-abusive.
- Examples should not expose real player handles.
- Examples should match the command’s category.

---

## Command Verification Strategy

Game commands can change or vary by client behavior, patch, permissions, or undocumented quirks.

### Verification states

Recommended future states:

| State | Meaning |
|---|---|
| `verified` | Tested recently in-game or confirmed from reliable source |
| `partially_verified` | Syntax likely works, but behavior has caveats |
| `undocumented` | Public documentation is incomplete |
| `patch_sensitive` | Could change with updates |
| `deprecated` | Known old command, not recommended |
| `unknown` | Needs confirmation |

### Verification fields

Add fields such as:

- `verificationStatus`
- `lastVerifiedAt`
- `sourceUrl`
- `sourceNote`
- `patchContext`

### Verification rule

Do not make uncertain commands look equally authoritative. A note is not weakness. It is how a reference earns trust.

---

## Content Expansion Strategy

### Expansion priorities

1. Add missing common chat commands.
2. Expand private messaging commands.
3. Add more emotes.
4. Add display and screenshot command variants.
5. Add utility and support commands.
6. Add platform or permission caveats.
7. Add verification metadata.
8. Add related command links.

### Avoid expansion traps

- Do not add commands without examples.
- Do not add undocumented commands without caveats.
- Do not mix console commands, chat commands, and unrelated config notes without clear labels.
- Do not turn the site into a general Neverwinter wiki.

### Content backlog categories

| Category | Expansion ideas |
|---|---|
| Chat | say, zone, trade, looking-for-group, alliance |
| Private | whisper, tell, reply, ignore/block where applicable |
| Party/Guild | party, guild, officer, invite, leave/disband where applicable |
| Emotes | common social emotes and roleplay commands |
| Utility | help, stuck, combat log, support shortcuts |
| Display | screenshots, FPS, UI visibility where verified |

---

## Quality Assurance Strategy

### Functional QA

- Search matches syntax.
- Search matches aliases.
- Search matches titles.
- Search matches descriptions.
- Category filters work.
- Copy buttons copy correct syntax.
- Command detail pages generate.
- Category pages link correctly.
- Not-found states work.

### Content QA

- Every command has an ID.
- Every command has syntax.
- Every command has a title.
- Every command has a description.
- Every command has an example.
- Alias arrays are present even if empty.
- Notes are clear where needed.
- Categories match existing category list.

### SEO QA

- Command pages have unique titles.
- Command pages have meaningful descriptions.
- Canonicals are correct.
- Sitemap includes static routes.
- Robots directives are valid.
- Open Graph images render.
- Structured data remains accurate.

### Accessibility QA

- Keyboard focus visible.
- Search usable by keyboard.
- Copy buttons accessible.
- Contrast passes target guidelines.
- Mobile layout remains readable.
- Motion does not block reading.

---

## Performance Strategy

The project is intentionally lightweight, which is excellent. Please, for once, keep it that way.

### Performance strengths

- local data
- static pages
- no heavy CMS
- compact dependency list
- App Router static generation
- small command dataset

### Performance risks

| Risk | Mitigation |
|---|---|
| Command dataset grows large | Keep search efficient and consider indexing |
| Excessive GSAP animation | Scope motion and respect reduced motion |
| Heavy images/social assets | Optimize generated images |
| Too many client components | Keep static pages static where possible |
| Large global CSS drift | Maintain token discipline |

### Performance checklist

- Build succeeds.
- Static pages generate.
- No unnecessary client bundles for static content.
- Command archive remains responsive.
- Search/filter updates are fast.
- Lighthouse performance remains strong.

---

## Privacy, Legal, and Fan-Project Notes

### Fan-project positioning

The site must remain clear that it is fan-made and not official.

### Avoid official confusion

Do not imply:

- official support status
- official command authority
- affiliation with Cryptic Studios
- affiliation with Arc Games
- affiliation with Gearbox Publishing
- affiliation with Wizards of the Coast
- official Neverwinter endorsement

### User data

The current site appears static and does not need user accounts or personal data. Keep it that way unless a strong product need appears.

### Legal and trademark rule

Use game names only for descriptive reference. Keep disclaimers visible.

---

## Maintenance Playbook

### Adding a new command

1. Add entry to `lib/commands-data.js`.
2. Use a stable `id`.
3. Add copy-ready `syntax`.
4. Add clear `title`.
5. Add short `description`.
6. Add realistic `example`.
7. Add `aliases`, even if empty.
8. Assign valid `category`.
9. Add `anchor` and `letter`.
10. Add note fields if behavior is uncertain.
11. Run build.
12. Check archive search.
13. Check detail page.
14. Check mobile syntax display.

### Adding a category

1. Add category shortcut.
2. Add category route/page if needed.
3. Ensure commands can link to the category.
4. Add archive filter behavior.
5. Update SEO metadata.
6. Update README and docs.

### Editing visual design

1. Check contrast.
2. Check syntax readability.
3. Check focus states.
4. Check mobile cards.
5. Check category pages.
6. Check command detail pages.
7. Avoid decorative bloat.

### Editing SEO metadata

1. Keep titles descriptive.
2. Keep canonical URLs correct.
3. Do not overstuff keywords.
4. Keep fan-project identity clear.
5. Test social previews if possible.

---

## Risk Register

| Risk | Severity | Why it matters | Mitigation |
|---|---:|---|---|
| Stale command behavior | High | Players may use wrong command | Add verification states and notes |
| Unverified aliases | Medium | Search may mislead users | Mark aliases carefully |
| SEO over-optimization | Medium | Content becomes spammy | Write for players first |
| Official-affiliation confusion | High | Legal/trust issue | Keep fan disclaimer clear |
| Dark UI contrast issues | Medium | Readability/accessibility suffers | Test contrast and focus states |
| Command dataset inconsistency | Medium | Cards/routes break | Add schema validation eventually |
| Search misses aliases | Medium | Users fail to find commands | Include aliases in search index |
| Copy button failure | Medium | Core UX breaks | Test clipboard behavior |
| Overbroad scope | Medium | Site loses focus | Stay command-reference focused |
| Motion overload | Low/Medium | Lookup feels slow | Limit GSAP effects |

---

## Roadmap

### Near-term

- Add verification status fields.
- Add `.schema` or validation helper for commands.
- Expand command coverage.
- Add related commands on detail pages.
- Add more explicit source/caveat notes.
- Add command count and category count to README.

### Mid-term

- Add fuzzy search.
- Add keyboard shortcuts for search focus.
- Add copy success announcements.
- Add command submission/review workflow as GitHub issue template.
- Add visual examples for screenshot/display commands.
- Add more robust command detail metadata.

### Long-term

- Add command version history.
- Add patch verification log.
- Add multilingual support if there is demand.
- Add static JSON export of command data.
- Add automated content schema validation in CI.
- Add visual regression snapshots for command cards.

---

## Portfolio Review Notes

This project works well as a portfolio example because it shows a narrow product problem solved with thoughtful IA, search UX, static generation, SEO, content design, and visual polish.

### Strong portfolio angles

| Angle | Evidence |
|---|---|
| Product strategy | Narrow command-reference scope |
| UX design | Search-first archive and category browsing |
| Content design | Syntax, examples, aliases, notes |
| SEO thinking | Static command detail pages and metadata |
| Frontend architecture | App Router, static generation, local data |
| Accessibility | Focus, contrast, semantic structure |
| Visual design | Arcane/premium style without sacrificing readability |

### How to describe it

> Designed and built a fan-made, search-first Neverwinter command reference using Next.js and React. The project turns slash commands, aliases, examples, categories, and utility notes into a static SEO-friendly command library with searchable archive pages, command detail routes, category pages, semantic metadata, and a premium fantasy-inspired visual system focused on readability.

### What not to overclaim

Do not claim:

- the site is official
- every command is verified unless it is
- undocumented commands are guaranteed
- command behavior cannot change
- this is a complete Neverwinter wiki
- SEO traffic proves command accuracy

Truth in portfolio work. Strange concept. Worth trying.

---

## AI Coding Agent Notes

Future AI agents should treat this as a focused command-reference product.

### Inspect first

Before making changes, inspect:

1. `README.md`
2. `package.json`
3. `lib/commands-data.js`
4. `app/layout.jsx`
5. `app/commands/`
6. `app/categories/`
7. `components/command-library.jsx`
8. `components/command-preview-grid.jsx`
9. `app/globals.css`
10. sitemap and robots files if present

### Do not

- Do not invent command behavior.
- Do not remove fan-project disclaimer.
- Do not create official-sounding claims.
- Do not add commands without examples.
- Do not add aliases without confidence.
- Do not break static generation.
- Do not overanimate archive cards.
- Do not hide command syntax behind decorative UI.

### Prefer

- local data updates
- schema-consistent commands
- static route generation
- accessible labels
- clear notes for uncertainty
- readable syntax blocks
- small dependency footprint
- build verification after content changes

---

## Appendix A: Suggested Command Schema

```ts
type CommandEntry = {
  id: string;
  slug?: string;
  syntax: string;
  title: string;
  description: string;
  example: string;
  aliases: string[];
  category: "Chat" | "Private" | "Party / Guild" | "Utility" | "Emotes" | "Display";
  section?: "Most Used" | string;
  anchor: string;
  letter: string;
  note?: string;
  noteText?: string;
  verificationStatus?: "verified" | "partially_verified" | "undocumented" | "patch_sensitive" | "deprecated" | "unknown";
  lastVerifiedAt?: string;
  sourceUrl?: string;
  relatedCommandIds?: string[];
  searchTerms?: string[];
};
```

---

## Appendix B: Suggested Category Schema

```ts
type CommandCategory = {
  id: string;
  label: string;
  slug: string;
  blurb: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedCategoryIds?: string[];
};
```

---

## Appendix C: Manual QA Matrix

| Area | Test | Expected result |
|---|---|---|
| Build | `npm run build` | Next.js build succeeds |
| Homepage | Load `/` | Main entry page appears |
| Archive | Load `/commands` | Searchable command archive appears |
| Search | Search `/r` | Reply command appears |
| Search | Search `whisper` | Private message commands appear |
| Search | Search `combat log` | Combat log command appears |
| Search | Search alias `/w` | Tell/whisper command appears |
| Category | Open chat category | Chat commands appear |
| Category | Open utility category | Utility commands appear |
| Detail | Open command detail | Syntax, example, alias, note render |
| Copy | Click copy | Correct syntax copies and feedback appears |
| Mobile | Archive on small viewport | Cards stack and syntax remains readable |
| Accessibility | Keyboard through archive | Focus remains visible |
| SEO | Inspect metadata | Title/description/canonical are appropriate |
| Sitemap | Generate/check sitemap | Command pages included |
| Robots | Inspect robots directives | Crawl rules match intent |
| Disclaimer | Footer/about | Fan-project disclaimer visible |

---

## Appendix D: Editorial Checklist

Before adding or editing command content:

- [ ] Syntax starts with `/` where appropriate.
- [ ] Placeholder values use angle brackets.
- [ ] Title is human-readable.
- [ ] Description explains the actual user benefit.
- [ ] Example feels like real player behavior.
- [ ] Alias list is accurate or empty.
- [ ] Category matches user intent.
- [ ] Note is added for uncertain behavior.
- [ ] Command appears in search.
- [ ] Detail route builds.
- [ ] Mobile card remains readable.
- [ ] No official-affiliation claim is introduced.

---

## Appendix E: Glossary

| Term | Meaning |
|---|---|
| Slash command | A text command beginning with `/` used inside the game client |
| Syntax | The exact command format a player types |
| Alias | Alternative shorthand command that performs a similar action |
| Command archive | Full searchable list of commands |
| Command detail page | Dedicated page for one command |
| Category page | Page grouping commands by intent or function |
| Static generation | Build-time creation of pages for fast loading and SEO |
| Long-tail search | Specific search query such as “Neverwinter whisper command” |
| Fan project | Independent project not affiliated with official rights holders |
| Verification status | Confidence label for command behavior |
| Copy-ready | Formatted so a user can copy and paste the command directly |

---

## Disclaimer

Neverwinter Command Guide is an independent fan-made reference project. It is not affiliated with, endorsed by, sponsored by, or officially connected to Cryptic Studios, Arc Games, Gearbox Publishing, Wizards of the Coast, or any Neverwinter rights holder. Game names, commands, terms, and related intellectual property belong to their respective owners.

Command behavior can change across patches, clients, permissions, and undocumented game behavior. Treat this guide as a practical reference, not an official source of truth. Commands marked as undocumented, uncertain, or patch-sensitive should be verified in-game before relying on them in important situations.
