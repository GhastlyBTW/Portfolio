# brandenchi.com

Portfolio of Branden Chi — Art Director, New York City.

## Stack

Vanilla HTML / CSS / JavaScript. No build step, no framework, no dependencies.
Hosted on GitHub Pages at [brandenchi.com](https://brandenchi.com).

## Structure

```
index.html              — SPA entry point (all views live here)
css/styles.css          — All styles, including mobile breakpoints (≤768px)
js/main.js              — All logic: navigation, gallery, footer, hamburger, routing
js/content.js           — All copy (project names, descriptions, brief/insight/strategy)
js/photo-collections.js — Photography gallery collections and image paths (auto-generated)
sync-photos.sh          — Script to regenerate photo-collections.js from the assets folder
sitemap.xml             — Sitemap (update when adding/removing projects)
robots.txt              — Allows all, points to sitemap
404.html                — SPA redirect handler for GitHub Pages
```

## Projects

Defined in two parallel arrays — `projects[]` in `main.js` (assets/images) and
`CONTENT.projects[]` in `content.js` (all text). Indices must stay in sync.

| Index | Name | Status |
| --- | --- | --- |
| 0 | Detention Watch Network — Through Their Eyes | Public |
| 1 | Polaroid — Frame the Moment | Public |
| 2 | Dove — Done with Gentle | Public |
| 3 | Photography: Personal | Public (`PHOTO_PROJECT_INDEX = 3`) |

**Locked projects** require the password `preview` to view. Set in `_GATE_PASSWORD` in `main.js`.

## Adding a project

1. Add an entry to `projects[]` in `main.js` (thumbnail path, gallery images, sections).
2. Add a matching entry at the same index in `CONTENT.projects[]` in `content.js` (name, copy).
3. Add a `<article class="project-card" data-index="N">` card in `index.html`.
4. Add a `<li>` entry in the sidebar `#project-list` in `index.html`.
5. Update `PHOTO_PROJECT_INDEX` in `main.js` if Photography's index shifted.
6. Update `sitemap.xml`.

## Photography

Collections are defined in `js/photo-collections.js`. Regenerate it by running:

```bash
bash sync-photos.sh
```

Images in `assets/Photography/` should be `.webp` for performance.

## Mobile breakpoint

`768px`. All mobile overrides live at the bottom of `css/styles.css` inside
`@media (max-width: 768px)`.

## Deployment

Push to `main`. GitHub Pages deploys automatically via the CNAME → `brandenchi.com`.
