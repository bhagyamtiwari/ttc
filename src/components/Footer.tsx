import Logo from './Logo'
import { WhatsAppMark } from './Icons'
import { business, locations, navLinks, waLinkProps, whatsappHref } from '../data/site'

/**
 * A centred footer. The company mark sits on the axis, everything below it
 * hangs from the same centre line, and the legal line closes it off. Columns
 * of links pulled to the left would leave the page trailing off rather than
 * arriving somewhere.
 */
export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-paper sm:pb-16 md:pt-20">
      <div className="shell flex flex-col items-center text-center">
        <Logo tone="light" size="large" className="text-left" />

        <p className="mt-6 max-w-[34rem] text-[18px] leading-[1.5] text-paper/80 md:text-[19px]">
          {business.tagline} for offices and businesses across Delhi and Gurugram.
        </p>

        <a
          href={whatsappHref()}
          {...waLinkProps}
          className="mt-8 inline-flex items-center justify-center gap-2.5 bg-red px-8 py-4 text-[17px] font-bold leading-none text-paper transition-colors duration-200 hover:bg-red-deep"
        >
          <WhatsAppMark />
          WhatsApp us
        </a>

        {business.phoneDisplay && (
          <a
            href={`tel:${business.phoneDial}`}
            className="mt-5 text-[19px] font-bold tracking-tighter text-paper hover:text-red md:text-[21px]"
          >
            {business.phoneDisplay}
          </a>
        )}

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-paper/15 pt-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] font-bold text-paper/85 transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          {locations.map((location) => (
            <a
              key={location.id}
              href={location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-bold text-paper/85 transition-colors hover:text-paper"
            >
              {location.city}
            </a>
          ))}
        </nav>

        <div className="mt-10 w-full border-t border-paper/10 pt-6">
          <p className="text-[15px] text-paper/60">
            &copy; 2026 {business.name}. All rights reserved. &middot; {business.domain}
          </p>
          <p className="mt-2 text-[13px] text-paper/35">
            Website built by Zindent, an ADNIZ Private Limited project.
          </p>
        </div>
      </div>
    </footer>
  )
}
