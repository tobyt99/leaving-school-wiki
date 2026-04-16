# Leaving School Wiki

A Docusaurus-powered reference site for the Leaving School programme, deployed at [wiki.leaving.school](https://wiki.leaving.school) via Cloudflare Pages.

## What this is

A searchable reference wiki covering every concept, tool, and framework taught on the Leaving School course. Not a blog — entries only.

## Run locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`. Changes hot-reload automatically.

## Build for production

```bash
npm run build
```

Output goes to `build/`. Cloudflare Pages runs this automatically on push.

## Deployment

Deployed via **Cloudflare Pages**:
- Connected to the GitHub repo (`main` branch)
- Cloudflare runs `npm run build` on every push to `main`
- No manual deploys needed — push to main, site updates

Custom domain: `wiki.leaving.school` — configured in the Cloudflare Pages project settings.

## Adding content

Docs live in the `docs/` folder. Each `.md` file becomes a wiki entry. Subfolders become sidebar categories.

Entry format is defined in [`entry-standard.md`](./entry-standard.md) at the root of this project.

## Tech

- [Docusaurus v3](https://docusaurus.io/) — static site generator
- Cloudflare Pages — hosting and CI/CD
- JavaScript (no TypeScript)
- Blog feature disabled
