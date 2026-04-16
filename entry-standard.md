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

## Entry structure

Every entry follows this template, in this order:

```
---
sidebar_position: [number]
title: [Entry title — short, plain English]
tags: [tag1, tag2]
---

# [Entry title]

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

Two to four curated links. Prefer:
- Official documentation
- Short explainer videos (Fireship, official channels)
- Beginner-friendly written guides

Format: `[Title](url)` — one line per resource with a brief note on what it is.

## Related entries

A short list of linked wiki entries. Use Docusaurus relative links.
Format: `- [Entry title](./entry-slug)`
```

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

Entries that belong in a category go in that subfolder. The filename is the slug: `homebrew.md`, `git.md`, `the-terminal.md`.

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

```markdown
---
sidebar_position: 1
title: Git
tags: [git, tools, version-control]
---

# Git

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
- [Fireship — Git in 100 seconds](https://www.youtube.com/watch?v=hwP7WQkmECE) — the fastest useful overview

## Related entries

- [GitHub](../platforms/github)
- [The Terminal](../concepts/the-terminal)
```

---

*This standard is maintained by the Leaving School team. Last updated: 2026-04-16.*
