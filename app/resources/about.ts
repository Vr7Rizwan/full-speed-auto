// companyprofile
export const companyprofile: string =
  "Speed-Full Auto Services is the UAE’s premier destination for complete automotive care, offering a wide range of services from routine maintenance to advanced repairs and luxury car detailing. Our workshops are equipped with state-of-the-art diagnostic tools and cutting-edge technology, enabling our highly trained and experienced technicians to deliver precise, efficient, and reliable solutions for all types of vehicles. We pride ourselves on maintaining the highest standards of quality, safety, and professionalism, ensuring that every vehicle we service performs at its best. From engine diagnostics, transmission and suspension repairs, to bodywork, AC service, and comprehensive detailing, we provide tailored solutions that meet the unique needs of each customer. Beyond repairs, we offer transparent pricing, flexible service packages, and customized warranty and insurance options, giving you complete peace of mind. With convenient UAE-wide pickup and delivery, friendly customer support, and a commitment to exceeding expectations, Speed-Full Auto Services delivers a seamless, stress-free, and exceptional automotive experience that keeps our clients coming back and builds long-term trust across Dubai, Abu Dhabi, Sharjah, Al Ain, and beyond.";




// CompanyServices
interface companyservicesType {
  heading: string;
  description: string;
  subheading: string;
  services: string[];
}
export const companyservices: companyservicesType = {
  heading: "FACILITIES AND SERVICE QUALITY",
  description:
    "At Our Luxury Car service Center in UAE, your comfort is our priority, we strive to make you feel good! Relax and let us take good care of your vehicle.",
  subheading: "We have:",
  services: [
    "Engine room dedicated to engine repair, engine refurbishment, or engine replacement.",
    "Highly qualified and experienced technicians specialized each of them on the brands we serve and main parts of the car.",
    "Spare parts department and own storage, with available parts on stock and dedicated teams. We track and ship our spare parts at the best rates!",
    "A professional and multi-cultural team, we speak your language!",
    "Warranty certificates for 12 months for both labour and parts work.",
    "A very sophisticated CRM system to keep the history of your car saved forever.",
    "Up to 15000 different spare parts available on stock.",
    "Easy and fast access.",
    "Intelligent security system equipped with CCTV cameras.",
    "Waiting area for men.",
    "Waiting area for ladies.",
    "AC, Free WI-FI and TVs.",
    "Dedicated service advisor and free recovery for ladies.",
    "Free EV Charging station.",
  ],
};
// missionvision
interface missionvisionType {
  heading: string;
  description: string;
}
export const missionvision: missionvisionType[] = [
  {
    heading: "OUR VISION",
    description:
      "To become the most trusted and respected automotive repair workshop in Dubai and across the UAE, recognized for excellence in service, customer satisfaction, and innovative solutions that set the benchmark for the automotive industry.",
  },
  {
    heading: "OUR MISSION",
    description:
      "We aim to achieve our vision by fostering a safe and supportive workplace for our team, maintaining high ethical standards, creating opportunities for growth, and delivering outstanding service to our customers, partners, and clients throughout the UAE and Middle East.",
  },
];


interface cardsType {
  icon: string;
  heading: string;
  description: string;
}
export const cards: cardsType[] = [
  {
    icon: "/assets/Card1.webp",
    heading: "SKILLED & EXPERIENCED",
    description:
      "With years of hands-on experience, our team delivers top-quality service and precise craftsmanship you can trust and rely on at every visit.",
  },
  {
    icon: "/assets/Card2.webp",
    heading: "TRAINED SPECIALISTS",
    description:
      "Our experts are carefully trained to understand every aspect of your vehicle. They handle each detail with precision and ensure complete satisfaction every time.",
  },
  {
    icon: "/assets/Card3.webp",
    heading: "TRUSTWORTHY & RELIABLE",
    description:
      "We provide every service with honesty, dependability, and respect, ensuring that our customers feel confident and secure in our care.",
  },
  {
    icon: "/assets/Card4.webp",
    heading: "ALWAYS ACCESSIBLE",
    description:
      "Friendly and responsive, our team is always available to answer your questions and guide you throughout the repair process, leaving no concern unaddressed.",
  },
  {
    icon: "/assets/Card5.webp",
    heading: "QUALITY SERVICE",
    description:
      "We combine expert workmanship with courteous, professional support, making sure your experience is smooth, reliable, and exceeds expectations every time.",
  },
  {
    icon: "/assets/Card6.webp",
    heading: "PROFESSIONAL & TRUSTED",
    description:
      "Integrity, honesty, and reliability are the pillars of our service, giving you confidence that your vehicle is in skilled and trustworthy hands.",
  },
];


