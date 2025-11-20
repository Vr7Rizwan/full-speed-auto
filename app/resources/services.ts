// src/data/services.ts

import { whyChooseUsTypes } from "./whyChooseUs";

export interface ServiceType {
  name: string;
  banner: string;
  contentimg: string;
  heading: string;
  heroText: string;
  description: string[];
  whyChooseUs: whyChooseUsTypes[];
  features: string[];
  seoTitle?: string;
  seoDescription?: string;
}

const servicesData: ServiceType[] = [
  {
    name: "AC Repair & Maintenance",
    banner: "/assets/services/ac-repair-&-maintenance.webp",
    heading: "Expert Car AC Repair & Maintenance",
    contentimg: "/assets/services/content-1.webp",
    heroText:
      "Keep your car cool and comfortable with professional AC repair and maintenance services.",
    description: [
      "Our AC repair service ensures your vehicle’s air conditioning system works efficiently, providing comfort even in the hottest conditions.",
      "We diagnose all AC issues, from refrigerant leaks to compressor faults, using advanced tools and performing precise repairs.",
      "Regular AC maintenance improves air quality, prevents system breakdowns, and extends the lifespan of your AC system.",
      "Certified technicians use genuine parts to guarantee long-lasting performance and reliability.",
    ],
    whyChooseUs: [
      {
        title: "Experienced AC Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of AC Repair & Maintenance, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for ac repair & maintenance.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every ac repair & maintenance job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Refrigerant Leak Detection & Repair",
      "Compressor & Condenser Repair",
      "AC System Cleaning & Servicing",
      "Temperature & Airflow Optimization",
      "Full AC System Inspection",
    ],
    seoTitle: "Car AC Repair Dubai | Expert AC Service",
    seoDescription:
      "Professional car AC repair and maintenance in Dubai. Certified technicians, genuine parts, diagnostics, and full AC service.",
  },

  {
    name: "Engine & ECU Service",
    banner: "/assets/services/engine-&-ecu-service.webp",
    heading: "Comprehensive Engine & ECU Maintenance",
    contentimg: "/assets/services/content-2.webp",
    heroText:
      "Keep your car engine and ECU performing at peak efficiency with expert service.",
    description: [
      "Our engine and ECU service covers all aspects of engine health, including diagnostics, performance optimization, and repair of key components.",
      "We merge services like engine cooling, engine management, and ECU repair to ensure your vehicle runs safely and efficiently.",
      "Regular maintenance prevents costly repairs and ensures your car maintains top performance.",
      "Genuine parts and advanced diagnostics are used for all services, ensuring reliability and long-lasting results.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Engine Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Engine & ECU Service, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for engine & ecu service.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every engine & ecu service job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Engine Diagnostics & Repairs",
      "ECU Programming & Updates",
      "Cooling System Maintenance",
      "Engine Performance Tuning",
      "Preventive Maintenance Checks",
    ],
    seoTitle: "Engine & ECU Service Dubai | Car Engine Repairs",
    seoDescription:
      "Professional engine and ECU service in Dubai. Diagnostics, repairs, performance tuning, cooling system maintenance, and genuine parts.",
  },

  {
    name: "Brake System Service",
    banner: "/assets/services/brake-system-service.webp",
    heading: "Professional Brake System Repair & Maintenance",
    contentimg: "/assets/services/content-3.webp",

    heroText:
      "Ensure your safety on the road with expert brake system services.",
    description: [
      "Our brake system service guarantees safe driving by maintaining optimal stopping power and performance.",
      "We inspect and repair brake pads, rotors, calipers, and fluid systems to prevent failures and enhance reliability.",
      "Routine brake maintenance prevents accidents and prolongs component life.",
      "All repairs are performed using genuine parts and certified techniques for maximum efficiency.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Brake Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Brake System Service, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for brake system service.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every brake system service job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Brake Pad & Rotor Replacement",
      "Caliper & Brake Line Repair",
      "Brake Fluid Check & Replacement",
      "ABS Diagnostics & Repair",
      "Emergency Brake Inspection",
    ],
    seoTitle: "Car Brake Repair Dubai | Expert Brake Service",
    seoDescription:
      "Professional brake repair and maintenance in Dubai. Certified technicians, genuine parts, diagnostics, and full brake system service.",
  },

  {
    name: "Transmission & Gearbox Repair",
    banner: "/assets/services/transmission-&-gearbox-repair.webp",
    heading: "Reliable Transmission & Gearbox Repairs",
    contentimg: "/assets/services/content-4.webp",
    heroText:
      "Smooth driving with expert transmission and gearbox maintenance services.",
    description: [
      "Our transmission and gearbox repair service ensures efficient power delivery and smooth gear changes.",
      "We inspect clutches, gears, bearings, and fluids, providing precise repairs using genuine parts.",
      "Regular maintenance improves performance, reduces wear, and extends the lifespan of your transmission system.",
      "Certified technicians provide expert guidance and service for both manual and automatic transmissions.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Transmission Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Transmission & Gearbox Repair, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for transmission & gearbox repair.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every transmission & gearbox repair job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Transmission Fluid Replacement",
      "Gearbox Repair & Replacement",
      "Clutch Inspection & Repair",
      "Drive Train Diagnostics",
      "Manual & Automatic Transmission Service",
    ],
    seoTitle: "Transmission & Gearbox Repair Dubai | Car Service",
    seoDescription:
      "Expert transmission and gearbox repair in Dubai. Diagnostics, repairs, fluid replacement, clutch service, manual and automatic transmissions.",
  },

  {
    name: "Suspension & Steering Maintenance",
    banner: "/assets/services/suspension-steering-repair.webp",
    heading: "Expert Suspension & Steering Services",
    contentimg: "/assets/services/content-5.webp",
    heroText:
      "Ensure stable and smooth driving with professional suspension and steering maintenance.",
    description: [
      "Our suspension and steering service improves vehicle handling, comfort, and safety by inspecting and repairing shocks, struts, and steering components.",
      "We also provide alignment services to prevent uneven tire wear and improve driving performance.",
      "Certified technicians use high-quality components and advanced tools for precise repairs.",
      "Regular maintenance extends the life of suspension and steering systems and ensures a safer driving experience.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Suspension Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Suspension & Steering Maintenance, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for suspension & steering maintenance.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every suspension & steering maintenance job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Shock & Strut Replacement",
      "Steering System Repair",
      "Wheel Alignment & Balancing",
      "Suspension Component Check",
      "Vibration & Noise Troubleshooting",
    ],
    seoTitle: "Suspension & Steering Service Dubai | Car Maintenance",
    seoDescription:
      "Professional suspension and steering maintenance in Dubai. Certified technicians, alignment, shock repair, struts, and vehicle handling optimization.",
  },

  {
    name: "Oil Change & Fluid Checks",
    banner: "/assets/services/oil-change-fluid-checks.webp",
    heading: "Comprehensive Oil Change & Fluid Maintenance",
    contentimg: "/assets/services/content-6.webp",
    heroText: "Keep your engine healthy with expert oil and fluid services.",
    description: [
      "Regular oil changes and fluid checks are crucial for engine longevity and optimal performance.",
      "Our service includes oil replacement, coolant check, brake fluid, and power steering fluid inspections.",
      "We use high-quality oils and fluids to protect your engine and maintain smooth operation.",
      "Certified technicians perform thorough checks to prevent leaks and detect early signs of wear.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Oil Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Oil Change & Fluid Checks, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for oil change & fluid checks.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every oil change & fluid checks job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Engine Oil Replacement",
      "Coolant & Radiator Check",
      "Brake & Power Steering Fluid Inspection",
      "Transmission Fluid Check",
      "Preventive Maintenance Checks",
    ],
    seoTitle: "Oil Change & Fluid Checks Dubai | Car Maintenance",
    seoDescription:
      "Professional oil change and fluid maintenance in Dubai. Engine oil, coolant, brake, power steering, and transmission fluid checks by certified technicians.",
  },

  {
    name: "Electrical & Comfort Systems",
    banner: "/assets/services/electrical-comfort-repair.webp",
    contentimg: "/assets/services/content-7.webp",
    heading: "Electrical & Comfort System Repairs",
    heroText:
      "Maintain advanced electrical systems and comfort features of your car.",
    description: [
      "We repair and maintain electrical systems including infotainment, sensors, lights, and comfort modules.",
      "Our service also covers software updates and troubleshooting for modern car systems.",
      "Certified technicians use advanced diagnostic tools to ensure accurate and long-lasting repairs.",
      "Regular maintenance prevents unexpected failures and ensures your car's technology works perfectly.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Electrical Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Electrical & Comfort Systems, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for electrical & comfort systems.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every electrical & comfort systems job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Electrical System Diagnostics",
      "Infotainment & Comfort Module Repairs",
      "Sensor & Wiring Troubleshooting",
      "Software Updates & Programming",
      "Lighting & Accessory Checks",
    ],
    seoTitle: "Car Electrical & Comfort System Repairs Dubai",
    seoDescription:
      "Professional car electrical and comfort system repairs in Dubai. Diagnostics, software updates, wiring, sensors, infotainment, and lighting repairs.",
  },

  {
    name: "Fuel Injection Service",
    banner: "/assets/services/fuel-injection-service.webp",
    heading: "Expert Fuel Injection Cleaning & Maintenance",
    contentimg: "/assets/services/content-8.webp",
    heroText: "Ensure maximum engine efficiency with fuel injection servicing.",
    description: [
      "Our fuel injection service cleans and maintains fuel injectors for optimal engine performance.",
      "Regular servicing prevents clogging, improves fuel efficiency, and reduces emissions.",
      "Certified technicians use specialized equipment to deliver precise injector cleaning and adjustments.",
      "Preventive maintenance keeps your engine running smoothly and reduces the risk of costly repairs.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Fuel Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Fuel Injection Service, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for fuel injection service.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every fuel injection service job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Fuel Injector Cleaning",
      "Fuel Pressure Testing",
      "Fuel System Diagnostics",
      "Throttle Body Cleaning",
      "Fuel Flow Optimization",
    ],
    seoTitle: "Fuel Injection Service Dubai | Engine Efficiency",
    seoDescription:
      "Professional fuel injection service in Dubai. Injector cleaning, fuel system diagnostics, throttle body cleaning, and engine performance optimization.",
  },

  {
    name: "Pre Purchase Inspection & Diagnostics",
    banner: "/assets/services/pre-purchase-inspection.webp",
    heading: "Comprehensive Pre-Purchase Vehicle Inspection",
    contentimg: "/assets/services/content-9.webp",
    heroText:
      "Ensure a safe and informed vehicle purchase with our detailed inspections.",
    description: [
      "We provide detailed inspections of vehicles before purchase, checking engine, transmission, suspension, brakes, and electrical systems.",
      "Our certified technicians identify potential issues and provide a full diagnostic report.",
      "This service helps buyers avoid costly repairs and make informed decisions.",
      "We cover all major systems to ensure the vehicle is safe, reliable, and roadworthy.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Pre Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Pre Purchase Inspection & Diagnostics, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for pre purchase inspection & diagnostics.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every pre purchase inspection & diagnostics job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Engine & Transmission Inspection",
      "Brake & Suspension Checks",
      "Electrical System Diagnostics",
      "Fluid & Oil Level Inspection",
      "Road Test & Performance Check",
    ],
    seoTitle: "Pre-Purchase Vehicle Inspection Dubai | Car Diagnostics",
    seoDescription:
      "Professional pre-purchase vehicle inspection in Dubai. Engine, transmission, brakes, suspension, electrical systems, and road test diagnostics.",
  },

  {
    name: "Performance Tuning & ECU Upgrade",
    banner: "/assets/services/performance-ecu-tuning.webp",
    contentimg: "/assets/services/content-10.webp",
    heading: "Expert Performance Tuning & ECU Upgrades",
    heroText:
      "Enhance your vehicle’s power, efficiency, and driving experience with performance tuning.",
    description: [
      "Our performance tuning service optimizes engine and ECU settings to enhance power and fuel efficiency.",
      "We use advanced diagnostic tools and software updates to safely maximize performance.",
      "This service is ideal for enthusiasts seeking better throttle response, torque, and overall driving dynamics.",
      "All tuning is done by certified technicians to ensure reliability and vehicle safety.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Performance Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Performance Tuning & ECU Upgrade, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for performance tuning & ecu upgrade.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every performance tuning & ecu upgrade job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "ECU Mapping & Updates",
      "Throttle Response Optimization",
      "Torque & Power Enhancement",
      "Fuel Efficiency Tuning",
      "Custom Performance Packages",
    ],
    seoTitle: "Performance Tuning & ECU Upgrade Dubai | Car Optimization",
    seoDescription:
      "Professional performance tuning and ECU upgrades in Dubai. Improve engine power, torque, efficiency, and driving dynamics with certified specialists.",
  },

  {
    name: "Paint Protection & Coatings",
    banner: "/assets/services/paint-protection-coating.webp",
    contentimg: "/assets/services/content-11.webp",
    heading: "Professional Paint Protection & Car Coatings",
    heroText:
      "Protect your car’s paint and maintain a flawless finish with PPF, ceramic coating, and dip color services.",
    description: [
      "Our paint protection services prevent scratches, fading, and damage from environmental factors.",
      "We offer PPF (Paint Protection Film), ceramic coating, and car dip color services to maintain your vehicle’s appearance and resale value.",
      "Certified technicians apply coatings with precision for long-lasting results.",
      "Regular maintenance keeps your car looking new and enhances its overall aesthetic appeal.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Paint Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Paint Protection & Coatings, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for paint protection & coatings.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every paint protection & coatings job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "PPF Installation & Maintenance",
      "Ceramic Coating Application",
      "Car Dip Color Service",
      "Scratch & UV Protection",
      "Gloss & Finish Enhancement",
    ],
    seoTitle: "Paint Protection & Car Coatings Dubai | PPF & Ceramic",
    seoDescription:
      "Professional paint protection and coatings in Dubai. PPF, ceramic coating, car dip color services, scratch and UV protection for long-lasting finish.",
  },

  {
    name: "Alloy Wheel Repair & Refurbishment",
    banner: "/assets/services/alloy-wheel-repair-refurbishment.webp",
    contentimg: "/assets/services/content-12.webp",
    heading: "Expert Alloy Wheel Repair & Refurbishment",
    heroText:
      "Restore your alloy wheels to perfect condition with professional repair and refurbishment services.",
    description: [
      "We repair and refurbish damaged alloy wheels, restoring their structural integrity and appearance.",
      "Our service includes straightening, crack repair, painting, and coating to ensure long-lasting results.",
      "Certified technicians use advanced tools and high-quality materials to maintain wheel safety and aesthetics.",
      "Regular maintenance helps prevent further damage and prolongs the life of your alloy wheels.",
    ],
    whyChooseUs: [
      {
        title: "Experienced Alloy Specialists",
        text: "Our technicians are trained and experienced in handling all aspects of Alloy Wheel Repair & Refurbishment, ensuring reliable service and consistent performance.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use modern equipment and precise diagnostic technology to identify issues quickly and deliver accurate solutions for alloy wheel repair & refurbishment.",
      },
      {
        title: "Quality Service Guaranteed",
        text: "Every alloy wheel repair & refurbishment job is carried out with attention to detail, using high‑quality parts and practices to ensure long‑lasting results.",
      },
    ],
    features: [
      "Wheel Straightening & Crack Repair",
      "Painting & Coating",
      "Alloy Wheel Polishing",
      "Balancing & Alignment",
      "Preventive Maintenance",
    ],
    seoTitle: "Alloy Wheel Repair & Refurbishment Dubai | Car Wheels",
    seoDescription:
      "Professional alloy wheel repair and refurbishment in Dubai. Straightening, crack repair, painting, coating, polishing, and alignment services.",
  },
];

export const findService = (service: string) => {
  const data = servicesData.find(
    (eachService: ServiceType) =>
      eachService.name
        .split(" ")
        .join("-")
        .split("&-")
        .join("")
        .toLowerCase() === service
  );
  return data;
};
