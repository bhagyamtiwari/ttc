import { WhatsAppMark } from './Icons'
import { waLinkProps, whatsappHref } from '../data/site'

/** Sticky WhatsApp bar on small screens. On desktop the navbar CTA is enough. */
export default function WhatsAppButton() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 p-3 backdrop-blur sm:hidden"
      /* Clears the iPhone home indicator, so the button is not half under it. */
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={whatsappHref()}
        {...waLinkProps}
        className="flex w-full items-center justify-center gap-2.5 rounded-card bg-red px-6 py-4 text-[17px] font-bold leading-none text-paper transition-transform duration-150 active:scale-[0.985]"
      >
        <WhatsAppMark />
        WhatsApp Us
      </a>
    </div>
  )
}
