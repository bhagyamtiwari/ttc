import Frame from './Frame'
import Rise from './Rise'
import { Arrow, WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

/**
 * Text on the left, the product lineup on the right running to the edge of
 * the screen. The photograph is a wide lineup (roughly 2.5:1), so the picture
 * column is kept short and wide and crops very little of it.
 */
export default function Hero() {
  return (
    <section id="top" className="border-b border-rule pt-[68px] md:pt-[76px]">
      <div className="lg:grid lg:min-h-[430px] lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-stretch xl:min-h-[470px]">
        <Rise className="pad-left flex items-center py-12 pr-6 md:py-14 md:pr-10 lg:py-14 lg:pr-12">
          <div className="max-w-[34rem]">
            <h1 className="display text-[clamp(2.3rem,9.5vw,3.3rem)] uppercase md:text-[clamp(2.8rem,6.2vw,4.4rem)] lg:text-[clamp(2.1rem,3.15vw,3rem)]">
              Everything your
              <br />
              <span className="text-red">Workplace</span> needs.
            </h1>

            <p className="lede mt-6 max-w-[32rem]">
              Tiwari Trading Company supplies pantry essentials, beverages, snacks, cleaning
              supplies, office consumables and more to businesses across Delhi NCR. Branded,
              reliable, and sourced to your requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col lg:items-start lg:gap-3 xl:flex-row xl:gap-4">
              <a
                href={whatsappHref()}
                {...waLinkProps}
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap bg-red px-7 py-4 text-[17px] font-semibold leading-none text-paper transition-colors duration-200 hover:bg-red-deep lg:px-6"
              >
                <WhatsAppMark />
                WhatsApp Us
              </a>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap border border-red px-7 py-4 text-[17px] font-semibold leading-none text-red transition-colors duration-200 hover:bg-red hover:text-paper lg:px-6"
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
            alt="A lineup of the pantry, household, tea, cleaning and personal care products Tiwari Trading Company supplies to businesses across Delhi NCR, including Tata Tea, Brooke Bond Red Label, Surf Excel, Harpic, Dettol, Tata Salt and Saffola"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-[62%_50%]"
          />
        </Rise>
      </div>
    </section>
  )
}
