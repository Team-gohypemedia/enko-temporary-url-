import { partnerProof, partnerSegments } from '@/lib/site-data';

export function PartnersSection() {
  return (
    <section id="partners" className="border-b border-warm/10 bg-forge">
      <div className="container-shell py-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <p className="label-kicker text-charge">4.1 Value Strategy By Segment</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase text-warm leading-[1.05] md:text-5xl md:leading-[0.95]">
            B2B Partners & Use Cases.
          </h2>
        </div>
        
        <div className="mt-6 grid gap-6 grid-cols-1">
          {partnerSegments.map((segment, index) => (
            <article
              key={segment.title}
              className="border border-warm/15 p-8 lg:p-10 bg-steel transition-colors hover:border-charge group"
            >
              <p className="label-kicker text-warm/40 group-hover:text-charge transition-colors duration-300">
                Segment {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-4 text-2xl lg:text-3xl font-black uppercase text-charge">
                {index + 1}. {segment.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-warm/80">
                {segment.copy}
              </p>
              <a
                href="/contact"
                className="industrial-button mt-8 w-full sm:w-[190px] border-charge bg-charge text-forge hover:bg-warm hover:text-forge flex items-center justify-center text-center"
              >
                {segment.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-warm/10 pt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="label-kicker text-charge">Partner Proof</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase text-warm leading-[1.05]">
                Field-tested rollouts with real operator outcomes.
              </h2>
            </div>
            <a
              href="/contact"
              className="industrial-button w-full sm:w-[190px] border-warm bg-warm text-forge hover:bg-charge hover:text-forge flex items-center justify-center text-center"
            >
              Share Your Deployment Specs
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {partnerProof.map((proof) => (
              <article key={proof.label} className="border border-warm/15 bg-steel p-6 lg:p-8">
                <p className="label-kicker text-charge">{proof.label}</p>
                <p className="mt-5 text-xl font-bold leading-snug text-warm">
                  "{proof.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
