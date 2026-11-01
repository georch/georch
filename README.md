# georch

Repository for [georch.com](https://georch.com), the personal website of Jorge Valdez.

Single-page static site built with [Astro](https://astro.build).

## Stack

- **Astro 7**: generates static HTML, with no JavaScript in the browser.
- **Tailwind CSS 4**: styles live in the classes of the page; the theme (colors `beige` for the page, `arena` for the card, `negro`, `gris`, `vino` and the font; text colors keep at least 5:1 contrast on both backgrounds) and the shared base styles are in `src/css/main.css`.
- **Imprima**: Fontsource font downloaded at build time and served from the site itself with the Astro fonts API (CSS variable `--font-imprima`).
- **SEO**: description, canonical link and social preview (Open Graph); `sitemap-index.xml` generated with `@astrojs/sitemap` and `robots.txt`.

Requires Node.js 24 or later (`engines` in `package.json`; `.nvmrc` pins version 24 and `.npmrc` makes the install fail on older versions).

## Structure

```
public/                Files copied as-is to the generated site
  favicon.svg          Site icon
  robots.txt           Tells search engines where the sitemap is
src/
  components/Icon.astro  Inline Tabler icons for the links list
  css/main.css         Tailwind, theme and base styles
  pages/index.astro    Home page content and metadata
astro.config.mjs       Domain, font, sitemap and Tailwind
```

## Editing content

- **Home page text, links and `description`**: `src/pages/index.astro`; each link in `links` picks an icon by name from `src/components/Icon.astro` (add new ones from [Tabler Icons](https://tabler.io/icons), outline style).
- **Colors or font**: `@theme` in `src/css/main.css` and `fonts` in `astro.config.mjs`.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # generates dist/
npm run preview   # serves dist/ locally
```

## Deployment

The site is published on [OpenShip](https://openship.io) as a **static site**:

| Option | Value |
| --- | --- |
| Node version | 24 |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Publish directory | `dist` |

OpenShip's static mode answers any unknown path with `index.html`, so the site has no 404 page. That's fine for a single page (the canonical link always points to `https://georch.com/`); if the site grows to several pages, publish it with a `Dockerfile` and Nginx, like airesdemexico.
