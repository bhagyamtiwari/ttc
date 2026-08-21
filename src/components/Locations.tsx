import Rise from './Rise'
import { Arrow } from './Icons'
import { locations } from '../data/site'

export default function Locations() {
  return (
    <section id="locations" className="border-b border-rule bg-paperDeep py-16 md:py-20 lg:py-24">
      <div className="shell">
        <Rise className="max-w-[46rem]">
          <h2 className="display text-[clamp(2.1rem,7.5vw,2.9rem)] uppercase md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            Serving Delhi NCR
          </h2>
          <p className="lede mt-5">
            Two bases, serving businesses across Delhi and Gurugram. Delhi NCR delivery available
            based on requirement.
          </p>
        </Rise>

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2 lg:gap-6">
          {locations.map((location, i) => (
            <Rise key={location.id} delay={i * 90} className="bg-white">
              <div className="aspect-[16/10] w-full sm:aspect-[2/1]">
                <iframe
                  src={location.mapsEmbed}
                  title={`Map showing Tiwari Trading Company in ${location.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[0.4]"
                />
              </div>

              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between md:p-7">
                <div>
                  <h3 className="signage text-[24px] md:text-[26px]">{location.city}</h3>
                  <address className="mt-3 not-italic text-[17px] leading-[1.6] text-inkSoft md:text-[18px]">
                    {location.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 self-start text-[16px] font-semibold text-red sm:self-end"
                >
                  Directions
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
