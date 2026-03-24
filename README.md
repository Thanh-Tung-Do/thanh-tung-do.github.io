# Ryan Do — Portfolio Website

Personal portfolio website for Thanh Tung Do (Ryan Do), Business Insights Analyst based in Sydney, NSW.

**Live site:** https://ryando.au

---

## About

A clean, minimal portfolio built with Astro, hosted on GitHub Pages. Features a dark-mode-default design, content-driven project pages, and scroll-triggered animations.

## Tech Stack

- [Astro](https://astro.build) — static site framework
- TypeScript
- CSS custom properties (design tokens, dark/light mode)
- Google Fonts (Plus Jakarta Sans, DM Sans)
- GitHub Pages (static hosting via `gh-pages` branch)
- Netlify (alternative deploy target via `netlify.toml`)

## Structure

```
├── src/
│   ├── components/         # Astro components (Nav, Hero, ProjectCard, etc.)
│   ├── content/
│   │   ├── projects/       # Project markdown files (one per project)
│   │   ├── experience/     # Work experience markdown files
│   │   └── blog/           # Blog post markdown files
│   ├── layouts/            # BaseLayout, ProjectDetail, BlogPost
│   ├── pages/              # Route pages (index, projects/[slug], blog/[slug], tags/[tag])
│   ├── styles/             # global.css (design tokens, dark mode)
│   └── data/               # site.json (site-wide metadata)
├── public/
│   ├── images/projects/    # Project thumbnails
│   └── assets/             # CV PDF
└── astro.config.mjs
```

## Local Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build      # output to dist/
npm run preview    # preview the build locally
```

Deployment to GitHub Pages is handled by `.github/workflows/deploy-gh-pages.yml` on push to `main`.

## Content

Projects, experience, and blog posts are managed as Markdown files in `src/content/`. The schema for each collection is defined in `src/content/config.ts`.

## Contact

- Email: ryan.do.contact@gmail.com
- LinkedIn: [linkedin.com/in/ryanism](https://linkedin.com/in/ryanism)
- GitHub: [github.com/Thanh-Tung-Do](https://github.com/Thanh-Tung-Do)
