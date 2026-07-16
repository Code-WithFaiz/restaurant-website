# Ember & Saffron — Restaurant Website

A candlelit, fine-dining restaurant website. Warm dark theme, gold and
ember accents, elegant serif typography.

## Features
- Ambient "candle flicker" background glow (signature visual)
- Tabbed menu (Starters / Mains / Desserts / Drinks) — data-driven
- Reservation form with basic validation (front-end only for now)
- Responsive gallery grid with placeholders
- Fully responsive, mobile nav menu
- Respects `prefers-reduced-motion`

## Tech Stack
HTML5, CSS3 (custom properties), Vanilla JavaScript.

## Folder Structure
```
restaurant-website/
├── index.html
├── css/style.css
├── js/script.js
└── assets/images/   ← add real photos here
```

## How to customize
1. **Restaurant name / content**: edit text directly in `index.html`
   (name is currently "Ember & Saffron" — a placeholder concept, change freely)
2. **Menu items**: edit the `MENU` object at the top of `js/script.js`
3. **Photos**: add images to `assets/images/`, then swap the placeholder
   `.story-frame` and `.gallery-item` blocks in `index.html`/`script.js`
   with real `<img>` tags
3. **Address / phone / hours**: edit the `.info-block` in the Reserve section
4. **Reservation form**: currently shows a confirmation message only.
   To make it functional, connect it to a backend (e.g. a form service
   like Formspree, or your own API) inside `initReserveForm()` in script.js

## Deploy
Push to GitHub, then enable GitHub Pages (same process as the portfolio site).

## License
MIT — free to reuse and adapt.
