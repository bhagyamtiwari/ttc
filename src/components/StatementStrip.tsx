import Rise from './Rise'
import { StripIcon } from './Icons'
import { valuePoints } from '../data/site'

/**
 * The band directly under the hero: a plain-spoken statement of range on the
 * left, and the four reasons to call on the right.
 */
export default function StatementStrip() {
  return (
    <section aria-label="What we supply and why businesses call us" className="border-b border-rule bg-paperDeep">
      <div className="shell grid gap-8 py-10 md:py-11 lg:grid-cols-[minmax(0,35fr)_minmax(0,65fr)] lg:items-center lg:gap-12">
        <Rise>
          <p className="max-w-[24ch] text-[26px] font-extrabold leading-[1.15] tracking-tightest md:text-[30px]">
            From the <span className="text-red">coffee</span> in your pantry to the{' '}
            <span className="text-red">cleaning</span> in your cupboard.
          </p>
        </Rise>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:border-l lg:border-rule lg:pl-12">
          {valuePoints.map((point, i) => (
            <Rise as="li" key={point.title} delay={i * 70} className="flex items-start gap-4 lg:flex-col lg:gap-3.5">
              <StripIcon name={point.icon} className="h-8 w-8 shrink-0 text-red" />
              <div>
                <h2 className="text-[16.5px] font-bold leading-snug tracking-[-0.012em]">
                  {point.title}
                </h2>
                <p className="mt-1.5 text-[16px] leading-[1.45] text-inkSoft">{point.copy}</p>
              </div>
            </Rise>
          ))}
        </ul>
      </div>
    </section>
  )
}
