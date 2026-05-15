# Techoverflow

Techoverflow is a static catalog site for premium subscriptions with a dedicated contact page for requests.

## Project structure

```text
.
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       └── og-cover.svg
├── contact.html
├── index.html
├── script.js
├── style.css
└── README.md
```

## Where to put assets

- Put images in `assets/images/`
- Put icons, favicons, and social preview art in `assets/icons/`
- Put fonts in `assets/fonts/`
- Put any future downloadable files in `assets/files/`

## Notes

- The site is static and can be deployed directly from the repo root.
- `contact.html` holds the request form; `index.html` stays focused on products.
- `script.js` handles the WhatsApp handoff from the contact form.
