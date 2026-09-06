# konsenso.dev

Lessons on how to stress-test AI systems before you ship them: red teaming, evals, and keeping evidence you can show someone later.

Built with Astro and Starlight. The landing page is one hand-built file in `src/pages/index.astro`. Everything else is docs.

## Run it locally

```bash
npm install
npm run dev
```

It opens on http://localhost:4326.

## Build

```bash
npm run build      # writes to dist/
npm run preview    # serve the built site
```

## Where things live

- `src/pages/index.astro`: the landing page, with its own layout and styles
- `src/layouts/Landing.astro`: the page shell and the design tokens
- `src/content/docs/`: the lessons, written in MDX
- `src/components/`: nav, footer, and the rest
- `astro.config.mjs`: site config, docs sidebar, redirects

## License

Code is MIT; see LICENSE. The lessons under `src/content/` are CC BY 4.0, so reuse them with credit.
