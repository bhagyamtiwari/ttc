import Logo from './Logo'
import { WhatsAppMark } from './Icons'
import { business, locations, navLinks, waLinkProps, whatsappHref } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink pb-28 pt-14 text-paper sm:pb-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-[17px] text-paper/60">{business.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[17px] font-semibold tracking-tighter text-paper">
              Quick links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[17px] text-paper/80 hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[17px] font-semibold tracking-tighter text-paper">
              Locations
            </h2>
            <ul className="mt-5 space-y-3">
              {locations.map((location) => (
                <li key={location.id}>
                  <a
                    href={location.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] text-paper/80 hover:text-paper"
                  >
                    {location.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold tracking-tighter text-paper">
              Get in touch
            </h2>
            <a
              href={whatsappHref()}
              {...waLinkProps}
              className="mt-5 inline-flex w-full items-center justify-center gap-2.5 border border-paper/25 px-6 py-3.5 text-[16px] font-semibold text-paper transition-colors duration-200 hover:bg-paper hover:text-ink sm:w-auto"
            >
              <WhatsAppMark className="h-[17px] w-[17px]" />
              WhatsApp us
            </a>
            {business.phoneDisplay && (
              <p className="mt-4 text-[17px] text-paper/80">{business.phoneDisplay}</p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-[15px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="sm:whitespace-nowrap">&copy; 2026 {business.name}. All rights reserved.</p>
          <p className="sm:ml-auto">{business.domain}</p>
          <p className="text-[13px] text-paper/35 sm:w-full sm:text-right">
            Website built by Zindent, an ADNIZ Private Limited project.
          </p>
        </div>
      </div>
    </footer>
  )
}
