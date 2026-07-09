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
        <div className="flex flex-col items-center text-center w-full space-y-4">
          {/* Center: Text */}
          <div className="flex flex-col items-center text-center w-full">
            <Reveal direction="right" delay={0.0}>
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-charge mb-4">India Built EV Infrastructure</p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase text-warm leading-[1.05] tracking-tight drop-shadow-sm flex flex-col items-center">
                <span>POWERING</span>
                <span className="flex items-center justify-center h-[1.2em] overflow-hidden text-5xl md:text-6xl lg:text-[72px] -mt-1 md:-mt-2 lg:-mt-4 mb-[-5px] md:mb-[-10px] lg:mb-[-15px]">
                  <span className={`transition-all duration-500 ease-in-out inline-block whitespace-nowrap ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {rotatingWords[wordIndex]}
                  </span>
                </span>
              </h1>
            </Reveal>
            <Reveal direction="right" delay={0.4}>
              <p className="text-white mt-6 max-w-3xl text-base leading-relaxed drop-shadow-md">
                For CPOs, OEMs & Fleet Operators - CCS2 Hardware, OCPP 2.0.1, delivered in Pan India.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.6}>
            <div className="flex flex-row justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[160px] sm:w-[190px] inline-flex items-center justify-center bg-[#E8A020] text-forge border border-[#E8A020] px-6 py-2.5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c98a1a] hover:border-[#c98a1a] transition-colors shadow-lg shadow-[#E8A020]/30 group whitespace-nowrap"
              >
                Whatsapp Us <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="/contact"
                className="w-[160px] sm:w-[190px] inline-flex items-center justify-center bg-steel text-warm border border-warm/20 px-6 py-2.5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-warm hover:text-forge transition-colors shadow-lg whitespace-nowrap"
              >
                Request a Quote
              </a>
            </div>
          </Reveal>
        </div>
      </div>



    </section>
  );
}
