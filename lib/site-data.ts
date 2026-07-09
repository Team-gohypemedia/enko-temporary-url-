export const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'PARTNERS', href: '/partners' },
  { label: 'CONTACT', href: '/contact' },
];

export const whatsappUrl = 'https://wa.me/919894126003?text=Hello%20ENKO%2C%20I%20want%20to%20discuss%20EV%20charging%20hardware%20for%20my%20deployment.';

export const publicStats = [
  { label: 'Charging Stations', value: '100+' },
  { label: 'Active Users', value: '140+' },
  { label: 'Partner Programs', value: '5+' },
  { label: 'Manufacturing Experience', value: '50+ Years' },
];

export const metrics = [
  {
    label: 'Below PM E-DRIVE government benchmark pricing at full margin.',
    value: '31% - 36%',
    code: 'Metric 01',
  },
  {
    label: 'Industrial hardware units shipped and field-tested across active regions.',
    value: '67+ Units',
    code: 'Metric 02',
  },
  {
    label: 'Combined director manufacturing experience and industrial operations.',
    value: '50+ Years',
    code: 'Metric 03',
  },
  {
    label: 'Open Charge Point Protocol certified across the entire portfolio.',
    value: 'OCPP 2.0.1',
    code: 'Metric 04',
  },
];

export const rangeCards = [
  {
    name: 'ENKO Flow',
    tag: '[ AC_SERIES ]',
    copy: 'Reliable destination charging for commercial properties and fleet installations.',
    specs: [
      ['Output', '7.4kW, 11kW, 22kW'],
      ['Connectivity', 'OCPP 2.0.1 Open Architecture'],
      ['Price Bracket', '₹35K - ₹65K'],
    ],
    image: '/products/11kw-22kw.png',
  },
  {
    name: 'ENKO Storm',
    tag: '[ DC_FAST_SERIES ]',
    copy: 'High-throughput charging for highway corridors and busy transport depots.',
    specs: [
      ['Output', '30kW, 60kW, 120kW'],
      ['Connector', 'Dual CCS2 Charging Guns'],
      ['Enclosure', 'IP54 / IK10 Ruggedized Industrial Steel'],
    ],
    image: '/products/120kw.png',
  },
  {
    name: 'ENKO Blaze',
    tag: '[ DC_ULTRA_SERIES ]',
    copy: 'Ultra-fast modular charging setups for heavy commercial vehicles and large transit hubs.',
    specs: [
      ['Output', '240kW+ Extreme Throughput'],
      ['Protocol', 'Liquid-Cooled / Dynamic Power Sharing'],
      ['Architecture', 'Future-Proof Modular Configuration'],
    ],
    image: '/products/240kw.png',
  },
];

export const productMatrix = [
  ['ENKO Flow 7', '7.4kW AC Commercial', 'Workplace parking layouts, commercial retail hubs, residential real estate apartments.'],
  ['ENKO Flow 11', '11kW AC Commercial', 'Corporate office campuses, long-stay commercial public parking spaces.'],
  ['ENKO Flow 22', '22kW AC Commercial', 'Fleet operator depots, public parking decks, commercial logistics spaces.'],
  ['ENKO Storm 30', '30kW DC Fast Charging', 'Local fleet hubs, commercial retail parking slots, automobile workshops.'],
  ['ENKO Storm 60', '60kW DC Fast Charging', 'Highway fast-charging stops, urban public charging hubs, fleet operations.'],
  ['ENKO Storm 120', '120kW DC Fast Charging', 'Express highway corridors, major e-bus fleets, interstate logistics hubs.'],
  ['ENKO Blaze 240', '240kW+ DC Ultra Charging', 'Heavy-duty commercial EV bus networks, industrial truck corridors, extreme-throughput highway hubs.'],
];

export const productCards = [
  {
    name: 'ENKO Flow 7',
    tag: '[ SYSTEM_NODE_01 // AC_SERIES ]',
    copy: 'Workplace parking layouts, commercial retail hubs, residential real estate apartments.',
    specs: [
      ['Output', '7.4kW AC Commercial'],
    ],
    variant: 'flow' as const,
    image: '/products/7.4kw (2).png',
  },
  {
    name: 'ENKO Flow 11',
    tag: '[ SYSTEM_NODE_02 // AC_SERIES ]',
    copy: 'Corporate office campuses, long-stay commercial public parking spaces.',
    specs: [
      ['Output', '11kW AC Commercial'],
    ],
    variant: 'flow' as const,
    image: '/products/11kw-22kw.png',
  },
  {
    name: 'ENKO Flow 22',
    tag: '[ SYSTEM_NODE_03 // AC_SERIES ]',
    copy: 'Fleet operator depots, public parking decks, commercial logistics spaces.',
    specs: [
      ['Output', '22kW AC Commercial'],
    ],
    variant: 'flow' as const,
    image: '/products/11kw-22kw.png',
  },
  {
    name: 'ENKO Storm 30',
    tag: '[ SYSTEM_NODE_04 // DC_FAST_SERIES ]',
    copy: 'Local fleet hubs, commercial retail parking slots, automobile workshops.',
    specs: [
      ['Output', '30kW DC Fast Charging'],
    ],
    variant: 'storm' as const,
    image: '/products/30kw.png',
  },
  {
    name: 'ENKO Storm 60',
    tag: '[ SYSTEM_NODE_05 // DC_FAST_SERIES ]',
    copy: 'Highway fast-charging stops, urban public charging hubs, fleet operations.',
    specs: [
      ['Output', '60kW DC Fast Charging'],
      ['Advantage', 'Priced 31% below PM E-DRIVE'],
    ],
    variant: 'storm' as const,
    image: '/products/60kw.png',
  },
  {
    name: 'ENKO Storm 120',
    tag: '[ SYSTEM_NODE_06 // DC_FAST_SERIES ]',
    copy: 'Express highway corridors, major e-bus fleets, interstate logistics hubs.',
    specs: [
      ['Output', '120kW DC Fast Charging'],
      ['Advantage', 'Priced 36% below PM E-DRIVE'],
    ],
    variant: 'storm' as const,
    image: '/products/120kw.png',
  },
  {
    name: 'ENKO Blaze 240',
    tag: '[ SYSTEM_NODE_07 // DC_ULTRA_SERIES ]',
    copy: 'Heavy-duty commercial EV bus networks, industrial truck corridors, extreme-throughput highway hubs.',
    specs: [
      ['Output', '240kW+ DC Ultra Charging'],
    ],
    variant: 'blaze' as const,
    image: '/products/240kw.png',
  },
];

export const partnerSegments = [
  {
    title: 'Charge Point Operators',
    copy: 'Maximize your infrastructure rollouts. Purchase robust CCS2 chargers at 31% to 36% below the PM E-DRIVE benchmark while keeping your profit margins intact. Secure reliable hardware assets built for high-throughput environments across urban centers and highway routes.',
    cta: "I'm a CPO - Get Pricing",
  },
  {
    title: 'Original Equipment Manufacturers',
    copy: 'Focus on your vehicle rollouts and let us handle the power architecture. Leverage our established domestic assembly lines to secure a steady supply of market-ready CCS2 charging hardware built to match high automotive standards.',
    cta: "I'm an OEM - Talk to Integration Team",
  },
  {
    title: 'Fleet & Depot Operators',
    copy: 'Reduce vehicle turnaround times. Deploy multi-unit DC fast-charging configurations (30kW to 240kW+) tailored for high-utilization logistics fleets, delivery vans, and heavy transport vehicles.',
    cta: "I'm a Fleet Operator - Calculate ROI",
  },
];

export const partnerProof = [
  {
    label: 'Logistics Deployment',
    quote: 'A Chennai logistics company deployed 12 units across its depot lanes and reduced vehicle turnaround by 40%.',
  },
  {
    label: 'CPO Rollout',
    quote: 'A South India charging operator standardized on ENKO DC fast chargers to expand uptime-backed highway coverage while protecting project margin.',
  },
];

export const faqs = [
  {
    q: 'What communications protocol do ENKO chargers run on?',
    a: 'Every charger across our entire line runs standard OCPP 2.0.1 software. This ensures smooth, plug-and-play integration with any standard OCPP-compliant Central Management System (CMS) or network software platform.',
  },

  {
    q: 'What is the standard warranty on ENKO hardware?',
    a: 'We provide a standard 1-year comprehensive warranty on all AC and DC chargers, covering manufacturing defects and core components. Extended warranty options and Annual Maintenance Contracts (AMC) are also available at 4% of the unit price per year.',
  },
  {
    q: 'What is your typical manufacturing lead time?',
    a: 'For standard orders (up to 10 units), our typical lead time is 4 to 6 weeks from the date of order confirmation. For bulk B2B procurement and custom-configured batches, lead times are determined during the engineering spec review phase.',
  },
  {
    q: 'Do you provide installation and commissioning support?',
    a: 'Yes. We offer complete field service, installation supervision, and commissioning support across our operational regions (Kerala and Andhra Pradesh) to ensure your deployment is grid-ready and OCPP-integrated from day one.',
  },
  {
    q: 'What are your standard payment terms?',
    a: 'Standard terms for hardware procurement typically involve a 50% advance payment to initiate manufacturing, with the remaining 50% due prior to dispatch. Specific payment terms can be negotiated for large-scale institutional buyers and fleet operators.',
  },
  {
    q: 'Is GST invoicing available for B2B purchases?',
    a: 'Absolutely. We provide full GST invoicing for all B2B transactions. You can claim the applicable Input Tax Credit (ITC) for your EV charging infrastructure investments.',
  },
  {
    q: 'Are your chargers BIS certified?',
    a: 'Yes, all ENKO hardware is built to meet rigorous safety and performance standards and comes with the necessary BIS (Bureau of Indian Standards) certifications required for commercial deployment in India.',
  },
  {
    q: 'Is custom firmware or white-label pricing included?',
    a: 'We offer extensive white-labeling capabilities and custom firmware configurations. While standard OCPP 2.0.1 integration is included, deep custom firmware development or distinct physical branding (custom paint/decals) is priced separately based on the project scope.',
  }
];

export const aboutData = {
  companyStoryShort: "ENKO was founded to solve a specific gap in the Indian EV charging market - quality CCS2 chargers with real local service, at prices Indian buyers can work with. We assemble a full-spectrum range and back every unit with South India-first AMC support, serving OEMs, CPOs, and fleet operators across Kerala and Andhra Pradesh.",
  companyStory: "ENKO was established to bridge a critical gap in India's EV charging market. We realized operators lacked robust CCS2 chargers backed by authentic, local service. We stepped in to disrupt this by assembling a full-spectrum range of premium electric vehicle chargers, paired with an industry-leading, South India-first AMC support network for ultimate reliability.",
  directors: {
    names: "Samir Kamra & Ellappane",
    experienceShort: "Combined 50+ years of experience in the manufacturing segment, bringing deep domain expertise in production, quality, and industrial operations.",
    experience: "The formidable build quality of ENKO’s EV charging infrastructure stems from our exceptional manufacturing lineage. Founding directors Samir Kamra and Ellappane bring over 50 years of combined, hands-on industrial experience. This deep domain expertise ensures every critical hardware component—from robust thermal cooling to rugged enclosures—delivers maximum uptime and exceptional return on investment."
  },
  visionShort: "Build India's EV charging backbone - starting South India, going national. Not as a network operator, but as the infrastructure layer every charging network runs on.",
  vision: "Our vision is to construct the ultimate, unshakable EV charging backbone for India. Operating with a deep engineering philosophy, we act exclusively as the premium infrastructure layer powering major networks. By focusing on robust hardware and OCPP 2.0.1 flexibility, ENKO empowers B2B partners to scale effortlessly, driving the nation's transition to electric mobility.",
  differentiatorsDetailed: "ENKO provides a formidable competitive advantage through premium pricing, performance, and partnership. We price our robust hardware 31% to 36% below government benchmarks while offering comprehensive white-label capabilities. With unmatched South India field service, complete CCS2 charging solutions, and universal OCPP 2.0.1 compliance, ENKO is your definitive partner for scaling electric vehicle infrastructure.",
  differentiators: [
    "Priced 31-36% below PM E-DRIVE government benchmark - at full margin",
    "White-label capability that national players do not offer to SME / CPO buyers",
    "South India field service and AMC - no national competitor below Hyderabad",
    "Full CCS2 range (7.4kW AC to 240kW DC) under one roof",
    "OCPP 2.0.1 across all units"
  ],
  amcDetails: "Annual Maintenance Contracts at 4% of unit price / year. Includes field service, preventive maintenance, and technical support."
};
