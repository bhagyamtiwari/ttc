type Props = {
  tone?: 'dark' | 'light'
  /** Larger lockup, for the footer. */
  size?: 'nav' | 'large'
  className?: string
}

/**
 * The TTC lockup.
 *
 * A red block carrying the initials, set against the company name on one line
 * of tight bold caps. Keeping the name on a single line makes the mark read as
 * a signature rather than as two stacked navigation links.
 */
export default function Logo({ tone = 'dark', size = 'nav', className = '' }: Props) {
  const large = size === 'large'

  const block = large
    ? 'h-12 w-12 text-[17px] sm:h-[54px] sm:w-[54px] sm:text-[19px] md:h-16 md:w-16 md:text-[23px]'
    : 'h-9 w-9 text-[13px] sm:h-11 sm:w-11 sm:text-[16px] md:h-[46px] md:w-[46px] md:text-[17px]'

  /* The name runs on one line, so on a narrow phone it steps down to leave
     room for the menu button. */
  const word = large
    ? 'text-[19px] sm:text-[23px] md:text-[27px]'
    : 'text-[14.5px] sm:text-[17px] md:text-[19px] lg:text-[20px]'

  const primary = tone === 'light' ? 'text-paper' : 'text-ink'

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 md:gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid shrink-0 place-items-center bg-red font-black leading-none tracking-[-0.03em] text-paper ${block}`}
      >
        TTC
      </span>
      <span
        className={`font-extrabold uppercase leading-none tracking-[-0.018em] ${primary} ${word}`}
      >
        Tiwari Trading Company
      </span>
    </span>
  )
}
