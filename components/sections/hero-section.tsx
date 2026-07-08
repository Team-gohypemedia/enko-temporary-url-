"use client";

import { useState, useEffect } from 'react';
import { publicStats, whatsappUrl } from '@/lib/site-data';
import { Reveal } from '@/components/reveal';

const rotatingWords = ["INDIA", "EVERY MILE"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 500); // Wait for fade out before changing word
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[100dvh] flex flex-col items-center justify-center bg-forge border-b border-warm/10 overflow-hidden relative">

      {/* Full Screen Hero Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          src="/Enko .mp4"
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-forge/40 pointer-events-none" />

      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 w-full max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center w-full space-y-6">
          {/* Center: Text */}
          <div className="flex flex-col items-center text-center w-full">
            <Reveal direction="right" delay={0}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-4">India Built EV Infrastructure</p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase text-warm leading-[1.05] tracking-tight drop-shadow-sm flex flex-col items-center">
                <span>POWERING</span>
                <span className="flex items-center justify-center h-[1.2em] overflow-hidden text-[38px] xs:text-[44px] sm:text-6xl md:text-7xl lg:text-[110px] -mt-1 md:-mt-2 lg:-mt-6 mb-[-5px] md:mb-[-10px] lg:mb-[-20px]">
                  <span className={`transition-all duration-500 ease-in-out inline-block whitespace-nowrap ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {rotatingWords[wordIndex]}
                  </span>
                </span>
              </h1>
            </Reveal>
            <Reveal direction="right" delay={0.4}>
              <p className="text-white mt-2 max-w-lg text-base leading-relaxed drop-shadow-md">
                For CPOs, OEMs & Fleet Operators - CCS2 Hardware, OCPP 2.0.1, delivered in Pan India.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.6}>
            <div className="flex flex-row justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial text-center bg-[#E8A020] text-forge px-4 sm:px-10 py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs rounded-sm hover:bg-[#c98a1a] transition-colors shadow-lg shadow-[#E8A020]/30 group whitespace-nowrap">
                Whatsapp Us <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a href="/contact" className="flex-1 sm:flex-initial text-center bg-steel text-warm border-2 border-warm/20 px-4 sm:px-10 py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs rounded-sm hover:bg-warm hover:text-forge transition-colors shadow-lg group whitespace-nowrap">
                Request a Quote
              </a>
            </div>
          </Reveal>
        </div>
      </div>



    </section>
  );
}
