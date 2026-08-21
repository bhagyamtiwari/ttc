type Props = {
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * The TTC lockup: a red block holding the initials, with the company name and
 * territory stacked beside it. The mark leads, so it reads as a stamp on a
 * crate rather than as a piece of interface.
 */
export default function Logo({ tone = 'dark', className = '' }: Props) {
  const name = tone === 'light' ? 'text-paper' : 'text-ink'
  const sub = tone === 'light' ? 'text-paper/55' : 'text-inkSoft'

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-12 w-12 shrink-0 place-items-center bg-red text-[17px] font-bold leading-none tracking-[0.01em] text-paper md:h-[52px] md:w-[52px] md:text-[18px]"
      >
        TTC
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-semibold leading-none tracking-tighter md:text-[21px] ${name}`}>
          Tiwari Trading Company
        </span>
        <span className={`mt-[7px] text-[12px] font-semibold uppercase leading-none tracking-[0.2em] ${sub}`}>
          Delhi NCR
        </span>
      </span>
    </span>
  )
}
