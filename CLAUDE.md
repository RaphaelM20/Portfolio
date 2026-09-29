# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Raphael Moreira, built with React 19 + Vite, plain JavaScript (JSX, no TypeScript). Deployed on Netlify: https://raphaelmoreira.netlify.app/

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint (flat config in `eslint.config.js`: recommended JS, react-hooks, react-refresh)

There is no test suite.

## Architecture

- **Routing:** `src/App.jsx` uses `HashRouter` (URLs look like `/#/projects`), so Netlify needs no SPA redirect rules. `Navbar` and `Footer` wrap every route; routes render inside `<main id="main">`. When adding a page, add a `<Route>` in `App.jsx` and an entry in the `links` array in `Navbar.jsx` (it feeds both the desktop and mobile menus).
- **Skip link:** a plain `href="#main"` would be read by HashRouter as a route, so the skip link in `App.jsx` focuses `#main` in an onClick handler instead. Avoid bare `#anchor` links elsewhere for the same reason.
- **Content lives in `src/data/`**, separate from components. Never hard-code copy in components.
  - `profile.js`: name, hero tagline, availability line, location, email, GitHub/LinkedIn URLs, resume path, headshot and About photos (with alt text), About quick facts, and the Projects page intro.
  - `projects.js`: array rendered by `ProjectList` → `ProjectCard` on both `HomePage` (2-column grid) and `ProjectPage` (large list). The `tech` string is split on `·` into chips.
  - `aboutMe.js` and `aboutMeMore.js` (`aboutMeMore` text + `funFacts` array).
- **About section:** a single `AboutSection` component is shared by `HomePage` (`variant="section"`, h2, collapsed) and `AboutPage` (`variant="page"`, h1, expanded). Don't reintroduce duplicate About markup.
- **Images** are hosted on Cloudinary and referenced by URL; they are not in the repo. Every image needs meaningful alt text.
- **Resume:** `public/raphael-resume.pdf` is served at `/raphael-resume.pdf`, embedded in an iframe on `ResumePage` (desktop; a fallback note shows below 768px) and linked for download in the hero and `Footer`. Updating the resume means replacing this file with the same name (keep it to one page — `ResumePage` labels it "PDF · 1 page").

## Styling

- Plain CSS, no framework or CSS modules. `src/index.css` holds design tokens (CSS custom properties on `:root`), reset/base styles, and shared utilities (`.container`, `.section`, `.page`, `.eyebrow`, `.button`, `.text-link`, `.chip`, `.reveal`). Each component/page imports its own CSS file alongside it (e.g. `Navbar.css`, `HomePage.css`).
- Use the tokens rather than raw values: colors (`--bg`, `--surface`, `--text`, `--muted`, `--subtle`, `--accent`, `--border`…), the fluid type scale (`--step--1` … `--step-4`), and the 8px spacing scale (`--space-1` = 8px … `--space-16`).
- **Theming:** dark is the default. Light applies via `prefers-color-scheme` or `data-theme="light"` on `<html>`; light values are defined twice in `index.css` (media query + attribute), so keep both in sync. `ThemeToggle` saves the choice to `localStorage` (`theme`), and an inline script in `index.html` applies it before first paint. All text colors pass WCAG AA in both themes — check contrast when changing tokens.
- **Fonts:** Geist and Geist Mono, loaded from Google Fonts in `index.html`.
- **Motion:** wrap elements in `<Reveal>` (uses `src/hooks/useReveal.js`, IntersectionObserver) for a fade-in on scroll. Motion must respect `prefers-reduced-motion` — `.reveal` only starts hidden under `no-preference`, and hover transforms are scoped the same way.
- The navbar is `position: fixed` at 60px (`--nav-h`); `main` is padded by that amount. The mobile menu appears below 768px and closes on route change and Escape.
- Layout must not scroll horizontally at 375px, 768px, or 1440px.
