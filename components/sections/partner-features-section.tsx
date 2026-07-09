import { Building2, Factory, Truck } from 'lucide-react';

const features = [
  {
    title: 'CPOs',
    stat: '31-36%',
    proof: 'below PM E-DRIVE benchmark pricing',
    pain: 'Capex pressure slows new public and highway deployments.',
    solution: 'Lower capex on certified CCS2 deployments without compromising throughput.',
    outcome: 'Protect project margin while scaling reliable DC fast charging sites.',
    cta: 'Get CPO Pricing',
    icon: Building2,
  },
  {
    title: 'OEMs',
    stat: 'CCS2',
    proof: 'domestic assembly ready for deployment',
    pain: 'Vehicle launches need charging hardware that is market-ready.',
    solution: 'Domestic CCS2 assembly supports fast integration and channel rollout.',
    outcome: 'Move faster from pilot programs to deployable charging bundles.',
    cta: 'Talk to Integration Team',
    icon: Factory,
  },
  {
    title: 'Fleet & Depot',
    stat: '40%',
    proof: 'reduction in vehicle turnaround time',
    pain: 'Depot charging windows can hold vehicles back from route availability.',
    solution: 'Cut depot charging downtime with multi-gun DC fast charging layouts.',
    outcome: 'Improve asset utilization across logistics, bus, and delivery fleets.',
    cta: 'Calculate Fleet ROI',
    icon: Truck,
  }
];

export function PartnerFeaturesSection() {
  return (
    <section id="partner-options" className="scroll-mt-24 border-b border-warm/10 bg-steel lg:flex lg:min-h-[100dvh] lg:items-center lg:py-24">
      <div className="container-shell py-16 lg:py-10">
        <div className="max-w-3xl">
          <p className="label-kicker text-charge">Partner programs</p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-warm sm:text-4xl lg:text-5xl">
            Partner programs by business type.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3 xl:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex min-h-[430px] flex-col border border-warm/10 bg-forge p-5 transition-colors hover:border-charge/55 xl:min-h-[460px] xl:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-charge/30 bg-charge/10 text-charge">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-charge">{feature.stat}</p>
                    <p className="max-w-36 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-warm/45">{feature.proof}</p>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-black uppercase text-warm">{feature.title}</h3>

                <div className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/40">Pain point</p>
                    <p className="mt-1 text-warm/70">{feature.pain}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/40">Solution</p>
                    <p className="mt-1 text-warm/80">{feature.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/40">Outcome</p>
                    <p className="mt-1 text-warm/70">{feature.outcome}</p>
                  </div>
                </div>

                <a
                  href="#procurement"
                  className="industrial-button mt-auto w-full border-charge bg-charge text-forge hover:bg-warm hover:text-forge flex items-center justify-center text-center"
                >
                  {feature.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
