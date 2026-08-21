import Rise from './Rise'
import { Arrow, StripIcon } from './Icons'
import { locations } from '../data/site'

/**
 * Two bases, two cards, on the second red band of the page. The white cards
 * and the maps inside them carry all the detail, so the band reads as a map
 * pinned to a board rather than as another white section. Both cards are the
 * same height whatever the address runs to, so the pair reads as one row.
 */
export default function Locations() {
  return (
    <section id="locations" className="bg-red py-16 text-paper md:py-20 lg:py-24">
      <div className="shell">
        <Rise className="max-w-[46rem]">
          <h2 className="display text-[clamp(2.1rem,7.5vw,2.9rem)] md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            Serving Delhi-NCR
          </h2>
          <span aria-hidden="true" className="rule-red mt-5 block h-[4px] w-14 rounded-full bg-paper" />
          <p className="mt-5 text-[17px] leading-[1.5] text-paper sm:text-[19px] sm:leading-[1.55] md:text-[20px]">
            Two bases, serving businesses across Delhi and Gurugram. Delhi-NCR delivery available
            based on requirement.
          </p>
        </Rise>

        <div className="mt-10 grid items-stretch gap-6 md:mt-12 lg:grid-cols-2">
          {locations.map((location, i) => (
            <Rise
              key={location.id}
              delay={i * 90}
              className="flex h-full flex-col overflow-hidden rounded-card bg-paper text-ink shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
            >
              <div className="aspect-[16/10] w-full border-b border-rule sm:aspect-[2/1]">
                <iframe
                  src={location.mapsEmbed}
                  title={`Map showing Tiwari Trading Company in ${location.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="signage text-[24px] md:text-[26px]">{location.city}</h3>

                <address className="mt-3 not-italic text-[17px] leading-[1.6] text-inkSoft md:text-[18px]">
                  {location.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                {/* Pushed to the bottom of the card, so the link sits on the
                    same line in both cards however long the address runs. */}
                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center gap-2 self-start pt-6 text-[16px] font-bold text-red"
                >
                  <StripIcon name="pin" className="h-[17px] w-[17px]" />
                  Open in Google Maps
                  <Arrow className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}
