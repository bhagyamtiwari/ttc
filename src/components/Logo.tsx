type Props = {
  tone?: 'dark' | 'light'
  /** Larger lockup, for the footer. */
  size?: 'nav' | 'large'
  className?: string
}

/**
 * The TTC lockup.
 *
 * A red block carrying the initials, set against the company name stacked on
 * two lines of tight bold caps. Splitting the name lets "Company" carry the
 * brand red, which ties the mark to the wordmark and stops the whole thing
 * reading as a line of ordinary navigation text.
 */
export default function Logo({ tone = 'dark', size = 'nav', className = '' }: Props) {
  const large = size === 'large'

  const block = large
    ? 'h-[52px] w-[52px] text-[19px] md:h-16 md:w-16 md:text-[24px]'
    : 'h-11 w-11 text-[16px] md:h-[46px] md:w-[46px] md:text-[17px]'

  const word = large
    ? 'text-[19px] md:text-[26px]'
    : 'text-[15.5px] md:text-[16.5px]'

  const primary = tone === 'light' ? 'text-paper' : 'text-ink'
  /* Red sits well on paper but goes muddy on near-black, so on dark grounds
     both lines stay solid white and the block carries the colour. A dimmed
     second line would just read as grey. */
  const accent = tone === 'light' ? 'text-paper' : 'text-red'

  return (
    <span className={`inline-flex items-center gap-3 md:gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid shrink-0 place-items-center bg-red font-black leading-none tracking-[-0.03em] text-paper ${block}`}
      >
        TTC
      </span>
      <span className="flex flex-col leading-[0.9]">
        <span className={`font-extrabold uppercase tracking-[-0.02em] ${primary} ${word}`}>
          Tiwari Trading
        </span>
        <span className={`font-extrabold uppercase tracking-[-0.02em] ${accent} ${word}`}>
          Company
        </span>
      </span>
    </span>
  )
}
