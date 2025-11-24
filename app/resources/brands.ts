export interface BrandType {
  name: string;
  banner: string;
  heading: string;
  heroText: string;
  description: string[];
  whyChooseUs: { title: string; text: string }[];
  services: string[];
  seoTitle?: string;
  seoDescription?: string;
  faqs?: { Question: string; Answer: string }[];
}

// Common Services (Same for All Brands)
const commonServices: string[] = [
  "AC Repair & Maintenance",
  "Engine & ECU Service",
  "Brake System Service",
  "Transmission & Gearbox Repair",
  "Suspension & Steering Maintenance",
  "Oil Change & Fluid Checks",
  "Electrical & Comfort Systems",
  "Fuel Injection Service",
  "Pre Purchase Inspection & Diagnostics",
  "Performance Tuning & ECU Upgrade",
  "Paint Protection & Coatings",
  "Alloy Wheel Repair & Refurbishment",
];

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
    services: commonServices,
    seoTitle: "Audi Repair Dubai | Premium Audi Service & Maintenance",
    seoDescription:
      "Expert Audi maintenance and repair in Dubai. Certified technicians, genuine parts, diagnostics, oil change, brakes, suspension, AC, performance tuning, and full service.",
    faqs: [
      { Question: "How often should I service my Audi in Dubai?", Answer: "Most Audi models need maintenance every 10,000 km or 12 months." },
      { Question: "Do you use genuine Audi parts?", Answer: "Yes, we only use 100% genuine Audi OEM parts." },
      { Question: "Do you offer Audi diagnostics?", Answer: "Yes, advanced Audi diagnostic tools are used for accurate testing." },
      { Question: "Is Audi performance tuning available?", Answer: "Yes, we offer safe ECU tuning and performance upgrades." },
      { Question: "How long does Audi servicing take?", Answer: "Most services take 1–2 hours depending on inspection." },
      { Question: "Do you repair Audi suspension & AC?", Answer: "Yes, we repair AC, suspension, brakes, transmission, and more." },
    ],
  },

  // BMW
  {
    name: "BMW",
    banner: "/assets/brands/bmw.webp",
    heading: "Reliable BMW Service & Repairs in Dubai",
    heroText: "Comprehensive BMW care with certified technicians and precision diagnostics.",
    description: ["Our BMW service center ensures your vehicle stays in top condition..."],
    whyChooseUs: [
      { title: "BMW Expert Technicians", text: "Our team consists of highly trained BMW specialists who understand the engineering excellence behind each model." },
      { title: "Latest BMW Diagnostic Systems", text: "We utilize BMW-specific diagnostic tools that provide highly accurate insights into the vehicle’s performance." },
      { title: "Original BMW Spare Parts", text: "To maintain the power and prestige of your BMW, we only use authentic OEM parts." },
    ],
    services: commonServices,
    seoTitle: "BMW Repair Dubai | Premium BMW Service & Maintenance",
    seoDescription:
      "Expert BMW repair and service in Dubai. Engine, brakes, suspension, oil changes, AC, diagnostics, and performance upgrades.",
    faqs: [
      { Question: "How often should I service my BMW?", Answer: "BMW vehicles typically require servicing every 10,000 km." },
      { Question: "Do you use genuine BMW parts?", Answer: "Yes, only original BMW OEM parts are used." },
      { Question: "Do you offer BMW diagnostics?", Answer: "Yes, with BMW ISTA diagnostic systems." },
      { Question: "Can you repair BMW electrical issues?", Answer: "Yes, including sensors, ECUs, and wiring faults." },
      { Question: "Do you offer BMW tuning?", Answer: "Yes, safe ECU tuning and performance upgrades are available." },
      { Question: "Do you service BMW hybrid models?", Answer: "Yes, including BMW i-series and hybrid models." },
    ],
  },

  // Jaguar
  {
    name: "Jaguar",
    banner: "/assets/brands/jaguar.jpg",
    heading: "Premium Jaguar Repairs & Maintenance in Dubai",
    heroText: "Certified Jaguar service with genuine parts and professional care.",
    description: ["We provide full-service Jaguar maintenance for all models..."],
    whyChooseUs: [
      { title: "Jaguar Certified Technicians", text: "Our Jaguar specialists possess extensive experience with luxury British engineering." },
      { title: "Precision Jaguar Diagnostics", text: "Using Jaguar-approved diagnostic tools, we detect issues with exceptional accuracy." },
      { title: "Genuine Jaguar Parts Only", text: "We use 100% genuine Jaguar OEM parts in every service." },
    ],
    services: commonServices,
    seoTitle: "Jaguar Repair Dubai | Premium Jaguar Service",
    seoDescription:
      "Professional Jaguar service in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, electrical systems, and full maintenance.",
    faqs: [],
  },

  // Maserati
  {
    name: "Maserati",
    banner: "/assets/brands/maserati.webp",
    heading: "Luxury Maserati Maintenance & Repairs in Dubai",
    heroText: "Comprehensive Maserati service with certified experts and genuine parts.",
    description: ["Our Maserati service center delivers premium maintenance..."],
    whyChooseUs: [
      { title: "Maserati Performance Specialists", text: "Our Maserati-certified technicians are highly trained in Italian sports cars." },
      { title: "Advanced Maserati Diagnostics", text: "We employ dealer-level Maserati diagnostic technology." },
      { title: "Authentic Maserati Parts", text: "We use only original Maserati OEM components." },
    ],
    services: commonServices,
    seoTitle: "Maserati Service Dubai | Premium Maserati Repairs",
    seoDescription:
      "Luxury Maserati maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full service.",
    faqs: [],
  },

  // Maybach
  {
    name: "Maybach",
    banner: "/assets/brands/maybach.webp",
    heading: "Maybach Luxury Car Service in Dubai",
    heroText: "High-quality Maybach maintenance and repair with certified technicians.",
    description: ["Our Maybach service center provides premium care..."],
    whyChooseUs: [
      { title: "Elite Maybach Technicians", text: "Our expert Maybach specialists understand ultra-luxury vehicles." },
      { title: "High-Precision Maybach Diagnostics", text: "We utilize Maybach-approved diagnostic tools." },
      { title: "Guaranteed Original Maybach Parts", text: "All spare parts used are 100% genuine Mercedes-Maybach components." },
    ],
    services: commonServices,
    seoTitle: "Maybach Repair Dubai | Premium Luxury Service",
    seoDescription:
      "Professional Maybach maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full luxury service.",
    faqs: [],
  },

  // Mercedes
  {
    name: "Mercedes",
    banner: "/assets/brands/mercedes.webp",
    heading: "Mercedes-Benz Expert Service & Repairs",
    heroText:
      "Certified Mercedes-Benz maintenance with genuine parts and advanced diagnostics.",
    description: ["We provide full-service Mercedes-Benz maintenance..."],
    whyChooseUs: [
      { title: "Certified Mercedes Engineers", text: "Our workshop is staffed with certified Mercedes-Benz professionals." },
      { title: "High-End Mercedes Diagnostics", text: "We operate with cutting-edge Mercedes diagnostic technology." },
      { title: "Authentic Mercedes Parts", text: "Your Mercedes deserves only the best with genuine parts." },
    ],
    services: commonServices,
    seoTitle: "Mercedes-Benz Service Dubai | Expert Repairs",
    seoDescription:
      "Professional Mercedes-Benz service in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, diagnostics, performance, and full maintenance.",
    faqs: [],
  },

  // Porsche
  {
    name: "Porsche",
    banner: "/assets/brands/porsche.webp",
    heading: "Porsche High-Performance Maintenance & Repairs",
    heroText:
      "Expert Porsche service with certified technicians and genuine parts to maintain peak performance.",
    description: ["Our Porsche service center delivers comprehensive care..."],
    whyChooseUs: [
      { title: "Porsche Performance Specialists", text: "Our technicians are trained specifically for Porsche high-performance engines." },
      { title: "State-of-the-Art Porsche Diagnostics", text: "We use Porsche-approved diagnostic scanners." },
      { title: "Guaranteed Genuine Porsche Parts", text: "We only install original Porsche components." },
    ],
    services: commonServices,
    seoTitle: "Porsche Service Dubai | Expert Porsche Repairs",
    seoDescription:
      "Professional Porsche maintenance and repair in Dubai. Certified technicians, genuine parts, engine, brakes, suspension, AC, performance, and full high-performance service.",
    faqs: [],
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
