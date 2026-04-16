# Entry Format Standard — Leaving School Wiki

This document defines how wiki entries are written and structured. All entries follow this standard. If you are writing a new entry, use this as your guide.

---

## Who we are writing for

Students on the Leaving School course. Typically 18 years old. Not necessarily technical yet — that is the point of the course. Some will be nervous. Many will land on an entry mid-lesson when they encounter an unfamiliar term and want a quick answer.

**What they need:**
- A plain-English explanation of what the thing is
- Enough context to understand why it matters for the course
- A clear next step (a link, a command, a resource)
- Not a full tutorial — a jumping-in point

---

## File format

All entries are `.mdx` files, not `.md`. This is required because entries use JSX elements (inline styles, iframes, layout divs). The filename is the slug: `homebrew.mdx`, `git.mdx`, `the-terminal.mdx`.

---

## Entry structure

Every entry follows this template, in this order:

```
---
sidebar_position: [number]
title: [Entry title — short, plain English]
hide_title: true
tags: [tag1, tag2]
slug: /category/entry-slug
---

[Page header — see variants below]

**One sentence.** What is this thing, in the plainest English possible.

## Why it matters on this course

One short paragraph. What does this tool/concept/framework actually do for you as a student? How will you encounter it? Why should you care?

## How it works (in plain terms)

Two to four short paragraphs or a short list. Not a full tutorial — just enough mental model that the student knows what they are looking at. Avoid jargon. If jargon is unavoidable, link to the relevant wiki entry.

## Getting started

What should a student do first? This could be:
- A single install command
- A link to the official quickstart
- A pointer to where in the course this is introduced

Keep it short. One to three steps. If it is complex, link out rather than reproduce the full instructions here.

## Watch-outs

Optional section. Only include if there is something that genuinely trips students up. One to four bullet points. Not a list of every possible edge case — just the things that are actually likely to catch someone out.

## Good resources

Two to four curated links and embedded videos. See format below.

## Related entries

A short list of linked wiki entries. Use Docusaurus relative links.
Format: `- [Entry title](./entry-slug)`
```

---

## Front matter fields

The full set of front matter fields we use:

```
---
sidebar_position: [number]
title: [Entry title]
hide_title: true
tags: [tag1, tag2]
slug: /category/entry-slug
---
```

**`hide_title: true`** — Docusaurus auto-renders the `title` field as an H1 at the top of the page. We suppress this because we render our own H1 in the content (either a styled layout div or a plain markdown heading). This gives us control over layout — particularly the icon placement. Always include `hide_title: true` when using the with-icon header pattern. If you are writing a concept entry with no icon (plain `# Heading`), omit `hide_title` from the front matter entirely, as there is no custom div to replace it.

**`slug`** — always set explicitly. Format: `/category/entry-slug`, e.g. `/tools/homebrew` or `/concepts/the-terminal`.

---

## Page header pattern

There are two variants depending on whether the entry has a brand logo.

### With an icon (tools, platforms — anything with a recognisable brand logo)

Title sits on the left, brand icon sits far right. Include `hide_title: true` in front matter.

```mdx
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
  <h1 style={{margin: 0}}>Entry Title</h1>
  <img src="LOGO_URL" alt="" style={{height: '56px', width: 'auto'}} />
</div>
```

### Without an icon (concepts with no canonical brand logo)

Standard markdown heading. Omit `hide_title` from front matter.

```mdx
# Entry Title
```

Do not use a styled div for concept entries that have no logo. Keep it simple.

---

## Finding logos

Prefer official sources: the tool's own website, or its official GitHub repository. Avoid random CDNs or third-party icon aggregators — URLs from those sources break without warning.

If no clean, official logo exists for the concept, omit the logo entirely. Do not use a misleading or generic icon as a substitute.

---

## Good resources section

Two to four curated resources. For links, use this format:

```mdx
- [Official site](https://example.com) — brief description
```

For YouTube videos, embed them with an iframe rather than linking out:

```mdx
**Video title** — brief description:

<iframe
  width="100%"
  style={{aspectRatio: '16/9', border: 'none', borderRadius: '8px', marginBottom: '1rem'}}
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

Replace `VIDEO_ID` with the 11-character ID from the YouTube URL (e.g. `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`).

**Finding video IDs** — use WebSearch (not WebFetch) to locate videos. Search Google for the video title. Extract the ID from the `youtube.com/watch?v=VIDEO_ID` URL that appears in the search results. Do not guess IDs.

---

## Rules for writing

**Length:** Aim for 300–500 words of body content. Short enough to read in three minutes. If you are writing more, you are probably writing a tutorial, not a wiki entry.

**Tone:** Conversational but not sloppy. Write like you are explaining something to a friend who is smart but hasn't done this before. No corporate speak. No passive voice if you can avoid it.

**One idea per sentence.** Do not stack clauses. Short sentences are easier to scan.

**No assumed knowledge** within the entry itself. If you need to reference something the student might not know, link to the relevant wiki entry instead of explaining it inline.

**Use "you".** Write to the student directly. "You install Homebrew by..." not "Students should install Homebrew by..."

**Commands in code blocks.** Any terminal command gets a code block, even if it is one line.

**No filler.** Do not pad entries with "In today's fast-paced world..." or similar. Get to the point.

---

## How entries are organised

The `docs/` folder is organised into categories, each a subfolder. The Docusaurus sidebar auto-generates from the folder structure.

**Current categories:**

| Folder | What goes in it |
|--------|----------------|
| `docs/tools/` | Software tools students install or use (Homebrew, VS Code, Git, etc.) |
| `docs/concepts/` | Ideas and mental models (version control, the terminal, APIs, etc.) |
| `docs/languages/` | Programming languages and syntax reference (Python, JavaScript, etc.) |
| `docs/platforms/` | Services and platforms students use (GitHub, Vercel, Railway, etc.) |

If an entry does not fit neatly into one of these, use the closest match. Do not create new categories unless there are at least three entries that would live there.

Entries that belong in a category go in that subfolder. The filename is the slug: `homebrew.mdx`, `git.mdx`, `the-terminal.mdx`.

Each category folder should have an `_category_.json` file with a label, e.g.:
```json
{ "label": "Tools", "position": 2 }
```

---

## Linking between entries

Use relative links. From inside a category folder: `../tools/homebrew`. From the same folder: `./git`.

Link generously — if a concept is mentioned that has its own entry, link to it. But do not link every occurrence, just the first one in the entry.

Do not write orphan entries. Every entry should be reachable from at least one other entry, and should link to at least one related entry.

---

## Tags

Use tags sparingly. Each entry should have two to four tags. Tags are lowercase, hyphenated where needed.

Common tags: `tools`, `terminal`, `git`, `javascript`, `python`, `deployment`, `package-manager`, `concepts`, `platforms`

---

## Example entry skeleton

This example uses the with-icon variant, which shows the full pattern including the styled header div and an embedded video.

```mdx
---
sidebar_position: 1
title: Git
hide_title: true
tags: [git, tools, version-control]
slug: /tools/git
---

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
  <h1 style={{margin: 0}}>Git</h1>
  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" style={{height: '56px', width: 'auto'}} />
</div>

**Version control for your code.** Git tracks every change you make to a project, so you can go back in time, work with others, and understand what changed and when.

## Why it matters on this course

You will use Git from day one. Every project you build will be tracked with Git, and you will use it to submit work, collaborate, and deploy to the web. Getting comfortable with it early makes everything else easier.

## How it works (in plain terms)

Git turns a folder on your computer into a "repository" — a folder that remembers its own history. Each time you save a meaningful snapshot, you make a "commit". Commits are like save points in a video game: you can always go back.

Most of the time you will use a small set of commands: `git init`, `git add`, `git commit`, `git push`. You will learn these properly in the course, but you will encounter them here first.

## Getting started

Git is installed by default on Mac. Check it is working:

```bash
git --version
```

If you see a version number, you are good to go.

## Watch-outs

- Git and GitHub are not the same thing. Git is the tool; GitHub is a website that hosts your Git repositories online.
- Do not commit passwords, API keys, or secrets. Use a `.gitignore` file.

## Good resources

- [Git official documentation](https://git-scm.com/doc) — the authoritative reference, well-organised

**Git in 100 Seconds** — a fast, visual overview of what Git is and why it exists:

<iframe
  width="100%"
  style={{aspectRatio: '16/9', border: 'none', borderRadius: '8px', marginBottom: '1rem'}}
  src="https://www.youtube.com/embed/hwP7WQkmECE"
  title="Git in 100 Seconds"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

## Related entries

- [GitHub](../platforms/github)
- [The Terminal](../concepts/the-terminal)
```

---

*This standard is maintained by Jocasta Nu. Last updated: 2026-04-16.*
