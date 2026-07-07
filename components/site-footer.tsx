import { navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="bg-steel text-warm">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-6 border-t border-warm/10">
        <div className="xl:col-span-3">
          <img src="/Enko logo.png" alt="ENKO Logo" className="h-48 w-auto object-contain -my-16 -ml-8 scale-125 origin-left" />
          <p className="mt-4 max-w-xs text-sm leading-7 text-warm/55">
            ENKO Energy Pvt Ltd builds AC and DC EV charging hardware for CPOs, OEMs, fleets, and commercial sites.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/55">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-charge transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/55">
            <li>Hardware Specs</li>
            <li>OCPP Integration</li>
            <li>CCS2 Compliance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-warm/55">
            <li>
              <span className="block text-[10px] uppercase text-warm/40 mb-0.5">Phone</span>
              +91 98941 26003
            </li>
            <li>
              <span className="block text-[10px] uppercase text-warm/40 mb-0.5">Email</span>
              contact@enkoenergy.in
            </li>

            <li className="pt-2">
              <span className="mr-3 hover:text-charge transition-colors">LinkedIn</span>
              <span className="hover:text-charge transition-colors">Instagram</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-warm/10 bg-forge">
        <div className="container-shell flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm/40 text-center">
            &copy; 2026 ENKO Energy Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-warm/40">
            <a href="/contact" className="hover:text-charge transition-colors">Partner Enquiry</a>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
