import { useState, type FormEvent } from 'react'
import Rise from './Rise'
import { Phone, WhatsAppMark } from './Icons'
import { business, hasPhone, hasWhatsapp, waLinkProps, whatsappHref } from '../data/site'

const field =
  'w-full rounded-card border border-rule bg-paper px-4 py-3.5 text-[17px] text-ink placeholder:text-inkSoft/60 focus:border-red focus:outline-none'
const label = 'block text-[16px] font-semibold text-ink'

/**
 * No backend. The form composes a WhatsApp message from the fields, unless an
 * external form endpoint has been configured in src/data/site.ts.
 */
function RequirementForm() {
  const [sent, setSent] = useState(false)
  const usesEndpoint = Boolean(business.formEndpoint)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (usesEndpoint) return // let the browser post normally

    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      `Name: ${data.get('name') || '-'}`,
      `Company: ${data.get('company') || '-'}`,
      `Phone: ${data.get('phone') || '-'}`,
      '',
      `Requirement: ${data.get('requirement') || '-'}`,
    ].join('\n')

    if (hasWhatsapp) {
      window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
    } else if (business.email) {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        'Supply enquiry',
      )}&body=${encodeURIComponent(message)}`
    }
    setSent(true)
  }

  return (
    <form
      onSubmit={onSubmit}
      action={business.formEndpoint || undefined}
      method={usesEndpoint ? 'POST' : undefined}
      className="rounded-card border border-rule bg-paperDeep p-6 md:p-8"
    >
      <h3 className="text-[19px] font-bold tracking-tighter text-ink">
        Or send your requirement here
      </h3>
      <p className="mt-2 text-[16px] leading-[1.5] text-inkSoft">
        {usesEndpoint
          ? 'Fill this in and we will get back to you.'
          : 'Fill this in and it opens as a ready-to-send WhatsApp message.'}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" className={`mt-2.5 ${field}`} />
        </div>
        <div>
          <label className={label} htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" className={`mt-2.5 ${field}`} />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" className={`mt-2.5 ${field}`} />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="requirement">What do you need?</label>
        <textarea
          id="requirement"
          name="requirement"
          rows={3}
          required
          placeholder="Monthly pantry supply for 60 people, plus housekeeping consumables."
          className={`mt-2.5 resize-y ${field}`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-card border border-red px-7 py-3.5 text-[16px] font-bold text-red transition-colors duration-200 hover:bg-red hover:text-paper sm:w-auto"
      >
        Send requirement
      </button>

      {sent && !usesEndpoint && (
        <p role="status" className="mt-4 text-[16px] text-inkSoft">
          {hasWhatsapp || business.email
            ? 'Your message is ready. Finish sending it in the window that just opened.'
            : 'Contact details are being added shortly. Please try again soon.'}
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="border-b border-rule bg-paper">
      <div className="shell grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:gap-16 lg:py-24">
        <Rise>
          <h2 className="display text-[clamp(2.2rem,8vw,3rem)] md:text-[clamp(2.6rem,4.6vw,3.6rem)]">
            Let&rsquo;s talk about what you need.
          </h2>
          <span aria-hidden="true" className="rule-red mt-5 block h-[4px] w-14 rounded-full bg-red" />
          <p className="mt-6 max-w-[36rem] text-[18px] leading-[1.6] text-inkSoft md:text-[19px]">
            Send us your requirement and we will take it from there. Whether it is a regular
            office pantry supply, a bulk order, or something specific you cannot find.
          </p>

          <a
            href={whatsappHref()}
            {...waLinkProps}
            className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-card bg-red px-8 py-5 text-[19px] font-bold leading-none text-paper transition-colors duration-200 hover:bg-red-deep sm:w-auto"
          >
            <WhatsAppMark className="h-[21px] w-[21px]" />
            WhatsApp Us
          </a>

          {/* The whole list waits for a wider screen. On a phone it sits
              directly under a WhatsApp button that already gets the reader to
              us, and the footer carries the same number and addresses. */}
          <dl className="mt-10 hidden space-y-3.5 border-t border-rule pt-8 text-[17px] sm:block md:text-[18px]">
            {hasPhone && (
              <div className="flex items-center gap-3">
                <dt className="sr-only">Phone</dt>
                <Phone className="h-[19px] w-[19px] shrink-0 text-red" />
                <dd>
                  <a href={`tel:${business.phoneDial}`} className="font-bold text-ink transition-colors hover:text-red">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            )}
            {business.email && (
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="space-y-1.5">
                  {[business.email, business.emailAlt].filter(Boolean).map((address) => (
                    <a
                      key={address}
                      href={`mailto:${address}`}
                      className="block font-bold text-ink transition-colors hover:text-red"
                    >
                      {address}
                    </a>
                  ))}
                </dd>
              </div>
            )}
            <div>
              <dt className="sr-only">Service area</dt>
              <dd className="text-inkSoft">Serving businesses across Delhi &amp; Gurugram.</dd>
            </div>
          </dl>
        </Rise>

        <Rise delay={90}>
          <RequirementForm />
        </Rise>
      </div>
    </section>
  )
}
