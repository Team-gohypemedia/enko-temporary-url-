"use client";
import { useState, useEffect } from 'react';
import { rangeCards } from '@/lib/site-data';

const bgImages = [
  '/images/flow_ac_bg.png?v=3',
  '/images/storm_dc_bg.png?v=3',
  '/images/blaze_ultra_bg.png?v=3',
];

const PREVIEW_IMG_CLASSES = [
  'max-h-[100px] lg:max-h-[300px] scale-[1.35] lg:scale-[1.45]', // Flow AC (AC Charger) - Large scale
  'max-h-[100px] lg:max-h-[300px] scale-[1.2] lg:scale-[1.25]',  // Storm DC (Fast DC Cabinet) - Large scale
  'max-h-[100px] lg:max-h-[300px] scale-[1.2] lg:scale-[1.25]',  // Blaze Ultra (Heavy DC Dispenser) - Large scale
];

const ACTIVE_IMG_CLASSES = [
  'max-h-[220px] lg:max-h-[420px] scale-[1.2] origin-center',  // Flow AC (AC Charger) - Large scale
  'max-h-[220px] lg:max-h-[460px] scale-[1.1] origin-center',  // Storm DC (Fast DC Cabinet) - Large scale
  'max-h-[220px] lg:max-h-[480px] scale-[1.1] origin-center',  // Blaze Ultra (Heavy DC Dispenser) - Large scale
];

export function RangeSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  return (
    <section
      id="systems-selector"
      className="bg-forge py-16 border-b border-warm/10 relative overflow-hidden select-none"
    >
      <div className="container-shell">
        {/* Title/Header to introduce the interactive view */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between text-left">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-charge mb-2">
              [ INTERACTIVE FOOTPRINT ANALYSIS ]
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-warm leading-tight">
              SYSTEMS SELECTOR
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-warm/60 max-w-sm">
            Click on any charging node to inspect its internal layout, core architecture, and full technical specifications.
          </p>
        </div>

        {/* Bounded Interactive Slider Container */}
        <div
          className="relative w-full overflow-hidden border border-warm/10 rounded-2xl bg-steel/20 flex flex-col lg:flex-row h-[780px] lg:h-[550px]"
        >
          {/* Ambient background glow inside the slider box */}
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-all duration-1000 ease-out"
            style={{
              background: activeIndex !== null
                ? isMobile
                  ? `radial-gradient(circle 400px at 50% ${activeIndex === 0 ? '20%' : activeIndex === 1 ? '50%' : '80%'}, rgba(232, 160, 32, 0.08) 0%, transparent 80%)`
                  : `radial-gradient(circle 600px at ${activeIndex === 0 ? '20%' : activeIndex === 1 ? '50%' : '80%'} 50%, rgba(232, 160, 32, 0.08) 0%, transparent 80%)`
                : 'radial-gradient(circle 500px at 50% 50%, rgba(232, 160, 32, 0.03) 0%, transparent 80%)',
            }}
          />

          {/* Panels */}
          {rangeCards.map((card, i) => {
            const isActive = activeIndex === i;
            const isAnyActive = activeIndex !== null;

            return (
              <div
                key={card.name}
                onClick={() => setActiveIndex(i)}
                className="relative flex w-full h-auto lg:h-full overflow-hidden cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.25,1,0.3,1)] will-change-[flex] border-b lg:border-b-0 lg:border-r border-warm/10 last:border-b-0 lg:last:border-r-0"
                style={{
                  flex: isActive
                    ? '10 0 0%'
                    : isAnyActive
                    ? '1 0 0%'
                    : '4 0 0%',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img
                    src={bgImages[i]}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)]"
                    style={{
                      filter: isActive
                        ? 'brightness(0.22) saturate(0.5) blur(1px)'
                        : isAnyActive
                        ? 'brightness(0.08) saturate(0.1) blur(2px)'
                        : 'brightness(0.65) saturate(0.85) contrast(1.05)',
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  {/* Top amber accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, #E8A020, transparent)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: isActive ? 0.8 : 0,
                    }}
                  />
                </div>

                {/* DEFAULT CLOSED STATE */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-between p-5 lg:p-8 items-center text-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]"
                  style={{
                    opacity: isAnyActive ? 0 : 1,
                    transform: isAnyActive ? 'translateY(-20px)' : 'translateY(0)',
                    pointerEvents: isAnyActive ? 'none' : 'auto',
                  }}
                >
                  <div>
                    <span className="text-[9px] font-black tracking-[0.2em] text-charge uppercase font-mono block mb-2">
                      NODE 0{i + 1}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black uppercase text-warm tracking-tight">
                      {card.name}
                    </h3>
                  </div>

                  {/* Fully visible charger image in default preview state */}
                  <div className="my-auto flex items-end justify-center h-[120px] lg:h-[290px] w-full relative pb-4">
                    <img
                      src={card.image}
                      alt={card.name}
                      className={`w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-105 z-10 ${PREVIEW_IMG_CLASSES[i]}`}
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[11px] text-warm/65 max-w-[240px] mx-auto mb-4 leading-relaxed line-clamp-2">
                      {card.copy}
                    </p>
                    <button
                      className="py-2.5 px-5 bg-forge/60 border border-warm/15 text-[9px] font-black tracking-[0.18em] text-warm uppercase transition-all duration-300 hover:bg-charge hover:text-forge hover:border-charge"
                    >
                      [ OPEN NODE ]
                    </button>
                  </div>
                </div>

                {/* COLLAPSED VIEW (when another panel is expanded) */}
                <div
                  className="absolute inset-0 z-20 flex flex-row lg:flex-col items-center justify-between px-6 py-4 lg:py-12 pointer-events-none transition-all duration-500"
                  style={{
                    opacity: (isAnyActive && !isActive) ? 1 : 0,
                    transform: (isAnyActive && !isActive) ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className="flex items-center gap-4 lg:flex-col">
                    <span className="text-[9px] font-black tracking-[0.2em] text-charge uppercase font-mono">
                      0{i + 1}
                    </span>
                    <span
                      className="font-black uppercase tracking-[0.25em] text-warm/60 text-[10px] whitespace-nowrap lg:hidden"
                    >
                      {card.name}
                    </span>
                  </div>

                  <div className="hidden lg:flex flex-col items-center gap-4 my-auto">
                    <span
                      className="font-black uppercase tracking-[0.25em] text-warm/60 text-[10px] whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {card.name}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-charge/40" />
                  </div>

                  <div className="w-6 h-6 rounded-full border border-warm/10 flex items-center justify-center bg-forge/30 shrink-0">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="#EEEBE4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* EXPANDED VIEW */}
                <div
                  className="relative z-20 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(0.97)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {/* Close button inside the active panel */}
                  <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-30 w-8 h-8 rounded-full border border-warm/10 flex items-center justify-center bg-forge/60 hover:bg-charge hover:text-forge hover:border-charge transition-all duration-300 group"
                    title="Close"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform duration-300 group-hover:rotate-90"
                    >
                      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full h-full px-6 lg:px-12 py-6 lg:py-8 overflow-y-auto lg:overflow-visible">
                    
                    {/* Left Column: Specs Branding / Copy */}
                    <div
                      className="lg:col-span-3 flex flex-col justify-center space-y-4 text-left transition-all duration-700 delay-100"
                      style={{
                        transform: isActive ? 'translateX(0)' : 'translateX(-30px)',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <div>
                        <p className="text-[9px] font-black tracking-[0.2em] text-charge uppercase font-mono mb-1">
                          {card.tag}
                        </p>
                        <h3 className="text-3xl lg:text-4xl font-black uppercase text-warm tracking-tight leading-none">
                          {card.name}
                        </h3>
                      </div>
                      
                      <p className="text-xs leading-relaxed text-warm/75 max-w-sm">
                        {card.copy}
                      </p>

                      <div className="pt-2">
                        <a
                          href="/products"
                          className="inline-flex items-center gap-3 group/cta"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-warm transition-colors duration-200 group-hover/cta:text-charge">
                            VIEW FULL RANGE
                          </span>
                          <div className="w-6 h-px bg-charge transition-all duration-300 group-hover/cta:w-12" />
                        </a>
                      </div>
                    </div>

                    {/* Center Column: Fully Viewable Large Product Image */}
                    <div
                      className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[260px] lg:min-h-[420px] transition-all duration-700 delay-200"
                      style={{
                        transform: isActive ? 'translateY(0)' : 'translateY(25px)',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      {/* Extremely crisp, large, and fully viewable charger image */}
                      <img
                        src={card.image}
                        alt={card.name}
                        className={`w-auto object-contain z-10 ${ACTIVE_IMG_CLASSES[i]}`}
                        style={{
                          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
                          animation: isActive ? 'float-animation 6s ease-in-out infinite alternate' : 'none',
                        }}
                      />
                    </div>

                    {/* Right Column: Complete Technical Specifications */}
                    <div
                      className="lg:col-span-3 flex flex-col justify-center space-y-4 text-left transition-all duration-700 delay-100"
                      style={{
                        transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <div className="border-l border-charge/40 pl-3 py-0.5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-warm/50 font-mono">
                          TECHNICAL SPECIFICATIONS
                        </h4>
                      </div>

                      <div className="space-y-4">
                        {card.specs.map(([key, value]) => (
                          <div key={key} className="border-b border-warm/5 pb-2.5">
                            <span className="text-[8px] font-black uppercase tracking-[0.16em] text-charge/80 font-mono block mb-0.5">
                              {key}
                            </span>
                            <span className="text-xs font-bold text-warm/95 block leading-tight">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float-animation {
          0% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
}
