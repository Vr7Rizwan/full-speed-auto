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
  },

  {
    name: "BMW",
    banner: "/assets/brands/bmw.webp",
    heading: "Reliable BMW Service & Repairs in Dubai",
    heroText:
      "Comprehensive BMW care with certified technicians and precision diagnostics.",
    description: [
      "Our BMW service center ensures your vehicle stays in top condition. We provide maintenance programs, inspections, and advanced repairs tailored to BMW models.",
      "Certified BMW technicians use genuine parts and state-of-the-art diagnostics to preserve performance, safety, and luxury standards.",
      "From oil changes to suspension, brake systems, and electrical diagnostics, we cover every aspect of BMW maintenance.",
      "We also provide performance tuning for those who want to enhance their driving experience without compromising vehicle integrity.",
      "Our goal is to deliver exceptional service with transparent communication and high customer satisfaction.",
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
  },

  {
    name: "Jaguar",
    banner: "/assets/brands/jaguar.webp",
    heading: "Premium Jaguar Repairs & Maintenance in Dubai",
    heroText:
      "Certified Jaguar service with genuine parts and professional care.",
    description: [
      "We provide full-service Jaguar maintenance for all models, from routine checks to advanced engine and suspension repairs.",
      "Our certified Jaguar technicians use modern diagnostic tools and genuine parts to preserve performance and luxury standards.",
      "Brake, suspension, oil, and electrical system services are carried out with precision and attention to detail.",
      "Performance upgrades are also available for owners who want to enhance their driving experience.",
      "Customer satisfaction is ensured with clear communication, transparent pricing, and reliable service delivery.",
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
  },

  {
    name: "Maserati",
    banner: "/assets/brands/maserati-banner.jpg",
    heading: "Luxury Maserati Maintenance & Repairs in Dubai",
    heroText:
      "Comprehensive Maserati service with certified experts and genuine parts.",
    description: [
      "Our Maserati service center delivers premium maintenance for all Maserati models, including engine, transmission, and suspension repairs.",
      "We provide routine checks, oil changes, brake services, and advanced diagnostics to ensure peak performance and safety.",
      "Certified technicians use genuine Maserati parts and follow manufacturer standards for every repair.",
      "Performance tuning and upgrades are available for enthusiasts seeking high performance.",
      "We ensure clear communication, transparent pricing, and exceptional customer experience.",
    ],
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
  },

  {
    name: "Maybach",
    banner: "/assets/brands/maybach.jpg",
    heading: "Maybach Luxury Car Service in Dubai",
    heroText:
      "High-quality Maybach maintenance and repair with certified technicians.",
    description: [
      "Our Maybach service center provides premium care for all luxury models, covering engine, suspension, brakes, and electrical systems.",
      "We ensure your Maybach maintains its luxury, safety, and performance standards with every service.",
      "Genuine parts and advanced diagnostic tools are used for all repairs and maintenance.",
      "Specialized performance tuning is available for owners seeking optimal driving experience.",
      "Customer satisfaction is guaranteed with transparent pricing, timely service, and professional care.",
    ],
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
  },

  {
    name: "Mercedes",
    banner: "/assets/brands/mercedes.jpg",
    heading: "Mercedes-Benz Expert Service & Repairs",
    heroText:
      "Certified Mercedes-Benz maintenance with genuine parts and advanced diagnostics.",
    description: [
      "We provide full-service Mercedes-Benz maintenance and repairs, including engine, transmission, brakes, and electrical systems.",
      "Our certified technicians use genuine parts and advanced tools to maintain performance, safety, and luxury.",
      "We offer routine maintenance, oil changes, suspension checks, and performance tuning.",
      "Every service is conducted with precision, professionalism, and attention to detail.",
      "Customer satisfaction is guaranteed with transparent communication and high-quality service delivery.",
    ],
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
  },

  {
    name: "Porsche",
    banner: "/assets/brands/porsche.jpg",
    heading: "Porsche High-Performance Maintenance & Repairs",
    heroText:
      "Expert Porsche service with certified technicians and genuine parts to maintain peak performance.",
    description: [
      "Our Porsche service center delivers comprehensive care for all Porsche models, ensuring top performance, reliability, and luxury.",
      "Certified technicians provide engine diagnostics, transmission repairs, suspension, brakes, and electrical system maintenance.",
      "We use genuine Porsche parts and advanced tools to preserve vehicle integrity and performance.",
      "Performance tuning and upgrades are available for enthusiasts seeking maximum driving thrill.",
      "Customer satisfaction is our priority, with transparent pricing, professional service, and attention to detail.",
    ],
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
  },
];

export const findBrand = (brand: string) => {
  const data = brandsData.find(
    (eachService: BrandType) =>
      eachService.name
        .split(" ")
        .join("-")
        .split("&-")
        .join("")
        .toLowerCase() === brand
  );
  return data;
};
