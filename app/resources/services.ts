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
                text: "Our team consists of highly skilled and certified technicians who have extensive experience in all aspects of car AC repair and maintenance. They are trained to handle even the most complex issues, ensuring that every service is performed with precision and care. You can rely on us for consistent performance, accurate diagnoses, and professional service every time."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We utilize state-of-the-art diagnostic equipment and cutting-edge technology to quickly and accurately identify problems within your vehicle's AC system. From refrigerant leaks to compressor faults, our advanced tools allow us to pinpoint issues efficiently, providing precise solutions and minimizing downtime for your vehicle."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every AC repair and maintenance task we undertake is executed with meticulous attention to detail. We use only high-quality parts and adhere to industry best practices to ensure durability and long-lasting results. Our commitment to quality guarantees that your vehicle’s AC system will perform optimally, keeping you comfortable and confident on the road."
            }
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
                text: "Our engine specialists are highly trained and certified professionals with years of experience in handling all types of Engine & ECU services. They are skilled in diagnosing and repairing complex engine issues, ensuring that your vehicle runs smoothly, efficiently, and safely. With their expertise, every service is delivered with precision and reliability."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We employ the latest diagnostic equipment and cutting-edge technology to thoroughly inspect your vehicle’s engine and ECU systems. From identifying performance inefficiencies to detecting potential faults, our tools allow us to quickly and accurately pinpoint issues, enabling us to provide effective solutions and minimize downtime for your car."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every Engine & ECU service is performed with meticulous attention to detail, using premium quality parts and adhering to industry best practices. Our commitment to quality ensures long-lasting results, optimal engine performance, and maximum reliability, giving you peace of mind and confidence in your vehicle’s health."
            }
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
                text: "Our brake specialists are highly trained and certified, with extensive experience in inspecting, repairing, and maintaining all types of brake systems. From standard hydraulic brakes to advanced ABS and electronic braking systems, they ensure your vehicle maintains optimal stopping power, safety, and reliability on the road."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We utilize state-of-the-art diagnostic tools and precision equipment to thoroughly inspect every component of your brake system. This includes pads, rotors, calipers, brake lines, and fluid systems. Our advanced technology helps detect potential issues early, allowing us to provide accurate solutions quickly and efficiently."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every brake system service is performed with meticulous attention to detail, using high-quality parts and following industry best practices. Our commitment to excellence ensures long-lasting results, optimal brake performance, and your safety on the road, giving you complete confidence in every drive."
            }
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
                text: "Our transmission specialists have extensive experience working on all types of transmissions, including manual, automatic, and CVT systems. They are trained to diagnose and repair even the most complex transmission issues, ensuring your vehicle operates smoothly and reliably."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We employ cutting-edge diagnostic equipment to thoroughly inspect your transmission and gearbox. From fluid analysis to electronic sensor checks, our tools help us quickly identify problems and deliver precise solutions, minimizing downtime and preventing costly repairs."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every transmission and gearbox repair is executed with meticulous attention to detail using high-quality parts and best practices. Our commitment to excellence ensures long-lasting performance, smooth gear shifts, and maximum reliability for your vehicle."
            }
        ]
        ,
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
                text: "Our suspension specialists have extensive experience maintaining and repairing all types of suspension and steering systems. They ensure your vehicle handles smoothly, rides comfortably, and maintains optimal safety on all road conditions."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We use state-of-the-art diagnostic tools to inspect shocks, struts, springs, and steering components. This allows us to detect issues early, provide precise solutions, and prevent further damage, ensuring your vehicle stays stable and reliable."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every suspension and steering maintenance job is carried out with meticulous attention to detail using high-quality components. Our goal is to provide long-lasting performance, improved vehicle handling, and a safe driving experience for you and your passengers."
            }
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
                text: "Our certified oil specialists have years of experience performing oil changes and fluid inspections for all types of vehicles. They ensure that your engine receives the right oils and fluids for optimal performance, longevity, and protection against wear."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We use modern diagnostic equipment to check engine oil, coolant, brake, power steering, and transmission fluids. This allows us to detect potential issues early, maintain fluid quality, and prevent costly engine or component damage."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Each oil change and fluid check is performed meticulously with high-quality oils and fluids. We focus on providing consistent, reliable service that keeps your engine running smoothly, improves fuel efficiency, and ensures long-term vehicle reliability."
            }
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
                text: "Our certified electrical specialists are skilled in diagnosing, repairing, and maintaining all aspects of your vehicle's electrical and comfort systems. From infotainment to sensors and lighting, we ensure reliable performance and long-lasting results."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We employ cutting-edge diagnostic tools to quickly identify issues in your car's electrical systems. This allows precise troubleshooting of components like wiring, sensors, comfort modules, and software systems, preventing recurring problems."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every electrical and comfort system service is executed with meticulous attention to detail, using high-quality parts and proven techniques. We guarantee consistent, safe, and reliable performance for all your vehicle's advanced systems."
            }
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
                text: "Our certified fuel specialists have extensive experience in servicing and maintaining fuel injection systems for all types of vehicles. They ensure precise fuel delivery, optimal performance, and long-lasting reliability."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "We use state-of-the-art diagnostic equipment to quickly detect issues in fuel injectors, fuel pumps, and fuel system components. Accurate diagnostics allow us to address problems efficiently and prevent future malfunctions."
            },
            {
                title: "Quality Service Guaranteed",
                text: "Every fuel injection service is performed with meticulous attention to detail. Using high-quality components and proven procedures, we guarantee optimal engine efficiency, improved fuel economy, and consistent performance for your vehicle."
            }
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
                title: "Experienced Pre-Purchase Specialists",
                text: "Our certified pre-purchase specialists have extensive experience inspecting all types of vehicles. They ensure that every aspect of the car—from engine to electronics—is thoroughly checked for reliability and safety."
            },
            {
                title: "Advanced Diagnostic Tools",
                text: "Using modern diagnostic equipment, we quickly identify hidden issues in engine, transmission, brakes, suspension, and electrical systems. Our precise diagnostics help prevent future problems and save you from costly repairs."
            },
            {
                title: "Comprehensive Quality Assurance",
                text: "Every inspection is conducted with meticulous attention to detail. We provide a complete report with actionable recommendations, ensuring you make an informed and safe vehicle purchase with confidence."
            }
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
                text: "Our certified performance specialists have extensive experience in tuning engines and upgrading ECUs. We ensure your vehicle achieves optimal power, efficiency, and driving dynamics safely."
            },
            {
                title: "Advanced Diagnostic & Tuning Tools",
                text: "We utilize cutting-edge diagnostic tools and software to fine-tune your engine and ECU. This allows precise adjustments for improved throttle response, torque, and overall vehicle performance."
            },
            {
                title: "Guaranteed Quality & Reliability",
                text: "Every performance tuning and ECU upgrade is conducted with meticulous attention to detail. We use high-quality parts and proven methods to ensure long-lasting, safe, and reliable results."
            }
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
                text: "Our certified paint specialists have extensive experience in applying PPF, ceramic coatings, and car dip colors, ensuring flawless protection and a perfect finish."
            },
            {
                title: "Advanced Tools & Techniques",
                text: "We use modern equipment and precise application techniques to deliver high-quality, long-lasting protection for your vehicle’s paint."
            },
            {
                title: "Guaranteed Quality & Durability",
                text: "Every paint protection and coating service is carried out with meticulous attention to detail, using premium products to ensure a durable, scratch-resistant, and visually stunning result."
            }
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
                text: "Our certified alloy wheel specialists have extensive experience in repairing, refurbishing, and restoring alloy wheels to their original condition, ensuring precision and reliability."
            },
            {
                title: "Advanced Tools & Techniques",
                text: "We utilize modern tools and advanced techniques to detect cracks, bends, and imperfections, providing accurate repairs that extend the life of your wheels."
            },
            {
                title: "Guaranteed Quality & Durability",
                text: "Every alloy wheel repair and refurbishment service is performed with meticulous attention to detail, using high-quality materials and methods to deliver long-lasting, visually flawless results."
            }
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
