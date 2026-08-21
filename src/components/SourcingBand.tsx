import Rise from './Rise'
import { WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

/** A full-width block of TTC red. The one place the brand colour takes over. */
export default function SourcingBand() {
  return (
    <section className="bg-red text-paper">
      <div className="shell grid gap-8 py-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <Rise className="max-w-[44rem]">
          <h2 className="display text-[clamp(2rem,7vw,2.7rem)] md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            Looking for something specific?
          </h2>
          <p className="mt-5 text-[18px] leading-[1.55] text-paper/85 md:text-[19px]">
            Our range goes beyond what is shown here. From a particular FMCG brand to imported
            products or everyday housekeeping supplies, tell us what you need and we will help
            source it.
          </p>
        </Rise>

        <Rise delay={80}>
          <a
            href={whatsappHref(
              'Hello Tiwari Trading Company, I am looking for a specific product. Could you help source it?',
            )}
            {...waLinkProps}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-card bg-paper px-7 py-4 text-[17px] font-bold leading-none text-red transition-colors duration-200 hover:bg-red-tint lg:w-auto"
          >
            <WhatsAppMark />
            Ask us on WhatsApp
          </a>
        </Rise>
      </div>
    </section>
  )
}
