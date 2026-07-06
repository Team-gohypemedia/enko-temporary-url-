"use client";
import { useState } from 'react';
import { rangeCards } from '@/lib/site-data';

function RangeCard({ card, index }: { card: typeof rangeCards[0], index: number }) {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <article className="group border border-warm/5 p-6 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col justify-between self-start transition-all hover:shadow-[0_8px_30px_rgba(232,160,32,0.1)] hover:border-warm/20" style={{ background: 'radial-gradient(ellipse at 50% 30%, #2e2e2e 0%, #191919 55%, #0a0a0a 100%)' }}>
      <div>
        <div className="h-64 rounded-sm relative overflow-hidden flex items-center justify-center p-2">
          <img src={card.image} alt={card.name} className="max-h-full max-w-full object-contain px-4 pb-10 pt-4 opacity-95 transition-transform duration-700 group-hover:scale-105" />
        </div>
        <h3 className="mt-6 text-2xl font-black uppercase text-warm">{card.name}</h3>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSpecs ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
          <p className="text-sm leading-6 text-warm/65">{card.copy}</p>

          <div className="space-y-5 pt-6 mt-6 border-t border-warm/10">
            {card.specs.map(([key, value]) => (
              <div key={key}>
                <p className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/50">{key}</span>
                </p>
                <p className="text-sm font-medium text-warm/90 pl-3.5 leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSpecs(!showSpecs)}
        className="mt-8 w-full py-3.5 bg-forge border border-warm/10 shadow-sm text-xs font-black tracking-[0.16em] uppercase transition-all hover:bg-charge hover:text-forge hover:border-charge hover:shadow-md text-warm"
      >
        {showSpecs ? '[ HIDE TECH SPECS ]' : '[ VIEW TECH SPECS ]'}
      </button>
    </article>
  );
}

export function RangeSection() {
  return (
    <section id="range" className="grid-paper border-b border-warm/10 bg-steel pt-24 pb-16">

      {/* Massive Header / Fast Charging Style */}
      <div className="w-full text-center relative mb-32 px-4">
        <h2 className="text-[12vw] font-black uppercase text-warm leading-[0.8] tracking-tighter relative z-10 opacity-5">
          ARCHITECTURE
        </h2>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-warm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
          FAST CHARGING
        </h2>

        {/* Pill Shaped Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[18vw] min-w-[320px] min-h-[160px] rounded-full overflow-hidden shadow-2xl border-[10px] border-steel z-30">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover filter contrast-125"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-charge/20 to-transparent mix-blend-overlay" />
        </div>
      </div>

      <div className="container-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between text-center lg:text-left">
          <div className="mx-auto lg:mx-0">
            <p className="label-kicker text-charge">[ ARCHITECTURE OVERVIEW ]</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl text-warm">The ENKO Range</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-warm/62 mx-auto lg:mx-0">
            Engineered for diverse industrial environments. Unified by robust build quality and intelligent software integration.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 items-start relative z-40">
          {rangeCards.map((card, index) => (
            <RangeCard key={card.name} card={card} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="/products" className="industrial-button bg-charge text-forge w-full sm:w-auto text-center hover:bg-warm">
            Show All Products
          </a>
        </div>
      </div>
    </section>
  );
}
