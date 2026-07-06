"use client";
import { useState } from 'react';
import { rangeCards } from '@/lib/site-data';
import { Reveal } from '@/components/reveal';

function DarkRangeCard({
  card,
  isOpen,
  onToggle
}: {
  card: typeof rangeCards[0],
  isOpen: boolean,
  onToggle: () => void
}) {
  return (
    <article className="group flex flex-col items-start w-full">
      <div
        className="w-full aspect-square overflow-hidden border border-warm/10 hover:border-charge/40 mb-6 relative rounded-2xl cursor-pointer flex items-center justify-center p-8 transition-all duration-300"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, #2e2e2e 0%, #191919 55%, #0a0a0a 100%)' }}
        onClick={onToggle}
      >
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
        />
      </div>

      <h3 className="text-xl font-black uppercase leading-tight text-warm group-hover:text-charge transition-colors mb-4">
        {card.name}
      </h3>

      <p className="text-sm leading-relaxed text-warm/70 font-medium mb-6">
        {card.copy}
      </p>

      <div className="w-full mt-auto border-t border-warm/10 pt-6">
        {/* Expandable Tech Specs */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden w-full ${isOpen ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
          <div className="space-y-4">
            {card.specs.map(([key, value]) => (
              <div key={key}>
                <p className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/50">{key}</span>
                </p>
                <p className="text-sm font-bold text-warm/90 pl-3.5 leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onToggle}
          className="text-xs font-bold text-charge uppercase tracking-widest hover:underline text-left flex items-center gap-2"
        >
          {isOpen ? 'HIDE FULL SPECS' : 'VIEW FULL SPECS'}
        </button>
      </div>
    </article>
  );
}

export function BlogSection() {
  const [openCardIdx, setOpenCardIdx] = useState<number | null>(null);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center bg-forge py-24 border-b border-warm/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-row items-center justify-between text-left border-b-2 border-warm/10 pb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-2">[ ARCHITECTURE OVERVIEW ]</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-warm leading-tight">
                THE ENKO RANGE
              </h2>
            </div>
            <div className="shrink-0">
              <a href="/products" className="inline-block bg-charge text-forge px-6 py-3 font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-warm transition-colors shadow-lg shadow-charge/20 group whitespace-nowrap">
                Show All Products <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Dark Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {rangeCards.map((card, idx) => (
            <Reveal key={card.name} delay={idx * 0.12} direction="up">
              <DarkRangeCard
                card={card}
                isOpen={openCardIdx === idx}
                onToggle={() => setOpenCardIdx(openCardIdx === idx ? null : idx)}
              />
            </Reveal>
          ))}
        </div>


        {/* <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center relative z-20">
            <a href="/products" className="inline-block bg-charge text-forge px-8 py-3 font-black uppercase tracking-[0.2em] text-xs rounded-sm hover:bg-warm transition-all shadow-[0_0_30px_rgba(232,160,32,0.3)] hover:shadow-[0_0_50px_rgba(232,160,32,0.5)]">
              SHOW ALL PRODUCTS &rarr;
            </a>
          </div>
        </Reveal> */}

      </div>

      {/* Background scrolling text */}
      <div className="absolute -bottom-16 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-black uppercase text-warm whitespace-nowrap text-right">TOMORROW READY</h2>
      </div>
    </section>
  );
}
