interface NavLinkType {
  name: string;
  href: string;
  submenu?: [string, string][];
}

const navLinks: NavLinkType[] = [
  { name: "About", href: "/about" },
  { name: "Offers", href: "" },
  {
    name: "Brands",
    href: "",
    submenu: [
      ["Audi", "/brands/audi"],
      ["BMW", "/brands/bmw"],
      ["Jaguar", "/brands/jaguar"],
      ["Maserati", "/brands/maserati"],
      ["Maybach", "/brands/maybach"],
      ["Mercedes", "/brands/mercedes"],
      ["Porsche", "/brands/porsche"],
    ],
  },
  {
    name: "Services",
    href: "",
    submenu: [
      ["AC Repair", "/services/ac-repair"],
      ["Axle / Driveshaft Repair", "/services/axle-driveshaft-repair"],
      ["Brake Repair", "/services/brake-repair"],
      ["Camera / Radar Calibration", "/services/camera-radar-calibration"],
      [
        "Car Software Repair & Programming",
        "/services/car-software-repair-programming",
      ],
      ["Comfort System Repair", "/services/comfort-system-repair"],
      ["Engine Control Unit Repair", "/services/engine-control-unit-repair"],
      [
        "Engine Cooling System Repair",
        "/services/engine-cooling-system-repair",
      ],
      [
        "Engine Management System Repair",
        "/services/engine-management-system-repair",
      ],
      ["Gearbox Repair", "/services/gearbox-repair"],
      ["Pre-purchase Inspection", "/services/pre-purchase-inspection"],
      ["Suspension Repair", "/services/suspension-repair"],
      ["Touchless Wheel Alignment", "/services/touchless-wheel-alignment"],
      ["Transmission Repair", "/services/transmission-repair"],
      ["Fleet Maintenance", "/services/fleet-maintenance"],
      ["Major Service", "/services/major-service"],
      ["Minor Service", "/services/minor-service"],
      ["Paint Protection Film (PPF)", "/services/paint-protection-film-ppf"],
      ["Brake Caliper Painting", "/services/brake-caliper-painting"],
      ["Ceramic Coating", "/services/ceramic-coating"],
      ["Car Dip Color Service", "/services/car-dip-color-service"],
      ["Car Tinting Services", "/services/car-tinting-services"],
      ["Fuel Injection Service", "/services/fuel-injection-service"],
      ["Stop & Go Service", "/services/stop-and-go-service"],
      ["Oil Change & Fluid Checks", "/services/oil-change-fluid-checks"],
      ["Performance ECU Tuning", "/services/performance-ecu-tuning"],
      [
        "Alloy Wheel Repair & Refurbishment",
        "/services/alloy-wheel-repair-refurbishment",
      ],
    ],
  }
  ,
  {
    name: "Packages",
    href: "",
    submenu: [
      ["Basic", "/packages/basic"],
      ["Premium", "/packages/premium"],
      ["VIP", "/packages/vip"],
    ],
  }
  ,
  { name: "Contact", href: "/contact" },
];
export default navLinks;
