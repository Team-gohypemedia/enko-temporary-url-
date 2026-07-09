"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialSlider } from '@/components/ui/testimonial-slider-1';
import { Fingerprint, CloudUpload, Smartphone } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const flowProducts = [
  {
    num: 1,
    name: 'ENKO Flow 7',
    tag: 'AC_SERIES',
    image: '/products/7.4kw (2).png',
    bgImage: '/images/flow_ac_bg.png?v=3',
    powerOutput: '7.4kW AC Commercial',
    primaryApplication: 'Workplace parking layouts, commercial retail hubs, residential real estate apartments.',
  },
  {
    num: 2,
    name: 'ENKO Flow 11',
    tag: 'AC_SERIES',
    image: '/products/7.4kw (2).png',
    bgImage: '/images/flow_ac_bg.png?v=3',
    powerOutput: '11kW AC Commercial',
    primaryApplication: 'Corporate office campuses, long-stay commercial public parking spaces.',
  },
  {
    num: 3,
    name: 'ENKO Flow 22',
    tag: 'AC_SERIES',
    image: '/products/11kw-22kw.png',
    bgImage: '/images/flow_ac_bg.png?v=3',
    powerOutput: '22kW AC Commercial',
    primaryApplication: 'Fleet operator depots, public parking decks, commercial logistics spaces.',
  },
];

const stormProducts = [
  {
    num: 4,
    name: 'ENKO Storm 30',
    tag: 'DC_FAST_SERIES',
    image: '/products/30kw.png',
    bgImage: '/images/storm_dc_bg.png?v=3',
    powerOutput: '30kW DC Fast Charging',
    primaryApplication: 'Local fleet hubs, commercial retail parking slots, automobile workshops.',
  },
  {
    num: 5,
    name: 'ENKO Storm 60',
    tag: 'DC_FAST_SERIES',
    image: '/products/60kw.png',
    bgImage: '/images/storm_dc_bg.png?v=3',
    powerOutput: '60kW DC Fast Charging',
    primaryApplication: 'Highway fast-charging stops, urban public charging hubs, fleet operations.',
    financialAdvantage: 'Priced 31% below PM E-DRIVE',
  },
  {
    num: 6,
    name: 'ENKO Storm 120',
    tag: 'DC_FAST_SERIES',
    image: '/products/120kw.png',
    bgImage: '/images/storm_dc_bg.png?v=3',
    powerOutput: '120kW DC Fast Charging',
    primaryApplication: 'Express highway corridors, major e-bus fleets, interstate logistics hubs.',
    financialAdvantage: 'Priced 38% below PM E-DRIVE',
  },
];

const blazeProducts = [
  {
    num: 7,
    name: 'ENKO Blaze 240',
    tag: 'DC_ULTRA_SERIES',
    image: '/products/240kw.png',
    bgImage: '/images/blaze_ultra_bg.png?v=3',
    powerOutput: '240kW+ DC Ultra Charging',
    primaryApplication: 'Heavy-duty commercial EV bus networks, industrial truck corridors, extreme-throughput highway hubs.',
  },
];

const carouselProducts = [
  {
    name: flowProducts[0].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[0].image,
    specs: ['AC Commercial Charging', flowProducts[0].powerOutput, 'Workplace & Retail Parking', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: flowProducts[1].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[1].image,
    specs: ['AC Commercial Charging', flowProducts[1].powerOutput, 'Corporate Office Campuses', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: flowProducts[2].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[2].image,
    specs: ['AC Commercial Charging', flowProducts[2].powerOutput, 'Fleet Operator Depots', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: stormProducts[0].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[0].image,
    specs: ['DC Fast Charging', stormProducts[0].powerOutput, 'Local Fleet Hubs', 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: stormProducts[1].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[1].image,
    specs: ['DC Fast Charging', stormProducts[1].powerOutput, 'Highway Stops', stormProducts[1].financialAdvantage || 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: stormProducts[2].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[2].image,
    specs: ['DC Fast Charging', stormProducts[2].powerOutput, 'Express Highway Corridors', stormProducts[2].financialAdvantage || 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: blazeProducts[0].name,
    seriesPrefix: 'ENKO BLAZE SERIES',
    seriesSuffix: '(DC ULTRA-FAST CHARGING)',
    image: blazeProducts[0].image,
    specs: ['DC Ultra-Fast Charging', blazeProducts[0].powerOutput, 'Heavy-Duty Networks', 'Liquid-Cooled Dual Guns', 'Dynamic Power Sharing', 'Transport Compliant']
  }
];

function ProductSlider({ products, accentColor = '#E8A020' }: { products: any[], accentColor?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  return (
    <div
      className="relative w-full overflow-hidden border border-warm/10 rounded-2xl bg-steel/20 flex mt-8"
      style={{ height: '550px' }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-1000 ease-out"
        style={{
          background: activeIndex !== null
            ? `radial-gradient(circle 600px at ${((activeIndex + 0.5) / products.length) * 100}% 50%, ${accentColor}15 0%, transparent 80%)`
            : `radial-gradient(circle 500px at 50% 50%, ${accentColor}08 0%, transparent 80%)`,
        }}
      />

      {products.map((card, i) => {
        const isActive = activeIndex === i;
        const isAnyActive = activeIndex !== null;

        return (
          <div
            key={card.name}
            onClick={() => setActiveIndex(i)}
            className="relative flex h-full overflow-hidden cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.25,1,0.3,1)] will-change-[flex]"
            style={{
              flex: isActive
                ? '10 0 0%'
                : isAnyActive
                  ? '1 0 0%'
                  : '4 0 0%',
              borderRight: i < products.length - 1 ? '1px solid rgba(238, 235, 228, 0.08)' : 'none',
            }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <img
                src={card.bgImage}
                alt=""
                className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)]"
                style={{
                  filter: isActive
                    ? 'brightness(0.22) saturate(0.5) blur(1px)'
                    : isAnyActive
                      ? 'brightness(0.08) saturate(0.1) blur(2px)'
                      : 'brightness(0.65) saturate(0.85) contrast(1.05)',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-800"
                style={{
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.2) 30%, rgba(8,8,8,0.2) 70%, rgba(8,8,8,0.9) 100%)'
                    : 'linear-gradient(180deg, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.15) 30%, rgba(8,8,8,0.15) 70%, rgba(8,8,8,0.8) 100%)',
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  opacity: isActive ? 0.8 : 0,
                }}
              />
            </div>

            <div
              className="absolute inset-0 z-20 flex flex-col justify-between p-6 lg:p-8 items-center text-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]"
              style={{
                opacity: isAnyActive ? 0 : 1,
                transform: isAnyActive ? 'translateY(-20px)' : 'translateY(0)',
                pointerEvents: isAnyActive ? 'none' : 'auto',
              }}
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase text-warm tracking-tight">
                  {card.name}
                </h3>
              </div>

              <div className="my-auto flex items-center justify-center h-[290px] w-full relative pb-4">
                <div
                  className="absolute w-64 h-64 rounded-full blur-[80px] opacity-60 pointer-events-none mix-blend-screen"
                  style={{
                    background: `radial-gradient(circle, ${accentColor}99 0%, transparent 70%)`
                  }}
                />
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-auto max-h-[250px] scale-[1.2] lg:scale-[1.25] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-105 z-10"
                />
              </div>

              <div className="w-full">
                <p className="text-sm text-warm/80 max-w-[240px] mx-auto mb-4 leading-relaxed line-clamp-2">
                  {card.primaryApplication}
                </p>
                <button
                  className="py-2.5 px-5 bg-forge/60 border border-warm/15 text-[9px] font-black tracking-[0.18em] text-warm uppercase transition-all duration-300 hover:bg-charge hover:text-forge hover:border-charge"
                >
                  [ VIEW SPECS ]
                </button>
              </div>
            </div>

            <div
              className="absolute inset-0 z-20 flex flex-col items-center justify-between py-12 pointer-events-none transition-all duration-500"
              style={{
                opacity: (isAnyActive && !isActive) ? 1 : 0,
                transform: (isAnyActive && !isActive) ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="flex flex-col items-center gap-4 my-auto">
                <span
                  className="font-black uppercase tracking-[0.25em] text-warm/60 text-[10px] whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {card.name}
                </span>
                <div className="w-1 h-1 rounded-full bg-charge/40" />
              </div>

              <div className="w-6 h-6 rounded-full border border-warm/10 flex items-center justify-center bg-forge/30">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="#EEEBE4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div
              className="relative z-20 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1)' : 'scale(0.97)',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-30 w-8 h-8 rounded-full border border-warm/10 flex items-center justify-center bg-forge/60 hover:bg-charge hover:text-forge hover:border-charge transition-all duration-300 group"
                title="Close"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-90"
                >
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full h-full px-8 lg:px-12 py-8 overflow-y-auto lg:overflow-visible">
                <div
                  className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left transition-all duration-700 delay-100"
                  style={{
                    transform: isActive ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div>
                    <p className="text-[9px] font-black tracking-[0.2em] text-charge uppercase font-mono mb-1">
                      {card.tag}
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-black uppercase text-warm tracking-tight leading-none mb-4">
                      {card.name}
                    </h3>
                  </div>
                </div>

                <div
                  className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[260px] lg:min-h-[420px] transition-all duration-700 delay-200"
                  style={{
                    transform: isActive ? 'translateY(0)' : 'translateY(25px)',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div
                    className="absolute w-72 h-72 rounded-full blur-[90px] opacity-30 pointer-events-none mix-blend-screen transition-all duration-1000"
                    style={{
                      background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                      transform: isActive ? 'scale(1.1)' : 'scale(0.8)',
                    }}
                  />
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-auto max-h-[350px] scale-[1.2] lg:scale-[1.25] object-contain z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    style={{
                      animation: isActive ? 'float-animation 6s ease-in-out infinite alternate' : 'none',
                    }}
                  />
                </div>

                <div
                  className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left transition-all duration-700 delay-100"
                  style={{
                    transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="border-l border-charge/40 pl-3 py-0.5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-warm/50 font-mono">
                      TECHNICAL SPECIFICATIONS
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-warm/5 pb-2.5">
                      <span className="text-[8px] font-black uppercase tracking-[0.16em] text-charge/80 font-mono block mb-0.5">
                        POWER OUTPUT
                      </span>
                      <span className="text-xs font-bold text-warm/95 block leading-tight">
                        {card.powerOutput}
                      </span>
                    </div>
                    {card.financialAdvantage && (
                      <div className="border-b border-warm/5 pb-2.5">
                        <span className="text-[8px] font-black uppercase tracking-[0.16em] text-charge/80 font-mono block mb-0.5">
                          FINANCIAL ADVANTAGE
                        </span>
                        <span className="text-xs font-bold text-warm/95 block leading-tight">
                          {card.financialAdvantage}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-warm/60 font-mono mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-charge" />
                      PRIMARY APPLICATION
                    </h4>
                    <p className="text-sm leading-relaxed text-warm/90 max-w-sm">
                      {card.primaryApplication}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <style>{`
        @keyframes float-animation {
          0% { transform: translateY(-6px); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}

export default function ProductsPage() {
  const [openSpecs, setOpenSpecs] = useState<number[]>([]);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentCarouselIndex]);

  const toggleSpecs = (productNumber: number) => {
    setOpenSpecs((current) =>
      current.includes(productNumber)
        ? current.filter((num) => num !== productNumber)
        : [...current, productNumber]
    );
  };

  return (
    <main className="bg-forge text-warm overflow-x-clip">
      {/* We use standard header as requested to follow the theme of previous pages */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden border-b border-warm/10">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.postimg.cc/vZzqQcDK/Chat-GPT-Image-Jun-26-2026-05-15-01-PM.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-forge/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forge/85 via-forge/15 to-forge/35"></div>
          <div className="absolute right-0 bottom-0 w-[60vw] h-[60vw] bg-charge/10 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 w-full max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="flex flex-col items-center text-center w-full space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-warm leading-[0.9]">
                Hardware for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-charge to-charge/60">The Future</span>
              </h1>
              <p className="text-warm/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                Full-spectrum CCS2 charging assets. From entry-level commercial AC plug-ins to high-power highway DC ultra-chargers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>





      {/* Product Showcase Section */}
      <section className="h-[100dvh] flex flex-col relative bg-[#0a0a0a] overflow-hidden border-b border-warm/10 pt-20 pb-3 lg:pt-24 lg:pb-5">

        <div className="container-shell h-full relative z-10 flex flex-col">
          <TestimonialSlider
            reviews={[
              {
                id: 1,
                name: "ENKO Flow 7",
                affiliation: "AC SERIES // SYSTEM_NODE_01",
                quote: "Workplace parking layouts, commercial retail hubs, and residential apartments. 7.4kW output. OCPP 2.0.1 compliant. Wall-box or Pedestal mount ready.",
                imageSrc: "/products/7.4kw (2).png",
                thumbnailSrc: "/products/7.4kw (2).png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "AC Input", value: "1P+N+PE" },
                      { label: "Rate Voltage", value: "230V AC" },
                      { label: "Rate Current", value: "32A" },
                      { label: "Frequency", value: "50/60Hz" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Voltage", value: "230V AC" },
                      { label: "Maximum Current", value: "32A" },
                      { label: "Rated Power", value: "7kW" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 2,
                name: "ENKO Flow 11",
                affiliation: "AC SERIES // SYSTEM_NODE_02",
                quote: "Corporate office campuses and long-stay commercial public parking spaces. 11kW output. Single/three-phase electrical compatibility.",
                imageSrc: "/products/11kw-22kw.png",
                thumbnailSrc: "/products/11kw-22kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "AC Input", value: "3 Phase+N+PE" },
                      { label: "Rate Voltage", value: "415 (±10) V AC" },
                      { label: "Rate Current", value: "16A (Per Phase)" },
                      { label: "Frequency", value: "50/60Hz" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Voltage", value: "415 (±10) V AC" },
                      { label: "Maximum Current", value: "16A (Per Phase)" },
                      { label: "Rated Power", value: "11.4 kW" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 3,
                name: "ENKO Flow 22",
                affiliation: "AC SERIES // SYSTEM_NODE_03",
                quote: "Fleet operator depots, public parking decks, and commercial logistics spaces. 22kW output. Built for high-utilization environments.",
                imageSrc: "/products/11kw-22kw.png",
                thumbnailSrc: "/products/11kw-22kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "AC Input", value: "3 Phase+N+PE" },
                      { label: "Rate Voltage", value: "415 (±10) V AC" },
                      { label: "Rate Current", value: "32A (Per Phase)" },
                      { label: "Frequency", value: "50/60Hz" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Voltage", value: "415 (±10) V AC" },
                      { label: "Maximum Current", value: "32A (Per Phase)" },
                      { label: "Rated Power", value: "22kW" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 4,
                name: "ENKO Storm 30",
                affiliation: "DC FAST SERIES // SYSTEM_NODE_04",
                quote: "Local fleet hubs, commercial retail parking slots, and automobile workshops. 30kW DC fast charging with dual CCS2 guns and IP54 protection.",
                imageSrc: "/products/30kw.png",
                thumbnailSrc: "/products/30kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "Input Voltage", value: "3 Phase" },
                      { label: "Input Voltage Range", value: "260V to 475V AC" },
                      { label: "Frequency", value: "50/60Hz" },
                      { label: "Power Factor", value: "≥ 0.99" },
                      { label: "THDi", value: "≤ 5%" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Power", value: "30kW" },
                      { label: "Output Voltage Range", value: "150V to 1000V DC" },
                      { label: "Maximum Current", value: "100A" },
                      { label: "Connector Type", value: "CCS2" },
                      { label: "Cable Length", value: "5 Meter" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 5,
                name: "ENKO Storm 60",
                affiliation: "DC FAST SERIES // SYSTEM_NODE_05",
                quote: "Highway fast-charging stops, urban public charging hubs, and fleet operations. 60kW DC fast charging. Priced 31% below PM E-DRIVE benchmark.",
                imageSrc: "/products/60kw.png",
                thumbnailSrc: "/products/60kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "Input Voltage", value: "3 Phase" },
                      { label: "Input Voltage Range", value: "260V to 475V AC" },
                      { label: "Frequency", value: "50/60Hz" },
                      { label: "Power Factor", value: "≥ 0.99" },
                      { label: "THDi", value: "≤ 5%" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Power", value: "60kW" },
                      { label: "Output Voltage Range", value: "150V to 1000V DC" },
                      { label: "Maximum Current", value: "200A" },
                      { label: "Connector Type", value: "CCS2 + CCS2" },
                      { label: "Cable Length", value: "5 Meter" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 6,
                name: "ENKO Storm 120",
                affiliation: "DC FAST SERIES // SYSTEM_NODE_06",
                quote: "Express highway corridors, major e-bus fleets, and interstate logistics hubs. 120kW DC fast charging. Priced 38% below PM E-DRIVE benchmark.",
                imageSrc: "/products/120kw.png",
                thumbnailSrc: "/products/120kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "Input Voltage", value: "3 Phase" },
                      { label: "Input Voltage Range", value: "260V to 475V AC" },
                      { label: "Frequency", value: "50/60Hz" },
                      { label: "Power Factor", value: "≥ 0.99" },
                      { label: "THDi", value: "≤ 5%" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Power", value: "120kW" },
                      { label: "Output Voltage Range", value: "150V to 1000V DC" },
                      { label: "Maximum Current", value: "250A" },
                      { label: "Connector Type", value: "CCS2 + CCS2" },
                      { label: "Cable Length", value: "5 Meter" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
              {
                id: 7,
                name: "ENKO Blaze 240",
                affiliation: "DC ULTRA SERIES // SYSTEM_NODE_07",
                quote: "Heavy-duty commercial EV bus networks, industrial truck corridors, and extreme-throughput highway hubs. 240kW+ with liquid-cooled dual guns.",
                imageSrc: "/products/240kw.png",
                thumbnailSrc: "/products/240kw.png",
                specs: [
                  {
                    category: "POWER SUPPLY",
                    items: [
                      { label: "Input Voltage", value: "3 Phase" },
                      { label: "Input Voltage Range", value: "260V to 475V AC" },
                      { label: "Frequency", value: "50/60Hz" },
                      { label: "Power Factor", value: "≥ 0.99" },
                      { label: "THDi", value: "≤ 5%" }
                    ]
                  },
                  {
                    category: "DC OUTPUT",
                    items: [
                      { label: "Output Power", value: "240kW" },
                      { label: "Output Voltage Range", value: "150V to 1000V DC" },
                      { label: "Maximum Current", value: "300A" },
                      { label: "Connector Type", value: "CCS2 + CCS2" },
                      { label: "Cable Length", value: "5 Meter" }
                    ]
                  }
                ],
                features: [
                  { icon: <Fingerprint className="w-6 h-6" />, title: "RFID", subtitle: "ENABLED" },
                  { icon: <CloudUpload className="w-6 h-6" />, title: "OCPP 1.6J", subtitle: "COMPATIBLE" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "SMART APP", subtitle: "CONTROL" },
                ]
              },
            ]}
            className="h-full flex-1"
          />
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="ac-chargers" className="min-h-[100dvh] scroll-mt-24 bg-steel border-b border-warm/10 py-16 lg:flex lg:h-[100dvh] lg:items-center lg:overflow-hidden lg:py-10">
        <div className="container-shell">
          <Reveal>

            {/* Header */}
            <div className="mb-10 xl:mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-charge mb-3">
                {/* [ HARDWARE SYSTEMS COMPONENT ARCHITECTURE ] */}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-warm mb-4 leading-tight">
                Full-Spectrum CCS2<br />Charging Assets.
              </h2>
              <p className="text-warm/55 text-sm max-w-xl">
                From entry-level commercial AC plug-ins to high-power highway DC ultra-chargers, select the exact hardware footprint your network requires.
              </p>
            </div>

            {/* ── Series 1: FLOW AC ── */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                  ENKO Flow Series <span className="text-charge">(AC Commercial Charging)</span>
                </h3>
              </div>
              <div className="h-px bg-warm/15 mb-6" />
              <p className="text-xs text-warm/55 mb-6">
                <span className="font-bold text-warm/80">Common Specifications:</span> OCPP 2.0.1 compliant, single/three-phase electrical compatibility, Wall-box or Pedestal mount ready.
              </p>
              <ProductSlider products={flowProducts} accentColor="#E8A020" />
            </div>

          </Reveal>
        </div>
      </section>

      <section className="min-h-[100dvh] bg-forge border-b border-warm/10 py-16 lg:flex lg:h-[100dvh] lg:items-center lg:overflow-hidden lg:py-10">
        <div className="container-shell">
          <Reveal>
            {/* ── Series 2: STORM DC ── */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                  ENKO Storm Series <span className="text-charge">(DC Fast Charging)</span>
                </h3>
              </div>
              <div className="h-px bg-warm/15 mb-6" />
              <p className="text-xs text-warm/55 mb-6">
                <span className="font-bold text-warm/80">Common Specifications:</span> Dual CCS2 guns, IP54 industrial protection, smart power-sharing modules, high-visibility user UI screens.
              </p>
              <ProductSlider products={stormProducts} accentColor="#0EA5E9" />
            </div>

          </Reveal>
        </div>
      </section>

      <section className="min-h-[100dvh] bg-steel border-b border-warm/10 py-16 lg:flex lg:h-[100dvh] lg:items-center lg:overflow-hidden lg:py-10">
        <div className="container-shell">
          <Reveal>
            {/* ── Series 3: BLAZE ULTRA ── */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                  ENKO Blaze Series <span className="text-charge">(DC Ultra-Fast Charging)</span>
                </h3>
              </div>
              <div className="h-px bg-warm/15 mb-6" />
              <p className="text-xs text-warm/55 mb-6">
                <span className="font-bold text-warm/80">Common Specifications:</span> Liquid-cooled dual guns, 240kW+ modular output, dynamic power sharing, heavy-duty transport compliant.
              </p>
              <ProductSlider products={blazeProducts} accentColor="#EF4444" />
            </div>

          </Reveal>
        </div>
      </section>


      {/* B2B Deployment Flow Section */}
      <section className="min-h-[100dvh] bg-forge relative border-b border-warm/10 py-16 lg:flex lg:h-[100dvh] lg:items-center lg:overflow-hidden lg:py-10">
        <div className="container-shell">
          <Reveal>
            <div className="text-center mb-10 xl:mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-4">
                SEAMLESS INTEGRATION
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">B2B Deployment Flow</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-8 relative">
              {/* Desktop Connector Line */}
              <div className="hidden md:block absolute top-[110px] left-[12.5%] right-[12.5%] h-[2px] bg-warm/10 z-0">
                <div className="absolute top-0 left-0 h-full bg-charge w-0 animate-[fillLine_3s_ease-out_forwards]"></div>
              </div>

              {[
                {
                  step: "01",
                  title: "Select Hardware",
                  desc: "Choose the optimal mix of AC & DC fast chargers tailored to your fleet or site requirements.",
                  icon: "https://i.postimg.cc/d1895Mq4/Chat-GPT-Image-Jun-26-2026-02-08-23-PM.png"
                },
                {
                  step: "02",
                  title: "Configure CMS",
                  desc: "Seamlessly integrate with your preferred OCPP 2.0.1 Central Management System for white-label control.",
                  icon: "https://i.postimg.cc/zXmHf7gr/Chat-GPT-Image-Jun-26-2026-02-12-53-PM.png"
                },
                {
                  step: "03",
                  title: "Deploy & Integrate",
                  desc: "Our expert teams handle the physical installation, grid integration, and site commissioning.",
                  icon: "/images/service_safe.png"
                },
                {
                  step: "04",
                  title: "Monitor Remotely",
                  desc: "Manage your charging assets from your dashboard with our robust field AMC support backing you up.",
                  icon: "https://i.postimg.cc/9MRzmwXG/Chat-GPT-Image-Jun-26-2026-02-24-24-PM.png"
                }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col text-center relative z-10">
                  <div className="relative h-44 md:h-48 xl:h-52 w-full rounded-3xl overflow-hidden mb-6 border border-warm/10 group-hover:border-charge/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-forge/80 group-hover:bg-forge/60 transition-colors z-10 flex items-center justify-center">
                      <span className="text-6xl font-black text-warm/20 group-hover:text-charge/40 transition-colors duration-500 transform group-hover:scale-110">{item.step}</span>
                    </div>
                    <Image src={item.icon} alt={item.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  </div>
                  <div className="bg-steel absolute top-[-16px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-forge flex items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-charge group-hover:animate-ping"></div>
                  </div>
                  <h3 className="text-lg xl:text-xl font-bold uppercase tracking-widest mb-3 text-warm">{item.title}</h3>
                  <p className="text-xs xl:text-sm text-warm/60 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compatibility Chart Section */}
      <section className="min-h-[50dvh] bg-steel border-b border-warm/10 py-16 lg:flex lg:h-[50dvh] lg:items-center lg:overflow-hidden lg:py-10">
        <div className="container-shell max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8 xl:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase mb-2 text-warm">Connector Compatibility</h2>
              <p className="text-warm/60 text-sm">Universal standard charging for every major EV fleet.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-warm/10 bg-forge">
              <table className="w-full text-left text-sm">
                <thead className="bg-steel text-warm/80 uppercase text-xs tracking-wider border-b border-warm/10">
                  <tr>
                    <th className="px-6 py-4 font-bold">Car Brand / Fleet</th>
                    <th className="px-6 py-4 font-bold">Connector Type</th>
                    <th className="px-6 py-4 font-bold">Supported ENKO Product</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm/10 text-warm">
                  <tr className="hover:bg-steel/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Tata (Nexon, Tiago, Punch)</td>
                    <td className="px-6 py-4">CCS2</td>
                    <td className="px-6 py-4 text-charge font-bold">FLOW AC / STORM DC</td>
                  </tr>
                  <tr className="hover:bg-steel/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Mahindra (XUV400)</td>
                    <td className="px-6 py-4">CCS2</td>
                    <td className="px-6 py-4 text-charge font-bold">FLOW AC / STORM DC</td>
                  </tr>
                  <tr className="hover:bg-steel/50 transition-colors">
                    <td className="px-6 py-4 font-medium">MG, BYD, Hyundai, Kia</td>
                    <td className="px-6 py-4">CCS2</td>
                    <td className="px-6 py-4 text-charge font-bold">STORM DC / BLAZE ULTRA</td>
                  </tr>
                  <tr className="hover:bg-steel/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Commercial E-Buses (Tata, Olectra)</td>
                    <td className="px-6 py-4">CCS2 Dual Gun</td>
                    <td className="px-6 py-4 text-charge font-bold">BLAZE ULTRA (120kW+)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
