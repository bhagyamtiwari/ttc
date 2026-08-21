import Frame from './Frame'
import Rise from './Rise'
import { Arrow, WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule pt-[68px] md:pt-[76px]">
      <Rise className="shell py-12 md:py-14 lg:py-16">
        <h1 className="display text-[clamp(2.3rem,9.5vw,3.3rem)] uppercase md:text-[clamp(2.8rem,6.2vw,4.4rem)]">
          Everything your
          <br />
          <span className="text-red">Workplace</span> needs.
        </h1>

        <p className="lede mt-6 max-w-[44rem] md:mt-7">
          Tiwari Trading Company supplies pantry essentials, beverages, snacks, cleaning supplies,
          office consumables and more to businesses across Delhi NCR. Branded, reliable, and
          sourced to your requirements.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
      </Rise>

      {/*
        The hero photograph is a wide product lineup (roughly 2.5:1). Below md
        it keeps its full width and scrolls sideways so every pack stays
        readable; from md up it fills the screen and crops only top and bottom.
      */}
      <Rise settle>
        <div className="overflow-x-auto md:overflow-hidden">
          <Frame
            folder="hero"
            priority
            alt="A lineup of the pantry, household, tea, cleaning and personal care products Tiwari Trading Company supplies to businesses across Delhi NCR, including Tata Tea, Brooke Bond Red Label, Surf Excel, Harpic, Dettol, Tata Salt and Saffola"
            className="h-[250px] w-[max(100%,640px)] sm:h-[300px] sm:w-[max(100%,765px)] md:h-[330px] md:w-full lg:h-[400px] xl:h-[440px]"
            imgClassName="h-full w-full object-cover object-center"
          />
        </div>
      </Rise>
    </section>
  )
}
