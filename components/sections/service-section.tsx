"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Reveal } from '@/components/reveal';

function AnimatedCircleStat({ target, label }: { target: number, label: string }) {
  const [value, setValue] = useState(0);
  const [offset, setOffset] = useState(339); // start at full circumference (0%)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const strokeDashoffsetTarget = 339 * (1 - (target / 100));
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out expo for smooth finish
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setValue(Math.floor(easeOut * target));
        setOffset(339 - (339 - strokeDashoffsetTarget) * easeOut);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-6">
      <div className="relative w-[120px] h-[120px] flex items-center justify-center rounded-full border border-white/10 shadow-[0_0_15px_rgba(232,160,32,0.1)] group hover:shadow-[0_0_25px_rgba(232,160,32,0.2)] transition-shadow duration-500">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/10" />
          <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-[#E8A020]" strokeDasharray="339" strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className="text-white font-black text-2xl tracking-tight">{value}%</span>
      </div>
      <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] text-center w-24">{label}</p>
    </div>
  );
}

export function ServiceSection() {
  return (
    <section id="benefits" className="min-h-[100dvh] flex flex-col justify-center w-full bg-forge">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Top Left: Car Image */}
        <Reveal direction="left" className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[500px] w-full bg-forge overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1200"
            alt="Car Wheel"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10">
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">SMART SOLUTIONS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">BENEFITS OF EV</h2>
          </div>
        </Reveal>

        {/* Top Right: Quote */}
        <Reveal direction="right" className="bg-[#0a0a0a] flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-16 lg:h-[500px] w-full border-b lg:border-b-0 lg:border-l border-white/5">
          <div className="mb-6">
            <span className="text-[#E8A020] text-5xl sm:text-6xl font-serif leading-none">"</span>
          </div>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-10 max-w-lg tracking-wide">
            It is not just a charger for power, it's the
            bridge to a greener future.
          </p>
        </Reveal>

        {/* Bottom Left: Circular Stats */}
        <Reveal direction="up" delay={0.1} className="bg-[#111] flex flex-col items-center justify-center px-4 py-16 lg:h-[500px] w-full border-t lg:border-t-0 border-white/5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            <AnimatedCircleStat target={75} label="HOME STATIONS" />
            <AnimatedCircleStat target={54} label="COMMERCIAL SYSTEMS" />
            <AnimatedCircleStat target={60} label="PUBLIC CHARGER" />
          </div>
        </Reveal>

        {/* Bottom Right: Public Charging Station Image */}
        <Reveal direction="right" className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[500px] w-full bg-forge overflow-hidden group">
          <img
            src="https://i.postimg.cc/FRHPkcKJ/Chat-GPT-Image-Jun-24-2026-12-34-22-PM.png"
            alt="Global Charging Infrastructure"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10">
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#E8A020] mb-2">CHARGING INFRASTRUCTURE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">PUBLIC SERVICE</h2>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
