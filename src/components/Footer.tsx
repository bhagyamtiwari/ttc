import Logo from './Logo'
import { WhatsAppMark } from './Icons'
import { business, navLinks, waLinkProps, whatsappHref } from '../data/site'

/**
 * A centred footer on the same white ground as the rest of the page. The
 * company mark sits on the axis, everything below it hangs from the same
 * centre line, and the red rules and buttons carry the colour. Columns of
 * links pulled to the left would leave the page trailing off rather than
 * arriving somewhere.
 */
export default function Footer() {
  return (
    <footer className="border-t-[3px] border-red bg-paperDeep pb-16 pt-16 text-ink md:pt-20">
      <div className="shell flex flex-col items-center text-center">
        <Logo size="large" className="text-left" />

        <p className="mt-6 max-w-[34rem] text-[18px] leading-[1.5] text-inkSoft md:text-[19px]">
          {business.tagline} for offices and businesses across Delhi and Gurugram.
        </p>

        <a
          href={whatsappHref()}
          {...waLinkProps}
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-card bg-red px-8 py-4 text-[17px] font-bold leading-none text-paper transition-colors duration-200 hover:bg-red-deep"
        >
          <WhatsAppMark />
          WhatsApp us
        </a>

        {business.phoneDisplay && (
          <a
            href={`tel:${business.phoneDial}`}
            className="mt-5 text-[19px] font-bold tracking-tighter text-ink transition-colors hover:text-red md:text-[21px]"
          >
            {business.phoneDisplay}
          </a>
        )}

        {business.email && (
          <div className="mt-4 flex flex-col items-center gap-1">
            {[business.email, business.emailAlt].filter(Boolean).map((address) => (
              <a
                key={address}
                href={`mailto:${address}`}
                className="text-[16px] font-semibold text-inkSoft transition-colors hover:text-red md:text-[17px]"
              >
                {address}
              </a>
            ))}
          </div>
        )}

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-rule pt-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] font-bold text-ink transition-colors hover:text-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 w-full border-t border-rule pt-6">
          <p className="text-[15px] text-inkSoft">
            &copy; 2026 {business.name}.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
