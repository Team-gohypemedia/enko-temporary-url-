"use client";
import { useState } from 'react';
import { productCards } from '@/lib/site-data';

function ProductCard({ card, index }: { card: typeof productCards[0], index: number }) {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <article className="border border-warm/5 p-6 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col justify-between self-start transition-all hover:shadow-[0_8px_30px_rgba(232,160,32,0.1)] hover:border-warm/20" style={{ background: 'radial-gradient(ellipse at 50% 30%, #2e2e2e 0%, #191919 55%, #0a0a0a 100%)' }}>
      <div>
        <div className="h-64 rounded-sm relative overflow-hidden flex items-center justify-center">
          <img src={card.image} alt={card.name} className="max-h-full max-w-full object-contain px-4 pb-10 pt-4 opacity-95" />
        </div>
        <h3 className="mt-6 text-xl font-black text-warm">
          {index}. {card.name}
        </h3>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSpecs ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-5 pt-5 border-t border-warm/10">
            <div>
              <p className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/50">Power Output</span>
              </p>
              <p className="text-sm font-medium text-warm/90 pl-3.5 leading-tight">{card.specs[0][1]}</p>
            </div>
            <div>
              <p className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/50">Primary Application</span>
              </p>
              <p className="text-sm font-medium leading-relaxed text-warm/90 pl-3.5">{card.copy}</p>
            </div>
            {card.specs.length > 1 && (
              <div>
                <p className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/50">Financial Advantage</span>
                </p>
                <p className="text-sm font-medium text-warm/90 pl-3.5 leading-tight">{card.specs[1][1]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setShowSpecs(!showSpecs)}
        className="mt-6 w-full py-3.5 bg-forge border border-warm/10 shadow-sm text-xs font-black tracking-[0.16em] uppercase transition-all hover:bg-charge hover:text-forge hover:border-charge hover:shadow-md text-warm"
      >
        {showSpecs ? '[ HIDE TECH SPECS ]' : '[ VIEW TECH SPECS ]'}
      </button>
    </article>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="grid-paper border-b border-warm/10">
      <div className="container-shell py-16 lg:py-24">

        {/* 3.1 Portfolio Catalog Introduction */}
        <div className="max-w-3xl mb-16">
          <p className="label-kicker text-charge">[ HARDWARE SYSTEMS COMPONENT ARCHITECTURE ]</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-5xl md:leading-[0.95] text-warm">
            Full-Spectrum CCS2 Charging Assets.
          </h2>
          <p className="mt-5 text-sm lg:text-base leading-7 text-warm/75">
            From entry-level commercial AC plug-ins to high-power highway DC ultra-chargers, select the exact hardware footprint your network requires.
          </p>
        </div>

        {/* 3.2 The Complete 7-SKU Specification Matrix */}
        <div className="space-y-16 mt-12">

          {/* ENKO Flow Series */}
          <div>
            <h3 className="text-2xl font-black uppercase text-warm border-b border-warm/20 pb-4 mb-6">ENKO Flow Series (AC Commercial Charging)</h3>
            <p className="italic text-warm/70 mb-8">
              <span className="font-semibold not-italic text-warm">Common Specifications:</span> OCPP 2.0.1 compliant, single/three-phase electrical compatibility, Wall-box or Pedestal mount ready.
            </p>
            <div className="grid gap-6 md:grid-cols-3 items-start">
              {productCards.slice(0, 3).map((card, index) => (
                <ProductCard key={card.name} card={card} index={index + 1} />
              ))}
            </div>
          </div>

          {/* ENKO Storm Series */}
          <div>
            <h3 className="text-2xl font-black uppercase text-warm border-b border-warm/20 pb-4 mb-6">ENKO Storm Series (DC Fast Charging)</h3>
            <p className="italic text-warm/70 mb-8">
              <span className="font-semibold not-italic text-warm">Common Specifications:</span> Dual CCS2 guns, IP54 industrial protection, smart power sharing modules, high-visibility user UI screens.
            </p>
            <div className="grid gap-6 md:grid-cols-3 items-start">
              {productCards.slice(3, 6).map((card, index) => (
                <ProductCard key={card.name} card={card} index={index + 4} />
              ))}
            </div>
          </div>

          {/* ENKO Blaze Series */}
          <div>
            <h3 className="text-2xl font-black uppercase text-warm border-b border-warm/20 pb-4 mb-6">ENKO Blaze Series (DC Ultra-Fast Charging)</h3>
            <div className="grid gap-6 md:grid-cols-3 items-start">
              {productCards.slice(6, 7).map((card, index) => (
                <ProductCard key={card.name} card={card} index={index + 7} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
