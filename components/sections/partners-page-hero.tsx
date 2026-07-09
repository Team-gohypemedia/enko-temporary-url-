import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function PartnersPageHero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden border-b border-warm/10 bg-forge lg:h-[100dvh]">
      <Image
        src="/partners/hero_bg.png"
        alt="ENKO partnership infrastructure"
        fill
        className="object-cover object-center opacity-65"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forge/95 via-forge/62 to-forge/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-forge/75 via-transparent to-forge/15" />

      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 w-full max-w-4xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[14px] font-black uppercase tracking-[0.24em] text-charge">
            Partner Network
          </p>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-[72px] font-black uppercase leading-[1.05] tracking-tight text-warm drop-shadow-sm">
            Partner with ENKO
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white drop-shadow-md">
            Build, operate, and scale commercial EV charging networks with hardware, field support, and deployment programs designed for Indian infrastructure.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row w-full">
            <a
              href="#procurement"
              className="industrial-button border-charge bg-charge text-forge hover:bg-warm hover:text-forge w-full sm:w-[190px] flex items-center justify-center text-center"
            >
              Talk to an Expert
            </a>
            <a
              href="#partner-options"
              className="industrial-button border-warm/35 bg-forge/40 text-warm backdrop-blur-sm hover:border-charge hover:text-charge w-full sm:w-[190px] flex items-center justify-center text-center"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
