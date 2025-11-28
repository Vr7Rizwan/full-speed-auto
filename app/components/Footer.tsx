import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
 
} from "lucide-react";
import { locations, quickLinks, usefulLinks } from "../resources/footer";

const Footer = () => {
  

  return (
    <footer className="w-full bg-txtColor text-primary py-12 px-6 md:px-12 z-20">
      <div className="flex flex-col md:flex-row justify-around gap-12">
        {/* Column 1: Brand + Locations */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <img className="w-40 h-25 items-center justify-center"src="/assets/logo-light.png" alt="" />

          <p className="normalText leading-tight">
            Luxury-grade car maintenance, detailing, and auto service solutions.
          </p>
          <p className="normalText leading-tight -mt-1">
            Bringing quality service, trusted support, and highly trained specialists to the UAE.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            {locations.map((loc) => (
              <div key={loc} className="flex items-center gap-2">
                <MapPin className="size-4 text-secondary" />
                <p>{loc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <h1 className="subHeading font-bold text-primary">Quick Links</h1>
          <div className="flex flex-col gap-2 normalText">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Useful Links */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <h1 className="subHeading font-bold text-primary">Useful Links</h1>
          <div className="flex flex-col gap-2 normalText">
            {usefulLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: Contact + Social */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <h1 className="subHeading font-bold text-primary">Connect With Us</h1>

          <div className="flex items-center gap-2">
            <Phone className="size-4 text-secondary" />
            <p className="normalText">+971 56 322 0861</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="size-4 text-secondary" />
            <p className="normalText">speedfullauto21@gmail.com</p>
          </div>

         
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center normalText text-gray-400">
        © {new Date().getFullYear()} Full Speed Autos. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
