import { navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="bg-steel text-warm">
      <div className="container-shell grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-2 xl:grid-cols-6 border-t border-warm/10">
        <div className="col-span-2 md:col-span-2 xl:col-span-3">
          <img src="/Enko logo.png" alt="ENKO Logo" className="h-48 w-auto object-contain -my-16 -ml-[46px] scale-125 origin-left" />
          <p className="mt-4 max-w-xs text-sm leading-7 text-warm/85">
            ENKO Energy Pvt Ltd builds AC and DC EV charging hardware for CPOs, OEMs, fleets, and commercial sites.
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/90">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/85">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-charge transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/90">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/85">
            <li>Hardware Specs</li>
            <li>OCPP Integration</li>
            <li>CCS2 Compliance</li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-warm/85">
            <li>
              <span className="block text-xs uppercase text-warm/70 mb-0.5">Phone</span>
              <span className="text-base text-warm/95 font-medium">+91 98941 26003</span>
            </li>
            <li>
              <span className="block text-xs uppercase text-warm/70 mb-0.5">Email</span>
              <span className="text-base text-warm/95 font-medium">contact@enkoenergy.in</span>
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
