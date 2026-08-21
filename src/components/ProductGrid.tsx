import Frame from './Frame'
import Rise from './Rise'
import { Arrow } from './Icons'
import { alsoSupplied, productCards, waLinkProps, whatsappHref, type ProductCard } from '../data/site'

function Card({ card, index }: { card: ProductCard; index: number }) {
  return (
    <Rise
      as="li"
      settle
      delay={(index % 4) * 70}
      className="card-accent group overflow-hidden rounded-card border border-rule bg-paper shadow-[0_1px_2px_rgba(22,24,28,0.04)] hover:border-red/40"
    >
      <article className="flex h-full flex-col">
        {/* The photograph leads. Supplied shots are wide product lineups, so
            the slot stays landscape at every width rather than cropping to a
            tall sliver. */}
        <Frame
          folder={card.folder}
          alt={card.alt}
          hover
          ratio="aspect-[16/9]"
          className="w-full"
        />

        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
          <h3 className="signage text-[15.5px] leading-[1.15] sm:text-[17px] md:text-[19px]">
            {card.name}
          </h3>

          {/* On a phone the brand line is clamped to two lines, so two cards
              sit side by side at a predictable height instead of one card
              running the length of the screen. */}
          <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.4] text-inkSoft sm:line-clamp-none sm:text-[15px] md:text-[16px]">
            {card.brands.join(', ')} &amp; more
          </p>

          {/* A 44px tap target, so the link is comfortable to hit with a
              thumb without opening a gap on desktop. */}
          <a
            href={whatsappHref(
              `Hello Tiwari Trading Company, I would like to enquire about ${card.name} for my workplace.`,
            )}
            {...waLinkProps}
            className="mt-auto inline-flex min-h-[44px] items-center gap-2 self-start pt-3 text-[14.5px] font-bold text-red sm:text-[16px]"
          >
            Enquire
            <Arrow className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </Rise>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="border-b border-rule py-16 md:py-20 lg:py-24">
      <div className="shell">
        <Rise className="max-w-[52rem]">
          <h2 className="display text-[clamp(2.1rem,7.5vw,2.9rem)] md:text-[clamp(2.6rem,4.4vw,3.5rem)]">
            What we supply
          </h2>
          {/* A short red rule under every section heading, so the eye picks
              out where each part of the page begins. */}
          <span aria-hidden="true" className="rule-red mt-5 block h-[4px] w-14 rounded-full bg-red" />
          <p className="lede mt-5 max-w-[46rem]">
            From everyday pantry essentials to cleaning and office consumables, we supply the
            products businesses go through week after week &mdash; imported and specialty lines
            included. These are examples of our range, not the whole of it.
          </p>
        </Rise>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:mt-12 md:grid-cols-3 xl:grid-cols-4">
          {productCards.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </ul>

        <Rise className="mt-10 border-t border-rule pt-7 md:mt-12">
          <p className="text-[17px] leading-[1.6] text-inkSoft md:text-[18px]">
            <span className="font-bold text-ink">Also supplied: </span>
            {alsoSupplied.join(' · ')}.{' '}
            <a
              href={whatsappHref(
                'Hello Tiwari Trading Company, I am looking for a specific product. Could you help source it?',
              )}
              {...waLinkProps}
              className="font-bold text-red link-underline"
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
