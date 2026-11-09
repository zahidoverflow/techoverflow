# Techoverflow (`@techoverflowbd`)

Full-service Digital Engineering Agency & Premium Subscription Platform serving **Bangladeshi** and **International** clients with transparent **USD ($)** pricing.

- **Live Website:** [https://techoverflow.tech](https://techoverflow.tech)
- **Official Brand Handle:** `@techoverflowbd`
- **Official Facebook:** [https://facebook.com/techoverflowbd](https://facebook.com/techoverflowbd)
- **Direct WhatsApp:** [https://wa.me/zahidoverflow](https://wa.me/zahidoverflow)
- **Support Email:** `info@techoverflow.tech`

---

## Core Capabilities

### 1. Digital Agency Services (Fiverr-Style 3-Tier Packages)
Every core practice is structured into **Basic**, **Standard (Most Popular)**, and **Premium** tiers with transparent deliverables, delivery timeframes, revision counts, **USD ($)** pricing, and interactive add-on calculators:

1. **Business Automation & AI Agents:** Facebook, WhatsApp & Instagram automation, Bangla/Banglish/English AI sales agents, n8n/Make workflows, and CRM lead pipelines.
2. **E-commerce Development:** Shopify, WooCommerce, and custom Next.js storefronts with bKash, Nagad, SSLCommerz, Stripe, PayPal, and Pathao/Steadfast/RedX/DHL courier APIs.
3. **Website Development:** High-converting landing pages, corporate business websites, personal portfolios, and full-stack SaaS web applications.
4. **Android App Development:** Native Kotlin & cross-platform Flutter Android apps, Firebase/REST backends, web admin portals, and Google Play Store publishing.
5. **Cybersecurity Services (VAPT):** Surface security audits, grey-box web & API penetration testing (OWASP Top 10), full-scope red-team VAPT, malware cleanup, and Cloudflare WAF/server hardening.
6. **UI/UX Design, Cloud DevOps & AI Solutions:** Figma design systems, Linux VPS/Docker/AWS infrastructure, GitHub Actions CI/CD, and custom LLM/RAG integrations.

### 2. Premium Digital Subscriptions (`39+` Products)
Instant WhatsApp fulfillment for verified AI, Productivity, Developer, Design, Career, Education, and Cloud tools with interactive search and category filtering.

---

## Tech Stack & Architecture

- **100% Static & GitHub Pages Compatible:** Pure semantic HTML5, modern responsive CSS3 (`style.css`), and zero-dependency Vanilla JavaScript (`script.js`).
- **Interactive Quote Engine:** Real-time USD (`$`) package + add-on quote calculation with one-click WhatsApp brief handoff.
- **Clean-URL Routing:** Root HTML pages (`services.html`, `products.html`, `contact.html`, `privacy.html`, `terms.html`) are mirrored in their respective subdirectories (`services/index.html`, etc.) to ensure zero redirect loops on GitHub Pages.

## Project Structure

```text
.
├── assets/
│   ├── icons/          # Multi-resolution favicons, apple-touch-icon, Android icons, webmanifest, SVG logo
│   └── images/         # Social OpenGraph preview cover (og-cover.svg)
├── contact/index.html  # Clean-URL mirror of contact.html
├── privacy/index.html  # Clean-URL mirror of privacy.html
├── products/index.html # Clean-URL mirror of products.html
├── services/index.html # Clean-URL mirror of services.html
├── terms/index.html    # Clean-URL mirror of terms.html
├── CNAME               # Custom domain configuration (techoverflow.tech)
├── contact.html        # Contact channels, custom brief form & FAQ accordion
├── favicon.ico         # Root multi-size favicon
├── index.html          # Flagship agency & subscription homepage
├── logo.png            # 1024x1024 transparent RGBA master brand emblem
├── privacy.html        # Privacy Policy (Google API & Developer Console compliant)
├── products.html       # 42+ Digital Subscriptions catalog with live search & filter
├── script.js           # Package add-on calculator, filters, FAQ, WhatsApp handoff
├── services.html       # Dedicated 6-service 3-tier Fiverr-style packages page
├── style.css           # Global responsive design system (v3.0)
├── terms.html          # Terms of Service
└── README.md
```

## Local Development

Run any static HTTP server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
