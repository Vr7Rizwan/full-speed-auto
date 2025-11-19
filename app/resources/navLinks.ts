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
      ["AC Repair & Maintenance", "/services/ac-repair-maintenance"],
      ["Engine & ECU Service", "/services/engine-ecu-service"],
      ["Brake System Service", "/services/brake-system-service"],
      [
        "Transmission & Gearbox Repair",
        "/services/transmission-gearbox-repair",
      ],
      [
        "Suspension & Steering Maintenance",
        "/services/suspension-steering-maintenance",
      ],
      ["Oil Change & Fluid Checks", "/services/oil-change-fluid-checks"],
      ["Electrical & Comfort Systems", "/services/electrical-comfort-systems"],
      ["Fuel Injection Service", "/services/fuel-injection-service"],
      [
        "Pre Purchase Inspection & Diagnostics",
        "/services/pre-purchase-inspection-diagnostics",
      ],
      [
        "Performance Tuning & ECU Upgrade",
        "/services/performance-tuning-ecu-upgrade",
      ],
      ["Paint Protection & Coatings", "/services/paint-protection-coatings"],
      [
        "Alloy Wheel Repair & Refurbishment",
        "/services/alloy-wheel-repair-refurbishment",
      ],
    ],
  },
  {
    name: "Packages",
    href: "",
    submenu: [
      ["Basic", "/packages/basic"],
      ["Premium", "/packages/premium"],
      ["VIP", "/packages/vip"],
    ],
  },
  { name: "Contact", href: "/contact" },
];
export default navLinks;
