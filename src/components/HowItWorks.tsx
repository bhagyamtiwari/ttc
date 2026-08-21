import Rise from './Rise'

const steps = [
  { n: '1', title: 'Tell us what you need', copy: 'Send us your requirements over WhatsApp.' },
  { n: '2', title: 'We source and supply', copy: 'We confirm availability, pricing and quantities.' },
  { n: '3', title: 'Delivered to your business', copy: 'We coordinate supply to your office or business location.' },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="how" className="border-b border-rule py-16 md:py-20 lg:py-24">
      <div className="shell">
        <Rise>
          <h2 id="how" className="display text-[clamp(2.1rem,7.5vw,2.9rem)] md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            How it works
          </h2>
          <span aria-hidden="true" className="rule-red mt-5 block h-[4px] w-14 rounded-full bg-red" />
        </Rise>

        <ol className="mt-10 grid gap-9 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <Rise as="li" key={step.n} delay={i * 90} className="flex gap-5 md:block">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red text-[17px] font-extrabold leading-none text-paper md:h-14 md:w-14 md:text-[19px]"
              >
                {step.n}
              </span>
              <div className="md:mt-6">
                <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-tighter md:text-[25px]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[30rem] text-[17px] leading-[1.55] text-inkSoft md:text-[18px]">
                  {step.copy}
                </p>
              </div>
            </Rise>
          ))}
        </ol>
      </div>
    </section>
  )
}
