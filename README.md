# Techoverflow

Techoverflow is a conversion-focused digital storefront for selling premium software subscriptions and service access through WhatsApp with fast response and instant delivery.

## Business Positioning

This project is designed as a lean, high-clarity sales website that helps turn product interest into purchase conversations. It supports business growth by:

- Presenting premium offers in a clean, trust-first format
- Reducing buyer friction with direct WhatsApp checkout
- Highlighting speed, reliability, and support-driven fulfillment
- Making it easy to expand catalog offerings over time

## Core Offer Portfolio

Techoverflow showcases digital products and services across high-demand categories:

- AI tools (e.g., ChatGPT Plus/Business, Google AI Pro)
- Career and professional subscriptions (e.g., LinkedIn Career Premium)
- Business and collaboration software (e.g., Microsoft 365, Canva Business)
- Education and skill development platforms (e.g., Coursera, Udemy Premium, Skillshare)
- Developer tools and cloud products (e.g., GitHub Copilot, Vercel Pro, Railway Hobby)

The current catalog is managed on the product pages and can be updated quickly without any build process.

## Website Experience

The website includes:

- **Landing page (`index.html`)** for value proposition, featured offers, and trust content
- **Products page (`products.html`)** for full catalog browsing and direct purchase links
- **Contact page (`contact.html`)** for support, FAQ, and inquiry handoff
- **Unified UI (`style.css`, `script.js`)** for consistent branding and interaction

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static assets (icons, images, web manifest)

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

No dependency installation is required.

1. Clone the repository.
2. Open `index.html` in your browser.

## Local Development

Run a local static server (optional):

- Python: `python -m http.server 8000`
- Node.js: `npx serve .`

Then open `http://localhost:8000`.

## Deployment

Deploy directly from the repository root to any static hosting platform:

- GitHub Pages
- Netlify
- Vercel (static export)
- Cloudflare Pages

## Content Management Guidelines

- Update sales copy and offer details directly in HTML files.
- Maintain global styling in `style.css`.
- Keep interactions and shared behavior in `script.js`.
- Store branding assets in `assets/icons/`.
- Store page and preview images in `assets/images/`.
- Optimize media before committing for better performance.

## Contributing

1. Create a feature branch.
2. Make focused, minimal changes.
3. Verify pages render correctly in a browser.
4. Open a pull request with a clear summary.

## License

This repository currently does not define a license. Add a `LICENSE` file if you want to specify usage terms.
