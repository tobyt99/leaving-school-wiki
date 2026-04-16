---
sidebar_position: 1
title: Homebrew
tags: [tools, terminal, package-manager]
---

# Homebrew

**A package manager for macOS.** Homebrew lets you install developer tools — like Git, Node.js, or Python — with a single command in the terminal, instead of hunting for installers on the web.

## Why it matters on this course

You will install Homebrew on day one. Almost everything else you set up during the course goes through it. Without it, installing developer tools on a Mac means downloading `.dmg` files, clicking through installers, and managing things manually. With Homebrew, it is one command, done.

It also keeps everything in one place so you can update and manage your tools easily later.

## How it works (in plain terms)

Homebrew calls itself "the missing package manager for macOS". A package manager is a tool that knows where to find software, downloads it for you, and puts it in the right place on your system.

You run commands in the [terminal](../concepts/the-terminal) like this:

```bash
brew install node
```

That one line finds Node.js, downloads it, and installs it. No clicking. No searching the web. No wizard.

Homebrew organises software into "formulae" (command-line tools) and "casks" (Mac apps with a graphical interface, like VS Code). Most of what you will install early in the course are formulae.

## Getting started

Open your terminal and run the official install script:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This is the one-liner from the official Homebrew website (brew.sh). It will ask for your Mac password and may take a few minutes. Follow any prompts it gives you — particularly the step at the end where it asks you to add Homebrew to your PATH. Do not skip that part.

Once it is done, check it worked:

```bash
brew --version
```

You should see a version number. If you do, you are ready to install things.

## Watch-outs

- **The PATH step matters.** When installation finishes, Homebrew often prints instructions to add a line to your shell config file. If you skip this, `brew` commands will not work in a new terminal window. Read the output carefully and follow those final steps.
- **It only works on Mac (and Linux).** If you are on Windows, you will use a different approach — your tutor will cover this.
- **You do not need to understand everything it does.** Some of the install output looks complex. That is fine. As long as you see no red error messages and `brew --version` works, you are set.

## Good resources

- [brew.sh](https://brew.sh) — the official Homebrew site, with the install command and documentation
- **Fireship — Homebrew in 100 seconds** — search for "Fireship Homebrew" on YouTube; a fast, clear overview of what it is and how it works

## Related entries

- [The Terminal](../concepts/the-terminal)
- [Git](./git)
- [Node.js](./node)
