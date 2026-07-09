import { Reveal } from '@/components/reveal';

export function CtaSection() {
  return (
    <section className="w-full bg-charge py-16 lg:py-20 border-b border-[#111]/10">
      <div className="container-shell flex flex-col lg:flex-row items-center justify-between gap-12">
        <Reveal direction="left">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] uppercase tracking-tight mb-4 leading-[1.1]">
              READY TO SCALE YOUR<br className="hidden lg:block" /> INFRASTRUCTURE?
            </h2>
            <p className="text-sm font-bold text-[#111]/80 max-w-xl mx-auto lg:mx-0">
              Secure a custom deployment configuration tailored to your specific fleet or network requirements.
            </p>
          </div>
        </Reveal>
        
        <Reveal direction="right" delay={0.15}>
          <div className="flex flex-col gap-3 w-full sm:w-auto min-w-[280px] items-center">
            <a
              href="/contact#procurement"
              className="w-full sm:w-[190px] px-6 py-2.5 bg-[#111] text-center text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#111] transition-colors border border-[#111]"
            >
              REQUEST PRICING SPEC
            </a>
            {/* <a
              href="/contact"
              className="w-full px-8 py-4 bg-transparent border-2 border-[#111] text-center text-[#111] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#111] hover:text-white transition-colors"
            >
              CONTACT SALES TEAM
            </a> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
