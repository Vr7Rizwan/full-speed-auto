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
    name: "Radiator Repair and Service",
    link: "/services/radiator-repair-service",
    description: "Efficient radiator inspection, repair, and maintenance to keep your engine cool and prevent overheating."
  },
  {
    name: "Ceramic Coating",
    link: "/services/ceramic-coating",
    description: "High-quality ceramic coating for long-lasting paint protection and enhanced vehicle shine."
  },
  {
    name: "AC Repair and Maintenance",
    link: "/services/ac-repair-maintenance",
    description: "Professional air conditioning service to ensure optimal cooling performance and comfort."
  },
  {
    name: "Engine and ECU Service",
    link: "/services/engine-ecu-service",
    description: "Comprehensive engine and ECU diagnostics and repairs to maintain peak performance and efficiency."
  },
  {
    name: "Brake System Service",
    link: "/services/brake-system-service",
    description: "Complete brake inspections and repairs for reliable stopping power and safety."
  },
  {
    name: "Transmission and Gearbox Repair",
    link: "/services/transmission-gearbox-repair",
    description: "Expert transmission and gearbox maintenance to ensure smooth shifting and long-term reliability."
  },
  {
    name: "Suspension and Steering Maintenance",
    link: "/services/suspension-steering-maintenance",
    description: "Thorough suspension and steering checks to maintain handling, comfort, and vehicle stability."
  },
  {
    name: "Oil Change and Fluid Checks",
    link: "/services/oil-change-fluid-checks",
    description: "Regular oil changes and fluid inspections to protect your engine and ensure smooth operation."
  },
  {
    name: "Electrical and Comfort Systems",
    link: "/services/electrical-comfort-systems",
    description: "Repair and maintenance of all electrical and comfort systems for optimal functionality."
  },
  {
    name: "Fuel Injection Service",
    link: "/services/fuel-injection-service",
    description: "Efficient fuel injection cleaning and tuning to maximize engine efficiency and performance."
  },
  {
    name: "Pre Purchase Inspection and Diagnostics",
    link: "/services/pre-purchase-inspection-diagnostics",
    description: "Thorough vehicle inspections and diagnostics to help make informed buying decisions."
  },
  {
    name: "Performance Tuning and ECU Upgrade",
    link: "/services/performance-tuning-ecu-upgrade",
    description: "Expert ECU tuning and performance enhancements to boost power, efficiency, and driving dynamics."
  },
  {
    name: "Paint Protection and Coatings",
    link: "/services/paint-protection-coatings",
    description: "Professional paint protection and coating applications to preserve your vehicle’s finish and shine."
  },
  {
    name: "Alloy Wheel Repair and Refurbishment",
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
    banner: "/assets/brands/jaguar.webp",
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
{
  name: "bentley",
  banner: "/assets/brands/bentley.webp",
  heading: "Bentley Expert Maintenance and Repairs",
  heroText:
    "Certified Bentley care with genuine parts, precision diagnostics, and premium maintenance for unmatched performance and reliability.",

  description:
    "Our Bentley service center delivers world-class maintenance and repair solutions tailored for all Bentley models, ensuring your luxury vehicle remains powerful, refined, and exceptionally reliable. From routine servicing to advanced engine, suspension, transmission, and electrical system repairs, our certified Bentley specialists handle every task with unmatched precision. We use cutting-edge diagnostic tools, factory-approved equipment, and 100% genuine Bentley components to maintain peak performance and driving comfort. Our services include engine oil changes, brake servicing, suspension calibration, transmission maintenance, AC inspection, battery diagnostics, electrical system repairs, and complete performance evaluations. Each service guarantees a seamless, premium experience for Bentley owners in Dubai, ensuring your vehicle stays elegant, efficient, and performing at its highest standard.",

  whyChooseUs: [
    {
      title: "Certified Bentley Technicians",
      text: "Our highly trained Bentley-certified technicians bring extensive experience and elite expertise in servicing all Bentley models, including Continental, Bentayga, Flying Spur, and Mulsanne. Every maintenance and repair task is executed with precision, ensuring your vehicle maintains its luxury performance, safety, and refinement. Our experts continuously stay updated with Bentley’s latest engineering standards and service protocols to deliver uncompromised quality."
    },
    {
      title: "Advanced Bentley Diagnostics",
      text: "We utilize Bentley-approved diagnostic systems that provide accurate, real-time assessments of your vehicle’s performance and health. This allows our specialists to identify issues quickly and deliver precise, effective repairs. Each diagnostic procedure is carried out with professionalism and technical accuracy, ensuring your Bentley continues to offer smooth power delivery, safety, and exceptional road performance."
    },
    {
      title: "Genuine Bentley Parts Only",
      text: "To preserve the luxury, durability, and engineering excellence of your Bentley, we install only 100% genuine Bentley OEM parts. Every component is engineered to perfection, ensuring optimal fitment, long-lasting reliability, and top-tier performance. By using authentic Bentley parts, we safeguard your vehicle’s value, safety, and signature driving experience."
    }
  ],

  seoTitle: "Bentley Service Dubai | Luxury Bentley Maintenance & Repairs",
  seoDescription:
    "Premium Bentley maintenance and repair in Dubai. Certified Bentley specialists, genuine parts, advanced diagnostics, engine, suspension, brakes, AC, and complete Bentley care.",

  faqs: [
    {
      Question: "How often should I service my Bentley?",
      Answer: "Bentley vehicles generally require servicing every 10,000–12,000 km or once a year to maintain optimal performance, safety, and long-term reliability."
    },
    {
      Question: "Do you use genuine Bentley parts?",
      Answer: "Yes, we use only 100% genuine Bentley OEM components to ensure perfect compatibility, reliability, and performance for your luxury vehicle."
    },
    {
      Question: "Do you offer Bentley diagnostics?",
      Answer: "Yes, we use advanced Bentley diagnostic tools to accurately identify issues and ensure precise, efficient repairs for your vehicle."
    },
    {
      Question: "Do you repair Bentley engines?",
      Answer: "Absolutely. We offer complete engine and gearbox repair services for all Bentley models, ensuring smooth performance and long-term reliability."
    },
    {
      Question: "Do you offer Bentley performance checks?",
      Answer: "Yes, we provide detailed performance inspections, system calibrations, and optimization services to keep your Bentley running at its best."
    },
    {
      Question: "How long does Bentley maintenance take?",
      Answer: "Routine Bentley maintenance typically takes 1–2 hours depending on the required services, followed by a detailed inspection report."
    }
  ]
},
{
  name: "mini cooper",
  banner: "/assets/brands/mini-cooper.webp",
  heading: "Mini Cooper Expert Maintenance and Repairs",
  heroText:
    "Certified Mini Cooper care with genuine parts, precision diagnostics, and expert maintenance to keep your vehicle performing at its best.",

  description:
    "Our Mini Cooper service center provides complete maintenance and repair solutions for all Mini models, ensuring your vehicle remains responsive, efficient, and fun to drive. Whether it's routine servicing, engine work, suspension tuning, transmission repair, or electrical troubleshooting, our certified Mini technicians handle every task with precision. Using advanced diagnostic tools, factory-approved equipment, and genuine Mini Cooper parts, we maintain your car’s performance, safety, and signature go-kart handling experience. Our services include engine oil changes, brake servicing, suspension checks, transmission maintenance, AC inspection, battery testing, electrical diagnostics, and full performance evaluations. We ensure every Mini Cooper receives premium care, delivering a smooth, reliable, and enjoyable driving experience for owners in Dubai.",

  whyChooseUs: [
    {
      title: "Certified Mini Cooper Technicians",
      text: "Our Mini Cooper–certified technicians bring specialized expertise in servicing all Mini models, including Cooper, Cooper S, Clubman, Countryman, and John Cooper Works. Each maintenance and repair service is performed with accuracy and attention to detail, ensuring optimal performance, safety, and longevity. Our team stays updated with Mini’s latest engineering standards and service techniques to provide exceptional care every time."
    },
    {
      title: "Advanced Mini Cooper Diagnostics",
      text: "We use Mini-approved diagnostic systems capable of detecting even the smallest issues with precision. These advanced tools allow our experts to analyze engine performance, transmission behavior, electrical systems, and onboard sensors in real time. Accurate diagnostics ensure timely repairs, improved reliability, and an optimal driving experience for your Mini Cooper."
    },
    {
      title: "Genuine Mini Cooper Parts Only",
      text: "To maintain your Mini Cooper’s performance, safety, and value, we install only 100% genuine Mini OEM parts. Each component is engineered for perfect fitment, long-lasting durability, and seamless compatibility with your vehicle. By using authentic Mini parts, we ensure dependable performance, enhanced driving comfort, and long-term reliability."
    }
  ],

  seoTitle: "Mini Cooper Service Dubai | Expert Mini Maintenance & Repairs",
  seoDescription:
    "Professional Mini Cooper maintenance and repair in Dubai. Certified Mini technicians, genuine parts, advanced diagnostics, engine, brakes, suspension, AC, and complete Mini servicing.",

  faqs: [
    {
      Question: "How often should I service my Mini Cooper?",
      Answer: "Mini Cooper vehicles typically require servicing every 8,000–10,000 km or once a year to maintain peak performance, efficiency, and safety."
    },
    {
      Question: "Do you use genuine Mini Cooper parts?",
      Answer: "Yes, we use only 100% genuine Mini Cooper OEM components to ensure perfect fit, long-term performance, and factory-level reliability."
    },
    {
      Question: "Do you offer Mini Cooper diagnostics?",
      Answer: "Absolutely. We use advanced Mini diagnostic tools to accurately identify issues in the engine, transmission, electronics, and performance systems."
    },
    {
      Question: "Do you repair Mini Cooper engines?",
      Answer: "Yes, we provide complete engine and gearbox repair services for all Mini models, ensuring reliable performance and smooth power delivery."
    },
    {
      Question: "Do you offer Mini Cooper performance checks?",
      Answer: "Yes, we perform full performance inspections, system calibrations, and handling optimization to keep your Mini Cooper running at its best."
    },
    {
      Question: "How long does Mini Cooper maintenance take?",
      Answer: "Routine Mini Cooper servicing typically takes 1–2 hours, depending on the inspection details and required maintenance tasks."
    }
  ]
},
{
  name: "volkswagen",
  banner: "/assets/brands/volkswagen.webp",
  heading: "Volkswagen Expert Maintenance and Repairs",
  heroText:
    "Certified Volkswagen care with genuine parts, advanced diagnostics, and precision maintenance for reliable and efficient performance.",

  description:
    "Our Volkswagen service center provides comprehensive maintenance and repair solutions for all VW models, ensuring your vehicle remains safe, efficient, and smooth on the road. From routine servicing to advanced engine, transmission, brake, and electrical system repairs, our certified Volkswagen technicians deliver expert care with exceptional precision. Using advanced diagnostic technology, manufacturer-approved equipment, and 100% genuine Volkswagen OEM parts, we maintain your vehicle’s performance, comfort, and long-term durability. Our services include oil changes, brake inspections, suspension evaluations, transmission servicing, AC maintenance, battery diagnostics, electrical troubleshooting, and full performance checks. Each service is carefully designed to provide a premium and hassle-free experience for Volkswagen owners in Dubai, ensuring your car performs at its absolute best.",

  whyChooseUs: [
    {
      title: "Certified Volkswagen Technicians",
      text: "Our team of Volkswagen-certified technicians has extensive experience with all VW models, including Golf, Passat, Jetta, Tiguan, Touareg, Polo, and Arteon. Every maintenance or repair task is executed with meticulous attention to detail to preserve your vehicle’s reliability, safety, and driving comfort. Our experts stay updated with the latest Volkswagen technology and service protocols to ensure top-tier care."
    },
    {
      title: "Advanced Volkswagen Diagnostics",
      text: "We use Volkswagen-approved diagnostic systems to evaluate your vehicle’s performance with accuracy and speed. These advanced tools help identify issues in the engine, transmission, electronics, and onboard sensors in real time. With precise diagnostics, we deliver accurate repairs that enhance your car’s dependability, fuel efficiency, and overall performance."
    },
    {
      title: "Genuine Volkswagen Parts Only",
      text: "To ensure optimal performance, safety, and long-term durability, we install only 100% genuine Volkswagen OEM parts. Each component is engineered to match VW standards for perfect fitment and reliability. By using authentic parts, we maintain your Volkswagen’s value, efficiency, and signature driving experience."
    }
  ],

  seoTitle: "Volkswagen Service Dubai | Expert VW Maintenance & Repairs",
  seoDescription:
    "Professional Volkswagen maintenance and repair in Dubai. Certified VW technicians, genuine parts, advanced diagnostics, engine, suspension, brakes, AC, and complete Volkswagen servicing.",

  faqs: [
    {
      Question: "How often should I service my Volkswagen?",
      Answer: "Volkswagen vehicles typically require servicing every 10,000–12,000 km or once a year, depending on driving conditions and model requirements."
    },
    {
      Question: "Do you use genuine Volkswagen parts?",
      Answer: "Yes, we use only 100% genuine Volkswagen OEM components to ensure maximum reliability, durability, and compatibility."
    },
    {
      Question: "Do you offer Volkswagen diagnostics?",
      Answer: "Absolutely. We use Volkswagen-approved diagnostic tools to identify engine, transmission, electrical, and system-related issues with precision."
    },
    {
      Question: "Do you repair Volkswagen engines?",
      Answer: "Yes, we provide comprehensive engine and gearbox repair services for all Volkswagen models, ensuring smooth, reliable performance."
    },
    {
      Question: "Do you offer Volkswagen performance checks?",
      Answer: "Yes, we perform detailed performance inspections, system calibrations, and efficiency evaluations to keep your Volkswagen in peak condition."
    },
    {
      Question: "How long does Volkswagen maintenance take?",
      Answer: "Routine Volkswagen servicing typically takes 1–2 hours based on the maintenance requirements and diagnostic findings."
    }
  ]
},
{
  name: "pagani",
  banner: "/assets/brands/pagani.webp",
  heading: "Pagani Expert Maintenance and Hypercar Repairs",
  heroText:
    "Certified Pagani care with genuine components, precision diagnostics, and hypercar-grade maintenance for unmatched performance and craftsmanship.",

  description:
    "Our Pagani service center delivers ultra-premium maintenance and repair solutions designed specifically for Pagani hypercars, including the Huayra and Zonda series. Known for their hand-built craftsmanship, advanced aerodynamics, and unmatched performance, Pagani vehicles require specialized expertise and meticulous care. Our factory-trained technicians use advanced diagnostic systems, manufacturer-approved tools, and 100% genuine Pagani components to ensure flawless performance, safety, and authenticity. We provide hypercar-level services such as performance evaluations, engine and gearbox repairs, suspension calibration, braking system tuning, electrical diagnostics, carbon-fiber inspection, AC servicing, battery testing, and complete aerodynamic system assessments. Each service is executed with extreme precision, offering Pagani owners in Dubai a seamless and world-class maintenance experience that preserves the vehicle’s exclusivity, power, and engineering excellence.",

  whyChooseUs: [
    {
      title: "Certified Pagani Hypercar Technicians",
      text: "Our team of Pagani-certified specialists is trained specifically to handle the engineering complexity and handcrafted components of Pagani hypercars. From AMG-engine servicing to carbon-fiber chassis maintenance, every procedure is performed with unmatched precision and attention to detail. Our technicians stay updated with the latest Pagani engineering standards to ensure your hypercar receives elite-level care at all times."
    },
    {
      title: "Advanced Pagani Diagnostics",
      text: "We use Pagani-approved diagnostic systems capable of analyzing engine behavior, aerodynamics, electronics, suspension dynamics, and high-performance systems in real time. These tools allow our experts to identify even the smallest irregularities, ensuring accurate, performance-focused repairs while maintaining the hypercar’s structural integrity and engineering perfection."
    },
    {
      title: "Genuine Pagani Parts Only",
      text: "To preserve the exclusivity, performance, and craftsmanship of your Pagani, we install only 100% genuine Pagani OEM parts. Each component—from carbon-fiber elements to AMG-engine parts—is engineered for hyper-precision, durability, and optimal compatibility. Using authentic parts guarantees your Pagani retains its value, power, and hypercar-grade performance."
    }
  ],

  seoTitle: "Pagani Service Dubai | Expert Pagani Hypercar Maintenance & Repairs",
  seoDescription:
    "Premium Pagani maintenance and repair in Dubai. Certified Pagani technicians, genuine parts, advanced diagnostics, engine, carbon-fiber, suspension, brakes, and complete hypercar servicing.",

  faqs: [
    {
      Question: "How often should I service my Pagani?",
      Answer: "Pagani hypercars typically require servicing every 7,000–10,000 km or once a year, depending on usage and performance conditions."
    },
    {
      Question: "Do you use genuine Pagani parts?",
      Answer: "Yes, we use only 100% genuine Pagani OEM components to maintain hypercar-grade performance, safety, and engineering quality."
    },
    {
      Question: "Do you offer Pagani diagnostics?",
      Answer: "Absolutely. We use Pagani-approved diagnostic tools to analyze engine performance, electronics, aerodynamics, and high-precision systems with extreme accuracy."
    },
    {
      Question: "Do you repair Pagani engines?",
      Answer: "Yes, we provide specialized engine and gearbox repair services designed specifically for AMG-powered Pagani hypercars, ensuring unmatched power and reliability."
    },
    {
      Question: "Do you offer Pagani performance checks?",
      Answer: "Yes, we offer detailed performance assessments, aerodynamic evaluations, system calibrations, and optimization services to maintain your Pagani’s hypercar-level performance."
    },
    {
      Question: "How long does Pagani maintenance take?",
      Answer: "Routine Pagani servicing typically takes 2–4 hours due to the vehicle’s complexity and the precision required for every inspection."
    }
  ]
},
{
  name: "dodge",
  banner: "/assets/brands/dodge.webp",
  heading: "Dodge Expert Maintenance and Performance Repairs",
  heroText:
    "Certified Dodge care with genuine parts, advanced diagnostics, and performance-focused maintenance for powerful and reliable driving.",

  description:
    "Our Dodge service center offers complete maintenance and repair solutions for all Dodge models, including Charger, Challenger, Durango, Ram, and Hellcat variants. Known for their powerful engines, bold performance, and muscular design, Dodge vehicles require precise workmanship and advanced technical expertise. Our certified Dodge technicians use high-end diagnostic tools, factory-approved equipment, and 100% genuine Dodge components to ensure exceptional performance, safety, and long-term reliability. We provide a wide range of services including engine oil changes, brake servicing, suspension tuning, transmission repairs, ECU diagnostics, AC servicing, electrical troubleshooting, battery testing, and full performance evaluations. Each service is tailored to deliver a premium and smooth experience for Dodge owners in Dubai, keeping your vehicle powerful, efficient, and ready for the road.",

  whyChooseUs: [
    {
      title: "Certified Dodge Technicians",
      text: "Our Dodge-certified technicians specialize in servicing all performance and muscle models, including HEMI, SRT, and Hellcat engines. Every repair and maintenance task is performed with expert precision to preserve your Dodge’s horsepower, durability, and smooth handling. Our team stays updated with the latest Dodge engineering advancements and service practices to ensure top-quality care."
    },
    {
      title: "Advanced Dodge Diagnostics",
      text: "We use Dodge-approved diagnostic systems to evaluate your vehicle’s engine performance, transmission response, onboard electronics, and high-performance systems. These tools enable our specialists to detect issues with accuracy and deliver repairs that enhance dependability, safety, and power delivery—ideal for daily drivers and performance enthusiasts."
    },
    {
      title: "Genuine Dodge Parts Only",
      text: "To maintain your Dodge’s strength, reliability, and factory-standard performance, we install only 100% genuine Dodge OEM components. Each part is engineered for perfect fitment, durability, and high-performance compatibility. Using authentic parts ensures improved longevity, driving comfort, and overall vehicle value."
    }
  ],

  seoTitle: "Dodge Service Dubai | Expert Dodge Maintenance & Performance Repairs",
  seoDescription:
    "Professional Dodge maintenance and repair in Dubai. Certified Dodge technicians, genuine parts, advanced diagnostics, engine, suspension, brakes, AC, and full Dodge performance servicing.",

  faqs: [
    {
      Question: "How often should I service my Dodge?",
      Answer: "Dodge vehicles typically require servicing every 8,000–12,000 km or once a year, depending on driving style and model specifications."
    },
    {
      Question: "Do you use genuine Dodge parts?",
      Answer: "Yes, we install only 100% genuine Dodge OEM components to ensure maximum reliability, performance, and durability."
    },
    {
      Question: "Do you offer Dodge diagnostics?",
      Answer: "Absolutely. We use advanced Dodge diagnostic tools to identify issues in the engine, transmission, electronics, and performance systems."
    },
    {
      Question: "Do you repair Dodge engines?",
      Answer: "Yes, we provide complete engine and gearbox repair services, including specialized work on HEMI, SRT, and Hellcat powertrains."
    },
    {
      Question: "Do you offer Dodge performance checks?",
      Answer: "Yes, we perform full performance evaluations, system calibrations, and tuning recommendations to keep your Dodge performing at its peak."
    },
    {
      Question: "How long does Dodge maintenance take?",
      Answer: "Routine Dodge servicing typically takes 1–2 hours depending on the specific maintenance requirements and diagnostic results."
    }
  ]
},
{
  name: "bugatti",
  banner: "/assets/brands/bugatti.webp",
  heading: "Bugatti Hypercar Maintenance & Precision Repair Specialists",
  
  heroText:
    "Certified Bugatti care with advanced diagnostics, hypercar-grade maintenance, and 100% genuine components for unmatched performance and engineering perfection.",

  description:
    "Our Bugatti service center provides ultra-premium maintenance and repair solutions tailored for Bugatti hypercars, including the Chiron, Veyron, Divo, and other limited-production models. Known for extraordinary horsepower, advanced aerodynamics, and world-leading engineering, Bugatti vehicles require unmatched technical mastery and precision care. Our factory-trained specialists use Bugatti-approved diagnostic equipment, specialized tools, and 100% genuine OEM components to ensure flawless performance, safety, and reliability. We offer a full suite of hypercar-grade services including quad-turbo engine servicing, transmission and gearbox repair, suspension calibration, carbon-ceramic brake maintenance, aerodynamic system diagnostics, electrical troubleshooting, AC servicing, battery testing, and complete performance evaluations. Each service is designed to preserve your Bugatti’s engineering integrity, exclusivity, and record-breaking performance.",

  whyChooseUs: [
    {
      title: "Certified Bugatti Hypercar Technicians",
      text: "Our Bugatti-certified specialists are trained to handle the extreme engineering, high-performance systems, and advanced components of Bugatti hypercars. From quad-turbo W16 engine servicing to precision carbon-fiber maintenance, every task is executed with absolute accuracy and craftsmanship. Our technicians follow the latest Bugatti service protocols to ensure your hypercar receives world-class care."
    },
    {
      title: "Advanced Bugatti Diagnostics",
      text: "We use state-of-the-art Bugatti diagnostic technology capable of analyzing engine performance, turbocharger behavior, aerodynamics, electronics, suspension dynamics, and high-speed systems with extreme precision. These tools allow us to identify even the smallest performance deviations, ensuring hyper-accurate repairs while preserving structural integrity and engineering excellence."
    },
    {
      title: "Genuine Bugatti Parts Only",
      text: "To maintain your Bugatti’s authenticity, performance, and long-term value, we install only 100% genuine Bugatti OEM parts. Every component—including turbochargers, carbon-fiber elements, brakes, and W16 engine parts—is engineered for hypercar-level durability and perfect compatibility. Using authentic parts guarantees the performance, safety, and exclusivity your Bugatti deserves."
    }
  ],

  seoTitle: "Bugatti Service Dubai | Expert Bugatti Hypercar Maintenance & Repairs",
  seoDescription:
    "Premium Bugatti hypercar maintenance and repair in Dubai. Certified Bugatti technicians, genuine parts, advanced diagnostics, W16 engine servicing, aerodynamics, brakes, and full hypercar care.",

  faqs: [
    {
      Question: "How often should I service my Bugatti?",
      Answer: "Bugatti hypercars typically require servicing every 5,000–7,000 km or once a year, depending on performance usage and driving conditions."
    },
    {
      Question: "Do you use genuine Bugatti parts?",
      Answer: "Yes, we use 100% genuine Bugatti OEM components to ensure uncompromised performance, durability, and engineering accuracy."
    },
    {
      Question: "Do you offer Bugatti diagnostics?",
      Answer: "Yes, we use Bugatti-approved diagnostic systems to analyze engine, electronics, aerodynamics, turbocharger response, and high-performance systems."
    },
    {
      Question: "Do you repair Bugatti engines?",
      Answer: "Absolutely. We specialize in quad-turbo W16 engine servicing, gearbox repairs, cooling systems, and all high-performance components."
    },
    {
      Question: "Do you offer Bugatti performance checks?",
      Answer: "Yes, we perform complete performance evaluations, aerodynamic diagnostics, system calibration, and optimization for maximum hypercar performance."
    },
    {
      Question: "How long does Bugatti maintenance take?",
      Answer: "Routine Bugatti servicing typically takes 3–6 hours due to the hypercar’s complexity and the precision required for every inspection."
    }
  ]
},
{
  name: "jeep",
  banner: "/assets/brands/jeep.webp",
  heading: "Jeep Maintenance, Off-Road Repairs & 4x4 Performance Specialists",
  
  heroText:
    "Certified Jeep care with advanced diagnostics, genuine parts, and professional 4x4 maintenance for powerful, reliable, and adventure-ready performance.",

  description:
    "Our Jeep service center provides complete maintenance and repair solutions for all Jeep models, including Wrangler, Grand Cherokee, Gladiator, Compass, Renegade, and Rubicon variants. Built for rugged terrain, off-road capability, and powerful performance, Jeep vehicles require expert servicing and precision diagnostics. Our certified Jeep technicians use advanced diagnostic systems, manufacturer-approved tools, and 100% genuine Jeep OEM parts to ensure durability, safety, and maximum 4x4 capability. We offer comprehensive services including engine oil changes, suspension repairs, differential and transfer case servicing, brake maintenance, transmission repairs, ECU diagnostics, AC servicing, electrical troubleshooting, and full off-road performance evaluations. Each service is designed to keep your Jeep reliable, powerful, and ready for both city driving and extreme off-road adventures.",

  whyChooseUs: [
    {
      title: "Certified Jeep 4x4 Technicians",
      text: "Our Jeep-certified technicians specialize in both on-road and off-road Jeep systems, including Trail Rated, Rubicon, and 4x4 drivetrain models. From suspension and differential servicing to crawl-ratio evaluations, every service is performed with precision to maintain Jeep’s durability, torque, and rugged performance. Our team follows the latest Jeep service standards to deliver premium care for every model."
    },
    {
      title: "Advanced Jeep Diagnostics",
      text: "We use Jeep-approved diagnostic tools to analyze engine health, transmission performance, 4WD engagement, traction systems, electronics, and off-road components. These advanced diagnostics help us detect issues with high accuracy, ensuring repairs that enhance reliability, safety, and long-term performance—whether on the highway or challenging terrain."
    },
    {
      title: "Genuine Jeep Parts Only",
      text: "To preserve your Jeep’s strength, safety, and factory-grade performance, we install only 100% genuine Jeep OEM components. From suspension parts and drivetrain components to brake systems and engine elements, every part is engineered for durability and perfect compatibility. Using authentic parts guarantees long-term reliability and optimal off-road capability."
    }
  ],

  seoTitle: "Jeep Service Dubai | Expert Jeep Maintenance & 4x4 Performance Repairs",
  seoDescription:
    "Professional Jeep maintenance and repair in Dubai. Certified Jeep technicians, genuine parts, advanced diagnostics, 4x4 system servicing, suspension, engine, brakes, and full off-road performance care.",

  faqs: [
    {
      Question: "How often should I service my Jeep?",
      Answer: "Jeep vehicles typically require servicing every 8,000–12,000 km or once a year, depending on driving conditions and off-road usage."
    },
    {
      Question: "Do you use genuine Jeep parts?",
      Answer: "Yes, we use only 100% genuine Jeep OEM parts to ensure maximum durability, reliability, and off-road performance."
    },
    {
      Question: "Do you offer Jeep diagnostics?",
      Answer: "Absolutely. We use Jeep-approved diagnostic systems to evaluate engine performance, electronics, 4x4 systems, transmission, and traction control."
    },
    {
      Question: "Do you repair Jeep engines and transmissions?",
      Answer: "Yes, we provide complete engine, transmission, and drivetrain repair services for all Jeep models, including off-road and high-performance versions."
    },
    {
      Question: "Do you offer Jeep off-road performance checks?",
      Answer: "Yes, we provide full off-road performance evaluations, suspension checks, differential inspection, traction testing, and drivetrain calibration."
    },
    {
      Question: "How long does Jeep maintenance take?",
      Answer: "Routine Jeep servicing typically takes 1–2 hours, depending on the model, mileage, and diagnostic results."
    }
  ]
},
{
  name: "mclaren",
  banner: "/assets/brands/mclaren.webp",
  heading: "McLaren Hypercar Maintenance & Precision Repairs",

  heroText:
    "Certified McLaren care with genuine parts, advanced diagnostics, and hypercar-grade maintenance for unmatched performance and driving precision.",

  description:
    "Our McLaren service center provides comprehensive maintenance and repair solutions for all McLaren models, including 570S, 720S, GT, Artura, and limited-edition hypercars. Renowned for cutting-edge engineering, lightweight carbon-fiber construction, and exhilarating performance, McLaren vehicles demand specialized expertise and meticulous attention. Our certified McLaren technicians utilize factory-approved tools, advanced diagnostic systems, and 100% genuine McLaren OEM parts to ensure flawless performance, safety, and long-term reliability. Services include engine oil changes, carbon-fiber chassis inspections, brake maintenance, suspension calibration, transmission servicing, ECU diagnostics, AC servicing, battery testing, and full performance evaluations. Each service ensures McLaren owners in Dubai receive a premium experience while preserving peak performance and driving excellence.",

  whyChooseUs: [
    {
      title: "Certified McLaren Hypercar Technicians",
      text: "Our McLaren-certified technicians are trained to handle the unique engineering and advanced systems of all McLaren models. From high-rev V8/V10 engines to carbon-fiber chassis and suspension systems, every repair and maintenance task is executed with precision to maintain McLaren’s performance, safety, and driving dynamics. Our specialists follow the latest McLaren service protocols to deliver elite hypercar care."
    },
    {
      title: "Advanced McLaren Diagnostics",
      text: "We use McLaren-approved diagnostic tools to accurately analyze engine performance, transmission behavior, electronics, suspension dynamics, and aerodynamic systems. These advanced diagnostics help identify even minor issues, ensuring precise, performance-focused repairs while maintaining structural integrity and engineering excellence."
    },
    {
      title: "Genuine McLaren Parts Only",
      text: "We install only 100% genuine McLaren OEM components to preserve your vehicle’s performance, reliability, and exclusivity. From engine components to carbon-fiber elements and braking systems, every part is engineered for precision, durability, and perfect fitment, ensuring your McLaren delivers hypercar-level performance at all times."
    }
  ],

  seoTitle: "McLaren Service Dubai | Expert Hypercar Maintenance & Repairs",
  seoDescription:
    "Premium McLaren maintenance and repair in Dubai. Certified McLaren technicians, genuine parts, advanced diagnostics, engine, carbon-fiber chassis, brakes, suspension, and full hypercar servicing.",

  faqs: [
    {
      Question: "How often should I service my McLaren?",
      Answer: "McLaren vehicles typically require servicing every 7,000–10,000 km or once a year, depending on driving style and performance usage."
    },
    {
      Question: "Do you use genuine McLaren parts?",
      Answer: "Yes, we use only 100% genuine McLaren OEM components to maintain hypercar-level performance, safety, and reliability."
    },
    {
      Question: "Do you offer McLaren diagnostics?",
      Answer: "Absolutely. We use McLaren-approved diagnostic systems to analyze engine, transmission, electronics, suspension, and aerodynamic performance with precision."
    },
    {
      Question: "Do you repair McLaren engines?",
      Answer: "Yes, we provide complete engine, gearbox, and high-performance component repair services for all McLaren models, ensuring exceptional performance and reliability."
    },
    {
      Question: "Do you offer McLaren performance checks?",
      Answer: "Yes, we provide detailed performance evaluations, aerodynamic assessments, suspension calibration, and system optimizations to maintain peak McLaren driving performance."
    },
    {
      Question: "How long does McLaren maintenance take?",
      Answer: "Routine McLaren servicing typically takes 2–4 hours depending on the model, complexity, and precision required for each inspection."
    }
  ]
},
{
  name: "range rover",
  banner: "/assets/brands/range-rover.webp",
  heading: "Range Rover Maintenance & Premium 4x4 Repairs",

  heroText:
    "Certified Range Rover care with genuine parts, advanced diagnostics, and expert 4x4 maintenance for luxury, performance, and off-road reliability.",

  description:
    "Our Range Rover service center provides comprehensive maintenance and repair solutions for all Range Rover models, including Range Rover Sport, Velar, Evoque, Autobiography, and SV variants. Renowned for luxury, off-road capability, and advanced engineering, Range Rover vehicles require specialized expertise and precision care. Our certified technicians utilize manufacturer-approved tools, advanced diagnostic systems, and 100% genuine Range Rover OEM components to ensure flawless performance, safety, and driving comfort. Services include engine oil changes, suspension tuning, 4x4 drivetrain servicing, brake maintenance, transmission repair, ECU diagnostics, AC servicing, battery testing, and full performance evaluations. Every service is designed to deliver a premium experience for Range Rover owners in Dubai, ensuring your vehicle remains powerful, luxurious, and adventure-ready.",

  whyChooseUs: [
    {
      title: "Certified Range Rover Technicians",
      text: "Our Range Rover-certified technicians specialize in all models and 4x4 systems, including Terrain Response, SVAutobiography, and high-performance engines. Each service, from suspension calibration to drivetrain maintenance, is performed with precision to maintain luxury, off-road capability, and reliability. Our experts follow the latest Land Rover service protocols to provide top-tier care for every vehicle."
    },
    {
      title: "Advanced Range Rover Diagnostics",
      text: "We use Range Rover-approved diagnostic tools to analyze engine performance, transmission behavior, 4WD systems, electronics, and off-road components. Accurate diagnostics enable our specialists to detect issues early and deliver precise repairs that enhance safety, reliability, and performance—whether on the highway or extreme terrain."
    },
    {
      title: "Genuine Range Rover Parts Only",
      text: "To preserve your Range Rover’s performance, luxury, and factory-grade reliability, we install only 100% genuine Range Rover OEM components. From suspension and drivetrain parts to engine and braking systems, every component is engineered for durability, fitment, and optimal performance. Using authentic parts ensures long-term reliability and driving excellence."
    }
  ],

  seoTitle: "Range Rover Service Dubai | Expert 4x4 Maintenance & Repairs",
  seoDescription:
    "Professional Range Rover maintenance and repair in Dubai. Certified Range Rover technicians, genuine parts, advanced diagnostics, 4x4 system servicing, suspension, engine, brakes, and full off-road and luxury performance care.",

  faqs: [
    {
      Question: "How often should I service my Range Rover?",
      Answer: "Range Rover vehicles typically require servicing every 10,000–12,000 km or once a year, depending on driving style and on/off-road usage."
    },
    {
      Question: "Do you use genuine Range Rover parts?",
      Answer: "Yes, we use only 100% genuine Range Rover OEM components to ensure optimal performance, reliability, and luxury standards."
    },
    {
      Question: "Do you offer Range Rover diagnostics?",
      Answer: "Absolutely. We use Range Rover-approved diagnostic systems to analyze engine, transmission, electronics, 4x4 systems, and suspension with precision."
    },
    {
      Question: "Do you repair Range Rover engines and transmissions?",
      Answer: "Yes, we provide complete engine, gearbox, and drivetrain repair services for all Range Rover models, maintaining smooth performance and off-road capability."
    },
    {
      Question: "Do you offer Range Rover performance and off-road checks?",
      Answer: "Yes, we provide detailed performance inspections, suspension calibration, 4x4 system evaluation, and off-road readiness assessments to keep your Range Rover at peak performance."
    },
    {
      Question: "How long does Range Rover maintenance take?",
      Answer: "Routine Range Rover servicing typically takes 1–3 hours depending on the model, service requirements, and diagnostic complexity."
    }
  ]
},
{
  name: "rolls-royce",
  banner: "/assets/brands/rolls-royce.webp",
  heading: "Rolls-Royce Luxury Maintenance & Precision Repairs",

  heroText:
    "Certified Rolls-Royce care with genuine parts, advanced diagnostics, and premium maintenance for unmatched luxury, performance, and reliability.",

  description:
    "Our Rolls-Royce service center provides world-class maintenance and repair solutions for all Rolls-Royce models, including Phantom, Ghost, Cullinan, Wraith, and Dawn. Renowned for ultimate luxury, bespoke craftsmanship, and cutting-edge engineering, Rolls-Royce vehicles require expert care and meticulous attention. Our certified Rolls-Royce technicians use factory-approved tools, advanced diagnostics, and 100% genuine Rolls-Royce OEM components to ensure flawless performance, safety, and refinement. Services include engine oil changes, suspension calibration, brake maintenance, transmission servicing, ECU diagnostics, AC servicing, battery testing, and full performance evaluations. Each service guarantees a premium and seamless experience for Rolls-Royce owners in Dubai, preserving the elegance, power, and precision of their vehicles.",

  whyChooseUs: [
    {
      title: "Certified Rolls-Royce Technicians",
      text: "Our Rolls-Royce-certified technicians possess specialized expertise in all models, including bespoke Phantom, Ghost, and Cullinan variants. Every maintenance and repair task is executed with extreme precision to uphold luxury, performance, and reliability. Our team follows the latest Rolls-Royce service standards to deliver top-tier care for every vehicle."
    },
    {
      title: "Advanced Rolls-Royce Diagnostics",
      text: "We utilize Rolls-Royce-approved diagnostic tools to accurately assess engine performance, transmission behavior, suspension systems, electronics, and luxury features. This enables early detection of issues and ensures precise repairs that maintain the vehicle’s comfort, refinement, and long-term reliability."
    },
    {
      title: "Genuine Rolls-Royce Parts Only",
      text: "To preserve your Rolls-Royce’s performance, luxury, and craftsmanship, we install only 100% genuine Rolls-Royce OEM components. Each part is engineered for perfect fitment, durability, and seamless integration. Using authentic parts guarantees your vehicle maintains peak performance, reliability, and its signature bespoke quality."
    }
  ],

  seoTitle: "Rolls-Royce Service Dubai | Luxury Maintenance & Precision Repairs",
  seoDescription:
    "Professional Rolls-Royce maintenance and repair in Dubai. Certified Rolls-Royce technicians, genuine parts, advanced diagnostics, engine, suspension, brakes, AC, and complete luxury vehicle servicing.",

  faqs: [
    {
      Question: "How often should I service my Rolls-Royce?",
      Answer: "Rolls-Royce vehicles typically require servicing every 10,000–12,000 km or once a year, depending on driving conditions and model specifications."
    },
    {
      Question: "Do you use genuine Rolls-Royce parts?",
      Answer: "Yes, we use only 100% genuine Rolls-Royce OEM components to ensure maximum performance, reliability, and luxury standards."
    },
    {
      Question: "Do you offer Rolls-Royce diagnostics?",
      Answer: "Absolutely. We use Rolls-Royce-approved diagnostic systems to analyze engine, transmission, electronics, suspension, and luxury features with precision."
    },
    {
      Question: "Do you repair Rolls-Royce engines and transmissions?",
      Answer: "Yes, we provide complete engine, gearbox, and drivetrain repair services for all Rolls-Royce models, maintaining smooth performance and ultimate luxury."
    },
    {
      Question: "Do you offer Rolls-Royce performance and luxury checks?",
      Answer: "Yes, we provide detailed inspections, suspension calibration, system evaluations, and optimization to ensure your Rolls-Royce performs flawlessly in all conditions."
    },
    {
      Question: "How long does Rolls-Royce maintenance take?",
      Answer: "Routine Rolls-Royce servicing typically takes 2–4 hours depending on the model, service requirements, and diagnostic complexity."
    }
  ]
}
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