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

   A section shows a photograph only from its OWN folder. If that folder is
   empty it shows a plain "Photo to follow" panel instead. It deliberately does
   not borrow a picture from another category: a card headed Office Essentials
   showing soft drinks would mislead the person reading it.
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

/** The nth image in a folder, wrapping within that folder. Undefined if empty. */
export const imageFor = (folder: string, index = 0): string | undefined => {
  const list = imagesFor(folder)
  if (list.length === 0) return undefined
  return list[index % list.length]
}

export const hasImages = (folder: string): boolean => imagesFor(folder).length > 0

/** How many folders have at least one photograph. Useful while collecting them. */
export const folderCount = (): number => Object.keys(byFolder).length
