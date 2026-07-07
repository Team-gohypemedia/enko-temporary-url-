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
    tag: 'SYSTEM_NODE_01 // AC_SERIES',
    image: '/products/7.4kw (2).png',
    powerOutput: '7.4kW AC Commercial',
    primaryApplication: 'Workplace parking layouts, commercial retail hubs, residential real estate apartments.',
  },
  {
    num: 2,
    name: 'ENKO Flow 11',
    tag: 'SYSTEM_NODE_02 // AC_SERIES',
    image: '/products/7.4kw (2).png',
    powerOutput: '11kW AC Commercial',
    primaryApplication: 'Corporate office campuses, long-stay commercial public parking spaces.',
  },
  {
    num: 3,
    name: 'ENKO Flow 22',
    tag: 'SYSTEM_NODE_03 // AC_SERIES',
    image: '/products/11kw-22kw.png',
    powerOutput: '22kW AC Commercial',
    primaryApplication: 'Fleet operator depots, public parking decks, commercial logistics spaces.',
  },
];

const stormProducts = [
  {
    num: 4,
    name: 'ENKO Storm 30',
    tag: 'SYSTEM_NODE_04 // DC_FAST_SERIES',
    image: '/products/30kw.png',
    powerOutput: '30kW DC Fast Charging',
    primaryApplication: 'Local fleet hubs, commercial retail parking slots, automobile workshops.',
  },
  {
    num: 5,
    name: 'ENKO Storm 60',
    tag: 'SYSTEM_NODE_05 // DC_FAST_SERIES',
    image: '/products/60kw.png',
    powerOutput: '60kW DC Fast Charging',
    primaryApplication: 'Highway fast-charging stops, urban public charging hubs, fleet operations.',
    financialAdvantage: 'Priced 31% below PM E-DRIVE',
  },
  {
    num: 6,
    name: 'ENKO Storm 120',
    tag: 'SYSTEM_NODE_06 // DC_FAST_SERIES',
    image: '/products/120kw.png',
    powerOutput: '120kW DC Fast Charging',
    primaryApplication: 'Express highway corridors, major e-bus fleets, interstate logistics hubs.',
    financialAdvantage: 'Priced 38% below PM E-DRIVE',
  },
];

const blazeProducts = [
  {
    num: 7,
    name: 'ENKO Blaze 240',
    tag: 'SYSTEM_NODE_07 // DC_ULTRA_SERIES',
    image: '/products/240kw.png',
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

type ProductCardProps = {
  product: {
    num: number;
    name: string;
    tag: string;
    image: string;
    powerOutput: string;
    primaryApplication: string;
    financialAdvantage?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};

function ProductCard({ product, isOpen, onToggle }: ProductCardProps) {
  return (
    <div className="bg-forge border border-warm/10 rounded-2xl overflow-hidden hover:border-charge/40 transition-all duration-300 group flex flex-col">
      <div className="relative h-56 xl:h-60 flex items-center justify-center p-6 flex-shrink-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, #2e2e2e 0%, #191919 55%, #0a0a0a 100%)' }}>
        <Image src={product.image} alt={product.name} fill className="object-contain px-6 pb-12 pt-6 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-sm font-black uppercase text-warm mb-3 xl:text-base">{product.num}. {product.name}</h4>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mb-5 border-t border-warm/10 pt-4 space-y-4">
                <div className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                  <div>
                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Power Output</p>
                    <p className="text-xs leading-relaxed text-warm/80 xl:text-sm">{product.powerOutput}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                  <div>
                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Primary Application</p>
                    <p className="text-xs leading-relaxed text-warm/80 xl:text-sm">{product.primaryApplication}</p>
                  </div>
                </div>
                {product.financialAdvantage && (
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                    <div>
                      <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Financial Advantage</p>
                      <p className="text-xs leading-relaxed text-warm/80 xl:text-sm">{product.financialAdvantage}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full border border-warm/20 hover:border-charge hover:text-charge text-warm/60 text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg transition-colors duration-300 mt-auto"
        >
          {isOpen ? '[ HIDE TECH SPECS ]' : '[ VIEW TECH SPECS ]'}
        </button>
      </div>
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
      <section className="h-[100dvh] flex flex-col relative overflow-hidden border-b border-warm/10 pt-20 pb-3 lg:pt-24 lg:pb-5" style={{ background: 'radial-gradient(ellipse at 50% 40%, #2e2e2e 0%, #191919 55%, #0a0a0a 100%)' }}>

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
              <h2 className="text-3xl lg:text-5xl font-black uppercase text-warm mb-4 leading-tight">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start xl:gap-6">
                {flowProducts.map((product) => (
                  <ProductCard
                    key={product.num}
                    product={product}
                    isOpen={openSpecs.includes(product.num)}
                    onToggle={() => toggleSpecs(product.num)}
                  />
                ))}
              </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start xl:gap-6">
                {stormProducts.map((product) => (
                  <ProductCard
                    key={product.num}
                    product={product}
                    isOpen={openSpecs.includes(product.num)}
                    onToggle={() => toggleSpecs(product.num)}
                  />
                ))}
              </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start xl:gap-6">
                {blazeProducts.map((product) => (
                  <ProductCard
                    key={product.num}
                    product={product}
                    isOpen={openSpecs.includes(product.num)}
                    onToggle={() => toggleSpecs(product.num)}
                  />
                ))}
              </div>
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
              <h2 className="text-3xl lg:text-5xl font-black uppercase mb-4 text-warm">B2B Deployment Flow</h2>
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
              <h2 className="text-2xl lg:text-4xl font-black uppercase mb-2 text-warm">Connector Compatibility</h2>
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
