interface NavLinkType {
  name: string;
  href: string;
  submenu?: string[];
}

const navLinks: NavLinkType[] = [
  { name: "About", href: "" },
  { name: "Offers", href: "" },
  { name: "Brands", href: "", submenu: ["Toyota", "BMW", "Mercedes"] },
  {
    name: "Services",
    href: "",
    submenu: ["Repair", "Maintenance", "Detailing"],
  },
  { name: "Packages", href: "", submenu: ["Basic", "Premium", "VIP"] },
  { name: "Contact", href: "" },
];
export default navLinks;
