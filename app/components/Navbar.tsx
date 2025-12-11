"use client";

import React, { useState } from "react";
import Link from "next/link";
import navLinks from "../resources/navLinks";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactBtn from "./ContactBtn";

const navItemClass = `
  relative inline-flex items-center py-2 font-bold text-txtColor
  before:content-[''] before:absolute before:left-0 before:top-0 
  before:w-full before:h-0.5 before:bg-current 
  before:scale-x-0 before:origin-left before:transition before:duration-300 
  hover:before:scale-x-100

  after:content-[''] after:absolute after:left-0 after:bottom-0 
  after:w-full after:h-0.5 after:bg-current 
  after:scale-x-0 after:origin-right after:transition before:duration-300 
  hover:after:scale-x-100 text-txtColor flex items-center font-medium
`;

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };
  return (
    <nav className="w-full bg-secondary shadow-md sticky top-0 z-20">
      <div className="flex flex-row items-center justify-between px-4 md:px-8">
        {/* Logo */}
        
          <Link href="/" className="lg:w-2/10">
          <img
            className="w-20 h-15 md:w-40 md:h-25 py-2"
            src="/assets/logo.png"
            alt=""
          />
        </Link>
        <ContactBtn
                setMobileMenuOpen={setMobileMenuOpen}
                text="Book Appointment"
                classes={`w-full ${mobileMenuOpen && "hidden"} block lg:hidden bg-txtColor text-primary text-center cursor-pointer font-semibold rounded-full bg-secondary px-5 py-2`}
              />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-6 xl:gap-7 text-primary items-center">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="group normalText text-primary"
              onMouseEnter={() => setActiveSubmenu(item.name)} // hover open
              onMouseLeave={() => setActiveSubmenu(null)} // hover close
              onClick={() => item.submenu && toggleSubmenu(item.name)} // click toggle
            >
              <Link href={item.href} className={navItemClass}>
                {item.name}{" "}
                {item.submenu && <ChevronDown className="ml-1 w-8 h-8 px-2" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <ul
                  className={`absolute top-[90%] left-0 mt-2 w-[98vw] mx-1 bg-txtColor border border-gray-100 rounded shadow-lg 
                    opacity-0 invisible transition-all duration-300 z-50
                    ${
                      item.name === "Brands" || item.name === "Services"
                        ? "grid grid-cols-3 p-4"
                        : "w-40"
                    }
                    group-hover:opacity-100 group-hover:visible
                    ${
                      activeSubmenu === item.name ? "opacity-100 visible" : ""
                    }`}
                >
                  {item.submenu.map((subItem) => (
                    <li
                      key={subItem[0]}
                      className={`px-4 py-2 hover:bg-secondary hover:text-txtColor normalText ${
                        item.name === "Brands" || item.name === "Services"
                          ? "p-2"
                          : ""
                      }`}
                    >
                      <Link
                        href={subItem[1]}
                        prefetch={false}
                        className="block font-semibold"
                      >
                        {subItem[0]}
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
          <ContactBtn
            text="Book Appointment"
            classes="cursor-pointer normalText font-semibold bg-txtColor text-primary px-5 py-3 rounded-full"
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden lg:w-[15%] flex justify-end">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 " />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-txtColor border-t border-txtColor overflow-y-auto max-h-[90vh] scroll-smooth [ -webkit-overflow-scrolling:touch ]">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((item) => (
              <li key={item.name} className="relative">
                <div
                  className="flex items-center justify-between py-2 font-bold text-primary cursor-pointer"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  <Link
                    onClick={() => item.submenu || setMobileMenuOpen(false)}
                    className="normalText w-full"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <ul className="pl-4 mt-1 flex max-h-[25vh] overflow-scroll flex-col gap-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem[0]} className="py-1 normalText">
                        <Link
                          prefetch={false}
                          onClick={() => setMobileMenuOpen(false)}
                          href={subItem[1]}
                          className="block text-primary hover:text-secondary"
                        >
                          {subItem[0]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Button */}
            <li className="mt-2">
              <ContactBtn
                setMobileMenuOpen={setMobileMenuOpen}
                text="Book Appointment"
                classes="w-full text-center cursor-pointer font-semibold rounded-full bg-secondary text-txtColor px-3 py-2"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
