import Frame from './Frame'
import Rise from './Rise'
import { Arrow, WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

/**
 * The one coloured band on the page. Text on the left, the product lineup on
 * the right running to the edge of the screen. Everything else on the site is
 * white, so this band does the whole job of announcing the brand and the
 * rest of the page can stay quiet and functional.
 */
export default function Hero() {
  return (
    <section id="top" className="bg-red pt-[72px] text-paper md:pt-[84px]">
      <div className="lg:grid lg:min-h-[460px] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-stretch xl:min-h-[500px]">
        <Rise className="pad-left flex items-center py-14 pr-6 md:py-16 md:pr-10 lg:py-16 lg:pr-14">
          <div className="max-w-[34rem]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-paper/75">
              B2B Pantry &amp; Workplace Supplies
            </p>

            {/* Two-tone, not two colours: the setup line sits back and the
                promise lands in solid white. Nothing here reads as a link. */}
            <h1 className="display mt-5 text-[clamp(2.4rem,9vw,3.4rem)] md:text-[clamp(3rem,5.4vw,4.2rem)] lg:text-[clamp(2.5rem,3.6vw,3.5rem)]">
              <span className="text-paper/70">Everything your</span>
              <br />
              Workplace needs.
            </h1>

            <p className="mt-7 max-w-[32rem] text-[19px] leading-[1.55] text-paper/85 md:text-[20px]">
              Reliable B2B supplies for offices, factories, institutions and workplaces across
              Delhi NCR. Branded, consistent, and sourced to your requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsappHref()}
                {...waLinkProps}
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-card bg-paper px-7 py-4 text-[17px] font-bold leading-none text-red transition-colors duration-200 hover:bg-red-tint lg:px-6"
              >
                <WhatsAppMark />
                WhatsApp Us
              </a>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-card border border-paper/70 px-7 py-4 text-[17px] font-bold leading-none text-paper transition-colors duration-200 hover:bg-paper hover:text-red lg:px-6"
              >
                Explore Products
                <Arrow className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Rise>

        {/* The lineup, running to the right edge of the screen. */}
        <Rise settle className="relative aspect-[2/1] w-full sm:aspect-[21/9] lg:aspect-auto lg:min-h-full">
          <Frame
            folder="hero"
            priority
            tone="red"
            alt="A lineup of the pantry, household, tea, cleaning and personal care products Tiwari Trading Company supplies to businesses across Delhi NCR, including Tata Tea, Brooke Bond Red Label, Surf Excel, Harpic, Dettol, Tata Salt and Saffola"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-[62%_50%]"
          />
        </Rise>
      </div>
    </section>
  )
}
