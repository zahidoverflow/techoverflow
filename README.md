# Techoverflow

A modern static marketing website for showcasing and selling premium digital subscriptions through WhatsApp.

## Overview

Techoverflow is a lightweight, no-build website designed for speed and simple deployment. The site includes:

- A landing page with featured products and trust-focused sections
- A dedicated products page with the full subscription catalog
- A contact/FAQ page with a request form and WhatsApp handoff
- Shared styling and JavaScript for consistent behavior

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static assets (SVG, PNG, web manifest)

## Project Structure

```text
.
├── assets/
│   ├── icons/          # Logo, favicons, touch icon, web manifest
│   └── images/         # Social share and other image assets
├── contact.html        # Contact and FAQ page
├── index.html          # Landing page
├── products.html       # Full product catalog
├── script.js           # Client-side interaction logic
├── style.css           # Global styles
└── README.md
```

## Getting Started

Because this is a static site, no dependency installation is required.

1. Clone the repository.
2. Open `index.html` in your browser.

## Local Development

You can run a local static server (optional) for smoother development:

- Python: `python -m http.server 8000`
- Node.js: `npx serve .`

Then open `http://localhost:8000`.

## Deployment

Deploy directly from the repository root to any static hosting provider, such as:

- GitHub Pages
- Netlify
- Vercel (static export)
- Cloudflare Pages

## Content & Asset Guidelines

- Add product and page content directly in the HTML files.
- Keep shared visual styles in `style.css`.
- Keep behavior updates in `script.js`.
- Store logos/icons/favicons in `assets/icons/`.
- Store page and preview images in `assets/images/`.
- Optimize images before committing to keep load times fast.

## Contributing

1. Create a feature branch.
2. Make focused, minimal changes.
3. Verify pages render correctly in a browser.
4. Open a pull request with a clear summary.

## License

This repository currently does not define a license. Add a `LICENSE` file if you want to specify usage terms.
