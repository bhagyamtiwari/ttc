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
          <h2 id="brands" className="display text-[clamp(2.1rem,7.5vw,2.9rem)] uppercase md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            Brands we supply
          </h2>
          <p className="lede mt-5">
            A selection of the pantry, food, beverage, cleaning and paper brands we regularly
            supply to offices and businesses across Delhi and Gurugram.
          </p>
        </Rise>

        <Rise className="mt-10 md:mt-12">
          <ul className="columns-2 gap-x-8 sm:columns-3 md:gap-x-12 lg:columns-4 xl:columns-5">
            {brands.map((brand) => (
              <li
                key={brand}
                className="break-inside-avoid py-[7px] text-[18px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink transition-colors duration-150 hover:text-red md:text-[19px]"
              >
                {brand}
              </li>
            ))}
            <li className="break-inside-avoid py-[7px] text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-red md:text-[19px]">
              And many more
            </li>
          </ul>
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
