import type { JSX } from 'react'

/* Interface icons only. Products carry the visual weight on this site, so
   nothing here ever stands in for a product. */

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.35,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export const WhatsAppMark = ({ className = 'h-[18px] w-[18px]' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
    <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.33 4.94L2 22l5.34-1.4a9.84 9.84 0 0 0 4.7 1.2h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.64-1.03-5.12-2.9-6.98A9.79 9.79 0 0 0 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2a8.15 8.15 0 0 1 5.8 2.4 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.2-8.2 8.2Zm4.5-6.14c-.25-.13-1.46-.72-1.69-.8-.22-.09-.39-.13-.55.12s-.63.8-.77.96c-.14.17-.28.19-.53.07-.24-.13-1.04-.39-1.98-1.23a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
  </svg>
)

export const Arrow = ({ className = 'h-[15px] w-[15px]' }: { className?: string }) => (
  <svg {...stroke} strokeWidth={1.6} className={className}>
    <path d="M4 12h14M12.5 6l6 6-6 6" />
  </svg>
)

export const Phone = ({ className = 'h-[18px] w-[18px]' }: { className?: string }) => (
  <svg {...stroke} strokeWidth={1.5} className={className}>
    <path d="M6.2 3h3l1.5 4-2 1.4a12 12 0 0 0 5.9 5.9L16 12.3l4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.2 2 2 0 0 1 6.2 3Z" />
  </svg>
)

export const Burger = ({ open, className = 'h-6 w-6' }: { open: boolean; className?: string }) => (
  <svg {...stroke} strokeWidth={1.7} className={className}>
    {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3.5 8h17M3.5 16h17" />}
  </svg>
)

/* --- Strip icons ----------------------------------------------------------
   Thin red line drawings, used only in the two supporting strips.         */

const strip: Record<string, JSX.Element> = {
  badge: (
    <>
      <circle cx="12" cy="9.5" r="6.2" />
      <path d="m8.6 14.8-1.3 6.1 4.7-2.5 4.7 2.5-1.3-6.1" />
      <path d="m10.2 9.4 1.3 1.4 2.4-2.6" />
    </>
  ),
  boxes: (
    <>
      <path d="M12 2.6 17.2 5 12 7.4 6.8 5 12 2.6Z" />
      <path d="M5.4 12.6 10.6 15l-5.2 2.4L.2 15l5.2-2.4Z" transform="translate(1.6 1.4)" />
      <path d="M13.2 14 18.4 16.4 13.2 18.8 8 16.4 13.2 14Z" transform="translate(3.2 -1.4)" />
      <path d="M12 7.4v4.2M9.4 13.6l-2 1M14.6 13.6l2 1" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4.2 4.2" />
      <path d="M8.4 10.8h4.8" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.4s7-5.7 7-11.2a7 7 0 1 0-14 0c0 5.5 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  cart: (
    <>
      <path d="M2.6 3.4h2.6l2.4 10.8h9.6l2.2-7.8H6.2" />
      <circle cx="9.4" cy="19" r="1.5" />
      <circle cx="16.6" cy="19" r="1.5" />
    </>
  ),
  truck: (
    <>
      <path d="M2.6 6.2h10.6v9.4H2.6z" />
      <path d="M13.2 9.4h3.9l2.9 3v3.2h-6.8z" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </>
  ),
  handshake: (
    <>
      <path d="m12 8.2 2.3-2.1a2.1 2.1 0 0 1 2.8 0l4.1 3.7" />
      <path d="M21.2 12.6 16 17.4a1.8 1.8 0 0 1-2.5 0l-.9-.9" />
      <path d="M2.8 9.8 6.9 6a2.1 2.1 0 0 1 2.8 0l3.4 3.1a1.5 1.5 0 0 1 0 2.2 1.7 1.7 0 0 1-2.3 0L9.2 10" />
      <path d="m2.8 12.6 4.6 4.3a1.7 1.7 0 0 0 2.4-.1" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.6c0 4.2-4 7.6-9 7.6a10.4 10.4 0 0 1-3-.44L3.4 20.4l1.2-3.2A7.2 7.2 0 0 1 3 11.6C3 7.4 7 4 12 4s9 3.4 9 7.6Z" />
      <path d="M8.6 11.6h.01M12 11.6h.01M15.4 11.6h.01" strokeWidth={1.8} />
    </>
  ),
}

export const StripIcon = ({ name, className = 'h-8 w-8' }: { name: string; className?: string }) => (
  <svg {...stroke} className={className}>
    {strip[name] ?? strip.boxes}
  </svg>
)
