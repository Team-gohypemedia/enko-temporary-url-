"use client";

import { Reveal } from '@/components/reveal';

export function OemSection() {
  return (
    <section 
      id="about" 
      className="relative overflow-hidden py-20 lg:py-24 border-b border-warm/10 bg-steel"
      style={{
        backgroundImage: "url('https://i.postimg.cc/tRFCJVLM/handshake-enko.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#111]/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />

      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Content */}
        <Reveal direction="up">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-charge drop-shadow-md">
              Partner portal access
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[60px] font-black uppercase leading-[1.05] text-warm tracking-tight drop-shadow-xl">
              OEM READY. ELECTRIFYING TO DRIVE
            </h2>
            <div className="flex flex-col space-y-4 max-w-2xl mt-4">
              <p className="text-sm md:text-base text-warm/90 font-medium leading-relaxed drop-shadow-md">
                Deploy our rugged hardware under your own brand. Comprehensive customization options from chassis colorways to firmware and API integration.
              </p>
              <p className="text-sm md:text-base text-warm/90 font-medium leading-relaxed drop-shadow-md">
                Fully integrated systems that connect the charging network with back-end solutions seamlessly.
              </p>
            </div>
            <a href="/partners" className="mt-8 inline-flex items-center justify-center bg-charge text-forge px-6 py-3 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-warm transition-colors shadow-[0_0_40px_rgba(232,160,32,0.4)] w-[160px] sm:w-[190px] border border-transparent whitespace-nowrap">
              Access Portal <span className="inline-block ml-1">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
