import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Burger, WhatsAppMark } from './Icons'
import { navLinks, waLinkProps, whatsappHref } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-[border-color] duration-300 ${
        scrolled || open ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-10 focus:bg-red focus:px-4 focus:py-2 focus:text-[15px] focus:text-paper"
      >
        Skip to products
      </a>

      <div className="shell flex h-[68px] items-center justify-between md:h-[76px]">
        <a href="#top" aria-label="Tiwari Trading Company, back to top">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            {...waLinkProps}
            className="inline-flex items-center gap-2 bg-red px-5 py-3 text-[15px] font-semibold leading-none text-paper transition-colors hover:bg-red-deep"
          >
            <WhatsAppMark className="h-[17px] w-[17px]" />
            WhatsApp us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 grid h-11 w-11 place-items-center text-ink lg:hidden"
        >
          <Burger open={open} />
        </button>
      </div>

      <div id="menu" hidden={!open} className="border-t border-rule bg-paper lg:hidden">
        <nav aria-label="Mobile" className="shell flex flex-col pb-7 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule py-5 text-[26px] font-semibold tracking-tighter text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            {...waLinkProps}
            onClick={() => setOpen(false)}
            className="mt-7 inline-flex items-center justify-center gap-2.5 bg-red px-6 py-4 text-[17px] font-semibold leading-none text-paper"
          >
            <WhatsAppMark />
            WhatsApp us
          </a>
        </nav>
      </div>
    </header>
  )
}
