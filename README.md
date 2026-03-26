# Theziner — Design System Playground

Theziner helps people who use AI code generators come up with polished design systems for their apps. Browse realistic demo pages, tweak every design token in real time, and export the result as a ready-to-use AI prompt.

## How It Works

1. **Browse demo pages** — The app includes fully styled pages with real photos and mock data across different domains: e-commerce shop, product detail, analytics dashboard, chat messaging, blog, and settings.
2. **Open the design configurator** — Click the gear icon on the right edge to open the design drawer.
3. **Pick a preset or customize** — Start from one of 10 presets, then fine-tune colors, fonts, corners, shadows, opacity, and spacing.
4. **Export as a prompt** — Hit "Export as Prompt" to get a Markdown or JSON description you can paste directly into any AI code generator to recreate the look.

## Features

### Demo Pages
- **Shop Catalog** — Product grid with categories, badges, ratings, and cart buttons
- **Product Page** — Hero image gallery, reviews, color/quantity selectors
- **Dashboard** — Stats cards, revenue chart, activity feed, orders table
- **Chat** — Contact list with online indicators and message thread
- **Blog** — Featured article, post grid with cover images
- **Settings** — Profile form, notification toggles, section navigation

### Design Configurator
- **10 Presets** — Clean Minimal, Glassmorphic, Skeuomorphic, Brutalist, Soft Pastel, Corporate, Dark Neon, Warm Earth, Monochrome, Retro
- **Colors** — 15 design tokens with native color pickers and hex editing. Random palette generator using color harmony theory (complementary, analogous, triadic, split-complementary, tetradic)
- **Typography** — 20 popular Google Fonts with an expandable catalog of 160+ fonts. Searchable, with live preview on hover
- **Shape** — Border radius, shadow intensity, border width, opacity (with glassmorphic backdrop blur), and spacing density

### Export
- **Markdown** — Color table, typography specs, shape settings, and a ready-to-use AI prompt paragraph
- **JSON** — Structured design system object with a prompt string

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) (icons)
- [Google Fonts](https://fonts.google.com) (dynamic loading)

## Author

Created by **Zeev Avidan Herman**
