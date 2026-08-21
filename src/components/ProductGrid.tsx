import Frame from './Frame'
import Rise from './Rise'
import { Arrow } from './Icons'
import { alsoSupplied, productCards, waLinkProps, whatsappHref, type ProductCard } from '../data/site'

function Card({ card, index }: { card: ProductCard; index: number }) {
  return (
    <Rise
      as="li"
      settle
      delay={(index % 3) * 70}
      className="group border border-rule bg-white transition-colors duration-200 hover:border-ink/25"
    >
      <article className="flex h-full flex-col sm:flex-row">
        {/* Text. Sits second on mobile so the photograph leads. */}
        <div className="order-2 flex flex-1 flex-col justify-center p-5 sm:order-1 sm:basis-[50%] md:p-6 xl:p-5">
          <h3 className="signage text-[17px] leading-[1.12] md:text-[18px]">{card.name}</h3>

          <p className="mt-2.5 text-[15px] leading-[1.45] text-inkSoft">
            {card.brands.join(', ')} &amp; more
          </p>

          <a
            href={whatsappHref(
              `Hello Tiwari Trading Company, I would like to enquire about ${card.name} for my workplace.`,
            )}
            {...waLinkProps}
            className="mt-4 inline-flex items-center gap-2 self-start text-[15px] font-semibold text-red"
          >
            Enquire
            <Arrow className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Photograph */}
        <Frame
          folder={card.folder}
          alt={card.alt}
          hover
          className="order-1 aspect-[16/9] w-full sm:order-2 sm:aspect-auto sm:min-h-[200px] sm:basis-[50%] md:min-h-[216px]"
        />
      </article>
    </Rise>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="border-b border-rule py-16 md:py-20 lg:py-24">
      <div className="shell">
        <Rise className="max-w-[52rem]">
          <h2 className="display text-[clamp(2.1rem,7.5vw,2.9rem)] uppercase md:text-[clamp(2.6rem,4.4vw,3.5rem)]">
            What we supply
          </h2>
          <p className="lede mt-5 max-w-[46rem]">
            From everyday pantry essentials to cleaning and office consumables, we supply the
            products businesses go through week after week. These are examples of our range, not
            the whole of it.
          </p>
        </Rise>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {productCards.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </ul>

        <Rise className="mt-10 border-t border-rule pt-7 md:mt-12">
          <p className="text-[17px] leading-[1.6] text-inkSoft md:text-[18px]">
            <span className="font-semibold text-ink">Also supplied: </span>
            {alsoSupplied.join(' · ')}.{' '}
            <a
              href={whatsappHref(
                'Hello Tiwari Trading Company, I am looking for a specific product. Could you help source it?',
              )}
              {...waLinkProps}
              className="font-semibold text-red link-underline"
            >
              Ask us about anything else
            </a>
            .
          </p>
        </Rise>
      </div>
    </section>
  )
}
