type Props = {
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * TTC lockup: a red block holding the initials, with the company name and
 * territory stacked beside it. Reads as a trading company stamp.
 */
export default function Logo({ tone = 'dark', className = '' }: Props) {
  const name = tone === 'light' ? 'text-paper' : 'text-ink'
  const sub = tone === 'light' ? 'text-paper/50' : 'text-inkSoft'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center bg-red text-[14px] font-bold leading-none tracking-[0.02em] text-paper md:h-11 md:w-11 md:text-[15px]"
      >
        TTC
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-semibold leading-none tracking-tighter md:text-[18px] ${name}`}>
          Tiwari Trading Company
        </span>
        <span className={`mt-1.5 text-[11.5px] font-semibold uppercase leading-none tracking-[0.16em] ${sub}`}>
          Delhi NCR
        </span>
      </span>
    </span>
  )
}
