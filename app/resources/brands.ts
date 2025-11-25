export interface BrandType {
  name: string;
  banner: string;
  heading: string;
  heroText: string;
  description: string;
  whyChooseUs: { title: string; text: string }[];
  seoTitle?: string;
  seoDescription?: string;
  faqs?: { Question: string; Answer: string }[];
}
// Common Services (Same for All Brands)
export const commonServices: { name: string; link: string }[] = [
  {
    name: "Radiator Repair & Service",
    link: "/services/radiator-repair-service",
  },
  {
    name: "Ceramic Coating",
    link: "/services/ceramic-coating",
  },
  {
    name: "AC Repair & Maintenance",
    link: "/services/ac-repair-maintenance",
  },
  {
    name: "Engine & ECU Service",
    link: "/services/engine-ecu-service",
  },
  {
    name: "Brake System Service",
    link: "/services/brake-system-service",
  },
  {
    name: "Transmission & Gearbox Repair",
    link: "/services/transmission-gearbox-repair",
  },
  {
    name: "Suspension & Steering Maintenance",
    link: "/services/suspension-steering-maintenance",
  },
  {
    name: "Oil Change & Fluid Checks",
    link: "/services/oil-change-fluid-checks",
  },
  {
    name: "Electrical & Comfort Systems",
    link: "/services/electrical-comfort-systems",
  },
  {
    name: "Fuel Injection Service",
    link: "/services/fuel-injection-service",
  },
  {
    name: "Pre Purchase Inspection & Diagnostics",
    link: "/services/pre-purchase-inspection-diagnostics",
  },
  {
    name: "Performance Tuning & ECU Upgrade",
    link: "/services/performance-tuning-ecu-upgrade",
  },
  {
    name: "Paint Protection & Coatings",
    link: "/services/paint-protection-coatings",
  },
  {
    name: "Alloy Wheel Repair & Refurbishment",
    link: "/services/alloy-wheel-repair-refurbishment",
  },
];
const brandsData: BrandType[] = [
  {
    name: "Audi",
    banner: "/assets/brands/audi.webp",
    heading: "Expert Audi Service & Maintenance in Dubai",
    heroText:
      "Professional Audi repair, maintenance, and diagnostics using advanced tools and certified technicians.",
    description:
      "At our Audi service center, we provide premium care for all Audi models. From routine maintenance to complex engine repairs, every service ensures your vehicle performs at its peak.",
    whyChooseUs: [
      {
        title: "Certified Audi Specialists",
        text: "Our Audi-certified technicians bring years of hands-on experience with German engineering. Every repair and service is handled with precision, ensuring your Audi performs exactly as the manufacturer intended, maintaining luxury, power, and reliability.",
      },
      {
        title: "Advanced Audi Diagnostic Technology",
        text: "We use Audi-approved diagnostic systems that accurately detect issues in seconds. This reduces guesswork, ensures faster turnaround time, and guarantees that every repair meets Audi’s strict technical standards.",
      },
      {
        title: "Guaranteed Genuine Audi Parts",
        text: "Authenticity matters. That’s why we only use 100% genuine Audi spare parts, sourced directly from trusted suppliers. This ensures long-term durability, perfect compatibility, and enhanced performance for your vehicle.",
      },
    ],
    seoTitle: "Audi Repair Dubai | Premium Audi Service & Maintenance",
    seoDescription:
      "Expert Audi maintenance and repair in Dubai. Certified technicians, genuine parts, diagnostics, oil change, brakes, suspension, AC, performance tuning, and full service.",
    faqs: [
      {
        Question: "How often should I service my Audi in Dubai?",
        Answer:
          "Most Audi models need maintenance every 10,000 km or 12 months.",
      },
      {
        Question: "Do you use genuine Audi parts?",
        Answer: "Yes, we only use 100% genuine Audi OEM parts.",
      },
      {
        Question: "Do you offer Audi diagnostics?",
        Answer:
          "Yes, advanced Audi diagnostic tools are used for accurate testing.",
      },
      {
        Question: "Is Audi performance tuning available?",
        Answer: "Yes, we offer safe ECU tuning and performance upgrades.",
      },
      {
        Question: "How long does Audi servicing take?",
        Answer: "Most services take 1–2 hours depending on inspection.",
      },
      {
        Question: "Do you repair Audi suspension & AC?",
        Answer:
          "Yes, we repair AC, suspension, brakes, transmission, and more.",
      },
    ],
  },

  {
    name: "BMW",
    banner: "/assets/brands/bmw.webp",
    heading: "Reliable BMW Service & Repairs in Dubai",
    heroText:
      "Comprehensive BMW care with certified technicians and precision diagnostics.",
    description:
      "Our BMW service center ensures your vehicle stays in top condition...",
    whyChooseUs: [
      {
        title: "BMW Expert Technicians",
        text: "Our team consists of highly trained BMW specialists who understand the engineering excellence behind each model. Whether it's routine maintenance or complex mechanical work, your BMW is treated with care and technical mastery.",
      },
      {
        title: "Latest BMW Diagnostic Systems",
        text: "We utilize BMW-specific diagnostic tools that provide highly accurate insights into the vehicle’s performance. This allows our technicians to diagnose issues swiftly and ensures every repair enhances your BMW’s smooth driving experience.",
      },
      {
        title: "Original BMW Spare Parts",
        text: "To maintain the power and prestige of your BMW, we only use authentic OEM parts. These components are engineered to deliver optimal performance, ensuring safety, longevity, and brand-level reliability.",
      },
    ],
    seoTitle: "BMW Repair Dubai | Premium BMW Service & Maintenance",
    seoDescription:
      "Expert BMW repair and service in Dubai. Engine, brakes, suspension, oil changes, AC, diagnostics, and performance upgrades.",
    faqs: [
      {
        Question: "How often should I service my BMW?",
        Answer: "BMW vehicles typically require servicing every 10,000 km.",
      },
      {
        Question: "Do you use genuine BMW parts?",
        Answer: "Yes, only original BMW OEM parts are used.",
      },
      {
        Question: "Do you offer BMW diagnostics?",
        Answer: "Yes, with BMW ISTA diagnostic systems.",
      },
      {
        Question: "Can you repair BMW electrical issues?",
        Answer: "Yes, including sensors, ECUs, and wiring faults.",
      },
      {
        Question: "Do you offer BMW tuning?",
        Answer: "Yes, safe ECU tuning and performance upgrades are available.",
      },
      {
        Question: "Do you service BMW hybrid models?",
        Answer: "Yes, including BMW i-series and hybrid models.",
      },
    ],
  },

  {
    name: "Jaguar",
    banner: "/assets/brands/jaguar.jpg",
    heading: "Premium Jaguar Repairs & Maintenance in Dubai",
    heroText:
      "Certified Jaguar service with genuine parts and professional care.",
    description: "We provide full-service Jaguar maintenance for all models...",
    whyChooseUs: [
      {
        title: "Jaguar Certified Technicians",
        text: "Our Jaguar specialists possess extensive experience with luxury British engineering, ensuring that every repair and service maintains your car’s elegance, performance, and heritage.",
      },
      {
        title: "Precision Jaguar Diagnostics",
        text: "Using Jaguar-approved diagnostic tools, we detect issues with exceptional accuracy. This allows for quick and effective repairs while safeguarding the integrity and performance of your luxury vehicle.",
      },
      {
        title: "Genuine Jaguar Parts Only",
        text: "We use 100% genuine Jaguar OEM parts in every service. These parts are designed to preserve your vehicle’s original performance, enhance longevity, and maintain its premium value.",
      },
    ],
    seoTitle: "Jaguar Repair Dubai | Premium Jaguar Service",
    seoDescription:
      "Professional Jaguar service in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, electrical systems, and full maintenance.",
    faqs: [
      {
        Question: "How often does a Jaguar need maintenance?",
        Answer:
          "Jaguar vehicles typically need service every 13,000 km or yearly.",
      },
      {
        Question: "Do you use genuine Jaguar parts?",
        Answer: "Yes, we use genuine Jaguar OEM spare parts.",
      },
      {
        Question: "Do you repair Jaguar engines and gearboxes?",
        Answer: "Yes, including advanced engine and gearbox repairs.",
      },
      {
        Question: "Can you fix Jaguar suspension?",
        Answer: "Yes, including air suspension and adaptive systems.",
      },
      {
        Question: "How long does Jaguar servicing take?",
        Answer: "Most services take around 1–2 hours.",
      },
      {
        Question: "Do you offer Jaguar performance upgrades?",
        Answer: "Yes, ECU tuning and performance packages are available.",
      },
    ],
  },

  {
    name: "Maserati",
    banner: "/assets/brands/maserati.webp",
    heading: "Luxury Maserati Maintenance & Repairs in Dubai",
    heroText:
      "Comprehensive Maserati service with certified experts and genuine parts.",
    description: "Our Maserati service center delivers premium maintenance...",
    whyChooseUs: [
      {
        title: "Maserati Performance Specialists",
        text: "Our Maserati-certified technicians are highly trained in the care of high-performance Italian sports cars. Every service is carried out to preserve the precision, power, and elegance of your Maserati.",
      },
      {
        title: "Advanced Maserati Diagnostics",
        text: "We employ dealer-level Maserati diagnostic technology to quickly and accurately identify issues. This ensures repairs are precise, efficient, and aligned with Maserati’s exacting standards.",
      },
      {
        title: "Authentic Maserati Parts",
        text: "We use only original Maserati OEM components, maintaining the car’s performance, reliability, and value. Every replacement part is guaranteed to meet the manufacturer’s stringent quality requirements.",
      },
    ],
    seoTitle: "Maserati Service Dubai | Premium Maserati Repairs",
    seoDescription:
      "Luxury Maserati maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full service.",
    faqs: [
      {
        Question: "How often should I service my Maserati?",
        Answer: "Maserati requires servicing every 12,000 km or 1 year.",
      },
      {
        Question: "Do you use original Maserati parts?",
        Answer: "Yes, all parts are genuine Maserati OEM components.",
      },
      {
        Question: "Do you offer Maserati diagnostics?",
        Answer: "Yes, using dealer-level diagnostic tools.",
      },
      {
        Question: "Do you repair Maserati brakes & suspension?",
        Answer: "Yes, including Brembo brakes and advanced suspension.",
      },
      {
        Question: "Is Maserati performance tuning available?",
        Answer: "Yes, we offer ECU tuning and performance upgrades.",
      },
      {
        Question: "How long does Maserati servicing take?",
        Answer: "Most services take between 1 to 2 hours.",
      },
    ],
  },

  {
    name: "Maybach",
    banner: "/assets/brands/maybach.webp",
    heading: "Maybach Luxury Car Service in Dubai",
    heroText:
      "High-quality Maybach maintenance and repair with certified technicians.",
    description: "Our Maybach service center provides premium care...",
    whyChooseUs: [
      {
        title: "Elite Maybach Technicians",
        text: "Our expert Maybach specialists understand the intricate engineering of ultra-luxury vehicles. Every maintenance and repair is performed with meticulous attention to detail, ensuring flawless performance and supreme comfort.",
      },
      {
        title: "High-Precision Maybach Diagnostics",
        text: "We utilize Maybach-approved diagnostic tools to accurately identify issues in complex systems. This allows us to provide reliable and timely repairs, preserving the luxury and performance of your vehicle.",
      },
      {
        title: "Guaranteed Original Maybach Parts",
        text: "All spare parts used are 100% genuine Mercedes-Maybach components. This ensures long-lasting performance, perfect compatibility, and preserves the premium essence of your luxury vehicle.",
      },
    ],
    seoTitle: "Maybach Repair Dubai | Premium Luxury Service",
    seoDescription:
      "Professional Maybach maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full luxury service.",
    faqs: [
      {
        Question: "Do you use genuine Maybach parts?",
        Answer: "Yes, we use 100% original Mercedes-Maybach parts.",
      },
      {
        Question: "How often should a Maybach be serviced?",
        Answer: "Every 10,000–12,000 km or once a year.",
      },
      {
        Question: "Do you repair Maybach electrical systems?",
        Answer: "Yes, including complex modules and climate controls.",
      },
      {
        Question: "Do you service Maybach suspension?",
        Answer: "Yes, including AIRMATIC and hydraulic systems.",
      },
      {
        Question: "How long does a Maybach inspection take?",
        Answer: "A full check-up usually takes 1–2 hours.",
      },
      {
        Question: "Do you offer Maybach tuning?",
        Answer: "Yes, performance tuning and ECU upgrades are available.",
      },
    ],
  },

  {
    name: "Mercedes",
    banner: "/assets/brands/mercedes.webp",
    heading: "Mercedes-Benz Expert Service & Repairs",
    heroText:
      "Certified Mercedes-Benz maintenance with genuine parts and advanced diagnostics.",
    description: "We provide full-service Mercedes-Benz maintenance...",
    whyChooseUs: [
      {
        title: "Certified Mercedes Engineers",
        text: "Our workshop is staffed with certified Mercedes-Benz professionals who understand the sophistication and luxury embedded in every model. They ensure your vehicle receives top-tier care and precise workmanship.",
      },
      {
        title: "High-End Mercedes Diagnostics",
        text: "We operate with cutting-edge Mercedes diagnostic technology that identifies issues with exceptional accuracy. This allows us to perform detailed repairs and maintain your vehicle’s luxury-standard driving experience.",
      },
      {
        title: "Authentic Mercedes Parts",
        text: "Your Mercedes deserves only the best, which is why we offer guaranteed original spare parts. These parts ensure flawless performance, extended durability, and total compatibility with your luxury vehicle.",
      },
    ],
    seoTitle: "Mercedes-Benz Service Dubai | Expert Repairs",
    seoDescription:
      "Professional Mercedes-Benz service in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, diagnostics, performance, and full maintenance.",
    faqs: [
      {
        Question: "How often do I need to service my Mercedes?",
        Answer: "Mercedes recommends servicing every 10,000 km or yearly.",
      },
      {
        Question: "Do you use original Mercedes parts?",
        Answer: "Yes — only genuine Mercedes-Benz OEM parts.",
      },
      {
        Question: "Do you repair Mercedes electrical issues?",
        Answer: "Yes — including ECU, sensors, and wiring faults.",
      },
      {
        Question: "Is Mercedes performance tuning available?",
        Answer: "Yes — AMG-safe tuning & ECU upgrades.",
      },
      {
        Question: "Do you fix Mercedes air suspension?",
        Answer: "Yes — full AIRMATIC and ABC suspension repairs.",
      },
      {
        Question: "How long does Mercedes servicing take?",
        Answer: "1–2 hours for routine maintenance.",
      },
    ],
  },

  {
    name: "Porsche",
    banner: "/assets/brands/porsche.webp",
    heading: "Porsche High-Performance Maintenance & Repairs",
    heroText:
      "Expert Porsche service with certified technicians and genuine parts to maintain peak performance.",
    description: "Our Porsche service center delivers comprehensive care...",
    whyChooseUs: [
      {
        title: "Porsche Performance Specialists",
        text: "Our technicians are trained specifically to work on Porsche’s high-performance engines and advanced systems. Their expertise ensures your Porsche maintains its signature speed, precision, and driving excellence.",
      },
      {
        title: "State-of-the-Art Porsche Diagnostics",
        text: "We use Porsche-approved diagnostic scanners to analyze your car with unmatched accuracy. This technology helps us deliver fast, effective, and performance-oriented repairs every time.",
      },
      {
        title: "Guaranteed Genuine Porsche Parts",
        text: "To preserve the value and power of your Porsche, we only install original Porsche components. These parts uphold factory performance standards and offer unmatched longevity.",
      },
    ],
    seoTitle: "Porsche Service Dubai | Expert Porsche Repairs",
    seoDescription:
      "Professional Porsche maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full high-performance service.",
    faqs: [
      {
        Question: "How often does a Porsche require servicing?",
        Answer: "Typically every 10,000–15,000 km depending on usage.",
      },
      {
        Question: "Do you use genuine Porsche parts?",
        Answer: "Yes, all repairs include genuine Porsche OEM parts.",
      },
      {
        Question: "Do you offer Porsche diagnostics?",
        Answer: "Yes — with advanced PIWIS diagnostic tools.",
      },
      {
        Question: "Do you repair Porsche engines?",
        Answer: "Yes — including high-performance engines and gearboxes.",
      },
      {
        Question: "Do you offer Porsche tuning?",
        Answer: "Yes — ECU tuning, exhaust upgrades, performance kits.",
      },
      {
        Question: "How long does Porsche maintenance take?",
        Answer: "Routine services typically take 1–2 hours.",
      },
    ],
  },
];

export const findBrand = (brand: string): BrandType | undefined =>
  brandsData.find(
    (eachService: BrandType) =>
      eachService.name
        .split(" ")
        .join("-")
        .split("&-")
        .join("")
        .toLowerCase() === brand
  );