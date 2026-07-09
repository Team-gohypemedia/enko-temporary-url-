'use client';

export function PartnerRequestForm() {
  return (
    <section id="request-form" className="bg-steel py-24 border-b border-warm/10">
      <div className="container-shell flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Title */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-warm mb-6 leading-tight">
            Request Form
          </h2>
          <p className="text-warm/60 mb-10 max-w-md">
            Fill out the form below and our partnership team will reach out to you within 24 hours.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-[1.5]">
          <form className="bg-forge border border-warm/10 p-8 md:p-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">First Name *</label>
                <input type="text" className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors" placeholder="John" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Last Name *</label>
                <input type="text" className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors" placeholder="Doe" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Phone Number *</label>
                <input type="tel" className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Email Address *</label>
                <input type="email" className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Location / City *</label>
                <input type="text" className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors" placeholder="Mumbai" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Property Type *</label>
                <select className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors appearance-none" required>
                  <option value="" disabled selected>Select property type</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="residential">Residential Complex</option>
                  <option value="retail">Retail / Mall</option>
                  <option value="highway">Highway Hub</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-widest text-warm/60 mb-2">Message *</label>
              <textarea rows={4} className="w-full bg-steel/50 border border-warm/20 rounded px-4 py-3 text-warm focus:outline-none focus:border-charge transition-colors resize-none" placeholder="Tell us about your requirements..." required></textarea>
            </div>

            <button type="submit" className="industrial-button w-full sm:w-[190px] border-charge bg-charge text-forge hover:bg-warm hover:text-forge hover:border-warm flex items-center justify-center text-center">
              Request a Callback
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
