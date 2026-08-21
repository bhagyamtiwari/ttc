# Tiwari Trading Company

Website for Tiwari Trading Company (TTC), a Delhi NCR supplier of office pantry,
FMCG, cleaning and workplace consumables.

Live at **https://tiwaritradingcompany.com**

- React + TypeScript + Vite + Tailwind CSS
- No backend, no database, no login, no ecommerce
- Deployed automatically to GitHub Pages on every push to `main`

---

## 1. Adding product photos

This is the most important thing to do, and it needs no code changes.

Drop image files into the folder for that category:

```
src/assets/products/
  hero/                    the big photograph in the hero
  tea-coffee/
  beverages/
  biscuits/
  namkeen/
  cleaning/
  tissues-paper/
  office/
  disposables/
  instant-food/
  dairy/
  dry-fruits/
  imported/
  warehouse/               the photograph in the About section
```

For example, save a photo as `src/assets/products/tea-coffee/tata-tea.jpg` and it
appears on the Tea & Coffee card straight away.

- Supported formats: `.jpg` `.jpeg` `.png` `.webp` `.avif`
- Every image in a folder is picked up automatically, sorted by filename. Name
  files `01-...`, `02-...` if you want to control which one is used first.
- Aim for roughly 1200px wide and under 300 KB each. Vite compresses and
  fingerprints them at build time.
- Until a folder has a photo, that slot shows a plain holding panel reading
  "Photo to follow", so the site never looks broken while you collect images.

Use photographs you own or have a licence for. Product shots taken in-house are
safest.

---

## 2. Editing business information

Almost everything else lives in one file: **`src/data/site.ts`**

| What | Where in the file |
| --- | --- |
| WhatsApp number | `business.whatsappNumber` |
| Phone number | `business.phoneDisplay` and `business.phoneDial` |
| Email address | `business.email` |
| Pre-filled WhatsApp message | `business.whatsappMessage` |
| Addresses and Google Maps links | `locations` |
| The twelve product cards | `productCards` |
| The "Also supplied" line | `alsoSupplied` |
| The two four-point strips | `valuePoints` and `servicePoints` |
| Brand list | `brands` |
| Types of business served | `servedSegments` |
| Navigation links | `navLinks` |

### Adding the WhatsApp number

Digits only, with the country code, no `+` and no spaces:

```ts
whatsappNumber: '919812345678',
```

Until a number is added, every WhatsApp button scrolls to the contact form
instead, so nothing looks broken.

### Adding the phone number

```ts
phoneDisplay: '+91 98123 45678',
phoneDial: '+919812345678',
```

The phone row in the contact section appears automatically once these are set.

### Updating a map

Search the address on Google Maps, choose **Share → Embed a map**, copy the
`src="..."` value, and paste it into `mapsEmbed` for that location. No Google
Maps API key is needed, and none should ever be committed here.

---

## 3. The contact form

There is no server. The form works one of two ways:

- **Default:** submitting it composes a WhatsApp message with the visitor's
  details, ready to send.
- **Optional:** sign up for a free form service (Formspree, Getform, Basin) and
  paste its endpoint into `business.formEndpoint`. The form then posts there.

WhatsApp stays the primary way visitors get in touch either way.

---

## 4. Running it locally

Requires Node.js 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

---

## 5. Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Nothing is run by hand.

One-time setup in the GitHub repository:

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
2. **Settings → Pages → Custom domain:** enter `tiwaritradingcompany.com` and
   tick **Enforce HTTPS**.
3. At the domain registrar, point the domain at GitHub Pages:
   - `A` records for the apex domain to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` to `bhagyamtiwari.github.io`

`public/CNAME` already holds the custom domain, so it survives every deploy.

If the site is ever hosted at `bhagyamtiwari.github.io/ttc` instead, change
`base` in `vite.config.ts` from `'/'` to `'/ttc/'`.

---

## 6. Project structure

```
src/
  data/
    site.ts             all business information (edit this)
    images.ts           finds photos in src/assets/products (no edits needed)
  assets/products/      photographs, one folder per category
  components/
    Navbar.tsx          fixed header and mobile menu
    Hero.tsx            headline, CTAs, and the hero photograph
    StatementStrip.tsx  the statement and four-point band under the hero
    ProductGrid.tsx     the twelve category cards
    ServiceStrip.tsx    the four-point band under the grid
    SourcingBand.tsx    the red "Looking for something specific?" block
    HowItWorks.tsx      three steps
    About.tsx           company description and photograph
    Brands.tsx          the typographic brand wall
    Locations.tsx       Delhi and Gurugram with maps
    Contact.tsx         dark contact block and form
    Footer.tsx          footer
    WhatsAppButton.tsx  sticky mobile WhatsApp bar
    Frame.tsx           shows a photograph, or a holding panel if none yet
    Rise.tsx            the one scroll effect used on the site
    Icons.tsx           interface icons
    Logo.tsx            TTC lockup
public/
  CNAME, favicon.svg, og-image.svg, robots.txt, sitemap.xml
```

The site is a single page today. Components are split per section, so a new page
can import the ones it needs without restructuring anything.
