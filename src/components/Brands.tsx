import { type CSSProperties } from 'react'
import Rise from './Rise'
import { brands, waLinkProps, whatsappHref } from '../data/site'

/**
 * A brand wall set as type, not as buttons. Names flow in columns the way a
 * catalogue index would, so the length of the list is the point.
 */
export default function Brands() {
  return (
    <section aria-labelledby="brands" className="border-b border-rule py-16 md:py-20 lg:py-24">
      <div className="shell">
        <Rise className="max-w-[46rem]">
          <h2 id="brands" className="display text-[clamp(2.1rem,7.5vw,2.9rem)] md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            Brands we supply
          </h2>
          <span aria-hidden="true" className="rule-red mt-5 block h-[4px] w-14 rounded-full bg-red" />
          <p className="lede mt-5">
            A selection of the pantry, food, beverage, cleaning and paper brands we regularly
            supply to offices and businesses across Delhi and Gurugram.
          </p>
        </Rise>

        <Rise as="ul" className="stagger mt-10 columns-2 gap-x-8 sm:columns-3 md:mt-12 md:gap-x-12 lg:columns-4 xl:columns-5">
          {brands.map((brand, i) => (
            <li
              key={brand}
              /* The delay is capped so the tail of the list is not still
                 arriving a second after the head of it. */
              style={{ '--i': Math.min(i, 26) } as CSSProperties}
              className="block break-inside-avoid py-[7px] text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink md:text-[19px]"
            >
              <span className="brand-name">{brand}</span>
            </li>
          ))}
          <li
            style={{ '--i': 27 } as CSSProperties}
            className="block break-inside-avoid py-[7px] text-[17px] font-bold leading-[1.3] tracking-[-0.015em] text-red md:text-[19px]"
          >
            And many more
          </li>
        </Rise>

        <Rise className="mt-10 border-t border-rule pt-7">
          <p className="text-[18px] leading-[1.55] text-inkSoft md:text-[19px]">
            Looking for a particular brand?{' '}
            <a
              href={whatsappHref(
                'Hello Tiwari Trading Company, do you supply the following brand?',
              )}
              {...waLinkProps}
              className="font-bold text-red link-underline"
            >
              Ask us
            </a>
            .
          </p>
        </Rise>
      </div>
    </section>
  )
}
