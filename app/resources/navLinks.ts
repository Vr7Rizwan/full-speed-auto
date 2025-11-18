interface NavLinkType {
  name: string;
  href: string;
  submenu?: string[];
}

const navLinks: NavLinkType[] = [
  { name: "About", href: "/about" },
  { name: "Offers", href: "" },
  {
    name: "Brands",
    href: "",
    submenu: [
      "Audi",
      "Bentley",
      "BMW",
      "Bugatti",
      "Ferrari",
      "Jaguar",
      "Lamborghini",
      "Maserati",
      "Maybach",
      "McLaren",
      "Mercedes",
      "Mini Cooper",
      "Pagani",
      "Porsche",
      "Range Rover",
      "Rolls Royce",
      "Volkswagen",
      "Dodge",
      "Jeep"
    ]
  }
  ,
  {
    name: "Services",
    href: "",
    submenu: [
      "AC Repair",
      "Axle / Driveshaft Repair",
      "Brake Repair",
      "Camera / Radar Calibration",
      "Car Software Repair & Programming",
      "Comfort System Repair",
      "Engine Control Unit Repair",
      "Engine Cooling System Repair",
      "Engine Management System Repair",
      "Gearbox Repair",
      "Pre-purchase Inspection",
      "Suspension Repair",
      "Touchless Wheel Alignment",
      "Transmission Repair",
      "Fleet Maintenance",
      "Major Service",
      "Minor Service",
      "Paint Protection Film (PPF)",
      "Brake Caliper Painting",
      "Ceramic Coating",
      "Car Dip Color Service",
      "Car Tinting Services",
      "Fuel Injection Service",
      "Stop & Go Service",
      "Oil Change & Fluid Checks",
      "Performance ECU Tuning",
      "Alloy Wheel Repair & Refurbishment"
    ]
  }
  ,
  { name: "Packages", href: "", submenu: ["Basic", "Premium", "VIP"] },
  { name: "Contact", href: "/contact" },
];
export default navLinks;
