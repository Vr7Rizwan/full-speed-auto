"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import navLinks from "../resources/navLinks";

const navItemClass = `
  relative inline-flex items-center py-2 font-bold text-black hover:text-secondary
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
      {/* Top Bar */}

      <div className="flex flex-row items-center justify-between py-5 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <div className="text-3xl md:text-2xl font-bold text-black">
          FULL SPEED <span className="text-secondary">AUTOS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-7 font-bold text-black items-center">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.href} className={navItemClass}>
                {item.name}{" "}
                {item.submenu && <HiChevronDown className="ml-1 w-4 h-4" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {item.submenu.map((subItem) => (
                    <li key={subItem} className="px-4 py-2 hover:bg-gray-100">
                      <Link href="#" className="block">
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
        <div className="hidden md:block">
          <button className="cursor-pointer text-sm font-semibold bg-secondary text-primary px-3 py-1">
            Book My <br />
            Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((item) => (
              <li key={item.name} className="relative">
                <div
                  className="flex items-center justify-between py-2 font-bold text-black cursor-pointer"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  <Link href={item.href}>{item.name}</Link>
                  {item.submenu && (
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem} className="py-1">
                        <Link
                          href="#"
                          className="block text-black hover:text-secondary"
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
              <button className="w-full text-left cursor-pointer text-sm font-semibold bg-secondary text-primary px-3 py-2">
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
