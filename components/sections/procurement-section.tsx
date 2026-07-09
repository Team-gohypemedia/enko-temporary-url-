'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Loader2 } from 'lucide-react';
import { whatsappUrl } from '@/lib/site-data';
import { Reveal } from '@/components/reveal';
import { submitContactForm } from '@/lib/wordpress';

const businessRoles = ['Charge Point Operator (CPO)', 'Vehicle OEM', 'Fleet Logistics Provider', 'Institutional Real Estate Buyer'];
const regions = ['Kerala', 'Andhra Pradesh', 'Telangana (Expansion)', 'Other Expansion State'];
const series = ['FLOW AC Series', 'STORM DC Series', 'BLAZE ULTRA Series'];

export function ProcurementSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="procurement" className="grid-paper border-b border-warm/10 bg-forge lg:flex lg:min-h-[100dvh] lg:items-center lg:py-24">
      <div className="container-shell py-16 lg:py-8">
        <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <aside className="space-y-4">
            <div>
              <p className="label-kicker text-charge">Quote Intake</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-warm md:text-4xl">
                Hardware configurator for commercial EV charging projects.
              </h2>
              <p className="mt-4 text-sm leading-6 text-warm/70">
                Submit your site and product requirements. You&apos;ll receive your engineered spec sheet within 24 business hours.
              </p>
            </div>

            <div className="border border-charge/25 bg-charge/10 p-4">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-charge" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-warm">What happens next</p>
                  <p className="mt-2 text-sm leading-5 text-warm/70">
                    ENKO reviews your power band, region, quantity, and business role, then shares a recommended charger mix and procurement response.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-warm/10 bg-steel/60 p-4">
              <p className="label-kicker text-charge">Direct Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-warm/70">
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-charge" />
                  +91 98941 26003
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 text-charge" />
                  contact@enkoenergy.in
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-charge" />
                  Bengaluru
                </li>
              </ul>
            </div>

            <div className="border border-warm/10 bg-forge p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">Operational regions</p>
              <p className="mt-3 text-sm leading-5 text-warm/70">
                Kerala and Andhra Pradesh are active service regions. Telangana and other states are handled as expansion enquiries.
              </p>
            </div>
          </aside>

          <form
            className="border border-warm/15 bg-steel p-5 shadow-soft md:p-6"
            onSubmit={async (event) => {
              event.preventDefault();
              setIsSubmitting(true);
              const formData = new FormData(event.currentTarget);
              const data = {
                fullName: formData.get('FullName'),
                email: formData.get('CorporateEmailAddress'),
                phone: formData.get('ContactPhoneNumber'),
                company: formData.get('CompanyEntityName'),
                role: formData.get('PrimaryBusinessRole'),
                region: formData.get('TargetRegion'),
                series: formData.getAll('ProductSeries').join(', '),
                quantity: formData.get('EstimatedUnitQuantity'),
              };
              await submitContactForm(data);
              setIsSubmitting(false);
              setSubmitted(true);
            }}
          >
            <div className="mb-5">
              <h3 className="border-b border-warm/10 pb-3 text-lg font-black uppercase text-charge">Contact details</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {['Full Name', 'Corporate Email Address', 'Contact Phone Number', 'Company Entity Name'].map((field) => (
                  <label key={field} className="block">
                    <span className="label-kicker text-warm/50">{field}</span>
                    <input name={field.replace(/\s+/g, '')} className="mt-2 h-10 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none transition-colors focus:border-charge" required />
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="border-b border-warm/10 pb-3 text-lg font-black uppercase text-charge">Deployment profile</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="label-kicker text-warm/50">Primary Business Role</span>
                  <select name="PrimaryBusinessRole" className="mt-2 h-10 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none transition-colors focus:border-charge">
                    {businessRoles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="label-kicker text-warm/50">Target Region of Deployment</span>
                  <select name="TargetRegion" className="mt-2 h-10 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none transition-colors focus:border-charge">
                    {regions.map((region) => (
                      <option key={region}>{region}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="border-b border-warm/10 pb-3 text-lg font-black uppercase text-charge">Hardware requirement</h3>
              <div className="mt-4">
                <span className="label-kicker text-warm/50">Selected Product Series</span>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {series.map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-3 border border-warm/20 bg-forge/30 p-3 text-xs font-bold text-warm transition-colors hover:bg-forge">
                      <input type="checkbox" name="ProductSeries" value={item} className="h-4 w-4 accent-charge" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <label className="mt-4 block max-w-sm">
                <span className="label-kicker text-warm/50">Estimated Unit Quantity</span>
                <input name="EstimatedUnitQuantity" className="mt-2 h-10 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none transition-colors focus:border-charge" type="number" min="1" />
              </label>
            </div>

            {submitted && (
              <div className="mb-6 border border-charge/35 bg-charge/10 p-4 text-sm leading-6 text-warm">
                Request received. You&apos;ll receive your engineered spec sheet within 24 business hours.
              </div>
            )}

            <div className="border-t border-warm/10 pt-4">
              <div className="flex flex-col gap-4 sm:flex-row">
              <button disabled={isSubmitting} className="industrial-button w-full sm:w-[190px] bg-warm text-forge transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-center" type="submit">
                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Submit Specification'}
              </button>
                <a className="industrial-button w-full sm:w-[190px] bg-charge text-forge transition-colors hover:bg-[#d89117] flex items-center justify-center text-center" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp ENKO
                </a>
              </div>
              <p className="mt-4 text-sm text-warm/60">
                You&apos;ll receive your engineered spec sheet within 24 business hours.
              </p>
            </div>
          </form>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
