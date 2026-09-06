// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// konsenso.dev — developer resource for learning to stress-test AI before
// deployment. Loud, self-contained landing page (src/pages/index.astro);
// calm, readable Starlight docs under every other route.
// Unindexed until launch: remove the noindex head tag AND the netlify.toml
// X-Robots-Tag header when the site goes public.
export default defineConfig({
  site: "https://konsenso.dev",
  // Stable per-app dev port (port map in repo README). Prod is subdomain-per-app.
  server: { port: 4326 },
  // Preserve the old route after the getting-started → start-here rename.
  redirects: { "/getting-started": "/start-here" },
  integrations: [
    starlight({
      title: "konsenso.dev",
      description:
        "Learn how to stress-test AI systems before you deploy them — red teaming, evals, and inspectable evidence, for developers.",
      // Fonts are self-hosted via @fontsource (no CDN). The theme file maps the
      // Konsenso Labs design tokens onto Starlight's --sl-* variables.
      customCss: [
        "@fontsource-variable/space-grotesk",
        "@fontsource-variable/dm-sans",
        "@fontsource-variable/jetbrains-mono",
        "./src/styles/starlight-theme.css",
      ],
      head: [
        {
          tag: "meta",
          attrs: { name: "robots", content: "noindex, nofollow" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Konsenso/konsenso-dev",
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Introduction", slug: "start-here" },
            { label: "Resources", slug: "resources" },
          ],
        },
      ],
    }),
  ],
});
