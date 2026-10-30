# Ironwood Legacy Properties — React Rebuild

A React + Vite + Tailwind rebuild of the rudramgroup.co.in WordPress site (a Charleston, SC
eco-luxury real estate brokerage, "Ironwood Legacy Properties").

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Navbar, Footer, PageHero, PropertyCard, SectionIntro, ScrollToTop
  pages/        Home, About, Services, Neighborhoods, Properties,
                RelocationGuide, Blog, Contact, NotFound
  data/         properties.js, neighborhoods.js, posts.js — edit these
                to swap in your real listings, areas, and blog posts
  index.css     Tailwind entrypoint + a few base/accessibility styles
tailwind.config.js  Brand colors (ink, oyster, sage, brass, clay) and fonts
```

## What to customize first

1. **`src/data/*.js`** — replace the placeholder properties, neighborhoods, and blog posts
   with your real content.
2. **Logo** — `Navbar.jsx` currently renders a text wordmark. Drop a logo file into `public/`
   and swap it in.
3. **Images** — all photos are Unsplash placeholders. Replace the URLs in `src/data/*.js` and
   the page files with your own listing photography.
4. **Contact form / Relocation guide form** — both forms currently just show a success message
   on submit. Wire them up to your CRM, email service, or a form backend (e.g. Formspree,
   a serverless function) before going live.
5. **Colors/fonts** — defined once in `tailwind.config.js` under `theme.extend.colors` and
   `theme.extend.fontFamily`.

## Notes

Only the WordPress homepage was accessible when this was built, so the About, Services,
Neighborhoods, Relocation Guide, Blog, and Contact pages use reasonable placeholder copy
consistent with the homepage's brand and tone — swap in your real copy before publishing.
"# rudram" 
