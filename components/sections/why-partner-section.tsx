"use client";

import { useState, useEffect } from 'react';
import { MapPinned, RadioTower, TrendingUp } from 'lucide-react';

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const UNION_TERRITORIES = [
  "Andaman & Nicobar",
  "Chandigarh",
  "Dadra & Nagar Haveli & Daman & Diu",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export function WhyPartnerSection() {

  const [openDropdown, setOpenDropdown] = useState<'states' | 'uts' | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setOpenDropdown(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (type: 'states' | 'uts') => {
    setOpenDropdown(prev => prev === type ? null : type);
  };

  const cases = [
    {
      type: 'Logistics Operator',
      size: '12-unit depot installation',
      location: 'Chennai',
      outcome: '40% reduction in vehicle turnaround time',
      icon: TrendingUp,
    },
    {
      type: 'South India CPO',
      size: 'DC fast chargers across highway networks',
      location: 'Kerala corridors',
      outcome: 'Improved uptime planning while protecting project margins',
      icon: RadioTower,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-warm/10 bg-[#0a0a0a] py-16 lg:flex lg:min-h-[100dvh] lg:items-center lg:py-24">
      <div className="container-shell relative z-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="label-kicker text-charge">Results from the Field</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-warm sm:text-4xl lg:text-5xl">
              Deployments in action.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-warm/60">
            <MapPinned className="h-4 w-4 text-charge" />
            Kerala, Andhra Pradesh
          </div>
        </div>

        <div className="mt-8 grid border border-warm/10 bg-steel/40 md:grid-cols-3">
          {/* Deployment Count */}
          <div className="border-b border-warm/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="text-3xl font-black text-charge lg:text-4xl">67+</p>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">Deployment count</p>
          </div>

          {/* City Coverage (28 States) Dropdown */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('states');
            }}
            className="relative border-b border-warm/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 cursor-pointer group select-none"
          >
            {/* Top-Right Corner Dropdown Icon */}
            <div className="absolute top-4 right-4 text-charge/50 group-hover:text-charge transition-colors duration-300">
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'states' ? 'rotate-180 text-charge' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <p className="text-3xl font-black text-charge lg:text-4xl transition-colors group-hover:text-warm">28 states</p>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">City coverage</p>

            {/* Dropdown content */}
            {openDropdown === 'states' && (
              <div className="absolute left-0 right-0 top-full mt-1 z-50 p-4 bg-forge border border-warm/15 rounded-md shadow-2xl max-h-56 overflow-y-auto scrollbar-none">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {INDIAN_STATES.map(state => (
                    <div key={state} className="text-[10px] font-bold uppercase tracking-wider text-warm/80 border-b border-warm/5 pb-1">
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Union Territory Coverage (8 UTs) Dropdown */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('uts');
            }}
            className="relative border-b border-warm/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 cursor-pointer group select-none"
          >
            {/* Top-Right Corner Dropdown Icon */}
            <div className="absolute top-4 right-4 text-charge/50 group-hover:text-charge transition-colors duration-300">
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'uts' ? 'rotate-180 text-charge' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <p className="text-3xl font-black text-charge lg:text-4xl transition-colors group-hover:text-warm">8 UTs</p>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">Union territory coverage</p>

            {/* Dropdown content */}
            {openDropdown === 'uts' && (
              <div className="absolute left-0 right-0 top-full mt-1 z-50 p-4 bg-forge border border-warm/15 rounded-md shadow-2xl max-h-56 overflow-y-auto scrollbar-none">
                <div className="flex flex-col gap-1.5">
                  {UNION_TERRITORIES.map(ut => (
                    <div key={ut} className="text-[10px] font-bold uppercase tracking-wider text-warm/80 border-b border-warm/5 pb-1">
                      {ut}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollbar-none utility styles */}
        <style>{`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div className="mt-6 flex flex-wrap gap-3">
          {['Logistics', 'Highway CPO', 'Fleet Depots', 'Commercial Real Estate', 'OEM Programs'].map((tag) => (
            <span key={tag} className="border border-warm/10 bg-forge px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-warm/55">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.type} className="border border-warm/10 bg-steel/35 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="label-kicker text-charge">{item.type}</p>
                  <Icon className="h-5 w-5 text-charge" />
                </div>
                <dl className="mt-6 grid gap-4 text-sm">
                  <div className="spec-line">
                    <dt className="text-warm/45">Deployment Size</dt>
                    <dd className="max-w-xs text-right font-bold text-warm">{item.size}</dd>
                  </div>
                  <div className="spec-line">
                    <dt className="text-warm/45">Location</dt>
                    <dd className="max-w-xs text-right font-bold text-warm">{item.location}</dd>
                  </div>
                  <div className="spec-line">
                    <dt className="text-warm/45">Outcome</dt>
                    <dd className="max-w-xs text-right font-bold text-charge">{item.outcome}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-start">
          <a
            href="#procurement"
            className="industrial-button border-warm bg-warm text-forge hover:border-charge hover:bg-charge"
          >
            Share Your Deployment Specs
          </a>
        </div>
      </div>
    </section>
  );
}
