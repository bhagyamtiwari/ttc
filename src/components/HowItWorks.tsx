import Rise from './Rise'

const steps = [
  { n: '01', title: 'Tell us what you need', copy: 'Send us your requirements over WhatsApp.' },
  { n: '02', title: 'We source and supply', copy: 'We confirm availability, pricing and quantities.' },
  { n: '03', title: 'Delivered to your business', copy: 'We coordinate supply to your office or business location.' },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="how" className="border-b border-rule py-16 md:py-20">
      <div className="shell">
        <Rise>
          <h2 id="how" className="display text-[clamp(2.1rem,7.5vw,2.9rem)] uppercase md:text-[clamp(2.4rem,4.2vw,3.2rem)]">
            How it works
          </h2>
        </Rise>

        <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-14">
          {steps.map((step, i) => (
            <Rise as="li" key={step.n} delay={i * 90} className="border-t-2 border-red pt-6">
              <span className="block text-[15px] font-bold tracking-[0.14em] text-red">{step.n}</span>
              <h3 className="mt-4 text-[24px] font-semibold leading-[1.15] tracking-tighter md:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.55] text-inkSoft md:text-[18px]">
                {step.copy}
              </p>
            </Rise>
          ))}
        </ol>
      </div>
    </section>
  )
}
