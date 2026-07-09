import { ArrowRight, FileText, Zap } from 'lucide-react';

export function PartnerHeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-warm/10 bg-forge min-h-[100dvh] flex items-center justify-center text-center lg:h-[100dvh]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-forge"></div>
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        {/* glowing blob center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-charge/8 rounded-full blur-[160px] pointer-events-none"></div>
      </div>

      <div className="container-shell relative z-10 flex flex-col items-center max-w-5xl py-20 lg:py-10">


        {/* Heading */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] text-warm mb-6">
          EV Charging <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-charge to-charge/60">Infrastructure</span> Partnerships
        </h3>

        {/* Sub Paragraph */}
        <p className="max-w-2xl text-lg font-bold uppercase leading-snug text-warm/80 mb-5 lg:text-xl">
          Charging Hardware &amp; Support for CPOs, OEMs, &amp; Fleets
        </p>

        {/* Paragraph */}
        <p className="max-w-2xl text-base leading-relaxed text-warm/60 sm:text-lg mb-9">
          Purpose-built DC and AC chargers. Domestic assembly. Built for commercial scale. Partner with ENKO to deploy, operate, and scale EV charging infrastructure designed for Indian conditions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center w-full">
          <a
            href="#procurement"
            className="inline-flex items-center justify-center gap-2 border border-charge bg-charge px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-forge transition-colors hover:bg-warm hover:text-forge w-full sm:w-[190px]"
          >
            <FileText className="h-4 w-4" />
            Request Quote
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center gap-2 border border-warm/20 bg-steel/50 backdrop-blur-md px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-warm transition-colors hover:border-charge hover:text-charge w-full sm:w-[190px]"
          >
            View Products
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
