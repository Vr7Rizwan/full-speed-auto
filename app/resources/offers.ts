interface offersType {
  title: string;
  image: string;
  text: string[];
}
const offers: offersType[] = [
  {
    title: "Mechanical Services",
    image: "/assets/offer1.webp",
    text: [
      "Axle/ Driveshaft Repair",
      "Brake Repair",
      "Gearbox Repair",
      "Suspension Repair",
      "Transmission Repair",
    ],
  },
  {
    title: "Electrical Services",
    image: "/assets/offer2.webp",
    text: ["AC Repair", "Comfort System Repair"],
  },
  {
    title: "Programming & Retrofit",
    image: "/assets/offer3.webp",
    text: ["Car Software Repair & Programming", "Camera / Radar Calibration"],
  },
  {
    title: "Engine Repair Services",
    image: "/assets/offer4.webp",
    text: [
      "Engine Control Unit Repair",
      "Engine Cooling System Repair",
      "Engine Cooling System Repair",
    ],
  },
  {
    title: "Service Packages",
    image: "/assets/offer5.webp",
    text: ["Luxury Car Service Packages", "Service & Warranty Packages"],
  },
  {
    title: "Extended Warranty",
    image: "/assets/offer6.webp",
    text: [
      "New Cars Warranty Packages",
      "Pre-Owned Cars Warranty Packages",
      "Luxury Cars Warranty Packages",
    ],
  },
];

export default offers;
