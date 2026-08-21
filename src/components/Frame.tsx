import { hasOwnImage, imageFor } from '../data/images'

type Tone = 'warm' | 'dark' | 'red'

type Props = {
  /** Folder under src/assets/products/ to pull the photograph from. */
  folder: string
  /** Which image in that folder (wraps around if fewer exist). */
  index?: number
  /**
   * Describes the products shown, for screen readers and SEO. Used only when
   * this section has photographs of its own; a borrowed photograph gets a
   * general description instead, so the alt text never claims to show
   * something it does not.
   */
  alt: string
  /**
   * Large text shown on the holding plate until a photograph is added.
   * Omit it where the surrounding layout already names the subject, so the
   * plate does not repeat a heading sitting right next to it.
   */
  label?: string
  tone?: Tone
  /** Aspect ratio utility, e.g. 'aspect-[4/5]'. Omit when the parent sets height. */
  ratio?: string
  className?: string
  /** Load immediately instead of lazily. Use for the hero only. */
  priority?: boolean
  /** Slow zoom-out on hover. Off by default. */
  hover?: boolean
  /**
   * Replaces the default `h-full w-full object-cover` on the <img>. Use when a
   * photograph needs different fitting at different breakpoints, as the wide
   * hero lineup does.
   */
  imgClassName?: string
}

const tones: Record<Tone, { bg: string; type: string; stencil: string }> = {
  warm: { bg: 'bg-[#EAE8E4]', type: 'text-ink/25', stencil: 'text-ink/45' },
  dark: { bg: 'bg-ink', type: 'text-paper/25', stencil: 'text-paper/40' },
  red: { bg: 'bg-red', type: 'text-paper/30', stencil: 'text-paper/50' },
}

/**
 * The single image primitive for the whole site.
 *
 * Renders the photograph when one exists in the folder. Until then it shows a
 * borrowed one with an "Image TBD" badge stamped over it, so the layout is
 * never blank and nobody mistakes the stand-in for the real thing. No rounded
 * corners and no borders: photographs sit directly in the layout.
 */
export default function Frame({
  folder,
  index = 0,
  alt,
  label,
  tone = 'warm',
  ratio,
  className = '',
  priority = false,
  hover = false,
  imgClassName,
}: Props) {
  const src = imageFor(folder, index)
  const t = tones[tone]
  /* True while this section is showing somebody else's photograph. */
  const isStandIn = Boolean(src) && !hasOwnImage(folder)

  /* A borrowed photograph must not be described as though it shows this
     category. Once the folder has its own photo, the specific alt returns. */
  const description = isStandIn
    ? 'A selection of the branded pantry, food, beverage, cleaning and paper products supplied by Tiwari Trading Company'
    : alt

  return (
    <div className={`relative overflow-hidden ${ratio ?? ''} ${src ? '' : t.bg} ${className}`}>
      {src ? (
        <>
          <img
            src={src}
            alt={description}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            // @ts-expect-error fetchpriority is valid HTML, not yet in React's types
            fetchpriority={priority ? 'high' : undefined}
            className={`${imgClassName ?? 'h-full w-full object-cover'} ${
              hover ? 'transition-transform duration-[900ms] ease-out hover:scale-[1.03]' : ''
            }`}
          />

          {isStandIn && (
            <span className="pointer-events-none absolute inset-0 flex items-start justify-center bg-ink/25 p-2">
              <span className="rounded-[3px] bg-ink/80 px-2 py-1 text-center leading-tight text-paper backdrop-blur-[2px] sm:px-2.5 sm:py-1.5">
                <span className="block text-[9.5px] font-bold uppercase tracking-[0.12em] sm:text-[10.5px] sm:tracking-[0.14em]">
                  Image TBD
                </span>
                {/* The reassurance only fits once the card is wider than a
                    half-width phone slot. */}
                <span className="mt-0.5 hidden text-[10.5px] font-medium sm:block">
                  (will be updated soon)
                </span>
              </span>
            </span>
          )}
        </>
      ) : (
        <div
          className={`absolute inset-0 flex flex-col gap-3 overflow-hidden p-4 md:p-5 ${
            label ? 'justify-between' : 'items-center justify-center'
          }`}
        >
          <span className={`flex flex-col items-center gap-1 text-center ${t.stencil}`}>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Image TBD</span>
            <span className="text-[12px] font-semibold normal-case tracking-[0.01em]">
              (will be updated soon)
            </span>
          </span>
          {label && (
            <span
              aria-hidden="true"
              className={`signage max-w-full break-words text-[clamp(1.1rem,3vw,1.9rem)] ${t.type}`}
            >
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
