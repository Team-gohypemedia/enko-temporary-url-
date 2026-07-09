"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicStats } from '@/lib/site-data';
import { Check, CheckCheck, Play, Star, CheckCircle2, ShieldCheck, Globe, Target, Eye, History, Zap, BatteryCharging, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { NewsletterForm } from '@/components/newsletter-form';

type CardBlock = { title: string; body: string; accent: boolean };
type Card = { tag: string; heading: string; blocks: CardBlock[] };

function StaggeredCards({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">

      {/* Left: Stacked numbered cards — all same width */}
      <div className="flex flex-col gap-3 w-full lg:w-[400px] shrink-0">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`group text-left rounded-2xl border transition-all duration-300 overflow-hidden w-full
              ${active === idx
                ? 'border-charge bg-forge shadow-xl shadow-charge/10'
                : 'border-warm/10 bg-steel hover:border-warm/25 hover:bg-forge/40'
              }
            `}
          >
            {/* Fixed height inner row — ensures all cards are identical */}
            <div className="flex items-center gap-3 px-4 h-[82px]">
              <span className={`text-2xl font-black tabular-nums shrink-0 w-10 transition-colors
                ${active === idx ? 'text-charge' : 'text-warm/15 group-hover:text-warm/30'}`}>
                0{idx + 1}
              </span>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h3 className={`text-xs font-black uppercase leading-snug transition-colors line-clamp-2
                  ${active === idx ? 'text-warm' : 'text-warm/50 group-hover:text-warm/75'}`}>
                  {card.heading}
                </h3>
              </div>
              <span className={`text-base shrink-0 transition-all duration-300
                ${active === idx ? 'text-charge opacity-100' : 'opacity-0'}`}>
                →
              </span>
            </div>
            {active === idx && <div className="h-[2px] w-full bg-charge" />}
          </button>
        ))}
      </div>


      {/* Right: Content panel */}
      <div className="flex-1 min-w-0 bg-steel border border-warm/10 rounded-2xl p-7 lg:p-9 min-h-[290px] flex flex-col items-center lg:items-start text-center lg:text-left w-full">
        <h2 className="text-xl lg:text-2xl font-black uppercase text-warm mb-6 leading-tight border-b border-warm/10 pb-5 w-full text-center lg:text-left">
          {cards[active].heading}
        </h2>
        <div className="space-y-5 w-full flex flex-col items-center lg:items-start">
          {cards[active].blocks.map((block, bIdx) => (
            <div key={bIdx} className={`w-full border-t-2 pt-4 border-l-0 pl-0 lg:border-t-0 lg:pt-0 lg:border-l-[3px] lg:pl-5 flex flex-col items-center lg:items-start text-center lg:text-left ${block.accent ? 'border-charge' : 'border-warm/15'}`}>
              <h4 className="text-[18px] font-black uppercase tracking-widest text-warm mb-2">{block.title}</h4>
              <p className="text-warm/65 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">{block.body}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}



export default function AboutPage() {
  const [activeCert, setActiveCert] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run autoscroll on mobile/tablet screens
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      const nextIndex = (activeCert + 1) % 3;
      const container = carouselRef.current;
      const width = container.clientWidth;
      if (width === 0) return;

      container.scrollTo({
        left: nextIndex * width,
        behavior: 'smooth'
      });
      setActiveCert(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCert]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const dot1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const dot2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const dot3Opacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  return (
    <main className="bg-forge text-warm">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden border-b border-warm/10">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-bottom md:bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.postimg.cc/hjpkPZwd/Chat-GPT-Image-Jun-26-2026-04-01-07-PM.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-forge/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forge/85 via-forge/15 to-forge/35"></div>
          <div className="absolute right-0 bottom-0 w-[60vw] h-[60vw] bg-charge/10 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 w-full max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="flex flex-col items-center text-center w-full space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase tracking-tight text-warm leading-[1.05] drop-shadow-sm">
                <span className="block whitespace-nowrap">Powering the</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-charge to-charge/60 block">Transition</span>
              </h1>
              <p className="text-center text-white text-base max-w-2xl leading-relaxed drop-shadow-md">
                We are ENKO, architects of the next-generation EV charging infrastructure. Designed for durability, built for the future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>



      {/* Editorial Sections (Mission, Vision, History) */}
      <section ref={containerRef} className="pb-20 pt-10 lg:pb-32 lg:pt-16 overflow-hidden border-b border-warm/10 relative">
        <div className="container-shell space-y-32 relative">

          {/* Vertical Scroll Timeline Line */}
          <div className="absolute left-[39%] lg:left-[41.66%] -translate-x-[2rem] top-12 bottom-12 w-[2px] bg-warm/10 hidden lg:block rounded-full z-0">
            <motion.div
              className="absolute top-0 left-0 w-full bg-charge origin-top rounded-full"
              style={{ scaleY: scrollYProgress, bottom: 0, top: 0 }}
            />
            {/* Timeline Dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-forge border-2 border-charge z-10 overflow-hidden">
              <motion.div className="w-full h-full bg-charge" style={{ opacity: dot1Opacity }} />
            </div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-forge border-2 border-charge z-10 -translate-y-1/2 overflow-hidden">
              <motion.div className="w-full h-full bg-charge" style={{ opacity: dot2Opacity }} />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-forge border-2 border-charge z-10 overflow-hidden">
              <motion.div className="w-full h-full bg-charge" style={{ opacity: dot3Opacity }} />
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="sticky top-32 text-[15rem] font-black leading-none tracking-tighter -ml-12 relative">
                <div className="text-warm/5">01</div>
                <motion.div className="absolute inset-0 text-charge/20" style={{ opacity: dot1Opacity }}>01</motion.div>
              </div>
            </div>
            <div className="lg:col-span-7 pt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-charge/10 flex items-center justify-center text-charge">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-warm">Our Mission</h2>
              </div>
              <p className="text-warm/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                To provide exceptional infrastructure services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities. Through precision, expertise, and a customer-centric approach, we strive to exceed expectations in every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  "Fostering Sustainable Growth and Green Development",
                  "Innovating for a Sustainable Future",
                  "Customer-Centric Approach",
                  "Building Stronger Communities"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-steel border border-warm/5 hover:border-charge/30 transition-colors w-full">
                    <CheckCheck className="w-5 h-5 text-charge shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-warm/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="sticky top-32 text-[15rem] font-black leading-none tracking-tighter -ml-12 relative">
                <div className="text-warm/5">02</div>
                <motion.div className="absolute inset-0 text-charge/20" style={{ opacity: dot2Opacity }}>02</motion.div>
              </div>
            </div>
            <div className="lg:col-span-7 pt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-charge/10 flex items-center justify-center text-charge">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-warm">Our Vision</h2>
              </div>
              <p className="text-warm/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                At ENKO, our vision is to lead the infrastructure industry through innovation, sustainability, and excellence. We aim to set the benchmark for infrastructure standards globally, paving the way for a more sustainable and resilient future. By combining cutting-edge technology with eco-friendly practices, we strive to redefine the way infrastructure systems are built.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  "Inspiring Modern Architecture",
                  "Pioneering Sustainable Innovation",
                  "Empowering Communities Through Innovation",
                  "Leading the Future of Building Solutions"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-steel border border-warm/5 hover:border-charge/30 transition-colors w-full">
                    <CheckCheck className="w-5 h-5 text-charge shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-warm/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="sticky top-32 text-[15rem] font-black leading-none tracking-tighter -ml-12 relative">
                <div className="text-warm/5">03</div>
                <motion.div className="absolute inset-0 text-charge/20" style={{ opacity: dot3Opacity }}>03</motion.div>
              </div>
            </div>
            <div className="lg:col-span-7 pt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-charge/10 flex items-center justify-center text-charge">
                  <History className="w-6 h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-warm">Our Commitment</h2>
              </div>
              <p className="text-warm/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                At ENKO we are committed to revolutionizing the EV infrastructure industry. With a proven track record of delivering exceptional charging hubs, we combine state-of-the-art technology and skilled expertise to bring visions to life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  "Humble Beginnings",
                  "Milestones and Achievements",
                  "Building a Legacy of Trust",
                  "Shaping the Future, Rooted in the Past"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-steel border border-warm/5 hover:border-charge/30 transition-colors w-full">
                    <CheckCheck className="w-5 h-5 text-charge shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-warm/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Hardware Solutions Section */}
      <section className="container-shell py-24 lg:py-32 border-b border-warm/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-charge/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Top Heading */}
        <div className="text-center mb-20 relative z-10">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-charge mb-4">ENGINEERED FOR EXCELLENCE</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-warm uppercase tracking-tight">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-charge to-charge/60">Our Chargers</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto relative z-10">
          {/* AC Card */}
          <Link href="/products#ac-chargers" className="group relative bg-steel border border-warm/10 rounded-3xl p-10 lg:p-14 overflow-hidden flex flex-col h-full hover:border-charge/40 transition-all duration-500 hover:shadow-2xl hover:shadow-charge/5">
            {/* Massive Background Icon */}
            <div className="absolute -bottom-4 -right-4 text-warm/5 group-hover:text-charge/5 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
              <Zap className="w-40 h-40" strokeWidth={1} />
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-row items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-charge/20 to-transparent flex items-center justify-center border border-charge/20 group-hover:border-charge/40 transition-colors">
                  <Zap className="w-7 h-7 text-charge" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-warm">AC Chargers</h4>
              </div>
              <p className="text-warm/60 text-base leading-relaxed mb-10 max-w-sm mx-auto lg:mx-0">
                Built for everyday charging — at homes, workplaces, apartments, and shared spaces. Compact in design, easy to install, and dependable in performance, seamlessly fitting into daily life.
              </p>
              <div className="mt-auto flex flex-row items-center justify-center lg:justify-start gap-3 text-charge font-bold uppercase tracking-widest text-[10px] group-hover:text-warm transition-colors">
                <span>View Full Catalog</span>
                <div className="w-8 h-8 rounded-full border border-charge/30 flex items-center justify-center group-hover:border-warm/30 group-hover:bg-warm/5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* DC Card */}
          <Link href="/products#dc-chargers" className="group relative bg-steel border border-warm/10 rounded-3xl p-10 lg:p-14 overflow-hidden flex flex-col h-full hover:border-charge/40 transition-all duration-500 hover:shadow-2xl hover:shadow-charge/5">
            {/* Massive Background Icon */}
            <div className="absolute bottom-0 right-0 text-warm/5 group-hover:text-charge/5 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <BatteryCharging className="w-24 h-24" strokeWidth={1} />
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-row items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-charge/20 to-transparent flex items-center justify-center border border-charge/20 group-hover:border-charge/40 transition-colors">
                  <BatteryCharging className="w-7 h-7 text-charge" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-warm">DC Chargers</h4>
              </div>
              <p className="text-warm/60 text-base leading-relaxed mb-10 max-w-sm mx-auto lg:mx-0">
                Fast, powerful, and ready for scale. Built for highways, high-footfall locations, fleets, and commercial hubs — delivering quick turnaround and reliable performance where speed truly matters.
              </p>
              <div className="mt-auto flex flex-row items-center justify-center lg:justify-start gap-3 text-charge font-bold uppercase tracking-widest text-[10px] group-hover:text-warm transition-colors">
                <span>View Full Catalog</span>
                <div className="w-8 h-8 rounded-full border border-charge/30 flex items-center justify-center group-hover:border-warm/30 group-hover:bg-warm/5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>



      {/* Staggered Interactive Cards Section */}
      <section className="container-shell py-20 border-b border-warm/10">
        <div className="text-center mb-16">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-charge mb-4">WHO WE ARE</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-warm">Our Core Identity</h2>
        </div>

        {(() => {
          const cards = [
            {
              tag: '[ The Infrastructure Layer ]',
              heading: 'The Backbone Behind the Network.',
              blocks: [
                {
                  title: 'Core Statement',
                  body: 'ENKO was founded to solve a specific gap in the Indian EV charging market—quality CCS2 chargers built to handle local conditions, at prices Indian business models can scale with.',
                  accent: true,
                },
                {
                  title: 'Strategic Stance',
                  body: "We are not a charge point network operator. We don't compete for prime real estate. Instead, we act strictly as the engineering infrastructure layer that India's leading charging networks run on.",
                  accent: false,
                },
              ],
            },
            {
              tag: '[ Field-Tested Reliability ]',
              heading: 'Real-World Field Data.',
              blocks: [
                {
                  title: 'Proven in the Field',
                  body: 'Reliability isn\'t calculated in a lab. Over the past two years, ENKO has quietly deployed hardware across demanding commercial sectors in Kerala and Andhra Pradesh. With 9x120kW DC Fast Chargers running at high-throughput live sites, our hardware is continuously validated.',
                  accent: true,
                },
                {
                  title: 'Capital Efficiency',
                  body: 'We are a 100% bootstrapped, profitable enterprise that has generated ₹1Cr+ in revenue through pure product performance. This ensures our long-term stability and guarantees we will always be here to support your infrastructure.',
                  accent: false,
                },
              ],
            },
            {
              tag: '[ Manufacturing Lineage ]',
              heading: '50+ Years of Combined Production Expertise.',
              blocks: [
                {
                  title: 'Biographical Framework',
                  body: 'Samir Kamra & Ellappane (Founding Directors): Bringing a combined 50+ years of deep domain experience in the industrial manufacturing segment. Their backgrounds span large-scale production management, quality control protocols, and advanced industrial operations.',
                  accent: true,
                },
                {
                  title: 'The Blueprint',
                  body: 'This manufacturing heritage means ENKO does not rely on fragile import supply chains. Every component selection, thermal cooling path, and structural enclosure design is overseen by industrial veterans to ensure continuous high-uptime operation.',
                  accent: false,
                },
              ],
            },
          ];

          return (
            <StaggeredCards cards={cards} />
          );
        })()}
      </section>

      {/* Certifications & Compliance Section */}
      <section className="py-20 bg-steel border-y border-warm/10 relative overflow-hidden">
        <div className="container-shell text-center mb-16 relative z-10">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-charge mb-4">
            INDUSTRY STANDARDS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">Certifications & Compliance</h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-sm">
            Our hardware is built to the highest safety and performance standards. Every ENKO charging unit undergoes rigorous testing to guarantee reliability across demanding commercial environments.
          </p>
        </div>

        <div className="container-shell relative z-10 overflow-hidden">
          <div 
            ref={carouselRef}
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              const width = container.clientWidth;
              if (width === 0) return;
              const newIndex = Math.round(scrollLeft / width);
              if (newIndex >= 0 && newIndex < 3 && newIndex !== activeCert) {
                setActiveCert(newIndex);
              }
            }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-6 px-4 md:px-0 w-full md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none"
          >
            {[
              {
                title: "BIS Certified",
                desc: "Bureau of Indian Standards compliance for ultimate safety in domestic deployments.",
                icon: <CheckCircle2 className="w-12 h-12 text-charge mb-4" />
              },
              {
                title: "CMVR Approved",
                desc: "Meets Central Motor Vehicles Rules regulations for electric vehicle infrastructure.",
                icon: <ShieldCheck className="w-12 h-12 text-charge mb-4" />
              },
              {
                title: "CE & OCPP 2.0.1",
                desc: "European standard safety marks with universal open charge point protocol integration.",
                icon: <Globe className="w-12 h-12 text-charge mb-4" />
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-forge border border-warm/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-charge/50 transition-colors duration-500 w-[85vw] sm:w-[360px] md:w-auto flex-shrink-0 snap-center md:flex-shrink-1">
                {cert.icon}
                <h3 className="text-xl font-black uppercase tracking-widest mb-3 text-warm">{cert.title}</h3>
                <p className="text-sm text-warm/60 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCert === idx ? 'w-6 bg-charge' : 'w-1.5 bg-warm/25'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Wrapper inside main content */}
      <section className="bg-steel text-warm py-16 border-t border-warm/10">
        <div className="container-shell flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-center pb-16 mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase mb-4">Let's Create Your Ideal Space</h2>
            <p className="text-warm/60 text-sm max-w-md mx-auto lg:mx-0">
              Ready to start your project with ENKO? Get in touch with us to discuss your ideas, ask questions. From concepts, completion, let's explore quality and make it a reality.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Footer info is already in SiteFooter, but we can leave this here since the image has a specific top-footer section */}
      </section>

      <SiteFooter />
    </main>
  );
}
