# joekhosbayar.dev

Personal site. Astro, static output, deployed to GitHub Pages on push to `main`.

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built output
```

## Structure

| Path | What |
|---|---|
| `src/data/record.ts` | All content. Every fact is sourced — resume, GitHub, or the Mighty engineering docs. |
| `src/pages/index.astro` | The whole page. |
| `src/layouts/Layout.astro` | Head, fonts, the direction contract, the reveal script. |
| `src/styles/global.css` | Design tokens and browser-surface theming. |
| `src/components/` | Authored SVG: the record, the figure, the architecture diagram. |
| `DESIGN.md` | The visual system, written from the built result. |

## Two rules for editing this repo

**This repository is public.** The Mighty section is written from internal
engineering documentation. Describe architecture and reasoning freely; never
commit an AWS account id, bucket name, SSM parameter path, or any other real
infrastructure identifier. `*.pdf` is gitignored because the resume carries a
phone number.

**Nothing here is invented.** Every role, date, metric, and claim comes from a
real source. If a fact has no source, it does not go on the page.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub
Pages. The custom domain is set by `public/CNAME`; point the DNS at GitHub Pages
and enable HTTPS in the repository's Pages settings.
