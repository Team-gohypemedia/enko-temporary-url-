import { MapPinned, RadioTower, TrendingUp } from 'lucide-react';

export function WhyPartnerSection() {
  const metrics = [
    { label: 'Deployment count', value: '67+' },
    { label: 'City coverage', value: '28 states' },
    { label: 'Union territory coverage', value: '8 states' },
    // { label: 'Target uptime', value: '99%+' },
  ];

  const cases = [
    {
      type: 'Logistics Operator',
      size: '12-unit depot installation',
      location: 'Chennai',
      outcome: '40% reduction in vehicle turnaround time',
      icon: TrendingUp,
    },
    {
      type: 'South India CPO',
      size: 'DC fast chargers across highway networks',
      location: 'Kerala corridors',
      outcome: 'Improved uptime planning while protecting project margins',
      icon: RadioTower,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-warm/10 bg-[#0a0a0a] py-16 lg:flex lg:min-h-[100dvh] lg:items-center lg:py-24">
      <div className="container-shell relative z-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="label-kicker text-charge">Results from the Field</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-warm sm:text-4xl lg:text-5xl">
              Deployments in action.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-warm/60">
            <MapPinned className="h-4 w-4 text-charge" />
            Kerala, Andhra Pradesh
          </div>
        </div>

        <div className="mt-8 grid border border-warm/10 bg-steel/40 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-b border-warm/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-3xl font-black text-charge lg:text-4xl">{metric.value}</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {['Logistics', 'Highway CPO', 'Fleet Depots', 'Commercial Real Estate', 'OEM Programs'].map((tag) => (
            <span key={tag} className="border border-warm/10 bg-forge px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-warm/55">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.type} className="border border-warm/10 bg-steel/35 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="label-kicker text-charge">{item.type}</p>
                  <Icon className="h-5 w-5 text-charge" />
                </div>
                <dl className="mt-6 grid gap-4 text-sm">
                  <div className="spec-line">
                    <dt className="text-warm/45">Deployment Size</dt>
                    <dd className="max-w-xs text-right font-bold text-warm">{item.size}</dd>
                  </div>
                  <div className="spec-line">
                    <dt className="text-warm/45">Location</dt>
                    <dd className="max-w-xs text-right font-bold text-warm">{item.location}</dd>
                  </div>
                  <div className="spec-line">
                    <dt className="text-warm/45">Outcome</dt>
                    <dd className="max-w-xs text-right font-bold text-charge">{item.outcome}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-start">
          <a
            href="#procurement"
            className="industrial-button border-warm bg-warm text-forge hover:border-charge hover:bg-charge"
          >
            Share Your Deployment Specs
          </a>
        </div>
      </div>
    </section>
  );
}
