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
   A section with no photograph of its own shows an "Image TBD" plate. It does
   not borrow a picture from another section: a card headed Office Essentials
   showing pantry stock tells the visitor something untrue about the range.
   Drop a photo into the folder and the plate is replaced automatically.
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

/** All images in a folder, in filename order. Empty array if none yet. */
export const imagesFor = (folder: string): string[] => byFolder[folder] ?? []

/** True when this section has a photograph of its very own. */
export const hasOwnImage = (folder: string): boolean => imagesFor(folder).length > 0

/** The photograph to show for a section, or undefined while it has none. */
export const imageFor = (folder: string, index = 0): string | undefined => {
  const own = byFolder[folder]
  return own?.length ? own[index % own.length] : undefined
}

/** How many folders have at least one photograph. Useful while collecting them. */
export const folderCount = (): number => Object.keys(byFolder).length
