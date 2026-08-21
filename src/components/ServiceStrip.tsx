import Rise from './Rise'
import { StripIcon } from './Icons'
import { servicePoints } from '../data/site'

/** The band under the products grid: how working with TTC actually goes. */
export default function ServiceStrip() {
  return (
    <section aria-label="How we work" className="border-b border-rule bg-paperDeep">
      <div className="shell grid grid-cols-1 gap-x-10 gap-y-8 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-4">
        {servicePoints.map((point, i) => (
          <Rise as="div" key={point.title} delay={i * 70} className="flex items-start gap-4">
            <StripIcon name={point.icon} className="h-9 w-9 shrink-0 text-red" />
            <div>
              <h2 className="text-[17px] font-semibold leading-snug tracking-[-0.012em]">
                {point.title}
              </h2>
              <p className="mt-1.5 text-[15.5px] leading-[1.45] text-inkSoft">{point.copy}</p>
            </div>
          </Rise>
        ))}
      </div>
    </section>
  )
}
