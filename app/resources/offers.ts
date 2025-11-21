interface offersType {
  title: string;
  image: string;
  text: string[];
}
const offers: offersType[] = [
  {
    title: "Mechanical Services",
    image: "/assets/offer3.png",
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
    image: "/assets/offer3.png",
    text: ["AC Repair", "Comfort System Repair"],
  },
  {
    title: "Programming & Retrofit",
    image: "/assets/offer3.png",
    text: ["Car Software Repair & Programming", "Camera / Radar Calibration"],
  },
  {
    title: "Engine Repair Services",
    image: "/assets/offer3.png",
    text: [
      "Engine Control Unit Repair",
      "Engine Cooling System Repair",
      "Engine Cooling System Repair",
    ],
  },
  {
    title: "Service Packages",
    image: "/assets/offer3.png",
    text: ["Luxury Car Service Packages", "Service & Warranty Packages"],
  },
  {
    title: "Extended Warranty",
    image: "/assets/offer3.png",
    text: [
      "New Cars Warranty Packages",
      "Pre-Owned Cars Warranty Packages",
      "Luxury Cars Warranty Packages",
    ],
  },
];

export default offers;
