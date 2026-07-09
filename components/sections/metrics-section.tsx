"use client";

import { useEffect, useRef, useState } from 'react';

function AnimatedCircle({ targetValue, label }: { targetValue: number, label: string }) {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(easeProgress * targetValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-warm flex items-center justify-center mb-4 relative">
        <svg className="absolute inset-0 w-full h-full animate-spin" viewBox="0 0 100 100" style={{ animationDuration: '8s' }}>
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#E8A020"
            strokeWidth="4"
            strokeDasharray="50 94.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-2xl lg:text-3xl font-black text-warm">{value}%</span>
      </div>
      <p className="text-[8px] lg:text-[10px] font-bold text-warm uppercase tracking-widest text-center">{label}</p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="bg-forge border-b border-warm/10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">

        {/* Top Left: Benefits Image */}
        <div className="relative h-[400px] overflow-hidden bg-steel flex items-end p-8">
          <img
            src="/images/white_electric_car.png"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative z-10">
            <p className="text-[14px] text-warm/70 uppercase tracking-widest font-bold mb-2">Smart Solutions</p>
            <h2 className="text-4xl lg:text-5xl font-black text-warm uppercase tracking-tight">BENEFITS OF EV</h2>
          </div>
        </div>

        {/* Top Right: Quote */}
        <div className="h-[400px] bg-forge flex flex-col justify-center p-12 lg:p-20">
          <div className="text-5xl text-charge font-serif leading-none mb-4">"</div>
          <p className="text-xl lg:text-2xl font-bold text-warm leading-tight mb-8">
            This depends on the size of your car battery and the speed of the charging point.
          </p>
          <div className="flex items-center space-x-4">
            <img src="https://i.pravatar.cc/100?img=11" className="w-12 h-12 rounded-full filter grayscale" />
            <div>
              <p className="text-sm font-black text-warm">Marius Regan</p>
              <p className="text-xs text-warm/60 uppercase tracking-wider font-bold">Head of Systems</p>
            </div>
          </div>
        </div>

        {/* Bottom Left: Circular Stats */}
        <div className="h-[400px] bg-forge flex items-center justify-center p-8 border-t md:border-t-0 md:border-r border-warm/10">
          <div className="flex space-x-6 lg:space-x-12">
            {[
              { val: 75, label: "HOME STATIONS" },
              { val: 54, label: "COMMERCIAL SYSTEMS" },
              { val: 60, label: "PUBLIC CHARGER" }
            ].map((stat, idx) => (
              <AnimatedCircle key={idx} targetValue={stat.val} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Bottom Right: Public Service Image */}
        <div className="relative h-[400px] overflow-hidden bg-steel flex items-end p-8 border-t border-warm/10">
          <img
            src="/images/metrics_public.png"
            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] opacity-50 mix-blend-screen"
          />
          <div className="relative z-10">
            <p className="text-[14px] text-charge uppercase tracking-widest font-bold mb-2">Charging Infrastructure</p>
            <h2 className="text-4xl lg:text-5xl font-black text-warm uppercase tracking-tight">PUBLIC SERVICE</h2>
          </div>
        </div>

      </div>
    </section>
  );
}
