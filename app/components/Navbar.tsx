"use client";

import React, { useState } from "react";
import Link from "next/link";
import navLinks from "../resources/navLinks";
import { ChevronDown, Menu, X } from "lucide-react";

const navItemClass = `
  relative inline-flex items-center py-2 font-bold text-txtColor hover:text-secondary
  before:content-[''] before:absolute before:left-0 before:top-0 
  before:w-full before:h-0.5 before:bg-current 
  before:scale-x-0 before:origin-left before:transition before:duration-300 
  hover:before:scale-x-100

  after:content-[''] after:absolute after:left-0 after:bottom-0 
  after:w-full after:h-0.5 after:bg-current 
  after:scale-x-0 after:origin-right after:transition before:duration-300 
  hover:after:scale-x-100
`;

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex flex-row items-center justify-between py-5 px-6 md:px-8">
        {/* Logo */}
        <div className="subHeading font-bold text-txtColor">
          FULL SPEED <span className="text-secondary">AUTOS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-3 xl:gap-7 text-txtColor items-center">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="relative group normalText"
              onMouseEnter={() => setActiveSubmenu(item.name)} // hover open
              onMouseLeave={() => setActiveSubmenu(null)} // hover close
              onClick={() => item.submenu && toggleSubmenu(item.name)} // click toggle
            >
              <Link href={item.href} className={navItemClass}>
                {item.name}{" "}
                {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <ul
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white border border-gray-200 rounded shadow-lg 
                    opacity-0 invisible transition-all duration-300 z-50
                    ${item.name === "Brands" || item.name === "Services" ? "grid grid-cols-3 p-4" : "w-40"}
                    group-hover:opacity-100 group-hover:visible
                    ${activeSubmenu === item.name ? "opacity-100 visible" : ""}`}
                >
                  {item.submenu.map((subItem) => (
                    <li
                      key={subItem}
                      className={`px-4 py-2 hover:bg-gray-100 normalText ${item.name === "Brands" || item.name === "Services" ? "p-2" : ""
                        }`}
                    >
                      <Link href="#" className="block font-semibold">
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="cursor-pointer normalText font-semibold bg-secondary text-primary px-5 py-3 rounded-full">
            Book My Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((item) => (
              <li key={item.name} className="relative">
                <div
                  className="flex items-center justify-between py-2 font-bold text-txtColor cursor-pointer"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  <Link className="normalText" href={item.href}>
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem} className="py-1 normalText">
                        <Link
                          href="#"
                          className="block text-txtColor hover:text-secondary"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Button */}
            <li className="mt-2">
              <button className="w-full text-center cursor-pointer normalText font-semibold rounded-full bg-secondary text-primary px-3 py-2">
                Book My Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
