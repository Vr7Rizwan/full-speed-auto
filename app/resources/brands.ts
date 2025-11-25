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
export const commonServices: { name: string; link: string; description: string }[] = [
  {
    name: "Radiator Repair & Service",
    link: "/services/radiator-repair-service",
    description: "Efficient radiator inspection, repair, and maintenance to keep your engine cool and prevent overheating."
  },
  {
    name: "Ceramic Coating",
    link: "/services/ceramic-coating",
    description: "High-quality ceramic coating for long-lasting paint protection and enhanced vehicle shine."
  },
  {
    name: "AC Repair & Maintenance",
    link: "/services/ac-repair-maintenance",
    description: "Professional air conditioning service to ensure optimal cooling performance and comfort."
  },
  {
    name: "Engine & ECU Service",
    link: "/services/engine-ecu-service",
    description: "Comprehensive engine and ECU diagnostics and repairs to maintain peak performance and efficiency."
  },
  {
    name: "Brake System Service",
    link: "/services/brake-system-service",
    description: "Complete brake inspections and repairs for reliable stopping power and safety."
  },
  {
    name: "Transmission & Gearbox Repair",
    link: "/services/transmission-gearbox-repair",
    description: "Expert transmission and gearbox maintenance to ensure smooth shifting and long-term reliability."
  },
  {
    name: "Suspension & Steering Maintenance",
    link: "/services/suspension-steering-maintenance",
    description: "Thorough suspension and steering checks to maintain handling, comfort, and vehicle stability."
  },
  {
    name: "Oil Change & Fluid Checks",
    link: "/services/oil-change-fluid-checks",
    description: "Regular oil changes and fluid inspections to protect your engine and ensure smooth operation."
  },
  {
    name: "Electrical & Comfort Systems",
    link: "/services/electrical-comfort-systems",
    description: "Repair and maintenance of all electrical and comfort systems for optimal functionality."
  },
  {
    name: "Fuel Injection Service",
    link: "/services/fuel-injection-service",
    description: "Efficient fuel injection cleaning and tuning to maximize engine efficiency and performance."
  },
  {
    name: "Pre Purchase Inspection & Diagnostics",
    link: "/services/pre-purchase-inspection-diagnostics",
    description: "Thorough vehicle inspections and diagnostics to help make informed buying decisions."
  },
  {
    name: "Performance Tuning & ECU Upgrade",
    link: "/services/performance-tuning-ecu-upgrade",
    description: "Expert ECU tuning and performance enhancements to boost power, efficiency, and driving dynamics."
  },
  {
    name: "Paint Protection & Coatings",
    link: "/services/paint-protection-coatings",
    description: "Professional paint protection and coating applications to preserve your vehicle’s finish and shine."
  },
  {
    name: "Alloy Wheel Repair & Refurbishment",
    link: "/services/alloy-wheel-repair-refurbishment",
    description: "Alloy wheel repair and refurbishment for improved appearance, safety, and durability."
  }

];
const brandsData: BrandType[] = [
  {
    name: "Audi",
    banner: "/assets/brands/audi.webp",
    heading: "Audi Repair and Maintenance Experts in Dubai",
    heroText:
      "Advanced Audi repair and maintenance solutions performed by certified and highly trained technicians.",
    description:
      "At Speed Full Auto Repairing Garage LLC, we deliver dealership-level Audi repair and maintenance services designed for absolute performance and long-term reliability. Our certified technicians handle every Audi model with precision, using advanced diagnostic tools, premium-grade equipment, and genuine parts to ensure unmatched service quality. From routine maintenance, oil changes, brake service, and suspension repairs to complex engine work, electrical diagnostics, transmission servicing, and performance tuning. we provide complete solutions tailored for luxury vehicles. Whether your Audi needs expert troubleshooting, preventive maintenance, or high-end performance upgrades, we guarantee transparent service, detailed reporting, and exceptional customer care. As Dubai’s trusted specialists in European and German automobiles, we ensure your Audi drives smoother, lasts longer, and performs at its peak.",
    whyChooseUs: [
      {
        title: "Certified Audi Specialists",
        text: "Our team of Audi-certified technicians brings extensive hands-on experience with German engineering and luxury vehicles. Every service, repair, and maintenance task is performed with meticulous attention to detail, ensuring your Audi operates exactly as the manufacturer intended. We focus on precision, reliability, and providing the premium driving experience that every Audi owner expects, keeping your car in peak condition for years to come."
      },
      {
        title: "Advanced Audi Diagnostic Technology",
        text: "We utilize state-of-the-art Audi-approved diagnostic systems to quickly and accurately identify any issues, minimizing downtime and guesswork. These advanced tools allow us to detect even the most complex problems, ensuring every repair adheres to Audi’s high technical standards. By combining modern technology with skilled expertise, we deliver efficient, reliable, and long-lasting solutions for your vehicle."
      },
      {
        title: "Guaranteed Genuine Audi Parts",
        text: "Authenticity and quality are our top priorities. That’s why we use only 100% genuine Audi parts sourced directly from trusted suppliers. Genuine parts ensure perfect fitment, superior durability, and optimal performance, helping your vehicle maintain its reliability, safety, and value over time. Every replacement part is carefully chosen to preserve the luxury and efficiency of your Audi."
      }
    ],
    seoTitle: "Audi Repair Dubai | Expert Audi Maintenance and Premium Service",
    seoDescription:
      "Professional Audi repair and maintenance services in Dubai. Our certified technicians provide expert diagnostics, genuine parts, routine servicing, oil changes, brake and suspension repairs, AC and transmission work, and performance tuning to keep your Audi performing at its best.",
    faqs: [
      {
        Question: "How often should I service my Audi in Dubai?",
        Answer: "Audi models typically require service every 10,000 km or once a year, whichever comes first, to maintain optimal performance, reliability, and safety."
      },
      {
        Question: "Do you use genuine Audi parts?",
        Answer: "Absolutely. We use only 100% genuine Audi OEM parts to ensure perfect compatibility, longevity, and superior performance for your vehicle."
      },
      {
        Question: "Do you offer Audi diagnostics?",
        Answer: "Yes, our advanced Audi diagnostic tools allow us to quickly and accurately identify any issues, ensuring precise, effective, and long-lasting repairs."
      },
      {
        Question: "Is Audi performance tuning available?",
        Answer: "Yes, we offer safe and professional ECU tuning and performance upgrades, designed to enhance your Audi’s power, efficiency, and overall driving experience."
      },
      {
        Question: "How long does Audi servicing take?",
        Answer: "Most standard services are completed within 1–2 hours, depending on the inspection and specific work required, with detailed reporting provided for transparency."
      },
      {
        Question: "Do you repair Audi suspension & AC?",
        Answer: "Yes, we provide comprehensive repair and maintenance services for suspension systems, AC units, brakes, transmission, and all major components to ensure your Audi remains in top condition."
      }
    ],
  },

  {
    name: "BMW",
    banner: "/assets/brands/bmw.webp",
    heading: "Reliable BMW Service and Repairs in Dubai",
    heroText:
      "Comprehensive BMW care provided by certified technicians, using advanced diagnostics and genuine parts to ensure every vehicle achieves peak performance, long-term reliability, and a premium driving experience.",
    description:
      "At our BMW service center, we provide complete and professional care to ensure your vehicle runs smoothly, efficiently, and reliably at all times. From routine maintenance to complex engine, transmission, and electrical system repairs, our certified technicians handle every BMW model with the utmost precision and expertise. We combine advanced diagnostic tools, high-quality equipment, and genuine BMW parts to maintain your vehicle's performance, safety, and luxurious feel. Our comprehensive services include oil changes, brake inspections, suspension and steering adjustments, transmission maintenance, AC servicing, battery and electrical system checks, and performance enhancements. Every service is carried out with attention to detail to provide a seamless, convenient, and stress-free experience for BMW owners in Dubai, ensuring your car remains in peak condition and delivers the driving excellence BMW is known for.",

    whyChooseUs: [
      {
        title: "BMW Expert Technicians",
        text: "Our team of highly trained BMW specialists brings extensive knowledge and hands-on experience with German engineering and luxury automotive systems. Each service, from routine maintenance to complex mechanical or electronic repair, is performed with meticulous care and precision. We focus on ensuring that your BMW continues to deliver exceptional performance, reliability, and a premium driving experience that meets the high expectations of its owners."
      },
      {
        title: "Advanced BMW Diagnostic Systems",
        text: "We utilize BMW-specific diagnostic systems that provide precise, real-time insights into your vehicle's performance and condition. This allows our technicians to quickly and accurately identify issues, even in complex systems, ensuring effective and lasting repairs. Our technology-driven approach ensures minimal downtime and a smoother, safer, and more enjoyable driving experience for every BMW owner."
      },
      {
        title: "Original BMW Spare Parts",
        text: "We use only genuine BMW OEM parts to preserve your vehicle's integrity, reliability, and performance. Each component is designed for perfect compatibility and long-term durability, ensuring optimal efficiency and maintaining the luxurious feel of your BMW. Using authentic parts guarantees safety, maximizes performance, and protects the value of your vehicle over time."
      }
    ],
    seoTitle: "BMW Repair Dubai | Expert BMW Maintenance and Premium Service",
    seoDescription:
      "Professional BMW repair and maintenance services in Dubai. Certified BMW technicians, genuine parts, advanced diagnostics, oil changes, brake and suspension service, AC and transmission repairs, and performance upgrades to keep your vehicle performing at its best.",
    faqs: [
      {
        Question: "How often should I service my BMW?",
        Answer: "BMW vehicles typically require servicing every 10,000 km or once a year, whichever comes first, to maintain optimal performance, safety, and reliability. Regular maintenance helps prevent costly repairs and ensures your car remains in top condition."
      },
      {
        Question: "Do you use genuine BMW parts?",
        Answer: "Yes, we use only 100% genuine BMW OEM parts. These parts ensure perfect fitment, durability, and optimal performance, keeping your vehicle running like it was designed by the manufacturer."
      },
      {
        Question: "Do you offer BMW diagnostics?",
        Answer: "Absolutely. We utilize advanced BMW ISTA diagnostic systems to quickly and accurately identify any issues, ensuring precise, effective, and long-lasting repairs."
      },
      {
        Question: "Can you repair BMW electrical issues?",
        Answer: "Yes, our expert technicians handle all types of electrical system repairs, including sensors, ECUs, wiring faults, and other electronic components, ensuring reliable functionality and safety."
      },
      {
        Question: "Do you offer BMW tuning?",
        Answer: "Yes, we provide professional ECU tuning and performance upgrades. Our services are designed to enhance your BMW’s power, efficiency, and overall driving dynamics safely and effectively."
      },
      {
        Question: "Do you service BMW hybrid models?",
        Answer: "Yes, we offer comprehensive maintenance and repair services for all BMW hybrid and electric models, including the BMW i-series. Our specialized care ensures these vehicles perform efficiently, reliably, and safely."
      }
    ]
  },

  {
    name: "Jaguar",
    banner: "/assets/brands/jaguar.jpg",
    heading: "Premium Jaguar Repairs and Maintenance in Dubai",
    heroText:
      "Comprehensive Jaguar care provided by certified technicians using genuine parts, advanced diagnostics, and professional expertise to ensure peak performance and reliability.",
    description:
      "At our Jaguar service center, we offer comprehensive maintenance and repair solutions designed to keep every Jaguar model performing at its absolute best. From routine servicing to complex engine, transmission, and electrical system repairs, our certified technicians handle each vehicle with precision, expertise, and care. We combine cutting-edge diagnostic tools, professional-grade equipment, and genuine Jaguar parts to ensure your car retains its performance, safety, and luxury appeal. Our extensive range of services includes oil changes, brake inspections, suspension and steering adjustments, transmission and clutch maintenance, AC servicing, battery and electrical system checks, and advanced performance enhancements. Each service is tailored to provide a seamless, convenient, and premium experience for Jaguar owners in Dubai, ensuring your vehicle remains reliable, safe, and consistently delivers the refined driving experience Jaguar is known for.",

    whyChooseUs: [
      {
        title: "Jaguar Certified Technicians",
        text: "Our highly trained Jaguar specialists bring deep knowledge and hands-on experience with British luxury automotive engineering. Each service, whether it is routine maintenance or complex mechanical repair, is executed with precision and meticulous attention to detail. We focus on preserving your Jaguar's performance, reliability, and refined driving experience, ensuring every aspect of your vehicle meets the highest standards expected by its owners."
      },
      {
        title: "Precision Jaguar Diagnostics",
        text: "We utilize Jaguar-approved diagnostic systems that deliver precise, real-time insights into your vehicle's condition. This allows our technicians to detect and resolve issues quickly and efficiently, whether mechanical or electronic, ensuring that every repair improves your car’s performance, safety, and longevity while maintaining the premium standards of the Jaguar brand."
      },
      {
        title: "Genuine Jaguar Parts Only",
        text: "We use exclusively 100% genuine Jaguar OEM parts to maintain your vehicle’s authenticity, performance, and long-term durability. Each component is engineered for perfect compatibility, ensuring optimal functionality, safety, and preserving the luxurious quality of your Jaguar. By using authentic parts, we ensure your vehicle operates at peak performance and retains its premium value over time."
      }
    ],

    seoTitle: "Jaguar Repair Dubai | Expert Jaguar Maintenance and Premium Service",
    seoDescription:
      "Professional Jaguar repair and maintenance services in Dubai. Certified Jaguar technicians, genuine parts, advanced diagnostics, oil changes, brakes, suspension, electrical systems, transmission, and performance upgrades.",
    faqs: [
      {
        Question: "How often does a Jaguar need maintenance?",
        Answer: "Jaguar vehicles typically require service every 13,000 km or once a year, whichever comes first, to ensure optimal performance, safety, and reliability."
      },
      {
        Question: "Do you use genuine Jaguar parts?",
        Answer: "Yes, we use only 100% genuine Jaguar OEM parts to guarantee perfect fitment, durability, and premium performance for your vehicle."
      },
      {
        Question: "Do you repair Jaguar engines and gearboxes?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, including advanced mechanical work, to keep your Jaguar performing at its best."
      },
      {
        Question: "Can you fix Jaguar suspension?",
        Answer: "Yes, we service all types of suspension systems, including air suspension and adaptive systems, ensuring comfort, stability, and precise handling."
      },
      {
        Question: "How long does Jaguar servicing take?",
        Answer: "Most Jaguar services are completed within 1–2 hours, depending on the inspection and work required, with detailed reports provided for transparency."
      },
      {
        Question: "Do you offer Jaguar performance upgrades?",
        Answer: "Yes, we provide professional ECU tuning and performance enhancement packages to safely improve your Jaguar's power, efficiency, and driving dynamics."
      }
    ]
  },

  {
    name: "Maserati",
    banner: "/assets/brands/maserati.webp",
    heading: "Luxury Maserati Maintenance and Repairs in Dubai",
    heroText:
      "Comprehensive Maserati service delivered by certified experts using advanced diagnostics and genuine parts to maintain performance, safety, and the signature Italian elegance of every vehicle.",
    description:
      "At our Maserati service center, we provide full-spectrum maintenance and repair solutions for all Maserati models, ensuring your car performs at its highest level. From routine servicing to complex engine, transmission, and electrical system repairs, our Maserati-certified technicians handle each vehicle with precision, care, and expertise. We combine advanced diagnostic tools, professional-grade equipment, and 100% genuine Maserati parts to preserve the vehicle’s performance, reliability, and luxurious appeal. Our wide array of services includes oil changes, brake inspections, suspension adjustments, transmission and clutch maintenance, AC servicing, battery and electrical system checks, and performance tuning. Every service is designed to offer a seamless, convenient, and premium experience for Maserati owners in Dubai, ensuring your car remains safe, reliable, and delivers the exhilarating performance and elegance that defines Maserati.",
    whyChooseUs: [
      {
        title: "Maserati Performance Specialists",
        text: "Our Maserati-certified technicians possess deep knowledge and extensive hands-on experience with high-performance Italian sports cars. Every service, from routine maintenance to complex mechanical or electronic repair, is carried out with meticulous precision to ensure your Maserati retains its power, handling, and luxurious driving experience. We focus on delivering performance, reliability, and the elegance that every Maserati owner expects."
      },
      {
        title: "Advanced Maserati Diagnostics",
        text: "We use dealer-level Maserati diagnostic systems that provide highly accurate and real-time insights into your vehicle's condition. This enables our technicians to identify and resolve even the most complex issues quickly and efficiently, ensuring all repairs align with Maserati’s strict technical standards and preserve the performance, safety, and longevity of your car."
      },
      {
        title: "Authentic Maserati Parts",
        text: "We use exclusively genuine Maserati OEM components to maintain your vehicle’s authenticity, performance, and long-term durability. Each part is engineered for perfect compatibility and premium quality, ensuring your Maserati continues to deliver optimal driving dynamics, safety, and preserves its value over time."
      }
    ],

    seoTitle: "Maserati Service Dubai | Premium Maserati Maintenance and Repairs",
    seoDescription:
      "Luxury Maserati maintenance and repair in Dubai. Certified Maserati technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, transmission, and performance upgrades.",
    faqs: [
      {
        Question: "How often should I service my Maserati?",
        Answer: "Maserati vehicles typically require servicing every 12,000 km or once a year, whichever comes first, to maintain peak performance, safety, and reliability."
      },
      {
        Question: "Do you use original Maserati parts?",
        Answer: "Yes, all replacement parts are 100% genuine Maserati OEM components to ensure perfect fitment, durability, and premium performance."
      },
      {
        Question: "Do you offer Maserati diagnostics?",
        Answer: "Absolutely. We use dealer-level diagnostic tools to quickly and accurately identify any issues, ensuring precise and long-lasting repairs."
      },
      {
        Question: "Do you repair Maserati brakes and suspension?",
        Answer: "Yes, we provide comprehensive repair services for all brake systems including Brembo brakes and advanced suspension setups to maintain safety, comfort, and performance."
      },
      {
        Question: "Is Maserati performance tuning available?",
        Answer: "Yes, we offer professional ECU tuning and performance upgrade packages, designed to safely enhance your Maserati’s power, handling, and overall driving experience."
      },
      {
        Question: "How long does Maserati servicing take?",
        Answer: "Most services are completed within 1 to 2 hours depending on the inspection and type of work required, with detailed service reports provided for full transparency."
      }
    ]
  },

  {
    name: "Maybach",
    banner: "/assets/brands/maybach.webp",
    heading: "Maybach Luxury Car Service in Dubai",
    heroText:
      "Comprehensive Maybach maintenance and repair performed by certified technicians using genuine parts and advanced diagnostics to ensure peak performance, safety, and ultimate luxury.",
    description:
      "At our Maybach service center, we provide full-spectrum maintenance and repair solutions designed to keep your ultra-luxury vehicle operating flawlessly. From routine servicing to complex engine, transmission, electrical, and suspension system repairs, our certified Maybach specialists handle each car with precision, expertise, and care. We combine state-of-the-art diagnostic tools, professional-grade equipment, and genuine Mercedes-Maybach parts to ensure your vehicle maintains its performance, reliability, and luxurious feel. Our extensive range of services includes oil changes, brake inspections, suspension and steering adjustments, transmission maintenance, AC and climate control servicing, battery and electrical system checks, and performance tuning. Every service is tailored to provide a seamless, convenient, and premium experience for Maybach owners in Dubai, ensuring your vehicle remains safe, reliable, and delivers the refined driving experience expected from an ultra-luxury car.",
    whyChooseUs: [
      {
        title: "Elite Maybach Technicians",
        text: "Our team of expert Maybach-certified technicians possesses extensive knowledge and hands-on experience with ultra-luxury vehicles. Each maintenance and repair service, whether routine or highly complex, is carried out with meticulous attention to detail. We focus on preserving every aspect of your Maybach, from performance and handling to comfort and refinement, ensuring a flawless driving experience that reflects the prestige and elite status of the brand. Our technicians continuously train on the latest technologies and service methods, guaranteeing that your vehicle receives the highest standard of care at all times."
      },
      {
        title: "High-Precision Maybach Diagnostics",
        text: "We utilize Maybach-approved diagnostic systems to gain precise, real-time insights into your vehicle's performance, condition, and potential issues. This advanced approach allows our technicians to quickly and accurately identify and resolve problems before they impact your car’s reliability or luxury experience. Every diagnostic check is performed with a focus on efficiency, accuracy, and maintaining the integrity, safety, and sophisticated standards of your Maybach. By combining experience with cutting-edge technology, we ensure your vehicle operates at its peak for years to come."
      },
      {
        title: "Guaranteed Original Maybach Parts",
        text: "We rely exclusively on 100% genuine Mercedes-Maybach OEM components to preserve your vehicle’s authenticity, reliability, and long-term performance. Every part is engineered for perfect compatibility, durability, and premium quality. Using authentic components ensures your Maybach retains its original value, optimum functionality, and luxurious feel while avoiding potential issues caused by aftermarket or non-certified parts. Our commitment to genuine parts guarantees that every service or repair enhances your vehicle’s performance, longevity, and overall driving experience."
      }
    ],

    seoTitle: "Maybach Repair Dubai | Premium Maybach Maintenance and Service",
    seoDescription:
      "Professional Maybach maintenance and repair in Dubai. Certified Maybach technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, transmission, and performance upgrades.",
    faqs: [
      {
        Question: "Do you use genuine Maybach parts?",
        Answer: "Yes, we use only 100% genuine Mercedes-Maybach OEM components to ensure perfect fit, reliability, and premium performance."
      },
      {
        Question: "How often should a Maybach be serviced?",
        Answer: "Maybach vehicles generally require service every 10,000 to 12,000 km or once a year, whichever comes first, to maintain optimal performance, safety, and reliability."
      },
      {
        Question: "Do you repair Maybach electrical systems?",
        Answer: "Yes, we provide expert repairs for all electrical systems including complex modules, climate control, infotainment, and other high-tech components."
      },
      {
        Question: "Do you service Maybach suspension?",
        Answer: "Yes, we handle all suspension systems, including AIRMATIC and hydraulic setups, ensuring smooth ride quality, stability, and comfort."
      },
      {
        Question: "How long does a Maybach inspection take?",
        Answer: "A full inspection typically takes 1 to 2 hours depending on the vehicle and work required, with detailed service reports provided for transparency."
      },
      {
        Question: "Do you offer Maybach tuning?",
        Answer: "Yes, we provide professional ECU tuning and performance upgrade packages, designed to safely enhance your Maybach’s power, handling, and overall driving dynamics."
      }
    ]
  },

  {
    name: "Mercedes",
    banner: "/assets/brands/mercedes.webp",
    heading: "Mercedes-Benz Expert Service and Repairs",
    heroText:
      "Comprehensive Mercedes-Benz maintenance and repair by certified technicians using genuine parts and advanced diagnostics to ensure peak performance, safety, and luxury.",
    description:
      "At our Mercedes-Benz service center, we provide full-service maintenance and repair solutions designed to keep your luxury vehicle in optimal condition. From routine servicing to complex engine, transmission, electrical, and suspension repairs, our certified technicians handle every model with precision and care. We combine advanced diagnostic tools, professional-grade equipment, and genuine Mercedes-Benz parts to ensure your car maintains its performance, reliability, and luxurious feel. Our wide range of services includes oil changes, brake inspections, suspension adjustments, transmission maintenance, AC servicing, battery and electrical system checks, and performance tuning. Every service is delivered with attention to detail and a seamless experience for Mercedes-Benz owners in Dubai, ensuring your vehicle remains safe, reliable, and performs at its peak.",
    whyChooseUs: [
      {
        title: "Certified Mercedes Engineers",
        text: "Our team of certified Mercedes-Benz professionals brings extensive expertise in luxury automotive engineering. Each maintenance and repair task, whether routine or highly complex, is carried out with meticulous precision to maintain your vehicle’s performance, comfort, and refinement. We continually update our skills on the latest Mercedes technologies to provide the highest standard of service and ensure your car drives flawlessly."
      },
      {
        title: "High-End Mercedes Diagnostics",
        text: "We utilize cutting-edge Mercedes diagnostic systems to gain precise, real-time insights into your vehicle's condition and performance. This allows our technicians to quickly identify and address any issues, ensuring repairs are accurate, efficient, and maintain the vehicle’s safety, reliability, and luxurious driving experience for years to come."
      },
      {
        title: "Authentic Mercedes Parts",
        text: "We use only 100% genuine Mercedes-Benz OEM components to preserve your vehicle’s authenticity, performance, and long-term reliability. Each part is designed for perfect compatibility and durability, ensuring your Mercedes retains its premium value, optimal functionality, and luxurious feel while avoiding potential issues caused by aftermarket or non-certified parts."
      }
    ],
    seoTitle: "Mercedes-Benz Service Dubai | Expert Maintenance and Repairs",
    seoDescription:
      "Professional Mercedes-Benz maintenance and repair in Dubai. Certified technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, performance tuning, and full-service care.",
    faqs: [
      {
        Question: "How often do I need to service my Mercedes?",
        Answer: "Mercedes-Benz vehicles generally require servicing every 10,000 km or once a year, whichever comes first, to maintain optimal performance, safety, and reliability."
      },
      {
        Question: "Do you use original Mercedes parts?",
        Answer: "Yes, we use only 100% genuine Mercedes-Benz OEM components to ensure perfect fit, longevity, and premium performance."
      },
      {
        Question: "Do you repair Mercedes electrical issues?",
        Answer: "Absolutely. We handle all electrical system repairs including ECUs, sensors, wiring faults, and other advanced electronic components with professional care."
      },
      {
        Question: "Is Mercedes performance tuning available?",
        Answer: "Yes, we provide AMG-safe ECU tuning and performance upgrades, designed to enhance your Mercedes’ power, efficiency, and driving dynamics."
      },
      {
        Question: "Do you fix Mercedes air suspension?",
        Answer: "Yes, we service all AIRMATIC and ABC suspension systems, ensuring optimal comfort, handling, and ride stability."
      },
      {
        Question: "How long does Mercedes servicing take?",
        Answer: "Routine maintenance typically takes 1–2 hours depending on the inspection and services required, with detailed reporting for transparency."
      }
    ]
  },

  {
    name: "Porsche",
    banner: "/assets/brands/porsche.webp",
    heading: "Porsche High-Performance Maintenance and Repairs",
    heroText:
      "Certified Porsche care with genuine parts and expert diagnostics for peak performance and reliability.",
    description:
      "At our Porsche service center, we provide full-service maintenance and repair solutions for all Porsche models, ensuring that your high-performance vehicle continues to operate at its optimum level. From routine servicing to complex engine, transmission, and electrical system repairs, our certified technicians handle every Porsche with precision and expertise. We combine advanced diagnostic tools, high-quality equipment, and genuine Porsche parts to maintain your car’s performance, safety, and signature driving experience. Our wide range of services includes oil changes, brake inspections, suspension tuning, transmission maintenance, AC servicing, electrical checks, and performance enhancements. Each service is designed to provide a seamless, premium experience for Porsche owners in Dubai, keeping your car reliable, safe, and performing at its best under all conditions.",
    whyChooseUs: [
      {
        title: "Porsche Performance Specialists",
        text: "Our team of highly trained Porsche technicians specializes in high-performance engines and advanced automotive systems. Every maintenance and repair task, whether routine or complex, is executed with meticulous attention to detail to preserve your Porsche’s signature speed, precision, handling, and driving excellence. Our specialists continuously update their skills with the latest Porsche technologies, ensuring your vehicle receives the highest standard of care."
      },
      {
        title: "State-of-the-Art Porsche Diagnostics",
        text: "We utilize Porsche-approved diagnostic tools, including PIWIS systems, to gain accurate insights into your vehicle's performance and condition. This advanced technology allows our technicians to quickly identify and resolve issues, ensuring repairs are precise, efficient, and performance-focused. Each diagnostic check is performed with a commitment to reliability, safety, and maintaining the high standards expected from a Porsche."
      },
      {
        title: "Guaranteed Genuine Porsche Parts",
        text: "We use only 100% genuine Porsche OEM components to preserve authenticity, reliability, and long-term performance. Every part is engineered for perfect compatibility, durability, and performance, ensuring your Porsche retains its factory-standard power, handling, and value. Using authentic components guarantees that every service or repair enhances your vehicle’s longevity, efficiency, and overall driving experience."
      }
    ],

    seoTitle: "Porsche Service Dubai | Expert Porsche Maintenance and Repairs",
    seoDescription:
      "Professional Porsche maintenance and repair in Dubai. Certified Porsche technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, performance tuning, and full high-performance service.",
    faqs: [
      {
        Question: "How often does a Porsche require servicing?",
        Answer: "Porsche vehicles typically require service every 10,000–15,000 km depending on driving conditions and model specifications, to maintain optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Porsche parts?",
        Answer: "Yes, we use only 100% genuine Porsche OEM components to ensure perfect fit, durability, and the high-performance standards expected from Porsche vehicles."
      },
      {
        Question: "Do you offer Porsche diagnostics?",
        Answer: "Absolutely. We use advanced Porsche PIWIS diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Porsche engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, including high-performance models, ensuring your Porsche continues to deliver exceptional speed and reliability."
      },
      {
        Question: "Do you offer Porsche tuning?",
        Answer: "Yes, we offer professional ECU tuning, performance kits, and exhaust upgrades, designed to safely enhance your Porsche’s power, efficiency, and driving dynamics."
      },
      {
        Question: "How long does Porsche maintenance take?",
        Answer: "Routine Porsche services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },
  {
    name: "ferrari",
    banner: "/assets/brands/ferrari.webp",
    heading: "Ferrari High-Performance Maintenance and Repairs",
    heroText:
      "Certified Ferrari care with genuine parts and expert diagnostics for unmatched performance and reliability.",
    description:
      "At our Ferrari service center, we provide complete maintenance and repair solutions for all Ferrari models, ensuring that your high-performance supercar operates at its peak. From routine servicing to complex engine, transmission, and electrical system repairs, our certified technicians handle every Ferrari with precision and expertise. We combine advanced diagnostic tools, professional-grade equipment, and genuine Ferrari parts to maintain your car’s performance, safety, and iconic driving experience. Our comprehensive services include oil changes, brake inspections, suspension tuning, transmission servicing, AC maintenance, electrical system checks, and performance enhancements. Every service is designed to provide a seamless, premium experience for Ferrari owners in Dubai, keeping your vehicle reliable, safe, and delivering the exhilaration Ferrari is known for.",
    whyChooseUs: [
      {
        title: "Ferrari Performance Specialists",
        text: "Our team of highly trained Ferrari technicians specializes in high-performance engines and advanced automotive systems unique to Ferrari vehicles. Every maintenance and repair task, whether routine or complex, is executed with meticulous attention to detail to preserve your Ferrari’s speed, handling, and signature driving excitement. Our specialists continuously update their expertise with the latest Ferrari technologies, ensuring your supercar receives the highest standard of care."
      },
      {
        title: "State-of-the-Art Ferrari Diagnostics",
        text: "We employ Ferrari-approved diagnostic tools to obtain precise insights into your vehicle's performance and condition. This advanced technology allows our technicians to quickly detect and resolve issues, ensuring repairs are accurate, efficient, and performance-focused. Each diagnostic is performed with a commitment to safety, reliability, and the high standards expected from a Ferrari."
      },
      {
        title: "Guaranteed Genuine Ferrari Parts",
        text: "We use only 100% genuine Ferrari OEM components to maintain authenticity, reliability, and long-term performance. Each part is engineered for perfect fit, durability, and performance, ensuring your Ferrari retains its factory-standard speed, handling, and value. Using authentic components guarantees that every service or repair enhances your vehicle’s longevity, efficiency, and extraordinary driving experience."
      }
    ],

    seoTitle: "Ferrari Service Dubai | Expert Ferrari Maintenance and Repairs",
    seoDescription:
      "Professional Ferrari maintenance and repair in Dubai. Certified Ferrari technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, performance tuning, and full high-performance service.",
    faqs: [
      {
        Question: "How often does a Ferrari require servicing?",
        Answer: "Ferrari vehicles typically require service every 8,000–12,000 km depending on driving conditions and model specifications to ensure optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Ferrari parts?",
        Answer: "Yes, we use only 100% genuine Ferrari OEM components to ensure perfect fit, durability, and the high-performance standards expected from Ferrari vehicles."
      },
      {
        Question: "Do you offer Ferrari diagnostics?",
        Answer: "Absolutely. We use advanced Ferrari diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Ferrari engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, including high-performance Ferrari models, ensuring your vehicle continues to deliver exceptional speed and handling."
      },
      {
        Question: "Do you offer Ferrari tuning?",
        Answer: "Yes, we provide professional ECU tuning, performance kits, and exhaust upgrades, designed to safely enhance your Ferrari’s power, responsiveness, and driving dynamics."
      },
      {
        Question: "How long does Ferrari maintenance take?",
        Answer: "Routine Ferrari services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },
  {
    name: "hyundai",
    banner: "/assets/brands/hyundai.webp",
    heading: "Hyundai Expert Maintenance and Repairs",
    heroText:
      "Certified Hyundai care with genuine parts and professional diagnostics for reliable performance and longevity.",
    description:
      "At our Hyundai service center, we provide complete maintenance and repair solutions for all Hyundai models, ensuring your vehicle remains safe, reliable, and efficient. From routine servicing to engine, transmission, brake, and electrical system repairs, our certified technicians handle every Hyundai with precision and expertise. We combine advanced diagnostic tools, high-quality equipment, and genuine Hyundai parts to maintain your car’s performance, safety, and driving comfort. Our services include oil changes, brake inspections, suspension checks, transmission servicing, AC maintenance, battery and electrical system inspections, and general performance checks. Every service is designed to offer a seamless, professional experience for Hyundai owners in Dubai, keeping your vehicle dependable and performing at its best.",
    whyChooseUs: [
      {
        title: "Certified Hyundai Technicians",
        text: "Our team of highly trained Hyundai specialists has extensive knowledge and hands-on experience with all Hyundai models. Every service, whether routine maintenance or complex repair, is carried out with meticulous attention to detail. We focus on maintaining your vehicle’s reliability, efficiency, and smooth performance, while also ensuring comfort and safety. Our technicians stay updated with the latest Hyundai technologies and service practices to deliver the highest standard of care at all times."
      },
      {
        title: "Advanced Hyundai Diagnostics",
        text: "We utilize Hyundai-approved diagnostic systems to quickly and accurately assess your vehicle’s performance and detect any potential issues. This advanced technology enables our technicians to identify problems before they impact your car’s efficiency or safety. Every diagnostic check is performed with precision and professionalism, ensuring your Hyundai remains dependable, safe, and optimally performing for years to come."
      },
      {
        title: "Genuine Hyundai Parts Only",
        text: "We use only 100% genuine Hyundai OEM parts to maintain your vehicle’s reliability, performance, and safety. Each component is engineered for perfect fit, durability, and long-lasting efficiency. By using authentic parts, we ensure that every repair or replacement preserves your Hyundai’s value, enhances performance, and guarantees a smooth, trouble-free driving experience."
      }
    ],

    seoTitle: "Hyundai Service Dubai | Expert Hyundai Maintenance and Repairs",
    seoDescription:
      "Professional Hyundai maintenance and repair in Dubai. Certified Hyundai technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, and full vehicle maintenance.",
    faqs: [
      {
        Question: "How often should I service my Hyundai?",
        Answer: "Hyundai vehicles typically require service every 10,000–12,000 km or once a year, depending on driving conditions and model specifications, to maintain optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Hyundai parts?",
        Answer: "Yes, we use only 100% genuine Hyundai OEM components to ensure perfect fit, durability, and the performance standards expected from Hyundai vehicles."
      },
      {
        Question: "Do you offer Hyundai diagnostics?",
        Answer: "Absolutely. We use advanced Hyundai diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Hyundai engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, ensuring your Hyundai continues to deliver reliable performance and smooth driving."
      },
      {
        Question: "Do you offer Hyundai performance checks?",
        Answer: "Yes, we provide detailed vehicle inspections, performance tuning, and system optimizations to keep your Hyundai running efficiently."
      },
      {
        Question: "How long does Hyundai maintenance take?",
        Answer: "Routine Hyundai services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },
  {
    name: "toyota",
    banner: "/assets/brands/toyota.webp",
    heading: "Toyota Expert Maintenance and Repairs",
    heroText:
      "Certified Toyota care with genuine parts and professional diagnostics for reliable performance and long-lasting durability.",
    description:
      "At our Toyota service center, we provide comprehensive maintenance and repair solutions for all Toyota models, ensuring your vehicle remains safe, dependable, and efficient. From routine servicing to engine, transmission, brake, and electrical system repairs, our certified technicians handle every Toyota with precision and expertise. We combine advanced diagnostic tools, professional-grade equipment, and genuine Toyota parts to maintain your car’s performance, safety, and driving comfort. Our services include oil changes, brake inspections, suspension checks, transmission servicing, AC maintenance, battery and electrical system inspections, and full performance evaluations. Every service is designed to provide a seamless and professional experience for Toyota owners in Dubai, keeping your vehicle reliable and performing at its best.",
    whyChooseUs: [
      {
        title: "Certified Toyota Technicians",
        text: "Our team of highly skilled Toyota-certified technicians possesses in-depth knowledge and hands-on experience with all Toyota models. Each service, whether routine maintenance or complex repair, is performed with meticulous attention to detail, ensuring your vehicle maintains reliability, efficiency, and smooth performance. Our technicians stay updated with the latest Toyota technologies and service practices to provide the highest standard of care at all times."
      },
      {
        title: "Advanced Toyota Diagnostics",
        text: "We employ Toyota-approved diagnostic systems to quickly and accurately assess your vehicle’s performance and detect any potential issues. This ensures timely, precise, and effective repairs while maintaining your car’s reliability, safety, and efficiency. Every diagnostic procedure is conducted with professionalism and attention to detail, helping your Toyota operate at its peak for years to come."
      },
      {
        title: "Genuine Toyota Parts Only",
        text: "We use exclusively 100% genuine Toyota OEM components to preserve your vehicle’s reliability, performance, and safety. Each part is engineered for perfect fit, durability, and long-lasting efficiency. By using authentic components, we ensure that every repair or replacement enhances your Toyota’s value, driving experience, and long-term performance."
      }
    ],
    seoTitle: "Toyota Service Dubai | Expert Toyota Maintenance and Repairs",
    seoDescription:
      "Professional Toyota maintenance and repair in Dubai. Certified Toyota technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, and full vehicle maintenance.",
    faqs: [
      {
        Question: "How often should I service my Toyota?",
        Answer: "Toyota vehicles typically require service every 10,000–12,000 km or once a year, depending on driving conditions and model specifications, to ensure optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Toyota parts?",
        Answer: "Yes, we use only 100% genuine Toyota OEM components to ensure perfect fit, durability, and the performance standards expected from Toyota vehicles."
      },
      {
        Question: "Do you offer Toyota diagnostics?",
        Answer: "Absolutely. We use advanced Toyota diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Toyota engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, ensuring your Toyota continues to deliver reliable performance and smooth driving."
      },
      {
        Question: "Do you offer Toyota performance checks?",
        Answer: "Yes, we provide detailed vehicle inspections, performance tuning, and system optimizations to keep your Toyota running efficiently and safely."
      },
      {
        Question: "How long does Toyota maintenance take?",
        Answer: "Routine Toyota services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },
  {
    name: "lamborghini",
    banner: "/assets/brands/lamborghini.webp",
    heading: "Lamborghini High-Performance Maintenance and Repairs",
    heroText:
      "Certified Lamborghini care with genuine parts and advanced diagnostics for ultimate performance and precision.",
    description:
      "At our Lamborghini service center, we provide full-spectrum maintenance and repair solutions for all Lamborghini models, ensuring your high-performance supercar operates at its peak. From routine servicing to complex engine, transmission, brake, and electrical system repairs, our certified technicians handle every Lamborghini with precision and expertise. We combine cutting-edge diagnostic tools, professional-grade equipment, and genuine Lamborghini parts to maintain your vehicle’s performance, safety, and iconic driving experience. Our services include oil changes, brake inspections, suspension adjustments, transmission servicing, AC maintenance, electrical system checks, and performance enhancements. Each service is designed to provide a seamless, premium experience for Lamborghini owners in Dubai, keeping your vehicle reliable, safe, and delivering the thrilling performance Lamborghini is renowned for.",
    whyChooseUs: [
      {
        title: "Lamborghini Performance Specialists",
        text: "Our team of highly trained Lamborghini technicians specializes in high-performance engines and advanced automotive systems unique to Lamborghini. Every maintenance and repair task, whether routine or highly complex, is executed with meticulous attention to detail to preserve your Lamborghini’s speed, handling, and signature driving excitement. Our specialists continuously update their knowledge with the latest Lamborghini technologies, ensuring your supercar receives the highest standard of care."
      },
      {
        title: "Advanced Lamborghini Diagnostics",
        text: "We employ Lamborghini-approved diagnostic tools to obtain precise insights into your vehicle's performance and condition. This advanced technology enables our technicians to quickly identify and resolve any issues, ensuring repairs are accurate, efficient, and performance-focused. Each diagnostic is performed with a commitment to safety, reliability, and maintaining the high standards expected from a Lamborghini."
      },
      {
        title: "Guaranteed Genuine Lamborghini Parts",
        text: "We use only 100% genuine Lamborghini OEM components to preserve authenticity, reliability, and long-term performance. Every part is engineered for perfect fit, durability, and factory-level performance, ensuring your Lamborghini retains its speed, handling, and value. Using authentic components guarantees that every service or repair enhances your vehicle’s longevity, efficiency, and extraordinary driving experience."
      }
    ],
    seoTitle: "Lamborghini Service Dubai | Expert Lamborghini Maintenance and Repairs",
    seoDescription:
      "Professional Lamborghini maintenance and repair in Dubai. Certified Lamborghini technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, performance tuning, and full high-performance service.",
    faqs: [
      {
        Question: "How often does a Lamborghini require servicing?",
        Answer: "Lamborghini vehicles typically require service every 8,000–12,000 km depending on driving conditions and model specifications to ensure optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Lamborghini parts?",
        Answer: "Yes, we use only 100% genuine Lamborghini OEM components to ensure perfect fit, durability, and the high-performance standards expected from Lamborghini vehicles."
      },
      {
        Question: "Do you offer Lamborghini diagnostics?",
        Answer: "Absolutely. We use advanced Lamborghini diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Lamborghini engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, including high-performance Lamborghini models, ensuring your vehicle continues to deliver exceptional speed and handling."
      },
      {
        Question: "Do you offer Lamborghini tuning?",
        Answer: "Yes, we provide professional ECU tuning, performance kits, and exhaust upgrades designed to safely enhance your Lamborghini’s power, responsiveness, and driving dynamics."
      },
      {
        Question: "How long does Lamborghini maintenance take?",
        Answer: "Routine Lamborghini services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },
  {
    name: "honda",
    banner: "/assets/brands/honda.webp",
    heading: "Honda Expert Maintenance and Repairs",
    heroText:
      "Certified Honda care with genuine parts and professional diagnostics for reliable performance and long-lasting durability.",
    description:
      "At our Honda service center, we provide complete maintenance and repair solutions for all Honda models, ensuring your vehicle remains safe, dependable, and efficient. From routine servicing to engine, transmission, brake, and electrical system repairs, our certified technicians handle every Honda with precision and expertise. We combine advanced diagnostic tools, professional-grade equipment, and genuine Honda parts to maintain your car’s performance, safety, and driving comfort. Our services include oil changes, brake inspections, suspension checks, transmission servicing, AC maintenance, battery and electrical system inspections, and full performance evaluations. Every service is designed to provide a seamless and professional experience for Honda owners in Dubai, keeping your vehicle reliable, efficient, and performing at its best.",
    whyChooseUs: [
      {
        title: "Certified Honda Technicians",
        text: "Our team of highly trained Honda-certified technicians possesses extensive knowledge and hands-on experience with all Honda models. Each service, whether routine maintenance or complex repair, is performed with meticulous attention to detail, ensuring your vehicle maintains reliability, efficiency, and smooth performance. Our technicians stay updated with the latest Honda technologies and service practices to provide the highest standard of care at all times."
      },
      {
        title: "Advanced Honda Diagnostics",
        text: "We employ Honda-approved diagnostic systems to quickly and accurately assess your vehicle’s performance and detect any potential issues. This ensures timely, precise, and effective repairs while maintaining your car’s reliability, safety, and efficiency. Every diagnostic procedure is conducted with professionalism and attention to detail, helping your Honda operate at its peak for years to come."
      },
      {
        title: "Genuine Honda Parts Only",
        text: "We use exclusively 100% genuine Honda OEM components to preserve your vehicle’s reliability, performance, and safety. Each part is engineered for perfect fit, durability, and long-lasting efficiency. By using authentic components, we ensure that every repair or replacement enhances your Honda’s value, driving experience, and long-term performance."
      }
    ],
    seoTitle: "Honda Service Dubai | Expert Honda Maintenance and Repairs",
    seoDescription:
      "Professional Honda maintenance and repair in Dubai. Certified Honda technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, and full vehicle maintenance.",
    faqs: [
      {
        Question: "How often should I service my Honda?",
        Answer: "Honda vehicles typically require service every 10,000–12,000 km or once a year, depending on driving conditions and model specifications, to maintain optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Honda parts?",
        Answer: "Yes, we use only 100% genuine Honda OEM components to ensure perfect fit, durability, and the performance standards expected from Honda vehicles."
      },
      {
        Question: "Do you offer Honda diagnostics?",
        Answer: "Absolutely. We use advanced Honda diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Honda engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, ensuring your Honda continues to deliver reliable performance and smooth driving."
      },
      {
        Question: "Do you offer Honda performance checks?",
        Answer: "Yes, we provide detailed vehicle inspections, performance tuning, and system optimizations to keep your Honda running efficiently and safely."
      },
      {
        Question: "How long does Honda maintenance take?",
        Answer: "Routine Honda services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
  },

  {
    name: "mazda",
    banner: "/assets/brands/mazda.webp",
    heading: "Mazda Expert Maintenance and Repairs",
    heroText:
      "Certified Mazda care with genuine parts and professional diagnostics for reliable performance and long-lasting durability.",
    description:
      "At our Mazda service center, we provide comprehensive maintenance and repair solutions for all Mazda models, ensuring your vehicle remains safe, dependable, and efficient. From routine servicing to engine, transmission, brake, and electrical system repairs, our certified technicians handle every Mazda with precision and expertise. We combine advanced diagnostic tools, professional-grade equipment, and genuine Mazda parts to maintain your car’s performance, safety, and driving comfort. Our services include oil changes, brake inspections, suspension checks, transmission servicing, AC maintenance, battery and electrical system inspections, and full performance evaluations. Each service is designed to provide a seamless and professional experience for Mazda owners in Dubai, keeping your vehicle reliable, efficient, and performing at its best.",
    whyChooseUs: [
      {
        title: "Certified Mazda Technicians",
        text: "Our team of highly trained Mazda-certified technicians possesses in-depth knowledge and hands-on experience with all Mazda models. Each service, whether routine maintenance or complex repair, is performed with meticulous attention to detail, ensuring your vehicle maintains reliability, efficiency, and smooth performance. Our technicians stay updated with the latest Mazda technologies and service practices to provide the highest standard of care at all times."
      },
      {
        title: "Advanced Mazda Diagnostics",
        text: "We employ Mazda-approved diagnostic systems to quickly and accurately assess your vehicle’s performance and detect any potential issues. This ensures timely, precise, and effective repairs while maintaining your car’s reliability, safety, and efficiency. Every diagnostic procedure is conducted with professionalism and attention to detail, helping your Mazda operate at its peak for years to come."
      },
      {
        title: "Genuine Mazda Parts Only",
        text: "We use exclusively 100% genuine Mazda OEM components to preserve your vehicle’s reliability, performance, and safety. Each part is engineered for perfect fit, durability, and long-lasting efficiency. By using authentic components, we ensure that every repair or replacement enhances your Mazda’s value, driving experience, and long-term performance."
      }
    ],
    seoTitle: "Mazda Service Dubai | Expert Mazda Maintenance and Repairs",
    seoDescription:
      "Professional Mazda maintenance and repair in Dubai. Certified Mazda technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, electrical systems, and full vehicle maintenance.",
    faqs: [
      {
        Question: "How often should I service my Mazda?",
        Answer: "Mazda vehicles typically require service every 10,000–12,000 km or once a year, depending on driving conditions and model specifications, to maintain optimal performance and reliability."
      },
      {
        Question: "Do you use genuine Mazda parts?",
        Answer: "Yes, we use only 100% genuine Mazda OEM components to ensure perfect fit, durability, and the performance standards expected from Mazda vehicles."
      },
      {
        Question: "Do you offer Mazda diagnostics?",
        Answer: "Absolutely. We use advanced Mazda diagnostic tools to quickly and accurately identify any issues, ensuring precise and effective repairs."
      },
      {
        Question: "Do you repair Mazda engines?",
        Answer: "Yes, we provide comprehensive engine and gearbox repair services, ensuring your Mazda continues to deliver reliable performance and smooth driving."
      },
      {
        Question: "Do you offer Mazda performance checks?",
        Answer: "Yes, we provide detailed vehicle inspections, performance tuning, and system optimizations to keep your Mazda running efficiently and safely."
      },
      {
        Question: "How long does Mazda maintenance take?",
        Answer: "Routine Mazda services typically take 1–2 hours depending on inspection and specific maintenance needs, with detailed reports provided for transparency."
      }
    ]
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