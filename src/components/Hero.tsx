import Frame from './Frame'
import Rise from './Rise'
import { Arrow, WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule pt-[68px] md:pt-[76px]">
      <div className="lg:grid lg:min-h-[560px] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-stretch xl:min-h-[620px]">
        {/* Text */}
        <Rise className="pad-left flex items-center py-12 pr-6 md:py-16 md:pr-10 lg:py-20 lg:pr-12">
          <div className="max-w-[36rem]">
            <h1 className="display text-[clamp(2.3rem,9.5vw,3.3rem)] uppercase md:text-[clamp(2.8rem,5.4vw,3.8rem)] lg:text-[clamp(2.2rem,3.4vw,3.1rem)]">
              Everything your
              <br />
              <span className="text-red">Workplace</span> needs.
            </h1>

            <p className="lede mt-6 max-w-[34rem] md:mt-7">
              Tiwari Trading Company supplies pantry essentials, beverages, snacks, cleaning
              supplies, office consumables and more to businesses across Delhi NCR. Branded,
              reliable, and sourced to your requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-9">
              <a
                href={whatsappHref()}
                {...waLinkProps}
                className="inline-flex items-center justify-center gap-2.5 bg-red px-7 py-4 text-[17px] font-semibold leading-none text-paper transition-colors duration-200 hover:bg-red-deep"
              >
                <WhatsAppMark />
                WhatsApp Us
              </a>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2.5 border border-red px-7 py-4 text-[17px] font-semibold leading-none text-red transition-colors duration-200 hover:bg-red hover:text-paper"
              >
                Explore Products
                <Arrow className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Rise>

        {/* Photograph, running to the right edge of the screen */}
        <Rise settle className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
          <Frame
            folder="hero"
            priority
            alt="A spread of the pantry, snack, beverage, tissue and cleaning products Tiwari Trading Company supplies to offices across Delhi NCR"
            label="Pantry & Workplace Supplies"
            className="h-full w-full"
          />
        </Rise>
      </div>
    </section>
  )
}
