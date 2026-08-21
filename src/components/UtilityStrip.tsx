import { StripIcon } from './Icons'
import { valuePoints } from '../data/site'

/**
 * The thin bar directly under the navbar. It answers the four things a
 * procurement manager checks before they bother getting in touch, before they
 * have scrolled anywhere.
 */
export default function UtilityStrip() {
  return (
    <section
      aria-label="Why businesses buy from us"
      className="border-b border-rule bg-paper pt-[72px] md:pt-[84px]"
    >
      <ul className="shell grid grid-cols-2 gap-x-5 gap-y-3.5 py-3.5 lg:grid-cols-4 lg:gap-x-8 lg:py-3.5">
        {valuePoints.map((point) => (
          <li key={point.title} className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red-tint text-red ring-1 ring-inset ring-red/15 lg:h-10 lg:w-10">
              <StripIcon name={point.icon} className="h-[17px] w-[17px] lg:h-5 lg:w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-bold leading-tight tracking-[-0.01em] text-ink lg:text-[15px]">
                {point.title}
              </span>
              {/* The supporting line would push the hero below the fold on a
                  phone, so it appears once there is room for it. */}
              <span className="mt-0.5 hidden text-[14px] leading-tight text-inkSoft lg:block">
                {point.copy}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
