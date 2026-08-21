import { StripIcon } from './Icons'
import { valuePoints } from '../data/site'

/**
 * The band directly under the hero. It answers the four things a procurement
 * manager checks before they bother getting in touch. Four equal columns, each
 * separated by a hairline, so the row reads as one evenly measured set rather
 * than four items that happen to sit near each other.
 */
export default function UtilityStrip() {
  return (
    <section aria-label="Why businesses buy from us" className="border-b border-rule bg-paper">
      <ul className="shell grid grid-cols-1 divide-y divide-rule py-2 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {valuePoints.map((point, i) => (
          <li
            key={point.title}
            className={`flex items-center justify-center gap-4 px-4 py-5 md:py-6 ${
              i > 0 ? 'lg:border-l lg:border-rule' : ''
            } ${i === 1 ? 'sm:border-l sm:border-rule' : ''} ${
              i === 3 ? 'sm:border-l sm:border-rule' : ''
            } ${i > 1 ? 'sm:border-t sm:border-rule lg:border-t-0' : ''}`}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-red ring-1 ring-inset ring-red/25">
              <StripIcon name={point.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0 max-w-[15rem]">
              <span className="block text-[15px] font-bold leading-tight tracking-[-0.01em] text-ink">
                {point.title}
              </span>
              <span className="mt-1 block text-[14.5px] leading-[1.35] text-inkSoft">
                {point.copy}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
