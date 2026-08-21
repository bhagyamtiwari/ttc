import Frame from './Frame'
import Rise from './Rise'
import { Arrow, WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

/**
 * The one coloured band at the top of the page. Text on the left, the product
 * lineup on the right running to the edge of the screen. Every word on the red
 * is pure white: on this ground a dimmed white reads as grey rather than as a
 * softer white.
 */
export default function Hero() {
  return (
    <section id="top" className="bg-red pt-[72px] text-paper md:pt-[84px]">
      <div className="lg:grid lg:min-h-[460px] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-stretch xl:min-h-[500px]">
        <Rise className="pad-left flex items-center py-11 pr-6 sm:py-14 md:py-16 md:pr-10 lg:py-16 lg:pr-14">
          <div className="max-w-[34rem]">
            <h1 className="display text-[clamp(2.4rem,9vw,3.4rem)] md:text-[clamp(3rem,5.4vw,4.2rem)] lg:text-[clamp(2.5rem,3.6vw,3.5rem)]">
              Everything your
              <br />
              workplace needs.
            </h1>

            <p className="mt-5 max-w-[33rem] text-[17px] leading-[1.5] text-paper sm:mt-6 sm:text-[19px] sm:leading-[1.55] md:text-[20px]">
              Reliable B2B supplies for offices, factories, institutions and workplaces across
              Delhi-NCR. Branded, consistent, and sourced to your requirements &mdash; including
              imported and specialty products.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
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
        <Rise settle className="relative aspect-[16/7] w-full sm:aspect-[21/9] lg:aspect-auto lg:min-h-full">
          <Frame
            folder="hero"
            priority
            tone="red"
            alt="A lineup of the pantry, household, tea, cleaning and personal care products Tiwari Trading Company supplies to businesses across Delhi-NCR, including Tata Tea, Brooke Bond Red Label, Surf Excel, Harpic, Dettol, Tata Salt and Saffola"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-[62%_50%]"
          />
        </Rise>
      </div>
    </section>
  )
}
