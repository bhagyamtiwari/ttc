/* =============================================================================
   PRODUCT IMAGERY
   -----------------------------------------------------------------------------
   HOW TO ADD PHOTOS (no code changes needed):

     Drop image files into  src/assets/products/<folder-name>/

     e.g.  src/assets/products/tea-coffee/tea-coffee.jpg
           src/assets/products/office/stationery.jpg
           src/assets/products/hero/pantry-lineup.jpg

   Every image in a folder is picked up automatically and sorted by filename.
   Name files 01-..., 02-... if you want to control which is used first.

   Supported: .jpg .jpeg .png .webp .avif

   WHILE PHOTOGRAPHS ARE STILL BEING COLLECTED
   -------------------------------------------
   A section with no photograph of its own borrows one and Frame stamps an
   "Image TBD" badge over it, so the layout is never blank and no visitor is
   left thinking the borrowed shot is the real thing. It looks, in order, at:

     1. its own folder
     2. a closely related folder (see borrowsFrom below), following the chain,
        so Namkeen falls back to Biscuits and then to Tea & Coffee
     3. any other photograph on the site, offset per section so neighbouring
        cards do not all show the same picture
     4. a plain holding panel, only if there are no photographs anywhere yet

   A borrowed photograph is never described as though it shows that category:
   Frame swaps in a general description for the alt text and the badge names it
   as a stand-in, so a card headed Office Essentials showing pantry stock does
   not mislead anyone, whether they are looking at it or hearing it read out.
   Add a photo to the folder and the badge, the picture and the description all
   become specific again.
   ========================================================================== */

const files = import.meta.glob(
  '../assets/products/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

/** folder name -> its image urls, in filename order */
const byFolder: Record<string, string[]> = {}

for (const path of Object.keys(files).sort()) {
  const match = path.match(/\/products\/([^/]+)\/[^/]+$/)
  if (!match) continue
  ;(byFolder[match[1]] ||= []).push(files[path])
}

/* Which folder each section borrows from until it has photographs of its own.
   Chains are followed, so a long gap still lands somewhere sensible. Edit
   freely: the key is the section that is empty, the value is the section whose
   photographs suit it best. */
const borrowsFrom: Record<string, string> = {
  /* Stand-ins are chosen so no two cards next to each other, across or down
     the grid, end up showing the same photograph. */
  biscuits: 'beverages',
  chocolates: 'tea-coffee',
  cereals: 'tea-coffee',
  dairy: 'beverages',
  'sugar-sweeteners': 'tea-coffee',
  chips: 'beverages',
  namkeen: 'tea-coffee',
  'instant-food': 'hero',
  'dry-fruits': 'tea-coffee',
  sauces: 'hero',
  spices: 'hero',
  'tea-coffee': 'hero',
  beverages: 'hero',

  /* cleaning, paper and office lean on the housekeeping shelves */
  'housekeeping-equipment': 'cleaning',
  'tissues-paper': 'cleaning',
  office: 'tissues-paper',
  disposables: 'cleaning',
  cleaning: 'hero',

  /* the wide lineup stands in for anything spanning the whole range */
  imported: 'hero',
  warehouse: 'hero',
  hero: 'cleaning',
}

/** Every photograph on the site, in a stable order. */
const pool = (): string[] => Object.values(byFolder).flat()

/** A stable per-section offset, so borrowed pictures vary from card to card. */
const offsetFor = (folder: string): number => {
  let hash = 0
  for (let i = 0; i < folder.length; i += 1) {
    hash = (hash * 31 + folder.charCodeAt(i)) >>> 0
  }
  return hash
}

/** All images in a folder, in filename order. Empty array if none yet. */
export const imagesFor = (folder: string): string[] => byFolder[folder] ?? []

/** True when this section has a photograph of its very own. */
export const hasOwnImage = (folder: string): boolean => imagesFor(folder).length > 0

/**
 * The photograph to show for a section: its own if it has one, otherwise a
 * borrowed one. Undefined only when no photographs exist anywhere yet.
 */
export const imageFor = (folder: string, index = 0): string | undefined => {
  const own = byFolder[folder]
  if (own?.length) return own[index % own.length]

  /* Follow the chain of related folders, stopping if it loops back. */
  const seen = new Set<string>([folder])
  let next = borrowsFrom[folder]
  while (next && !seen.has(next)) {
    const borrowed = byFolder[next]
    if (borrowed?.length) return borrowed[(index + offsetFor(folder)) % borrowed.length]
    seen.add(next)
    next = borrowsFrom[next]
  }

  const all = pool()
  if (all.length) return all[(index + offsetFor(folder)) % all.length]

  return undefined
}

/** Kept for compatibility: true when a photograph will be shown at all. */
export const hasImages = (folder: string): boolean => Boolean(imageFor(folder))

/** How many folders have at least one photograph. Useful while collecting them. */
export const folderCount = (): number => Object.keys(byFolder).length

/* While running `npm run dev`, name the sections still waiting for photos. */
if (import.meta.env.DEV) {
  const waiting = Object.keys(borrowsFrom).filter((f) => !hasOwnImage(f))
  if (pool().length === 0) {
    console.info(
      '[TTC] No photographs yet. Drop images into src/assets/products/<folder>/ and they appear automatically.',
    )
  } else if (waiting.length) {
    console.info(
      `[TTC] Borrowing images for: ${waiting.join(', ')}.\n` +
        '      Add photos to src/assets/products/<folder>/ to replace them.',
    )
  }
}
