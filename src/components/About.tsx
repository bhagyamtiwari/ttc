import Frame from './Frame'
import Rise from './Rise'
import { servedSegments } from '../data/site'

export default function About() {
  return (
    <section id="about" className="border-b border-rule bg-paperDeep">
      <div className="lg:grid lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:items-stretch">
        <Rise className="pad-left flex items-center py-16 pr-6 md:py-20 md:pr-10 lg:pr-16">
          <div className="max-w-[38rem]">
            <h2 className="display text-[clamp(2.1rem,7.5vw,2.9rem)] uppercase md:text-[clamp(2.4rem,4.2vw,3.3rem)]">
              Your everyday business supply partner
            </h2>

            <div className="mt-6 space-y-5 text-[18px] leading-[1.6] text-inkSoft md:mt-7 md:text-[19px]">
              <p>
                Tiwari Trading Company is a Delhi NCR-based trading and supply company helping
                businesses source the pantry, beverage, food, cleaning and workplace consumables
                they need.
              </p>
              <p>
                We work with established brands and suppliers to provide reliable products for
                offices and businesses, while also helping clients source specific or
                harder-to-find requirements.
              </p>
            </div>

            <p className="mt-9 max-w-[36rem] text-[18px] leading-[1.7] text-inkSoft md:text-[19px]">
              <span className="font-semibold text-ink">We supply </span>
              {servedSegments.join(', ').toLowerCase()}.
            </p>
          </div>
        </Rise>

        <Rise settle delay={80} className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <Frame
            folder="warehouse"
            alt="Cartons and stock of pantry, cleaning and office supplies held by Tiwari Trading Company"
            label="Our Supply Operation"
            className="h-full w-full"
          />
        </Rise>
      </div>
    </section>
  )
}
