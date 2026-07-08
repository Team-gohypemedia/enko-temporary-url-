"use client";

import { useState, useRef } from 'react';
import { Cpu, Award, Layers, Smartphone } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export function WhyEvSection() {
  const advantages = [
    { 
      title: "In-house Technology Development", 
      icon: Cpu,
      desc: "Our proprietary technology ensures complete control over quality and rapid innovation."
    },
    { 
      title: "European Standard Design", 
      icon: Award,
      desc: "Engineered to meet the highest European safety, durability, and performance regulations."
    },
    { 
      title: "Scalable Product Portfolio", 
      icon: Layers,
      desc: "Flexible solutions designed to grow seamlessly with your evolving infrastructure needs."
    },
    { 
      title: "Smart Charging Software Integration", 
      icon: Smartphone,
      desc: "Seamlessly connects with advanced software for real-time monitoring and smart grid management."
    }
  ];

  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = container.children;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const distance = Math.abs(child.offsetLeft - container.scrollLeft - 16);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveScrollIndex(closestIndex);
  };

  return (
    <section id="why-ev" className="flex flex-col justify-center w-full bg-[#E8A020] py-24 lg:py-32">
      <div className="container-shell">

        <Reveal>
          <div className="mb-4 md:mb-12 flex flex-col items-center text-center justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge/70 mb-2">
              BUILDING A GREENER TOMORROW
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-forge leading-tight max-w-3xl mx-auto">
              Why Choose ENKO
            </h2>
          </div>
        </Reveal>

        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 -mx-4 px-6 scroll-pl-6 md:mx-0 md:px-0"
        >
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx} 
                className="w-[82vw] sm:w-[45vw] md:w-auto flex-shrink-0 snap-start flex flex-col space-y-4 group"
              >
                {/* Desktop View with Scroll Reveal */}
                <div className="hidden md:block w-full">
                  <Reveal delay={idx * 0.1} direction="up">
                    <div className="flex flex-col space-y-4 w-full">
                      <div className="h-40 w-full overflow-hidden rounded-md bg-[#111] flex items-center justify-center transition-transform duration-300 group-hover:shadow-xl">
                        <Icon className="w-16 h-16 text-[#E8A020] transform transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="pt-2">
                        <h3 className="text-lg font-black uppercase text-forge tracking-wide mb-3 leading-snug">{adv.title}</h3>
                        <p className="text-forge/80 text-sm leading-relaxed">{adv.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Mobile View - Static for robust snap-carousel rendering */}
                <div className="block md:hidden flex flex-col space-y-4 w-full">
                  <div className="h-40 w-full overflow-hidden rounded-md bg-[#111] flex items-center justify-center">
                    <Icon className="w-16 h-16 text-[#E8A020]" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-black uppercase text-forge tracking-wide mb-3 leading-snug">{adv.title}</h3>
                    <p className="text-forge/80 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators for Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {advantages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (containerRef.current) {
                  const child = containerRef.current.children[idx] as HTMLElement;
                  containerRef.current.scrollTo({
                    left: child.offsetLeft - 24,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeScrollIndex === idx ? 'w-6 bg-forge' : 'w-1.5 bg-forge/35'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scrollbar-none utility styles */}
        <style>{`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

      </div>
    </section>
  );
}
