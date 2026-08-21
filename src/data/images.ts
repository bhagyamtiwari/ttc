/* =============================================================================
   PRODUCT IMAGERY
   -----------------------------------------------------------------------------
   HOW TO ADD PHOTOS (no code changes needed):

     Drop image files into  src/assets/products/<folder-name>/

     e.g.  src/assets/products/tea-coffee/tata-tea.jpg
           src/assets/products/tea-coffee/nescafe.jpg
           src/assets/products/cleaning/harpic-lizol.jpg
           src/assets/products/hero/pantry-spread.jpg

   Every image in a folder is picked up automatically, sorted by filename, and
   used by the section that folder belongs to. Name files 01-..., 02-... if you
   want to control the order.

   Supported: .jpg .jpeg .png .webp .avif
   Sections fall back to a typographic plate until a photo exists, so the site
   never looks broken while you are still collecting images.
   ========================================================================== */

const files = import.meta.glob(
  '../assets/products/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

/** folder name -> ordered list of image urls */
const byFolder: Record<string, string[]> = {}

for (const path of Object.keys(files).sort()) {
  const match = path.match(/\/products\/([^/]+)\//)
  if (!match) continue
  const folder = match[1]
  ;(byFolder[folder] ||= []).push(files[path])
}

/** All images in a folder, in filename order. Empty array if none yet. */
export const imagesFor = (folder: string): string[] => byFolder[folder] ?? []

/** The nth image in a folder, wrapping around if fewer exist. Undefined if empty. */
export const imageFor = (folder: string, index = 0): string | undefined => {
  const list = imagesFor(folder)
  if (list.length === 0) return undefined
  return list[index % list.length]
}

export const hasImages = (folder: string): boolean => imagesFor(folder).length > 0

/** Every image on the site, used for the full-bleed strip after the hero. */
export const allImages = (): string[] => Object.values(byFolder).flat()
