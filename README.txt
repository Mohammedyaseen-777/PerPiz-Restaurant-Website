# PerPiz — The Perfect Pizza Website

Files:
- `index.html` — main restaurant landing page, menu, best sellers, branches, cart and WhatsApp ordering.
- `menu.html` — QR-friendly full menu page. Visitors can print/save it as PDF.
- `styles.css` — responsive visual design.
- `script.js` — menu data, search/filter, cart, WhatsApp order message, rating UI and QR generation.
- `assets/perpiz-logo.jpg` — supplied PerPiz logo.

## How the QR works
The main page generates a QR code pointing to `menu.html` based on the website's live URL. After uploading the folder to a real website (for example GitHub Pages/Netlify), scan the QR from the live site to open the complete menu.

## Ordering
The cart sends the selected items to the Al-Burooj WhatsApp number. The phone numbers in the branch section are clickable.

## Important
The restaurant rating is intentionally interactive rather than showing an invented public rating, because no verified aggregate rating was provided.

## Deploy
Upload the entire folder while preserving this structure:
`index.html`
`menu.html`
`styles.css`
`script.js`
`assets/perpiz-logo.jpg`

Do not rename the files unless you also update the links in the HTML/JS.
