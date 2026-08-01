# Shivam Upadhyay — Portfolio

A personal portfolio built with **Vite + React (JS)**. Frontend only, no backend — content lives in `src/data/portfolio.js`, animations are powered by **Framer Motion**.

**Live:** [portfolio-3v4p.onrender.com](https://portfolio-3v4p.onrender.com/)

## Run it locally

\```bash
npm install
npm run dev
\```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for production

\```bash
npm run build
\```

This outputs a static site into `dist/`.

## Deployment

Currently deployed on **Render** as a static site:

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Publish Directory | `dist` |

The same `dist/` output also works on Vercel, Netlify, or GitHub Pages if you ever want to move or mirror it.

## Edit your content

Everything text-based (name, links, experience, projects, skills, education) lives in one file:

\```
src/data/portfolio.js
\```

Change the values there and every section updates automatically — no need to touch the components.

## Structure

\```
src/
  components/     # one section = one .jsx + matching .css file
  data/           # portfolio.js — all your content
  index.css       # design tokens (colors, fonts, spacing) + base styles
  App.jsx         # composes the page from components
\```

## Design notes

- Colors, type and spacing are all defined as CSS variables at the top of `src/index.css` — change the palette in one place.
- Fonts: Fraunces (headings), Inter (body), JetBrains Mono (labels/eyebrows), loaded from Google Fonts in `index.html`.
- Section labels are styled like API routes (`GET /projects`, `POST /contact`) as a nod to the backend work in the projects themselves.
- Reduced-motion is respected (`prefers-reduced-motion`), and interactive elements have visible focus states.