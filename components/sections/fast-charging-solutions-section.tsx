export function FastChargingSolutionsSection() {
  const products = [
    {
      category: 'DC Chargers',
      name: 'ENKO Storm',
      power: 'DC 30-120 kW',
      environment: 'Commercial & fleet',
      customer: 'CPOs and logistics depots',
      value: 'High-throughput CCS2 charging for depots, public hubs, and corridor rollouts.',
      image: '/products/120kw.png',
    },
    {
      category: 'DC Chargers',
      name: 'ENKO Blaze',
      power: 'DC Ultra 240 kW',
      environment: 'Buses & highways',
      customer: 'Heavy-duty and highway corridors',
      value: 'Ultra-fast capacity for buses, industrial fleets, and high-demand highway sites.',
      image: '/products/240kw.png',
    },
    {
      category: 'AC Chargers',
      name: 'ENKO Flow',
      power: 'AC 7.4-22 kW',
      environment: 'Homes & offices',
      customer: 'Workplace and residential installs',
      value: 'Compact commercial charging for long-dwell parking and daily destination use.',
      image: '/products/11kw-22kw.png',
    },
  ];

  return (
    <section id="product-range" className="border-b border-warm/10 bg-forge text-warm lg:flex lg:min-h-[100dvh] lg:items-center lg:py-24">
      <div className="container-shell py-16 lg:py-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* <p className="label-kicker text-charge">AC and DC charging hardware for commercial deployment.</p> */}
            <h4 className="mt-3 max-w-xl text-2xl font-black uppercase leading-[1.08] text-warm sm:text-3xl lg:text-4xl">
              ENKO Product Range
            </h4>
          </div>
          <p className="max-w-sm text-sm leading-6 text-warm/60">
            Compare the three core product families by power band, site environment, and ideal buyer profile.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="flex min-h-[300px] flex-col border border-warm/10 bg-steel/45 p-5">
              <div className="flex h-36 items-center justify-center bg-forge/60 xl:h-40">
                <img src={product.image} alt={product.name} className="h-32 w-auto object-contain px-4 pb-7 pt-3 xl:h-36" />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-warm/45">{product.category}</p>
                <h3 className="mt-3 text-2xl font-black uppercase text-warm">{product.name}</h3>
                <p className="mt-2 text-lg font-black text-charge">{product.power}</p>
                <p className="mt-3 text-sm leading-6 text-warm/70">{product.value}</p>
                <p className="mt-auto pt-5 text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-warm/55">Best for {product.customer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 border border-charge/25 bg-charge/10 px-5 py-4">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-charge">Portfolio note</p>
          <p className="mt-2 text-sm leading-6 text-warm/70">
            DC families cover fast public and fleet operations, while Flow covers destination charging where vehicles stay parked longer.
          </p>
        </div>

        <div className="mt-5 overflow-x-auto border border-warm/10">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-steel text-[10px] uppercase tracking-[0.16em] text-warm/55">
              <tr>
                <th className="px-5 py-3">Charger</th>
                <th className="px-5 py-3">Power</th>
                <th className="px-5 py-3">Environment</th>
                <th className="px-5 py-3">Ideal Customer</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name} className="border-t border-warm/10 bg-forge/80">
                  <td className="px-5 py-3 font-black uppercase text-warm">{product.name}</td>
                  <td className="px-5 py-3 text-charge">{product.power}</td>
                  <td className="px-5 py-3 text-warm/70">{product.environment}</td>
                  <td className="px-5 py-3 text-warm/70">{product.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
