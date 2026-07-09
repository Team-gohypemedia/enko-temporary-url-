"use client";
import { useState, useEffect, useRef } from 'react';
import { rangeCards } from '@/lib/site-data';

const PREVIEW_IMG_CLASSES = [
  'w-full h-full object-contain',
  'w-full h-full object-contain',
  'w-full h-full object-contain',
];

const ACTIVE_IMG_CLASSES = [
  'w-full max-h-[300px] lg:max-h-[420px] object-contain',
  'w-full max-h-[300px] lg:max-h-[420px] object-contain',
  'w-full max-h-[300px] lg:max-h-[420px] object-contain',
];

export function RangeSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPanelIndex, setHoveredPanelIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (isMobile || activeIndex !== null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredPanelIndex(index);
  };

  const handlePanelMouseLeave = () => {
    if (isMobile) return;
    setHoveredPanelIndex(null);
  };

  return (
    <section
      id="systems-selector"
      className="bg-forge py-16 border-b border-warm/10 relative overflow-hidden select-none"
    >
      <div className="container-shell">
        {/* Title/Header — centered */}
        <div className="mb-10 flex flex-col items-center text-center border-b border-warm/10 pb-6">
          <p className="text-[12px] font-black tracking-[0.2em] text-charge mb-2 uppercase">
            [ ARCHITECTURE OVERVIEW ]
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-warm leading-tight">
            THE ENKO RANGE
          </h2>
        </div>

        {/* Bounded Interactive Slider Container */}
        <div
          className="relative w-full overflow-hidden border border-warm/10 rounded-2xl bg-steel/20 flex flex-col lg:flex-row h-[940px] lg:h-[550px]"
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
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={handlePanelMouseLeave}
                className="relative flex w-full h-auto lg:h-full overflow-hidden cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.25,1,0.3,1)] will-change-[flex] border-b lg:border-b-0 lg:border-r border-warm/10 last:border-b-0 lg:last:border-r-0"
                style={{
                  flex: isActive
                    ? '10 0 0%'
                    : isAnyActive
                    ? '1 0 0%'
                    : '4 0 0%',
                  cursor: (hoveredPanelIndex === i && activeIndex === null) ? 'none' : 'pointer',
                }}
              >
                {/* Top amber accent line */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
                  className="absolute inset-0 z-20 flex flex-col justify-between py-5 px-4 lg:p-8 items-center text-center transition-all duration-500 ease-out"
                  style={{
                    opacity: isAnyActive ? 0 : 1,
                    transform: isAnyActive ? 'translateY(-20px)' : 'translateY(0)',
                    pointerEvents: isAnyActive ? 'none' : 'auto',
                    transitionDelay: isAnyActive ? '0ms' : '200ms',
                  }}
                >
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black uppercase text-warm tracking-tight">
                      {card.name}
                    </h3>
                  </div>

                  {/* Fully visible charger image in default preview state */}
                  <div
                    className="w-full h-[160px] lg:h-[290px] relative overflow-hidden border-y border-warm/10 my-4 flex items-center justify-center"
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className={`transition-transform duration-500 hover:scale-105 z-10 ${PREVIEW_IMG_CLASSES[i]}`}
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-sm text-warm/80 max-w-[240px] mx-auto mb-3 lg:mb-4 leading-relaxed line-clamp-2">
                      {card.copy}
                    </p>
                    <button
                      className="py-2.5 px-5 bg-forge/60 border border-warm/15 text-[9px] font-black tracking-[0.18em] text-warm uppercase transition-all duration-300 hover:bg-charge hover:text-forge hover:border-charge"
                    >
                      [ VIEW SPECS ]
                    </button>
                  </div>
                </div>

                {/* COLLAPSED VIEW (when another panel is expanded) */}
                <div
                  className="absolute inset-0 z-20 flex flex-row lg:flex-col items-center justify-between px-6 py-4 lg:py-12 pointer-events-none transition-all duration-500 ease-out"
                  style={{
                    opacity: (isAnyActive && !isActive) ? 1 : 0,
                    transform: (isAnyActive && !isActive) ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: (isAnyActive && !isActive) ? '150ms' : '0ms',
                  }}
                >
                  <div className="flex items-center gap-4 lg:flex-col">
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
                  className="relative z-20 w-full h-full flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.25,1,0.3,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(0.97)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    transitionDelay: isActive ? '150ms' : '0ms',
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
                      className="lg:col-span-3 flex flex-col justify-center space-y-4 text-left transition-all duration-400 ease-out"
                      style={{
                        transform: isActive ? 'translateX(0)' : 'translateX(-30px)',
                        opacity: isActive ? 1 : 0,
                        transitionDelay: isActive ? '250ms' : '0ms',
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
                      
                      <p className="text-sm leading-relaxed text-warm/80 max-w-sm">
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
                      className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[260px] lg:min-h-[420px] transition-all duration-400 ease-out"
                      style={{
                        transform: isActive ? 'translateY(0)' : 'translateY(25px)',
                        opacity: isActive ? 1 : 0,
                        transitionDelay: isActive ? '300ms' : '0ms',
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
                      className="lg:col-span-3 flex flex-col justify-center space-y-4 text-left transition-all duration-400 ease-out"
                      style={{
                        transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                        opacity: isActive ? 1 : 0,
                        transitionDelay: isActive ? '250ms' : '0ms',
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

                {/* Custom hover cursor badge */}
                {hoveredPanelIndex === i && activeIndex === null && (
                  <div
                    className="pointer-events-none absolute z-50 px-5 py-2.5 bg-charge text-forge font-mono font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap shadow-lg shadow-charge/20"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                      transform: 'translate(-50%, -50%)',
                      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                    }}
                  >
                    VIEW
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom-center CTA */}
        <div className="mt-6 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center justify-center gap-2 border border-warm/40 bg-transparent text-warm text-[11px] font-black tracking-[0.2em] uppercase px-8 py-3 hover:border-charge hover:bg-charge hover:text-forge transition-colors whitespace-nowrap"
          >
            SHOW ALL PRODUCTS →
          </a>
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
