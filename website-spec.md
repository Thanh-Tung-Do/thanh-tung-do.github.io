# Ryan Do - Portfolio Website Specification

## Overview

Build a personal portfolio website for **Ryan Do** (Thanh Tung Do), a data professional based in Sydney, Australia. The site serves as a job search tool targeting **Data Analyst, Data Scientist, and Commercial Analyst** roles, while also hosting a personal blog.

The site is currently hosted on **Netlify** (migrating from GitHub Pages) and will use a custom domain. It should be a static site built with modern HTML/CSS/JS (no heavy frameworks required, but React/Next.js is acceptable if it benefits the build). The current site uses a two-file structure (index.html + data.js) but can be restructured as needed.

---

## Design Direction

### Tone
Clean, professional, and confident. Not corporate-stiff, not overly playful. Think: a sharp portfolio that a senior hiring manager would take seriously, with enough personality to be memorable.

### Aesthetic Principles
- **Minimal but warm.** Generous whitespace, clear hierarchy, no visual clutter.
- **Data-professional feel.** Subtle nods to data/analytics (clean grids, structured layouts, precise typography) without cliched dashboard aesthetics or floating chart icons.
- **Typography-led.** Strong typographic hierarchy. A distinctive display/heading font paired with a highly readable body font. Avoid generic fonts (Inter, Roboto, Arial).
- **Color palette.** Muted, professional base (e.g., warm grays, off-whites) with one strong accent color used sparingly for CTAs and highlights. Consider deep blue, teal, or a warm accent. Dark mode support is a bonus but not required for v1.
- **Subtle motion.** Smooth scroll, gentle fade-ins on scroll, hover states on project cards. Nothing flashy or distracting.

### Anti-patterns to avoid
- Progress bar skill charts (e.g., "Python: 85%"). These are meaningless.
- Stock photo imagery.
- Walls of text with no visual breathing room.
- Logo grids of every tool ever touched.

---

## Site Structure & Navigation

### Primary Navigation (sticky top nav)

```
About    Portfolio v    Experience    Blog    Contact
              |
              +-- Analytics & Visualization
              +-- Data Science & ML
              +-- Side Projects
```

**Portfolio** has a dropdown menu with three subcategories. All other nav items are single pages/sections.

### Page Architecture

The site can be either:
- **Single-page app** with smooth scroll sections (simpler, works well for portfolio sites), OR
- **Multi-page** with separate routes for Blog posts and individual project detail pages

**Recommendation:** Hybrid approach. Main pages (About, Portfolio, Experience, Contact) can be sections on the home page with defined routes so that https://ryando.net/#portfolio works. But Blog and individual Project detail pages should be separate pages/routes since they'll have variable-length content.

---

## Page Specifications

### 1. Hero / Landing Section

**Purpose:** Immediate hook. Who is Ryan, what does he do, why should you care.

**Content:**
- Name: **Ryan Do**
- Tagline/subtitle: Something concise that positions him. Examples:
  - "Data Analyst & Scientist | Turning business questions into actionable insights"
  - "Data Professional | Analytics, Visualization & Machine Learning"
- Brief intro (2-3 sentences max): Highlight 6 years of FMCG commercial analytics experience (BAT, PepsiCo), Master of Business Analytics from UTS, based in Sydney.
- CTA buttons: "View Portfolio" and "Get in Touch"
- Links to LinkedIn, GitHub, Email

**Design notes:**
- No giant hero image or background video. Let the typography and whitespace do the work.
- The intro text should be scannable in under 5 seconds.

---

### 2. About Section

**Purpose:** Slightly deeper personal/professional narrative.

**Content:**
- Professional summary (a short paragraph): Background in FMCG analytics across Vietnam and Australia, passion for turning messy data into clear stories, currently teaching data science at UTS while building expertise in ML/deep learning.
- **Skills & Tools** summary (compact, not a separate page):
  - Display as clean tags or a simple grouped list, NOT progress bars.
  - Groups:
    - **Languages & Tools:** Python, SQL, DAX, VBA
    - **Visualization:** Power BI, Tableau
    - **ML/Data Science:** Scikit-learn, PyTorch, Pandas, NumPy
    - **Other:** Excel (advanced), Git, Jupyter, MLflow
  - These should feel like metadata, not the main event.
- Education:
  - Master of Business Analytics, University of Technology Sydney (UTS)
- Optional: A professional photo or avatar placeholder.

**Design notes:**
- Two-column layout works well here: text on one side, skills/education on the other.
- Keep it to one screen height if possible. This is not a CV dump.

---

### 3. Portfolio Section

**Purpose:** The core of the site. Showcase what Ryan can build.

**Structure:** Three subcategories, displayed as filterable project cards or tabbed sections.

#### 3a. Analytics & Visualization

Projects that demonstrate data analysis, dashboarding, BI, and data storytelling.

**Flagship project: Kartora (Power BI)**
- Title: "Kartora: Was the Category Expansion Worth It?"
- Description: Star schema dataset for a fictional Australian e-commerce brand. Showcases DAX, data modeling, visual design, and business storytelling.
- Tags: Power BI, DAX, Data Modeling, Data Storytelling
- Links: Live dashboard (if embeddable), GitHub repo
- Thumbnail/screenshot of the dashboard

**Future project placeholder:** SQL/Python exploratory analysis piece (to be added)

#### 3b. Data Science & ML

Projects that demonstrate modeling, ML pipelines, and deployment.

**Flagship project: Customer Churn Prediction**
- Title: "Customer Churn Prediction Web App"
- Description: End-to-end ML project using IBM Telco dataset. Classification modeling, feature engineering, and deployment as an interactive web app.
- Tags: Python, Scikit-learn, Classification, Web App
- Links: Live app, GitHub repo
- Thumbnail/screenshot

**Future project placeholder:** Deep learning or NLP project (to be added)

#### 3c. Side Projects

Non-data projects that show breadth and curiosity.

**Project: Website Blocker Chrome Extension**
- Title: "Website Blocker Chrome Extension"
- Description: Chrome extension with Pomodoro timer, time-based scheduling, master password protection, multiple schedule support, and export/import functionality.
- Tags: JavaScript, Chrome APIs, Productivity
- Links: GitHub repo
- Thumbnail/screenshot

#### Project Card Design

Each project card should include:
- Thumbnail image or screenshot (with a placeholder/gradient if no image exists yet)
- Project title
- 1-2 sentence description
- Technology tags (small, pill-shaped)
- Links: "View Project" / "GitHub" buttons or icons
- Clicking the card opens a **project detail page** with:
  - Full description and context
  - Problem statement / business question
  - Approach and methodology
  - Key findings or features
  - Screenshots / embedded demos where possible
  - GitHub repo link
  - Technology stack

**Design notes:**
- Cards should be consistent in size within a grid (2 or 3 columns on desktop, 1 on mobile).
- Hover effect: subtle scale or shadow lift.
- Empty state: If a category has no projects yet, show a tasteful "More coming soon" message rather than leaving it blank.

---

### 4. Experience Section

**Purpose:** Professional credibility. An enhanced, visual version of CV work experience.

**Content (reverse chronological):**

1. **Data Science Tutor & Marker** | University of Technology Sydney (UTS)
   - Current role
   - Teaching data science concepts, marking assignments, supporting student learning
   - Relevant skills: Communication, Python, ML fundamentals

2. **Associate Manager, National Key Accounts** | PepsiCo Vietnam
   - Managed national key account price lists and pricing/promotional terms in contract negotiations
   - Commercial analytics supporting national accounts
   - Relevant skills: Excel, Commercial Analytics, Stakeholder Management

3. **Various Analyst Roles** | British American Tobacco (BAT) Vietnam
   - ROI/cost-benefit modeling
   - Reporting suite design
   - Relevant skills: Excel, VBA, PowerPoint, Business Reporting

**Design notes:**
- Timeline or card-based layout. Each entry is compact.
- This section should feel lighter than Portfolio. It's supporting context, not the main show.
- Do NOT include project descriptions here. Those live in Portfolio.
- Optional: Link to downloadable CV/resume (PDF).

---

### 5. Blog Section

**Purpose:** Show analytical thinking, share knowledge, build personal brand.

**Content types:**
- Data tutorials and technical writing
- Personal reflections and career journey
- Project write-ups (story-format versions of portfolio projects)

**Structure:**
- Blog listing page: Grid or list of post cards with title, date, brief excerpt, category tag, and reading time estimate.
- Individual blog post page: Clean reading experience with good typography, code syntax highlighting support, and image support.

**Technical requirements:**
- Blog posts should be easy to add. Ideally written in Markdown files that get rendered as HTML pages.
- Syntax highlighting for code blocks (Python, SQL, etc.) using a library like Prism.js or Highlight.js.
- Category/tag filtering on the listing page.
- No comments section needed for v1.

**Design notes:**
- The blog post reading experience should feel like Medium or Substack: generous line height, readable column width (max ~700px), beautiful typography.
- Code blocks should be clearly styled and easy to read.

---

### 6. Contact Section

**Purpose:** Make it easy to get in touch.

**Content:**
- Brief message: "I'm currently looking for Data Analyst and Data Scientist opportunities in Sydney. Let's connect."
- Email address (displayed, not just a form)
- LinkedIn profile link
- GitHub profile link
- Optional: Simple contact form (name, email, message) using a service like Formspree or Netlify Forms.

**Design notes:**
- Keep it simple. No map embed, no office address.
- This can be a section at the bottom of the main page rather than a separate page.

---

## Recommended Stack: Astro + Decap CMS + Netlify

### Why Astro
- Built for content-heavy static sites (portfolios, blogs). Ships zero JavaScript by default, so pages are extremely fast.
- First-class Markdown and MDX support for blog posts and project write-ups.
- File-based routing: create a file at `src/pages/blog/my-post.md` and it becomes a page at `/blog/my-post`.
- Built-in image optimization.
- Simple enough for Ryan to maintain and extend without deep framework knowledge.
- Large ecosystem and good documentation.

### Why Decap CMS (formerly Netlify CMS)
Decap CMS gives Ryan a browser-based visual editor for managing content without touching code or using Git commands. It works by adding an admin panel at `yoursite.com/admin/` where you can:

- Create and edit blog posts with a rich text editor
- Add new projects by filling in a form (title, description, tags, category, links, thumbnail upload)
- Edit the About section, Experience entries, and other site content
- Upload images via drag-and-drop

Behind the scenes, every edit creates a Git commit in the repo. Netlify detects the commit and automatically rebuilds and redeploys the site. The whole cycle (edit in browser, site updates live) takes about 30 to 60 seconds.

### How the content editing workflow looks

**Adding a new blog post:**
1. Go to `ryando.net/admin/`
2. Log in (one-time setup via Netlify Identity)
3. Click "Blog Posts" > "New Blog Post"
4. Write the post in a rich text editor (supports headings, bold, links, images, code blocks)
5. Fill in metadata: title, date, tags, excerpt
6. Click "Publish"
7. Site rebuilds automatically. Post is live within a minute.

**Adding a new project:**
1. Go to `ryando.net/admin/`
2. Click "Projects" > "New Project"
3. Fill in the form: title, category (dropdown: Analytics & Visualization / Data Science & ML / Side Projects), description, tags, GitHub link, live demo link, featured toggle
4. Upload a thumbnail image via drag-and-drop
5. Write the full project detail content in the rich text editor
6. Click "Publish"
7. Site rebuilds. New project card appears on the portfolio page.

**Editing existing content:**
1. Go to `/admin/`, find the content you want to edit
2. Make changes in the editor
3. Click "Publish"
4. Done.

No terminal, no Git commands, no code editing required for routine content updates.

### Decap CMS Configuration

Decap CMS is configured via a single `config.yml` file that defines the content structure. Here is the recommended setup:

```yaml
# public/admin/config.yml

backend:
  name: git-gateway
  branch: main

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Excerpt", name: "excerpt", widget: "text" }
      - { label: "Tags", name: "tags", widget: "list", allow_add: true }
      - { label: "Category", name: "category", widget: "select", options: ["data-tutorial", "career-journey", "project-writeup", "personal"] }
      - { label: "Thumbnail", name: "thumbnail", widget: "image", required: false }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "projects"
    label: "Projects"
    folder: "src/content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Category", name: "category", widget: "select", options: ["analytics-visualization", "data-science-ml", "side-projects"] }
      - { label: "Short Description", name: "description", widget: "text" }
      - { label: "Tags", name: "tags", widget: "list", allow_add: true }
      - { label: "Thumbnail", name: "thumbnail", widget: "image" }
      - { label: "GitHub Link", name: "github", widget: "string", required: false }
      - { label: "Live Demo Link", name: "live", widget: "string", required: false }
      - { label: "Featured", name: "featured", widget: "boolean", default: false }
      - { label: "Sort Order", name: "order", widget: "number", default: 0 }
      - { label: "Full Write-up", name: "body", widget: "markdown" }

  - name: "experience"
    label: "Experience"
    folder: "src/content/experience"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Job Title", name: "title", widget: "string" }
      - { label: "Company", name: "company", widget: "string" }
      - { label: "Start Date", name: "startDate", widget: "string" }
      - { label: "End Date", name: "endDate", widget: "string", default: "Present" }
      - { label: "Sort Order", name: "order", widget: "number" }
      - { label: "Description", name: "body", widget: "markdown" }
```

### Netlify Identity Setup (Authentication for the CMS)

Decap CMS uses Netlify Identity to handle login. Setup steps:
1. In the Netlify dashboard, go to Site Settings > Identity > Enable Identity
2. Under Registration, set to "Invite only" (so only Ryan can access the admin)
3. Invite Ryan's email address
4. Enable Git Gateway under Identity > Services > Git Gateway
5. The admin panel at `/admin/` will now require login via email

This is all free on Netlify's free tier.

---

## Technical Requirements

### Hosting & Deployment
- **Host:** Netlify
- **Domain:** Custom domain (ryando.net or ryando.au)
- **SSL:** Automatic via Netlify (Let's Encrypt)
- **Deployment:** Git-based. Push to main branch triggers deploy. Decap CMS edits also trigger deploys automatically.
- **CMS:** Decap CMS with Netlify Identity + Git Gateway

### Performance
- Target Lighthouse score: 90+ across all categories
- Lazy load images
- Minimize JS bundle size
- Use modern image formats (WebP with fallbacks)

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Navigation collapses to hamburger menu on mobile
- Project cards stack to single column on mobile

### SEO Basics
- Semantic HTML (proper heading hierarchy, nav, main, section, article tags)
- Meta title and description on every page
- Open Graph tags for social sharing
- Sitemap.xml
- robots.txt

### Accessibility
- WCAG 2.1 AA compliance
- Proper alt text on all images
- Keyboard navigable
- Sufficient color contrast
- Focus indicators on interactive elements

### Blog Engine (handled by Astro + Decap CMS)
- Markdown-based posts stored in `src/content/blog/`
- Astro's content collections automatically validate front matter and generate pages
- Front matter support for title, date, tags, excerpt, category
- Syntax highlighting for code blocks (use Astro's built-in Shiki or add Prism.js)
- Posts can be created/edited via Decap CMS at `/admin/` or by manually adding `.md` files
- Same applies to projects: stored in `src/content/projects/`, editable via CMS or directly

---

## Content Data Structure

With Astro + Decap CMS, content is stored as Markdown files with front matter (YAML metadata at the top of the file). Decap CMS generates these files automatically when you use the admin UI. You can also create them manually.

### Example project file: `src/content/projects/kartora.md`

```markdown
---
title: "Kartora: Was the Category Expansion Worth It?"
category: "analytics-visualization"
description: "Star schema Power BI project for a fictional Australian e-commerce brand, showcasing DAX, data modeling, and business storytelling."
tags: ["Power BI", "DAX", "Data Modeling", "Data Storytelling"]
thumbnail: "/images/projects/kartora-thumb.png"
github: "https://github.com/..."
live: "https://..."
featured: true
order: 1
---

## Background

Kartora is a fictional Australian e-commerce brand...

## Business Question

Was the category expansion worth it? This project explores...

## Approach

Built a star schema data model with...

## Key Findings

The analysis revealed that...
```

### Example blog post file: `src/content/blog/2026-03-18-my-first-post.md`

```markdown
---
title: "How I Built a Chrome Extension to Block Distracting Websites"
date: 2026-03-18
excerpt: "A walkthrough of building a productivity Chrome extension with Pomodoro timer, scheduling, and password protection."
tags: ["JavaScript", "Chrome Extension", "Productivity"]
category: "project-writeup"
thumbnail: "/images/uploads/blocker-post-thumb.png"
---

I have a terrible habit of opening YouTube when I should be working...
```

### Example experience file: `src/content/experience/pepsico.md`

```markdown
---
title: "Associate Manager, National Key Accounts"
company: "PepsiCo Vietnam"
startDate: "2019"
endDate: "2022"
order: 2
---

Managed national key account price lists and pricing/promotional terms in contract negotiations. Delivered commercial analytics supporting national accounts across modern trade channels.
```

### Astro Content Collection Schema: `src/content/config.ts`

This file validates that all content files have the required fields:

```typescript
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['analytics-visualization', 'data-science-ml', 'side-projects']),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    github: z.string().optional(),
    live: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['data-tutorial', 'career-journey', 'project-writeup', 'personal']),
    thumbnail: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().default('Present'),
    order: z.number(),
  }),
});

export const collections = { projects, blog, experience };
```

---

## File Structure (Astro + Decap CMS)

```
/
+-- astro.config.mjs          # Astro configuration
+-- netlify.toml               # Netlify deploy config
+-- package.json
+-- public/
|   +-- admin/
|   |   +-- index.html         # Decap CMS admin page (loads the CMS React app)
|   |   +-- config.yml         # Decap CMS content model configuration
|   +-- images/
|   |   +-- projects/          # Project thumbnails and screenshots
|   |   +-- uploads/           # Images uploaded via Decap CMS
|   |   +-- profile.jpg        # Professional photo (optional)
|   +-- assets/
|   |   +-- resume.pdf         # Downloadable CV (optional)
|   +-- robots.txt
+-- src/
|   +-- content/
|   |   +-- blog/              # Blog posts as .md files (editable via CMS)
|   |   |   +-- my-first-post.md
|   |   |   +-- building-chrome-extension.md
|   |   +-- projects/          # Project entries as .md files (editable via CMS)
|   |   |   +-- kartora.md
|   |   |   +-- churn-prediction.md
|   |   |   +-- website-blocker.md
|   |   +-- experience/        # Experience entries as .md files (editable via CMS)
|   |   |   +-- uts-tutor.md
|   |   |   +-- pepsico.md
|   |   |   +-- bat.md
|   |   +-- config.ts          # Astro content collection schemas
|   +-- layouts/
|   |   +-- BaseLayout.astro   # Shared HTML shell (head, nav, footer)
|   |   +-- BlogPost.astro     # Blog post layout
|   |   +-- ProjectDetail.astro # Project detail page layout
|   +-- pages/
|   |   +-- index.astro        # Home page (Hero, About, Portfolio, Experience, Contact)
|   |   +-- blog/
|   |   |   +-- index.astro    # Blog listing page
|   |   |   +-- [...slug].astro # Dynamic blog post pages
|   |   +-- projects/
|   |   |   +-- [...slug].astro # Dynamic project detail pages
|   +-- components/
|   |   +-- Nav.astro           # Navigation with dropdown
|   |   +-- Hero.astro          # Hero/landing section
|   |   +-- About.astro         # About section
|   |   +-- ProjectCard.astro   # Reusable project card
|   |   +-- ProjectGrid.astro   # Portfolio grid with category filtering
|   |   +-- ExperienceCard.astro # Experience timeline entry
|   |   +-- BlogCard.astro      # Blog post preview card
|   |   +-- Contact.astro       # Contact section
|   |   +-- Footer.astro        # Site footer
|   |   +-- SkillTags.astro     # Compact skill/tool tags
|   +-- styles/
|   |   +-- global.css          # Global styles and CSS variables
```

### How content flows through the system

1. **Ryan edits content** via Decap CMS at `/admin/` (or directly edits `.md` files in `src/content/`)
2. **Decap CMS commits** the changes to the GitHub repo
3. **Netlify detects** the new commit and triggers a build
4. **Astro builds** the site: reads all `.md` files from `src/content/`, applies layouts and components, generates static HTML pages
5. **Netlify deploys** the built HTML/CSS/JS to its CDN
6. **Visitors see** the updated site

This entire cycle takes roughly 30 to 60 seconds from clicking "Publish" in the CMS to the changes being live.

---

## Implementation Priority

### Phase 1 (MVP for job search)
1. Initialize Astro project with base layout, global styles, and CSS variables
2. Hero + About section
3. Portfolio section with project cards (even if only 1-2 projects populated)
4. Experience section
5. Contact section
6. Responsive nav with dropdown
7. Deploy to Netlify with custom domain

### Phase 2 (Content management + detail pages)
8. Set up Decap CMS: admin page, config.yml, Netlify Identity + Git Gateway
9. Define Astro content collections (projects, blog, experience) with schemas
10. Project detail pages (dynamic routes from Markdown)
11. Blog listing page and blog post template with syntax highlighting
12. First 1-2 blog posts as seed content
13. SEO meta tags and Open Graph

### Phase 3 (Polish)
14. Animations and micro-interactions (scroll reveals, hover states)
15. Dark mode toggle
16. Performance optimization (image optimization, lazy loading)
17. Sitemap generation (Astro has a plugin for this)
18. Additional projects as completed

---

## Notes for Claude Code

- **Stack:** Use Astro as the static site generator and Decap CMS for content management. Set up Netlify Identity + Git Gateway for CMS authentication.
- Ryan prefers **no em dashes** ("--" or the character) in any text content. Use commas, periods, or semicolons instead.
- **Easy maintenance is critical.** After initial setup, Ryan should be able to add projects, blog posts, and experience entries entirely through the Decap CMS browser UI at `/admin/`. No terminal or code editing needed for routine content updates.
- All content (projects, blog posts, experience) should live as Markdown files in `src/content/` and be editable both via Decap CMS and directly in the code editor.
- Prioritize clean, readable code. Ryan is technical and will want to understand and modify the codebase.
- Keep Astro config minimal and well-documented. Add comments explaining non-obvious configuration choices.
- Test on mobile viewport sizes. Many recruiters will view this on their phone.
- The current site lives at thanh-tung-do.github.io. The new version will replace it.
- For the Decap CMS admin page (`public/admin/index.html`), include the Netlify Identity widget script for authentication.
- Use Astro's built-in sitemap integration (`@astrojs/sitemap`) for automatic sitemap generation.
- Use Astro's built-in Shiki for code syntax highlighting in blog posts.
