export interface BrandType {
  name: string;
  banner: string;
  heading: string;
  heroText: string;
  description: string[];
  whyChooseUs: string[];
  services: string[];
  seoTitle?: string;
  seoDescription?: string;
  faqs?: { Question: string; Answer: string }[];
}

const brandsData: BrandType[] = [
  {
    name: "Audi",
    banner: "/assets/brands/audi.webp",
    heading: "Expert Audi Service & Maintenance in Dubai",
    heroText:
      "Professional Audi repair, maintenance, and diagnostics using advanced tools and certified technicians.",
    description: [
      "At our Audi service center, we provide premium care for all Audi models. From routine maintenance to complex engine repairs, every service ensures your vehicle performs at its peak.",
      "Our certified technicians specialize in the latest Audi technologies, using genuine parts to maintain luxury and reliability.",
      "We offer detailed maintenance programs including oil changes, brake inspections, suspension tuning, and electrical system checks.",
      "Performance tuning and upgrades are available for enthusiasts who want to maximize their car's potential safely and efficiently.",
      "Customer satisfaction is our top priority, providing transparent pricing, detailed service reports, and a seamless experience.",
    ],
    whyChooseUs: [
      "Certified Audi technicians with extensive experience.",
      "Genuine Audi parts for repairs and replacements.",
      "Advanced diagnostics and repair tools.",
      "Comprehensive maintenance programs.",
      "Transparent pricing and detailed reports.",
      "Fast service without compromising quality.",
    ],
    services: [
      "Engine Diagnostics & Repair",
      "Oil & Fluid Replacement",
      "Brake System Maintenance",
      "Suspension & Steering Service",
      "Electrical System Repairs",
      "Air Conditioning Service",
      "Performance Tuning & Upgrades",
      "Comprehensive Vehicle Inspection",
      "Routine Maintenance Programs",
      "Emergency Repairs & Diagnostics",
    ],
    seoTitle: "Audi Repair Dubai | Premium Audi Service & Maintenance",
    seoDescription:
      "Expert Audi maintenance and repair in Dubai. Certified technicians, genuine parts, diagnostics, oil change, brakes, suspension, AC, performance tuning, and full service.",
    faqs: [
      {
        Question: "How often should I service my Audi in Dubai?",
        Answer: "Most Audi models need maintenance every 10,000 km or 12 months.",
      },
      {
        Question: "Do you use genuine Audi parts?",
        Answer: "Yes, we only use 100% genuine Audi OEM parts.",
      },
      {
        Question: "Do you offer Audi diagnostics?",
        Answer: "Yes, advanced Audi diagnostic tools are used for accurate testing.",
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
        Answer: "Yes, we repair AC, suspension, brakes, transmission, and more.",
      },
    ],
  },

  {
    name: "BMW",
    banner: "/assets/brands/bmw.webp",
    heading: "Reliable BMW Service & Repairs in Dubai",
    heroText:
      "Comprehensive BMW care with certified technicians and precision diagnostics.",
    description: [
      "Our BMW service center ensures your vehicle stays in top condition...",
    ],
    whyChooseUs: [
      "Certified BMW specialists with years of experience.",
      "Genuine BMW parts for all services.",
      "Advanced diagnostics for accurate repairs.",
      "Custom maintenance programs for every model.",
      "Transparent pricing and reporting.",
      "Efficient and timely service delivery.",
    ],
    services: [
      "Engine & Transmission Repair",
      "Oil & Filter Replacement",
      "Brake System Service",
      "Suspension & Steering Maintenance",
      "Electrical System Repairs",
      "AC & Climate Control Service",
      "Performance Tuning & Upgrades",
      "Vehicle Inspection & Diagnostics",
      "Emergency Repairs",
      "Routine BMW Maintenance",
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
    description: [
      "We provide full-service Jaguar maintenance for all models...",
    ],
    whyChooseUs: [
      "Specialized Jaguar technicians.",
      "Genuine Jaguar parts for all repairs.",
      "Advanced diagnostics for precision.",
      "Custom maintenance plans for every model.",
      "Transparent pricing and detailed reports.",
      "Fast and professional service.",
    ],
    services: [
      "Engine & Gearbox Repair",
      "Oil & Fluid Service",
      "Brake & Suspension Maintenance",
      "AC & Electrical Systems",
      "Performance Tuning & Upgrades",
      "Full Vehicle Inspection",
      "Routine Jaguar Maintenance",
      "Emergency Repairs",
      "Diagnostic Services",
      "Luxury Vehicle Care",
    ],
    seoTitle: "Jaguar Repair Dubai | Premium Jaguar Service",
    seoDescription:
      "Professional Jaguar service in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, electrical systems, and full maintenance.",
    faqs: [
      {
        Question: "How often does a Jaguar need maintenance?",
        Answer: "Jaguar vehicles typically need service every 13,000 km or yearly.",
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
    description: ["Our Maserati service center delivers premium maintenance..."],
    whyChooseUs: [
      "Certified Maserati specialists.",
      "Use of genuine parts.",
      "Advanced diagnostic tools.",
      "Custom maintenance programs.",
      "Transparent pricing and reporting.",
      "Fast and precise service.",
    ],
    services: [
      "Engine & Transmission Service",
      "Oil & Fluid Replacement",
      "Brake System Maintenance",
      "Suspension & Steering Service",
      "Electrical & AC Systems",
      "Performance Tuning",
      "Full Vehicle Diagnostics",
      "Emergency Repairs",
      "Routine Maserati Care",
      "Luxury Vehicle Maintenance",
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
    description: ["Our Maybach service center provides premium care..."],
    whyChooseUs: [
      "Certified Maybach specialists.",
      "Genuine parts and components.",
      "Advanced diagnostics and repair equipment.",
      "Custom maintenance programs.",
      "Transparent pricing and reporting.",
      "Fast and professional service delivery.",
    ],
    services: [
      "Engine Diagnostics & Repair",
      "Oil & Fluid Replacement",
      "Brake & Suspension Maintenance",
      "Electrical & AC Systems",
      "Performance Tuning",
      "Full Vehicle Check-up",
      "Emergency Repairs",
      "Routine Maybach Maintenance",
      "Luxury Vehicle Service",
      "Diagnostic Services",
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
    description: ["We provide full-service Mercedes-Benz maintenance..."],
    whyChooseUs: [
      "Mercedes-certified technicians.",
      "Genuine parts and components.",
      "Advanced diagnostics and repair tools.",
      "Custom maintenance programs.",
      "Transparent pricing and service reporting.",
      "Efficient and reliable service.",
    ],
    services: [
      "Engine & Transmission Service",
      "Oil & Fluid Replacement",
      "Brake & Suspension Maintenance",
      "Electrical & AC Systems",
      "Performance Tuning & Upgrades",
      "Vehicle Diagnostics",
      "Routine Maintenance Programs",
      "Emergency Repairs",
      "Luxury Vehicle Service",
      "Comprehensive Inspections",
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
    description: ["Our Porsche service center delivers comprehensive care..."],
    whyChooseUs: [
      "Certified Porsche technicians.",
      "Genuine Porsche parts for all repairs.",
      "Advanced diagnostic tools.",
      "Custom maintenance and performance programs.",
      "Transparent pricing and reporting.",
      "Fast and reliable service delivery.",
    ],
    services: [
      "Engine & Transmission Repair",
      "Oil & Fluid Replacement",
      "Brake & Suspension Maintenance",
      "Electrical & AC Systems",
      "Performance Tuning & Upgrades",
      "Full Vehicle Diagnostics",
      "Routine Porsche Maintenance",
      "Emergency Repairs",
      "Luxury Vehicle Care",
      "Comprehensive Inspections",
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
