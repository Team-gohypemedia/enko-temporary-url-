import { aboutData } from '@/lib/site-data';

export function AboutSection() {
  return (
    <section id="about" className="border-b border-forge/10 bg-warm text-forge">
      <div className="container-shell py-16 lg:py-24">
        <div className="mb-12">
          <p className="label-kicker text-charge">The infrastructure layer</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05] lg:leading-[0.95] text-forge">
            The backbone behind the network.
          </h2>
        </div>
        
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-8">
            <div className="border-l-4 border-charge pl-6">
              <h3 className="text-xl font-black uppercase text-forge">Company Story</h3>
              <p className="mt-3 text-sm leading-7 text-forge/68">
                {aboutData.companyStoryShort}
              </p>
            </div>
            <div className="border-l-4 border-forge pl-6">
              <h3 className="text-xl font-black uppercase text-forge">Vision & Mission</h3>
              <p className="mt-3 text-sm leading-7 text-forge/68">
                {aboutData.visionShort}
              </p>
            </div>
            <div className="border border-forge/15 p-5 bg-forge/5">
              <p className="label-kicker text-forge/42">Directors</p>
              <h4 className="mt-2 text-lg font-black uppercase text-forge">{aboutData.directors.names}</h4>
              <p className="mt-3 text-sm leading-7 text-forge/68">
                {aboutData.directors.experienceShort}
              </p>
            </div>
          </div>
          
          <div className="bg-forge text-white p-8 sm:p-12 h-full flex flex-col justify-center">
            <p className="label-kicker text-white/45 mb-6">Why ENKO?</p>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-charge mb-8">
              What makes us different
            </h3>
            <ul className="space-y-6">
              {aboutData.differentiators.map((diff, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mt-1.5 mr-4 h-2 w-2 shrink-0 bg-charge rotate-45" />
                  <span className="text-sm sm:text-base leading-7 text-white/80">{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
