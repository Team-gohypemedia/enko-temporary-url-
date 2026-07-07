import { Cpu, Award, Layers, Smartphone } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export function WhyEvSection() {
  const advantages = [
    { 
      title: "In-house Technology Development", 
      icon: Cpu,
      desc: "Our proprietary technology ensures complete control over quality and rapid innovation."
    },
    { 
      title: "European Standard Design", 
      icon: Award,
      desc: "Engineered to meet the highest European safety, durability, and performance regulations."
    },
    { 
      title: "Scalable Product Portfolio", 
      icon: Layers,
      desc: "Flexible solutions designed to grow seamlessly with your evolving infrastructure needs."
    },
    { 
      title: "Smart Charging Software Integration", 
      icon: Smartphone,
      desc: "Seamlessly connects with advanced software for real-time monitoring and smart grid management."
    }
  ];

  return (
    <section id="why-ev" className="flex flex-col justify-center w-full bg-[#E8A020] py-24 lg:py-32">
      <div className="container-shell">

        <Reveal>
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge/70 mb-4">
              BUILDING A GREENER TOMORROW
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-forge leading-tight max-w-3xl">
              Why Choose ENKO
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="flex flex-col space-y-4 group">
                  <div className="h-40 w-full overflow-hidden rounded-md bg-[#111] flex items-center justify-center transition-transform duration-300 group-hover:shadow-xl">
                    <Icon className="w-16 h-16 text-[#E8A020] transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-black uppercase text-forge tracking-wide mb-3 leading-snug">{adv.title}</h3>
                    <p className="text-forge/80 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
