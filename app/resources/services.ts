// src/data/services.ts

import { whyChooseUsTypes } from "./whyChooseUs";

export interface ServiceType {
  name: string;
  banner: string;
  contentimg: string;
  heading: string;
  subheading: string;
  heroText: string;
  description: string;
  whyChooseUs: whyChooseUsTypes[];
  features: { icon: string; title: string; desc: string }[];
  seoTitle?: string;
  seoDescription?: string;
  faqs?: { Question: string; Answer: string }[];
}

const servicesData: ServiceType[] = [
  {
    name: "Radiator Repair & Service",
    banner: "/assets/services/radiator-repair-&-service.webp",
    heading: "Professional Radiator Repair & Cooling System Service",
    subheading: "Ensure your vehicle stays cool and efficient with expert radiator care",
    contentimg: "/assets/services/radiator-repair-content.webp",

    heroText:
      "Keep your engine cool and running smoothly with our professional radiator repair and complete cooling system services.",

    description:
      "Keep your engine cool and running smoothly with our professional radiator repair service. We carefully inspect for leaks, blockages, worn hoses, faulty thermostats, and weak water pumps using advanced tools. Regular radiator maintenance prevents overheating, saves repair costs, and extends the life of your engine. Our skilled technicians use high-quality parts and proven techniques to ensure reliable and long-lasting cooling system performance.",
    whyChooseUs: [
      {
        title: "Certified Cooling System Specialists",
        text: "Our team is trained to handle all radiator and cooling system problems with accuracy and care. Whether it's a minor leak or a full radiator replacement, we make sure your vehicle stays protected from overheating.",
      },
      {
        title: "Accurate & Modern Diagnostics",
        text: "We use advanced tools to detect issues like clogged radiators, coolant contamination, water pump failure, and thermostat faults. This ensures quick and precise repairs without guesswork.",
      },
      {
        title: "Durable & Trusted Repair Solutions",
        text: "We follow high-quality repair standards and use long-lasting components, ensuring reliable cooling performance. Your engine remains safe and steady in all weather and driving conditions.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Cooling System Professionals",
        desc: "Skilled technicians ensuring accurate inspections, diagnostics, and repairs.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Engine Overheating Protection",
        desc: "We enhance cooling system efficiency to avoid overheating and major engine damage.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Fast & Reliable Service",
        desc: "Quick service with same-day repair options and guaranteed performance improvement.",
      },
    ],

    seoTitle:
      "Radiator Repair Dubai | Expert Cooling System Service & Leak Fix",

    faqs: [
      {
        Question: "When should I service my radiator?",
        Answer:
          "It’s best to service your radiator every 12–18 months or anytime you notice overheating or dropping coolant levels.",
      },
      {
        Question: "Do you repair coolant and hose leaks?",
        Answer:
          "Yes, we fix coolant leaks, replace damaged hoses, and repair or replace faulty components.",
      },
      {
        Question: "Do you offer radiator flushing?",
        Answer:
          "Yes, we provide a complete radiator flush and refill using high-quality long-life coolant.",
      },
      {
        Question: "Do you check the thermostat and water pump?",
        Answer:
          "Yes, we perform a full cooling system inspection including the thermostat, water pump, radiator cap, and hoses.",
      },
      {
        Question: "How long does radiator service take?",
        Answer:
          "Most radiator services take 1–2 hours depending on the condition of the cooling system.",
      },
      {
        Question: "Do you use high-quality coolant?",
        Answer:
          "Yes, we use premium long-life coolant designed for better cooling and engine protection.",
      },
    ],

    seoDescription:
      "Expert radiator repair and cooling system service in Dubai. We fix leaks, flush radiators, inspect thermostats, and restore full cooling performance using high-quality parts and certified technicians.",
  },
  {
    name: "Ceramic Coating",
    banner: "/assets/services/ceramic-coating.webp",
    heading: "Premium Ceramic Coating for Ultimate Paint Protection",
    subheading: "Protect and enhance your vehicle’s paint with a long-lasting, high-gloss ceramic shield",

    contentimg: "/assets/services/ceramic-coating-content.webp",

    heroText:
      "Give your car long-lasting shine and protection with our premium ceramic coating that keeps your paint looking new for years.",

    description:
      "Protect your car’s paint with our professional ceramic coating service. It forms a durable, high-quality layer that shields your vehicle from UV rays, scratches, dirt, and oxidation. This coating not only keeps your car looking shiny and new for longer but also makes cleaning easier and maintains the paint’s clarity. Applied by certified technicians, it ensures long-lasting protection and enhances the overall appearance and value of your vehicle.",
    whyChooseUs: [
      {
        title: "Professional Ceramic Coating Experts",
        text: "Our team is certified in ceramic coating application and ensures a smooth, even, and long-lasting protective layer for your vehicle’s paint.",
      },
      {
        title: "Top-Quality Ceramic Products",
        text: "We use globally trusted ceramic coatings that offer strong resistance against scratches, sun damage, bird droppings, and Dubai weather conditions.",
      },
      {
        title: "High Gloss & Long-Term Protection",
        text: "Each coating is applied with precision to achieve a deep shine, hydrophobic effect, and years of premium paint protection-keeping your car looking fresh and glossy.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Advanced Paint Protection",
        desc: "A durable ceramic layer that shields your car’s paint from daily wear and environmental damage.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Mirror-Like Gloss",
        desc: "Experience a rich, glossy shine that makes your car stand out anywhere.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Long-Term Durability",
        desc: "Ceramic coating lasts 2–5 years depending on the package and regular maintenance.",
      },
    ],

    seoTitle:
      "Ceramic Coating Dubai | Premium Paint Protection & High Gloss Finish",

    faqs: [
      {
        Question: "How long does ceramic coating last?",
        Answer:
          "It usually lasts 2–5 years, depending on the coating quality and regular maintenance.",
      },
      {
        Question: "Does ceramic coating protect from scratches?",
        Answer:
          "Yes, it protects from minor scratches, swirl marks, and paint damage caused by contaminants.",
      },
      {
        Question: "Is polishing required before coating?",
        Answer:
          "Yes, proper polishing and paint correction are necessary to ensure smooth application and best results.",
      },
      {
        Question: "How long does the process take?",
        Answer:
          "Ceramic coating typically takes 6–12 hours based on the vehicle size and chosen package.",
      },
      {
        Question: "Can I wash my car normally after ceramic coating?",
        Answer:
          "Yes, but we recommend using pH-neutral car shampoo to maintain shine and durability.",
      },
      {
        Question: "Does ceramic coating make the car shiny?",
        Answer:
          "Absolutely. It enhances depth, gloss, and gives a stunning mirror-like finish.",
      },
    ],

    seoDescription:
      "Premium ceramic coating service in Dubai offering long-term paint protection, high gloss shine, hydrophobic performance, UV resistance, and scratch protection by certified experts.",
  },
  {
    name: "AC Repair & Maintenance",
    banner: "/assets/services/ac-repair-&-maintenance.webp",
    heading: "Expert Car AC Repair & Maintenance",
    subheading: "Keep your vehicle’s AC running perfectly with expert repair and regular maintenance",
    contentimg: "/assets/services/ac-repair-content.webp",

    heroText:
      "Enjoy cool, fresh, and comfortable drives with our professional car AC repair and complete maintenance services.",

    description:
      "Keep your car cool and comfortable even in the hottest Dubai weather with our professional AC repair service. We ensure your vehicle’s air conditioning system works efficiently by diagnosing issues like refrigerant leaks, compressor faults, and faulty components. Regular AC maintenance not only improves cooling performance but also extends the lifespan of your system, enhances air quality, and prevents unexpected breakdowns. Our certified technicians use genuine parts and advanced tools to provide fast, reliable, and long-lasting AC service.",
    whyChooseUs: [
      {
        title: "Skilled & Certified AC Technicians",
        text: "Our expert team has years of experience handling all kinds of car AC problems. From simple gas refills to complex compressor repairs, we provide accurate solutions and careful workmanship every time.",
      },
      {
        title: "Modern & Accurate Diagnostics",
        text: "We use advanced AC diagnostic tools to quickly identify issues such as leaks, airflow problems, sensor faults, and compressor failure. This ensures fast, correct repairs without guesswork.",
      },
      {
        title: "Reliable & High-Quality Service",
        text: "We follow strict service standards and use OEM parts to ensure durability. Every repair and maintenance service is done with attention to detail, guaranteeing smooth and powerful cooling performance.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Professional AC Experts",
        desc: "Trained specialists offering accurate inspections and reliable repairs.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Perfect Cooling Efficiency",
        desc: "We restore strong cooling performance with detailed AC servicing and tuning.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Quick & Same-Day Repairs",
        desc: "Fast turnaround time with minimal waiting, ideal for busy schedules.",
      },
    ],

    seoTitle: "Car AC Repair Dubai | Professional Cooling System Service",

    faqs: [
      {
        Question: "How often should I service my car AC?",
        Answer:
          "It’s recommended to service your AC every 6–12 months depending on usage and weather conditions.",
      },
      {
        Question: "Do you use genuine AC parts?",
        Answer:
          "Yes, we only use high-quality OEM parts to ensure reliable performance and durability.",
      },
      {
        Question: "Can you fix AC leaks?",
        Answer:
          "Yes, we detect and repair refrigerant leaks, replace damaged hoses, and fix faulty seals or valves.",
      },
      {
        Question: "Do you offer AC diagnostics?",
        Answer:
          "Yes, we use modern diagnostic tools to find issues quickly and accurately.",
      },
      {
        Question: "How long does AC servicing take?",
        Answer:
          "Most AC services take 1–2 hours depending on the condition of the system.",
      },
      {
        Question: "Do you provide full AC maintenance?",
        Answer:
          "Yes, we offer complete AC maintenance including cleaning, gas refill, inspection, and performance testing.",
      },
    ],

    seoDescription:
      "Professional car AC repair and maintenance service in Dubai. We fix cooling issues, repair leaks, use genuine parts, and provide full diagnostics with certified technicians.",
  },
  {
    name: "Engine & ECU Service",
    banner: "/assets/services/engine-&-ecu-service.webp",
    heading: "Comprehensive Engine & ECU Maintenance",
    contentimg: "/assets/services/engine-content.webp",
    subheading: "Optimize your engine performance and ECU efficiency with our professional service",

    heroText:
      "Ensure your car’s engine and ECU perform at their best with our professional maintenance and repair services.",

    description:
      "Ensure your car runs smoothly and efficiently with our comprehensive engine and ECU service. We cover every aspect of your vehicle’s engine health, including precise diagnostics, performance optimization, and repair or replacement of critical components. Regular maintenance helps prevent costly repairs, improves fuel efficiency, and keeps your engine performing at its best. Our certified technicians use advanced diagnostic tools and genuine parts to deliver reliable, long-lasting results, giving you confidence in your vehicle’s performance and safety.",
    whyChooseUs: [
      {
        title: "Certified Engine & ECU Specialists",
        text: "Our experienced team is trained to handle all types of engine and ECU issues. From complex diagnostics to precise repairs, every service is delivered with care, accuracy, and reliability.",
      },
      {
        title: "Modern Diagnostic Equipment",
        text: "We use advanced scanning tools and the latest technology to detect engine inefficiencies, ECU errors, and potential faults. This allows us to provide fast, precise solutions and minimize downtime.",
      },
      {
        title: "Trusted & Long-Lasting Service",
        text: "We follow strict service standards and use only premium parts, ensuring optimal engine performance and long-term reliability. Your car stays smooth, safe, and efficient in all conditions.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Advanced ECU Diagnostics",
        desc: "State-of-the-art tools to identify and fix electronic system issues quickly and accurately.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Engine Performance Optimization",
        desc: "Enhancing engine output for smoother driving, better fuel efficiency, and reliable performance.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Precision Tuning & Calibration",
        desc: "Accurate ECU calibration and tuning to improve responsiveness and overall vehicle performance.",
      },
    ],

    seoTitle:
      "Engine & ECU Service Dubai | Expert Car Engine Maintenance & Repairs",

    faqs: [
      {
        Question: "How often should I service my engine?",
        Answer:
          "It is recommended every 10,000 km or 12 months, whichever comes first.",
      },
      {
        Question: "Do you use genuine engine parts?",
        Answer:
          "Yes, we only use high-quality OEM parts to ensure reliability and performance.",
      },
      {
        Question: "Can you diagnose ECU issues?",
        Answer:
          "Absolutely, our advanced ECU diagnostic tools accurately detect and resolve system faults.",
      },
      {
        Question: "How long does engine servicing take?",
        Answer:
          "Most engine and ECU services take 2–3 hours depending on the work required.",
      },
      {
        Question: "Do you perform engine tuning?",
        Answer:
          "Yes, safe performance tuning is available to optimize engine output.",
      },
      {
        Question: "Is preventive maintenance offered?",
        Answer:
          "Yes, we provide full preventive checks to keep your engine and ECU in top condition.",
      },
    ],

    seoDescription:
      "Professional engine and ECU service in Dubai. Expert diagnostics, repairs, performance tuning, cooling system maintenance, and genuine parts for long-lasting reliability.",
  },
  {
    name: "Brake System Service",
    banner: "/assets/services/brake-system-service.webp",
    heading: "Professional Brake System Repair & Maintenance",
    subheading: "Ensure safety and smooth stopping power with our comprehensive brake system service",
    contentimg: "/assets/services/brake-system-content.webp",

    heroText:
      "Stay safe on the road with our professional brake system repair and maintenance services.",

    description:
      "Stay safe on every journey with our professional brake system service. We thoroughly inspect and maintain all components, including brake pads, rotors, calipers, and fluid systems, to ensure your vehicle stops reliably under any conditions. Regular brake maintenance prevents accidents, reduces repair costs, and extends the life of your braking components. Our certified technicians use high-quality parts and precise techniques to deliver long-lasting performance, giving you peace of mind and confidence behind the wheel.",
    whyChooseUs: [
      {
        title: "Certified Brake Specialists",
        text: "Our expert team is trained in all types of brake systems, including hydraulic, ABS, and electronic brakes. They ensure your vehicle has optimal stopping power and safe performance every time.",
      },
      {
        title: "Advanced Inspection & Diagnostics",
        text: "We use modern diagnostic tools to thoroughly examine pads, rotors, calipers, lines, and fluid systems. This allows us to detect issues early and provide accurate, efficient repairs.",
      },
      {
        title: "Reliable & Long-Lasting Service",
        text: "We follow strict quality standards and use only genuine parts. Every service guarantees maximum safety, optimal braking performance, and long-term reliability for your vehicle.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Complete Brake Inspection",
        desc: "Thorough assessment of pads, discs, calipers, and overall braking performance.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Enhanced Road Safety",
        desc: "Ensuring maximum safety with precise, reliable brake servicing.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Professional Brake Repairs",
        desc: "Expert repair and replacement of worn-out components for smooth, consistent braking.",
      },
    ],

    seoTitle: "Car Brake Repair Dubai | Expert Brake System Service",

    faqs: [
      {
        Question: "How often should I check my brakes?",
        Answer:
          "We recommend a full brake inspection every 6 months or sooner if you notice unusual noises or reduced performance.",
      },
      {
        Question: "Do you replace brake pads and rotors?",
        Answer:
          "Yes, we replace all worn or damaged components with high-quality genuine parts.",
      },
      {
        Question: "Can you repair ABS systems?",
        Answer:
          "Yes, we service both standard and ABS electronic brake systems with precision.",
      },
      {
        Question: "How long does brake servicing take?",
        Answer:
          "Most brake services are completed within 1–2 hours, depending on the vehicle and work required.",
      },
      {
        Question: "Do you offer emergency brake repairs?",
        Answer:
          "Yes, urgent brake repair services are available to keep you safe on the road.",
      },
      {
        Question: "Do you perform brake fluid replacement?",
        Answer:
          "Yes, complete brake fluid replacement and system bleeding is included in our service.",
      },
    ],

    seoDescription:
      "Professional brake system repair and maintenance in Dubai. Expert technicians, genuine parts, advanced diagnostics, and full-service brake solutions to ensure your safety on the road.",
  },
  {
    name: "Transmission & Gearbox Repair",
    banner: "/assets/services/transmission-&-gearbox-repair.webp",
    heading: "Reliable Transmission & Gearbox Repairs",
    subheading: "Restore smooth shifting and reliable performance with expert transmission and gearbox repairs",
    contentimg: "/assets/services/transmission-content.webp",

    heroText:
      "Enjoy smooth, precise driving with our professional transmission and gearbox repair and maintenance services.",

    description:
      "Enjoy smooth and efficient driving with our expert transmission and gearbox service. We carefully inspect and maintain all components, including clutches, gears, bearings, and fluids, to ensure precise gear shifts and reliable power delivery. Regular maintenance prevents wear and costly repairs while extending the life of your transmission system. Our certified technicians use advanced tools and genuine parts to provide accurate, long-lasting service, keeping your vehicle performing at its best under all driving conditions.",
    whyChooseUs: [
      {
        title: "Certified Transmission Specialists",
        text: "Our experienced team handles all types of transmissions, including manual, automatic, and CVT systems. They can diagnose and repair even complex issues, guaranteeing smooth, reliable performance.",
      },
      {
        title: "Advanced Diagnostic Technology",
        text: "We use modern transmission diagnostic tools to inspect fluids, gears, clutches, and electronic sensors. This allows us to identify problems accurately and provide precise, fast solutions.",
      },
      {
        title: "Reliable & Long-Lasting Service",
        text: "We follow strict quality standards and use genuine parts for every repair. This ensures smooth gear shifts, long-term reliability, and maximum performance for your vehicle.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Smooth Gear Shifting",
        desc: "Restoring precise and responsive gear transitions for a comfortable driving experience.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Professional Gearbox Repairs",
        desc: "Expert repair and rebuilding of manual and automatic gearboxes using high-quality parts.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Advanced Performance Diagnostics",
        desc: "State-of-the-art scanning tools to detect transmission issues and optimize drivetrain performance.",
      },
    ],

    seoTitle:
      "Transmission & Gearbox Repair Dubai | Expert Car Transmission Service",

    faqs: [
      {
        Question: "How often should I check my transmission?",
        Answer:
          "It’s recommended to inspect your transmission every 20,000 km or as advised in your vehicle manual.",
      },
      {
        Question: "Do you repair both manual and automatic gearboxes?",
        Answer:
          "Yes, we service all types of transmissions, including manual, automatic, and CVT systems.",
      },
      {
        Question: "Can you replace the clutch?",
        Answer:
          "Yes, clutch inspection, repair, and replacement services are available.",
      },
      {
        Question: "How long does transmission servicing take?",
        Answer:
          "Most services are completed within 2–4 hours depending on the vehicle and work required.",
      },
      {
        Question: "Do you perform transmission fluid replacement?",
        Answer:
          "Yes, full fluid replacement and system checks are included in our service.",
      },
      {
        Question: "Do you offer gearbox diagnostics?",
        Answer:
          "Absolutely, we use advanced diagnostic tools for precise analysis and effective repairs.",
      },
    ],

    seoDescription:
      "Professional transmission and gearbox repair in Dubai. Expert diagnostics, repairs, clutch replacement, fluid servicing, and full support for manual and automatic transmissions.",
  },
  {
    name: "Suspension & Steering Maintenance",
    banner: "/assets/services/suspension-steering-repair.webp",
    heading: "Expert Suspension & Steering Services",
    subheading: "Maintain ride comfort and precise handling with our suspension and steering maintenance services",
    contentimg: "/assets/services/suspension-content.webp",

    heroText:
      "Drive smoothly and safely with our professional suspension and steering repair and maintenance services.",

    description:
      "Maintain a smooth and stable ride with our professional suspension and steering service. We thoroughly inspect and repair shocks, struts, springs, and steering components to ensure your vehicle handles safely and comfortably. Our service also includes wheel alignment to prevent uneven tire wear and improve driving performance. Certified technicians use high-quality parts and advanced tools to deliver precise, long-lasting repairs, enhancing vehicle stability, ride comfort, and overall safety on every journey.",
    whyChooseUs: [
      {
        title: "Certified Suspension & Steering Experts",
        text: "Our experienced specialists handle all types of suspension and steering systems, ensuring smooth handling, comfortable rides, and optimal safety under all driving conditions.",
      },
      {
        title: "Advanced Diagnostic Tools",
        text: "We use state-of-the-art equipment to check shocks, struts, springs, and steering components. Early detection of issues allows precise repairs, preventing further damage and ensuring stability.",
      },
      {
        title: "Reliable & Long-Lasting Service",
        text: "All maintenance is performed with attention to detail using premium components. This guarantees improved handling, reduced vibrations, and a safe, comfortable driving experience for you and your passengers.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Smooth & Stable Ride",
        desc: "Ensuring balanced suspension for a comfortable and vibration-free drive.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Precision Steering Repairs",
        desc: "Expert repair and maintenance of steering components for accurate control.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Noise & Vibration Control",
        desc: "Fixing shocks, bushings, and mounts to reduce unwanted noise and vibrations.",
      },
    ],

    seoTitle:
      "Suspension & Steering Service Dubai | Expert Car Handling Maintenance",

    faqs: [
      {
        Question: "How often should I check my suspension?",
        Answer:
          "It is recommended every 12 months or 15,000 km, whichever comes first.",
      },
      {
        Question: "Do you fix steering issues?",
        Answer:
          "Yes, we provide full steering system inspection, repair, and maintenance.",
      },
      {
        Question: "Can you do wheel alignment?",
        Answer:
          "Yes, we offer complete wheel alignment and balancing services for better performance.",
      },
      {
        Question: "How long does suspension servicing take?",
        Answer:
          "Most services are completed in 1–2 hours depending on the vehicle type.",
      },
      {
        Question: "Do you replace shocks and struts?",
        Answer:
          "Yes, we replace worn-out shocks and struts with high-quality components.",
      },
      {
        Question: "Do you check for vibrations and noise?",
        Answer:
          "Yes, full diagnostics for vibrations and noise are included in our service.",
      },
    ],

    seoDescription:
      "Professional suspension and steering maintenance in Dubai. Expert repair, wheel alignment, shock and strut replacement, certified technicians, and improved vehicle handling.",
  },
  {
    name: "Oil Change & Fluid Checks",
    banner: "/assets/services/oil-change-fluid-checks.webp",
    heading: "Comprehensive Oil Change & Fluid Maintenance",
    subheading: "Keep your engine healthy and running smoothly with regular oil changes and fluid inspections",
    contentimg: "/assets/services/oil-change-content.webp",

    heroText:
      "Keep your engine healthy and running efficiently with our professional oil change and fluid maintenance services.",

    description:
      "Keep your engine running smoothly and efficiently with our comprehensive oil change and fluid inspection service. We replace engine oil, check coolant, brake fluid, power steering fluid, and other essential fluids to ensure optimal performance. Regular maintenance helps prevent leaks, reduces wear, improves fuel efficiency, and extends the life of your engine. Our certified technicians use high-quality oils and fluids, performing thorough checks to maintain your vehicle’s reliability and prevent costly repairs.",
    whyChooseUs: [
      {
        title: "Certified Oil & Fluid Experts",
        text: "Our experienced team ensures every vehicle receives the correct oils and fluids for maximum engine performance, protection, and reliability.",
      },
      {
        title: "Advanced Diagnostic Checks",
        text: "We use modern diagnostic tools to monitor engine oil, coolant, brake, power steering, and transmission fluids, allowing early detection of potential issues and maintaining optimal fluid quality.",
      },
      {
        title: "Reliable & Long-Lasting Service",
        text: "Every oil change and fluid maintenance is done meticulously with high-quality products, guaranteeing smooth engine operation, improved fuel efficiency, and long-term reliability.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Premium Oil Replacement",
        desc: "Using high-quality oils for smooth, efficient engine performance.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Comprehensive Fluid Checks",
        desc: "Inspection, topping, and replacement of coolant, brake, power steering, and transmission fluids.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Fast & Reliable Service",
        desc: "Quick, efficient maintenance to minimize downtime and ensure your engine stays protected.",
      },
    ],

    seoTitle:
      "Oil Change & Fluid Checks Dubai | Expert Car Maintenance Service",

    faqs: [
      {
        Question: "How often should I change my engine oil?",
        Answer:
          "It’s recommended every 5,000–10,000 km depending on your vehicle type and manufacturer guidelines.",
      },
      {
        Question: "Do you check all car fluids?",
        Answer:
          "Yes, we inspect engine oil, coolant, brake, power steering, and transmission fluids.",
      },
      {
        Question: "Do you use high-quality oil?",
        Answer: "Yes, only OEM-recommended or premium synthetic oils are used.",
      },
      {
        Question: "How long does an oil change take?",
        Answer: "Most oil changes are completed within 30–45 minutes.",
      },
      {
        Question: "Do you offer preventive maintenance?",
        Answer: "Yes, we include full preventive checks during every service.",
      },
      {
        Question: "Can you top up fluids?",
        Answer:
          "Absolutely, we refill and top up all essential fluids as part of our service.",
      },
    ],

    seoDescription:
      "Professional oil change and fluid maintenance in Dubai. Certified technicians perform engine oil replacement, coolant, brake, power steering, and transmission fluid checks to keep your vehicle running smoothly.",
  },
  {
    name: "Electrical & Comfort Systems",
    banner: "/assets/services/electrical-comfort-repair.webp",
    contentimg: "/assets/services/electrical-comfort-system-content.webp",
    heading: "Electrical & Comfort System Repairs",
    subheading: "Ensure all electrical and comfort systems function flawlessly for a safe and enjoyable ride",

    heroText:
      "Keep your car’s advanced electrical and comfort systems working perfectly with our expert services.",

    description:
      "Our electrical and comfort systems service ensures all your car’s electronic features work perfectly. We repair and maintain infotainment systems, sensors, lighting, AC, seats, climate controls, and other comfort modules. Using advanced diagnostic tools, our certified technicians accurately identify and fix issues, perform software updates, and ensure long-lasting performance. Regular maintenance prevents unexpected breakdowns and keeps your car’s technology functioning reliably and efficiently.",
    whyChooseUs: [
      {
        title: "Certified Electrical Specialists",
        text: "Our skilled technicians diagnose and repair all aspects of your vehicle’s electrical and comfort systems. From infotainment to sensors and lighting, we guarantee reliable, long-lasting performance.",
      },
      {
        title: "Advanced Diagnostic Equipment",
        text: "We use modern diagnostic tools to quickly detect electrical faults, troubleshoot wiring, sensors, modules, and software systems, preventing future malfunctions.",
      },
      {
        title: "Reliable & High-Quality Service",
        text: "Every service is carried out with attention to detail, using high-quality parts and proven techniques. We ensure safe, consistent, and smooth operation of all your car’s advanced systems.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Advanced Electrical Diagnostics",
        desc: "Accurate detection and repair of all electrical systems, including wiring, sensors, and control modules.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Infotainment & Comfort Repairs",
        desc: "Ensuring your car’s entertainment and comfort systems perform flawlessly.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Software & Module Updates",
        desc: "Professional updates, programming, and calibration for modern car electronics.",
      },
    ],

    seoTitle:
      "Car Electrical & Comfort System Repairs Dubai | Expert Diagnostics & Repair",

    faqs: [
      {
        Question: "Do you repair infotainment systems?",
        Answer:
          "Yes, all infotainment and multimedia systems are fully serviced.",
      },
      {
        Question: "Can you fix car sensors?",
        Answer: "Yes, we perform full sensor diagnostics and repairs.",
      },
      {
        Question: "Do you update software?",
        Answer:
          "Yes, software updates, ECU programming, and module calibration are included.",
      },
      {
        Question: "Do you check wiring and connections?",
        Answer:
          "Absolutely, we perform thorough electrical diagnostics and wiring checks.",
      },
      {
        Question: "How long does electrical repair take?",
        Answer:
          "Most repairs are completed within 1–3 hours depending on the complexity.",
      },
      {
        Question: "Do you maintain comfort systems?",
        Answer:
          "Yes, AC, seat electronics, and other comfort systems are serviced and maintained.",
      },
    ],

    seoDescription:
      "Professional car electrical and comfort system repair in Dubai. Certified technicians provide diagnostics, software updates, wiring, sensors, infotainment, and lighting repairs for reliable vehicle performance.",
  },
  {
    name: "Fuel Injection Service",
    banner: "/assets/services/fuel-injection-service.webp",
    heading: "Expert Fuel Injection Cleaning & Maintenance",
    subheading: "Optimize engine performance and fuel efficiency with our professional fuel injection service",
    contentimg: "/assets/services/fuel-injection-content.webp",

    heroText:
      "Maximize engine efficiency and performance with our professional fuel injection cleaning and maintenance services.",

    description:
      "Our fuel injection service thoroughly cleans, inspects, and maintains all fuel injectors to ensure smooth engine performance and efficient fuel delivery. We remove clogs, check fuel flow, and adjust injector settings using specialized equipment. Regular servicing improves fuel efficiency, reduces emissions, prevents engine misfires, and extends the lifespan of your engine, keeping your vehicle running reliably and efficiently.",
    whyChooseUs: [
      {
        title: "Certified Fuel Injection Specialists",
        text: "Our experienced specialists service all types of fuel injection systems, ensuring accurate fuel delivery, improved engine performance, and long-lasting reliability.",
      },
      {
        title: "Advanced Diagnostic Equipment",
        text: "We use modern diagnostic tools to inspect fuel injectors, pumps, and system components. Accurate diagnostics allow precise repairs and help prevent future issues.",
      },
      {
        title: "Reliable & Long-Lasting Service",
        text: "Each fuel injection service is done carefully using high-quality products and proven techniques. We guarantee optimal engine efficiency, improved fuel economy, and consistent performance.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Injector Cleaning & Maintenance",
        desc: "Precision cleaning of fuel injectors for smooth fuel delivery and engine efficiency.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Fuel System Diagnostics",
        desc: "Advanced scanning and testing to detect fuel pump and injector issues accurately.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Performance Optimization",
        desc: "Enhancing engine output, fuel efficiency, and emission control through precise servicing.",
      },
    ],

    seoTitle: "Fuel Injection Service Dubai | Expert Engine Performance",

    faqs: [
      {
        Question: "How often should I service fuel injectors?",
        Answer: "It’s recommended every 20,000 km or at least once a year.",
      },
      {
        Question: "Do you clean all injectors?",
        Answer:
          "Yes, we perform full cleaning and maintenance of all fuel injectors.",
      },
      {
        Question: "Can you test fuel pressure?",
        Answer:
          "Yes, we provide accurate fuel pressure testing to ensure proper fuel delivery.",
      },
      {
        Question: "Do you improve fuel efficiency?",
        Answer:
          "Yes, cleaning and tuning optimize fuel delivery, improving fuel economy.",
      },
      {
        Question: "How long does fuel injection service take?",
        Answer: "Typically 1–2 hours depending on your vehicle.",
      },
      {
        Question: "Do you prevent clogging?",
        Answer:
          "Yes, preventive maintenance avoids injector blockages and ensures smooth performance.",
      },
    ],

    seoDescription:
      "Professional fuel injection service in Dubai. Certified technicians provide injector cleaning, fuel system diagnostics, throttle body cleaning, and engine performance optimization.",
  },
  {
    name: "Pre Purchase Inspection & Diagnostics",
    banner: "/assets/services/pre-purchase-inspection.webp",
    heading: "Comprehensive Pre-Purchase Vehicle Inspection",
    subheading: "Get a detailed assessment of any vehicle before purchase with expert inspection and diagnostics",
    contentimg: "/assets/services/pre-purchase-content.webp",

    heroText:
      "Make a safe and confident vehicle purchase with our detailed pre-purchase inspection and diagnostics.",

    description:
      "We perform comprehensive inspections of vehicles before purchase, covering the engine, transmission, suspension, brakes, electrical systems, and other critical components. Our certified technicians identify potential issues, hidden damages, and maintenance needs, providing a detailed report. This helps buyers make informed decisions, avoid costly repairs, and ensure the vehicle is safe, reliable, and roadworthy.",
    whyChooseUs: [
      {
        title: "Certified Pre-Purchase Specialists",
        text: "Our experienced specialists inspect all types of vehicles, ensuring that every component—from engine to electronics—is checked for safety, reliability, and proper functionality.",
      },
      {
        title: "Advanced Diagnostic Equipment",
        text: "Using state-of-the-art diagnostic tools, we detect hidden issues in engine, transmission, brakes, suspension, and electrical systems, helping prevent future problems and expensive repairs.",
      },
      {
        title: "Comprehensive Quality Assurance",
        text: "Every inspection is carried out with meticulous attention to detail. We provide a complete report with actionable recommendations, giving you confidence in your vehicle purchase.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Complete Vehicle Inspection",
        desc: "Detailed assessment of engine, transmission, brakes, suspension, and electrical systems.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Detailed Diagnostic Report",
        desc: "A comprehensive report with recommendations for informed and confident purchase decisions.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Road Test & Performance Check",
        desc: "Test drive and performance evaluation to ensure the vehicle operates perfectly before purchase.",
      },
    ],

    seoTitle: "Pre-Purchase Vehicle Inspection Dubai | Expert Car Diagnostics",

    faqs: [
      {
        Question: "What does pre-purchase inspection cover?",
        Answer:
          "We inspect engine, transmission, suspension, brakes, electrical systems, and more.",
      },
      {
        Question: "Do you provide a detailed report?",
        Answer:
          "Yes, a full diagnostic report with recommendations is provided.",
      },
      {
        Question: "How long does inspection take?",
        Answer: "Typically 1–2 hours depending on the vehicle.",
      },
      {
        Question: "Do you check for hidden damages?",
        Answer: "Yes, advanced diagnostics help uncover hidden issues.",
      },
      {
        Question: "Can I rely on your inspection?",
        Answer:
          "Absolutely, certified technicians ensure accuracy and reliability.",
      },
      {
        Question: "Do you test drive the car?",
        Answer: "Yes, a complete road test is included in the inspection.",
      },
    ],

    seoDescription:
      "Professional pre-purchase vehicle inspection in Dubai. Comprehensive diagnostics of engine, transmission, brakes, suspension, electrical systems, and road test performance evaluation.",
  },
  {
    name: "Performance Tuning & ECU Upgrade",
    banner: "/assets/services/performance-ecu-tuning.webp",
    contentimg: "/assets/services/performance-tuning-content.webp",
    heading: "Expert Performance Tuning & ECU Upgrades",
    subheading: "Enhance your vehicle’s power and efficiency with professional performance tuning and ECU upgrades",

    heroText:
      "Boost your vehicle’s power, efficiency, and driving experience with professional performance tuning and ECU upgrades.",

    description:
      "Our performance tuning service expertly optimizes engine and ECU settings to boost power, torque, and fuel efficiency while ensuring complete vehicle safety. Using advanced diagnostic tools and software, we fine-tune performance parameters for improved throttle response, smoother acceleration, and overall driving dynamics. Every adjustment is performed by certified technicians to guarantee reliability, longevity, and an enhanced driving experience.",
    whyChooseUs: [
      {
        title: "Certified Performance Specialists",
        text: "Our experienced specialists have extensive expertise in engine tuning and ECU upgrades. They ensure your vehicle delivers maximum power, efficiency, and driving pleasure safely.",
      },
      {
        title: "Advanced Diagnostic & Tuning Tools",
        text: "We use cutting-edge tools and software to accurately fine-tune your engine and ECU. This allows precise adjustments for enhanced torque, throttle response, and overall performance.",
      },
      {
        title: "Reliable & Long-Lasting Results",
        text: "Every tuning and ECU upgrade is performed with attention to detail using high-quality parts and proven techniques, ensuring safe, reliable, and durable performance improvements.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "ECU Mapping & Optimization",
        desc: "Precise tuning of the engine control unit for improved power, torque, and fuel efficiency.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Performance Boost",
        desc: "Enhancing throttle response and overall driving dynamics safely and effectively.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Custom Tuning Packages",
        desc: "Tailored ECU and performance upgrades designed to meet your specific driving preferences.",
      },
    ],

    seoTitle:
      "Performance Tuning & ECU Upgrade Dubai | Engine Optimization & Power Boost",

    faqs: [
      {
        Question: "Can you improve engine performance?",
        Answer:
          "Yes, our ECU tuning enhances engine power, torque, and throttle response.",
      },
      {
        Question: "Do you offer fuel efficiency tuning?",
        Answer:
          "Yes, we can optimize performance and fuel efficiency together.",
      },
      {
        Question: "Is ECU upgrade safe?",
        Answer:
          "Absolutely, all upgrades are done by certified technicians using safe methods.",
      },
      {
        Question: "How long does tuning take?",
        Answer: "Typically 2–3 hours depending on your vehicle and package.",
      },
      {
        Question: "Do you provide custom tuning?",
        Answer:
          "Yes, we offer tailor-made packages for enthusiasts seeking specific performance improvements.",
      },
      {
        Question: "Will tuning affect warranty?",
        Answer:
          "We guide clients and perform safe modifications to minimize any warranty impact.",
      },
    ],

    seoDescription:
      "Professional performance tuning and ECU upgrades in Dubai. Certified specialists improve engine power, torque, fuel efficiency, and driving dynamics safely and reliably.",
  },
  {
    name: "Paint Protection & Coatings",
    banner: "/assets/services/paint-protection-coating.webp",
    contentimg: "/assets/services/paint-protection-content.webp",
    heading: "Professional Paint Protection & Car Coatings",
    subheading: "Shield your vehicle’s paint and maintain its shine with premium protection and coating services",

    heroText:
      "Keep your car’s paint flawless and protected with professional PPF, ceramic coatings, and car dip color services.",

    description:
      "Our paint protection services provide a durable shield against scratches, fading, UV rays, bird droppings, and other environmental factors that can damage your vehicle's exterior. We offer professional application of PPF, ceramic coatings, and protective films to maintain your car’s glossy finish, enhance its aesthetic appeal, and preserve resale value. Certified technicians use precision techniques to ensure long-lasting protection and a flawless, showroom-quality look.",
    whyChooseUs: [
      {
        title: "Certified Paint Specialists",
        text: "Our experienced paint specialists are trained in applying PPF, ceramic coatings, and car dip colors. They ensure flawless protection, a perfect finish, and long-lasting results.",
      },
      {
        title: "Advanced Tools & Techniques",
        text: "We use modern machinery and precision application techniques to deliver durable coatings. Our professional process enhances shine, prevents wear, and maintains your vehicle’s premium look for years.",
      },
      {
        title: "Reliable & Long-Lasting Finish",
        text: "Every paint protection and coating service is performed with attention to detail using premium materials. We guarantee durable, scratch-resistant, and visually stunning results.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "PPF & Ceramic Coatings",
        desc: "Professional application of protective layers to guard your car’s paint from scratches, UV, and environmental damage.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Durable Paint Protection",
        desc: "Long-lasting protection that maintains your vehicle’s showroom-quality finish.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Gloss & Appearance Enhancement",
        desc: "High-quality coatings that enhance shine, clarity, and overall vehicle aesthetics.",
      },
    ],

    seoTitle:
      "Paint Protection & Car Coatings Dubai | PPF, Ceramic & Dip Color",

    faqs: [
      {
        Question: "Do you apply PPF and ceramic coating?",
        Answer:
          "Yes, we provide full paint protection services including PPF and ceramic coatings.",
      },
      {
        Question: "How long does the coating last?",
        Answer:
          "Depending on usage, coatings typically last 3–5 years with proper care.",
      },
      {
        Question: "Do you offer car dip color services?",
        Answer: "Yes, full car dip color application is available.",
      },
      {
        Question: "Can coatings prevent scratches?",
        Answer:
          "Yes, PPF and ceramic coatings reduce scratches, fading, and minor paint damage.",
      },
      {
        Question: "How long does application take?",
        Answer: "Typically 1–2 days depending on the type of service.",
      },
      {
        Question: "Do you guarantee finish quality?",
        Answer:
          "Yes, all coatings are applied by certified specialists to ensure lasting quality and shine.",
      },
    ],

    seoDescription:
      "Professional paint protection and coatings in Dubai. PPF, ceramic coatings, and car dip color services to protect your car from scratches, UV damage, and maintain a long-lasting showroom finish.",
  },
  {
    name: "Alloy Wheel Repair & Refurbishment",
    banner: "/assets/services/alloy-wheel-repair-refurbishment.webp",
    subheading: "Restore the look and strength of your alloy wheels with expert repair and refurbishment",
    contentimg: "/assets/services/alloy-wheel-content.webp",

    heading: "Expert Alloy Wheel Repair & Refurbishment",

    heroText:
      "Restore your alloy wheels to perfect condition with professional repair, refurbishment, and maintenance services.",

    description:
      "We repair and refurbish damaged alloy wheels, restoring both their structural integrity and visual appeal. Our services include straightening bent wheels, repairing cracks, refinishing surfaces, and applying protective coatings. Using advanced tools and high-quality materials, our certified technicians ensure your wheels are safe, durable, and look as good as new, enhancing both performance and aesthetics.",
    whyChooseUs: [
      {
        title: "Certified Alloy Wheel Specialists",
        text: "Our experts have extensive experience in repairing, refurbishing, and restoring alloy wheels to their original condition, ensuring precision, safety, and reliable results.",
      },
      {
        title: "Advanced Tools & Techniques",
        text: "We employ modern machinery and precision techniques to detect cracks, bends, and imperfections. Accurate repairs extend the life of your wheels and maintain their performance.",
      },
      {
        title: "Guaranteed Quality & Durability",
        text: "Each alloy wheel repair is done with meticulous attention to detail using premium materials. We ensure long-lasting, visually flawless results that keep your wheels looking brand new.",
      },
    ],

    features: [
      {
        icon: "/assets/services/wrench.png",
        title: "Wheel Straightening & Crack Repair",
        desc: "Precise repairs to restore structural integrity and ensure safe driving.",
      },
      {
        icon: "/assets/services/fixing.png",
        title: "Painting & Coating",
        desc: "High-quality finishes to enhance appearance and protect against corrosion.",
      },
      {
        icon: "/assets/services/settings.png",
        title: "Polishing & Maintenance",
        desc: "Keeping your wheels looking new while maintaining long-term performance.",
      },
    ],

    faqs: [
      {
        Question: "Do you repair damaged alloy wheels?",
        Answer:
          "Yes, we provide straightening, crack repair, and full refurbishment.",
      },
      {
        Question: "Can you polish and paint alloy wheels?",
        Answer:
          "Yes, we offer complete painting and polishing services for all wheels.",
      },
      {
        Question: "Do you balance wheels after repair?",
        Answer:
          "Yes, wheel balancing and alignment are included after repairs.",
      },
      {
        Question: "How long does repair take?",
        Answer:
          "Typically 1–2 days depending on wheel condition and service type.",
      },
      {
        Question: "Do you guarantee durability?",
        Answer:
          "Yes, we use premium materials and expert techniques for long-lasting results.",
      },
      {
        Question: "Do you offer preventive maintenance?",
        Answer:
          "Yes, regular inspections and maintenance checks are provided to prevent future damage.",
      },
    ],

    seoTitle:
      "Alloy Wheel Repair & Refurbishment Dubai | Expert Car Wheel Services",
    seoDescription:
      "Professional alloy wheel repair and refurbishment in Dubai. Services include straightening, crack repair, painting, coating, polishing, and wheel alignment by certified specialists.",
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
