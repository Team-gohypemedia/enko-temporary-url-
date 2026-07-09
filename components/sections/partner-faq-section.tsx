'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site-data';

export function PartnerFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center bg-forge py-24 border-b border-warm/10">
      <div className="container-shell flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Text and CTA */}
        <div className="flex-1">
          <p className="text-[14px] font-black uppercase tracking-[0.2em] text-charge mb-4">FAQs</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-warm mb-6 leading-tight">
            Got questions about EVs?
          </h2>
          <p className="text-warm/60 mb-10 max-w-md">
            Contact us if you still have any questions to start your experience with Enko.
          </p>
          <a
            href="#procurement"
            className="industrial-button w-full sm:w-[190px] border-charge bg-charge text-forge hover:bg-warm hover:text-forge hover:border-warm flex items-center justify-center text-center"
          >
            Contact Support
          </a>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex-[1.5]">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-warm/10 pb-4 transition-colors ${isOpen ? 'border-charge/30' : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left py-4 group"
                  >
                    <span className={`text-base font-bold uppercase tracking-wide pr-8 ${isOpen ? 'text-charge' : 'text-warm group-hover:text-charge transition-colors'}`}>
                      Q. {faq.q}
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
                    <p className="text-sm text-warm/60 leading-relaxed pr-8 pb-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
