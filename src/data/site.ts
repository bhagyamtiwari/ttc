/* =============================================================================
   TIWARI TRADING COMPANY — CENTRAL SITE CONFIGURATION
   -----------------------------------------------------------------------------
   Everything a non-developer might want to change lives in this one file:
   phone and WhatsApp numbers, email, addresses, map links, product categories,
   the brand list, and how the products section is composed.

   Photographs need no code changes at all: drop files into
   src/assets/products/<folder>/ and they appear. See src/data/images.ts.
   ========================================================================== */

export const business = {
  name: 'Tiwari Trading Company',
  shortName: 'TTC',
  tagline: 'Pantry, FMCG & Workplace Supplies',
  domain: 'tiwaritradingcompany.com',
  url: 'https://tiwaritradingcompany.com',

  /* ---------------------------------------------------------------------------
     CONTACT DETAILS
     ---------------------------------------------------------------------------
     whatsappNumber : digits only, including country code, no "+" and no spaces.
                      Example for an Indian mobile: '919812345678'
     phoneDisplay   : how the number should read on screen.
     phoneDial      : what the "Call us" button dials.
     email          : leave as an empty string ('') to hide the email row.

     Any field left empty is hidden automatically, and the WhatsApp buttons
     fall back to the contact form until a number is added.
  --------------------------------------------------------------------------- */
  whatsappNumber: '918130701521',
  phoneDisplay: '+91 81307 01521',
  phoneDial: '+918130701521',
  email: '',          // e.g. 'sales@tiwaritradingcompany.com'

  /* Pre-filled message that opens in WhatsApp when someone taps a CTA. */
  whatsappMessage:
    'Hello Tiwari Trading Company, I would like to enquire about pantry and office supplies for my workplace.',

  /* Optional external form endpoint (Formspree, Getform, Basin, etc.).
     Leave empty and the form composes a WhatsApp message instead. */
  formEndpoint: '',
} as const

/* ==========================================================================
   LOCATIONS
   Both links are driven by the exact coordinates of each base, so "Directions"
   drops the pin on the doorway rather than on a street name that Google may
   resolve to somewhere else. To move a base, replace the two numbers in both
   the mapsLink and the mapsEmbed. No API key is needed or should ever be added.
   ========================================================================== */

export type Location = {
  id: string
  city: string
  address: string[]
  mapsLink: string
  mapsEmbed: string
}

export const locations: Location[] = [
  {
    id: 'delhi',
    city: 'Delhi',
    address: [
      'A1/116, near Shiv Durga Mandir',
      'Phase 5, Aya Nagar Extension, Aya Nagar',
      'New Delhi, Delhi 110047',
    ],
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=28.473937%2C77.128755',
    mapsEmbed: 'https://maps.google.com/maps?q=28.473937,77.128755&z=16&output=embed',
  },
  {
    id: 'gurugram',
    city: 'Gurugram',
    address: [
      'Tiwari Trading Company',
      'Golf Course Road, Sector 27',
      'Gurugram, Haryana',
    ],
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=28.466206%2C77.089936',
    mapsEmbed: 'https://maps.google.com/maps?q=28.466206,77.089936&z=16&output=embed',
  },
]

/* ==========================================================================
   THE PRODUCTS GRID
   --------------------------------------------------------------------------
   One card per row of the grid. Each card shows its name, the brands it
   covers, and a photograph pulled from src/assets/products/<folder>/.

   To add a card: copy a block below, give it a new id and folder, then create
   a folder of the same name under src/assets/products/ and drop photos in.
   To remove one: delete its block. The grid reflows on its own.
   ========================================================================== */

export type ProductCard = {
  id: string
  /** Shown in caps on the card. Use a line break by splitting into two words. */
  name: string
  /** The grey brand line under the name. Joined with commas on screen. */
  brands: string[]
  /** Folder under src/assets/products/ */
  folder: string
  /** Describes the photograph, for screen readers and search engines. */
  alt: string
}

export const productCards: ProductCard[] = [
  {
    id: 'tea-coffee',
    name: 'Tea & Coffee',
    brands: ['Tata Tea', 'Brooke Bond', 'Lipton', 'Tetley', 'Nescafé', 'Bru'],
    folder: 'tea-coffee',
    alt: 'Tea and coffee packs supplied to offices, including Tata Tea, Red Label, Nescafé, Lipton, Tetley and Bru',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    brands: ['Juices', 'soft drinks', 'packaged water', 'health drinks'],
    folder: 'beverages',
    alt: 'Packaged beverages including Tropicana, Real, Bisleri, Kinley, Coca-Cola and Pepsi',
  },
  {
    id: 'biscuits',
    name: 'Biscuits & Snacks',
    brands: ['Britannia', 'Parle', 'Sunfeast', 'Unibic', 'Lay’s', 'Kurkure'],
    folder: 'biscuits',
    alt: 'Biscuit and snack packs including Britannia Good Day, Parle-G, Sunfeast, Lay’s and Kurkure',
  },
  {
    id: 'namkeen',
    name: 'Namkeen & Indian Snacks',
    brands: ['Haldiram’s', 'Bikano', 'bhujia', 'mixtures'],
    folder: 'namkeen',
    alt: 'Namkeen packs including Haldiram’s and Bikano bhujia and savoury mixtures',
  },
  {
    id: 'cleaning',
    name: 'Cleaning & Housekeeping',
    brands: ['Dettol', 'Harpic', 'Lizol', 'Domex', 'Colin', 'Surf Excel'],
    folder: 'cleaning',
    alt: 'Cleaning and housekeeping products including Harpic, Lizol, Dettol handwash and Surf Excel',
  },
  {
    id: 'tissues-paper',
    name: 'Tissues & Paper Products',
    brands: ['Tissues', 'paper napkins', 'kitchen rolls', 'toilet paper'],
    folder: 'tissues-paper',
    alt: 'Tissue and paper products including facial tissues, napkins, kitchen rolls and toilet rolls',
  },
  {
    id: 'office',
    name: 'Office Essentials',
    brands: ['Stationery', 'paper', 'files', 'organizers', 'desk supplies'],
    folder: 'office',
    alt: 'Office stationery including pens, files, notebooks, copier paper and desk organisers',
  },
  {
    id: 'disposables',
    name: 'Disposables & Pantry Supplies',
    brands: ['Cups', 'plates', 'cutlery', 'stirrers', 'sugar sachets'],
    folder: 'disposables',
    alt: 'Disposable pantry supplies including paper cups, plates, wooden cutlery and stirrers',
  },
  {
    id: 'instant-food',
    name: 'Instant Food & Ready to Eat',
    brands: ['Maggi', 'Knorr', 'MTR', 'convenience foods'],
    folder: 'instant-food',
    alt: 'Instant food packs including Maggi noodles, Knorr cup-a-soup and MTR ready meals',
  },
  {
    id: 'dairy',
    name: 'Dairy, Sugar & Sweeteners',
    brands: ['Amul', 'Mother Dairy', 'Madhur', 'Nestlé Everyday', 'Sugar Free'],
    folder: 'dairy',
    alt: 'Dairy and sweetener products including milk, chaas, Nestlé Everyday milk powder and sugar',
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits, Nuts & Healthy Snacks',
    brands: ['Almonds', 'cashews', 'walnuts', 'raisins', 'trail mixes'],
    folder: 'dry-fruits',
    alt: 'Packaged dry fruits and nuts including almonds, cashews and walnuts',
  },
  {
    id: 'imported',
    name: 'Imported & Specialty',
    brands: ['Imported chocolate', 'specialty coffee', 'sparkling water'],
    folder: 'imported',
    alt: 'Imported and specialty products including international chocolate, coffee and sparkling water',
  },
]

/* Shown as a single typographic line under the grid, so the range reads as
   wider than twelve cards without adding twelve more cards. */
export const alsoSupplied: string[] = [
  'Chocolates & confectionery',
  'Sauces, ketchup & spreads',
  'Salt, spices & cooking essentials',
  'Breakfast cereals & oats',
  'Housekeeping equipment & dispensers',
  'Edible oils & kitchen staples',
]

/* ==========================================================================
   THE FOUR-POINT STRIPS
   The strip under the hero, and the strip under the products grid.
   icon values map to the drawings in src/components/Icons.tsx
   ========================================================================== */

export type Point = { icon: string; title: string; copy: string }

export const valuePoints: Point[] = [
  { icon: 'badge', title: 'Branded Products', copy: 'Trusted FMCG and workplace brands.' },
  { icon: 'boxes', title: 'Wide Range', copy: 'From pantry staples to cleaning and office essentials.' },
  { icon: 'search', title: 'Custom Sourcing', copy: 'Need something specific? We will source it.' },
  { icon: 'pin', title: 'Delhi NCR Supply', copy: 'Serving businesses across Delhi and Gurugram.' },
]

export const servicePoints: Point[] = [
  { icon: 'cart', title: 'Bulk Orders', copy: 'Suitable for offices, cafeterias, institutions and businesses of all sizes.' },
  { icon: 'truck', title: 'Reliable Supply', copy: 'Timely delivery and consistent quality you can count on.' },
  { icon: 'handshake', title: 'Flexible & Hassle-Free', copy: 'Easy communication and customised solutions.' },
  { icon: 'chat', title: 'We Are Just a Message Away', copy: 'WhatsApp us your requirements and we will handle the rest.' },
]

/* ==========================================================================
   BRANDS
   Set as a typographic wall, not as buttons.
   ========================================================================== */

export const brands: string[] = [
  'Tata Tea', 'Brooke Bond', 'Red Label', 'Lipton', 'Tetley', 'Nescafé', 'Bru',
  'Tropicana', 'Real', 'Bisleri', 'Kinley', 'Aquafina', 'Coca-Cola', 'Pepsi',
  'Sprite', 'Horlicks', 'Bournvita', 'Amul', 'Mother Dairy', 'Nestlé',
  'Madhur', 'Parry’s', 'Sugar Free', 'Tata Salt', 'Catch', 'Fortune', 'Saffola',
  'Britannia', 'Parle', 'Sunfeast', 'Unibic', 'Lay’s', 'Kurkure', 'Pringles',
  'Haldiram’s', 'Bikano', 'Maggi', 'Knorr', 'MTR', 'Cadbury', 'Snickers',
  'Kissan', 'Del Monte', 'Mother’s Recipe', 'Happilo', 'Dettol', 'Harpic',
  'Lizol', 'Domex', 'Colin', 'Cif', 'Surf Excel', 'Origami', 'Tork', 'Gala',
]

/* Who the business serves. Shown in the About section. */
export const servedSegments: string[] = [
  'Corporate offices', 'Startups', 'SMEs', 'Coworking spaces', 'Hotels',
  'Restaurants', 'Cafés', 'Institutions', 'Facility management companies',
]

export const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#locations', label: 'Locations' },
  { href: '#contact', label: 'Contact' },
]

/* -------------------------------------------------------------------------- */

export const whatsappHref = (message: string = business.whatsappMessage): string =>
  business.whatsappNumber
    ? `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
    : '#contact'

export const hasWhatsapp = Boolean(business.whatsappNumber)
export const hasPhone = Boolean(business.phoneDial)

/** Props every WhatsApp link needs, so a missing number never opens a broken tab. */
export const waLinkProps = hasWhatsapp
  ? { target: '_blank' as const, rel: 'noopener noreferrer' }
  : {}
