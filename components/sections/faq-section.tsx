'use client';

import { useState } from 'react';
import { faqs, publicStats } from '@/lib/site-data';
import { Reveal } from '@/components/reveal';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stats = [
    { ...publicStats[0], icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" },
    { ...publicStats[1], icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { ...publicStats[2], icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { ...publicStats[3], icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  ];

  return (
    <section className="bg-steel pt-16 pb-8 lg:pt-24 lg:pb-12 border-b border-warm/10">
      <div className="container-shell">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-12 lg:mb-10">

          {/* Left Column: Header */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:sticky lg:top-32">
            <Reveal>
              <div className="flex flex-col items-center lg:items-start w-full">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-warm leading-[1.05] tracking-tight mb-5">
                  Frequently Asked Questions
                </h2>
                <p className="text-base lg:text-lg text-warm/70 leading-relaxed max-w-sm pr-0 lg:pr-4">
                  WE HOPE YOU FIND WHAT YOU ARE LOOKING FOR. EXPLORE FAQ'S.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const num = (index + 1).toString().padStart(2, '0');
              return (
                <Reveal key={index} delay={index * 0.05} direction="up">
                  <div
                    className={`border-b border-warm/10 pb-2 transition-colors ${isOpen ? 'border-charge/30' : ''}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left py-3 group"
                    >
                      <span className={`text-sm lg:text-base font-bold uppercase tracking-wide pr-8 flex items-center gap-4 ${isOpen ? 'text-charge' : 'text-warm group-hover:text-charge transition-colors'}`}>
                        <span className="text-xs text-warm/40 font-mono">{num}</span>
                        {faq.q}
                      </span>
                      <div className="flex-shrink-0 text-warm/40 group-hover:text-charge transition-colors">
                        {isOpen ? (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-sm lg:text-base text-warm/60 leading-relaxed pr-8 pb-4 pl-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-8 border-t border-warm/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-charge">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-xl font-black text-warm leading-tight">{stat.value}</p>
                  <p className="text-[9px] sm:text-[9px] md:text-[10px] font-bold uppercase text-warm/60 mt-1 leading-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
