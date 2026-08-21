import { imageFor } from '../data/images'

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
  warm: { bg: 'bg-[#E7DFD2]', type: 'text-ink/25', stencil: 'text-ink/40' },
  dark: { bg: 'bg-ink', type: 'text-paper/25', stencil: 'text-paper/40' },
  red: { bg: 'bg-red-deep', type: 'text-paper/30', stencil: 'text-paper/50' },
}

/**
 * The single image primitive for the whole site.
 *
 * Renders the photograph when one exists in the folder, and a typographic
 * holding plate when it does not, so layouts read as intentional either way.
 * No rounded corners and no borders: photographs sit directly in the layout.
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

  return (
    <div className={`relative overflow-hidden ${ratio ?? ''} ${src ? '' : t.bg} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          // @ts-expect-error fetchpriority is valid HTML, not yet in React's types
          fetchpriority={priority ? 'high' : undefined}
          className={`${imgClassName ?? 'h-full w-full object-cover'} ${
            hover ? 'transition-transform duration-[900ms] ease-out hover:scale-[1.03]' : ''
          }`}
        />
      ) : (
        <div
          className={`absolute inset-0 flex flex-col gap-3 overflow-hidden p-4 md:p-5 ${
            label ? 'justify-between' : 'items-center justify-center'
          }`}
        >
          <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${t.stencil}`}>
            Photo to follow
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
