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
 * of tight bold caps with the descriptor beneath it. Keeping the name on a
 * single line makes the mark read as a signature rather than as two stacked
 * navigation links, and gives the header a stable baseline to centre on.
 */
export default function Logo({ tone = 'dark', size = 'nav', className = '' }: Props) {
  const large = size === 'large'

  const block = large
    ? 'h-12 w-12 text-[17px] sm:h-[54px] sm:w-[54px] sm:text-[19px] md:h-16 md:w-16 md:text-[23px]'
    : 'h-9 w-9 text-[13px] sm:h-11 sm:w-11 sm:text-[16px] md:h-[46px] md:w-[46px] md:text-[17px]'

  /* The name runs on one line, so on a narrow phone it has to come down a
     long way to leave room for the menu button. */
  const word = large
    ? 'text-[17px] sm:text-[20px] md:text-[25px]'
    : 'text-[13px] sm:text-[15px] md:text-[18px] lg:text-[19px]'

  const sub = large
    ? 'text-[10.5px] sm:text-[12px] md:text-[13px]'
    : 'text-[8.5px] sm:text-[9.5px] md:text-[11px] lg:text-[11.5px]'

  const primary = tone === 'light' ? 'text-paper' : 'text-ink'
  /* Red sits well on paper but goes muddy on near-black, so on dark grounds
     the descriptor stays white at reduced opacity and the block carries the
     colour. */
  const descriptor = tone === 'light' ? 'text-paper/70' : 'text-inkSoft'

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 md:gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid shrink-0 place-items-center bg-red font-black leading-none tracking-[-0.03em] text-paper ${block}`}
      >
        TTC
      </span>
      <span className="flex flex-col justify-center">
        <span
          className={`font-extrabold uppercase leading-none tracking-[-0.018em] ${primary} ${word}`}
        >
          Tiwari Trading Company
        </span>
        <span
          className={`mt-[4px] font-bold uppercase leading-none tracking-[0.1em] sm:tracking-[0.13em] ${descriptor} ${sub}`}
        >
          Pantry &amp; Workplace Supplies
        </span>
      </span>
    </span>
  )
}
