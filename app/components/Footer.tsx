import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-primary py-12 px-6 md:px-12">

            <div className="flex flex-col md:flex-row justify-between gap-12">

                {/* Column 1 */}
                <div className="flex flex-col gap-3 md:w-1/4">
                    <h1 className="text-3xl md:text-2xl font-bold">
                        FULL SPEED <span className="text-secondary">AUTOS</span>
                    </h1>

                    <p className="text-sm leading-tight">
                        Premium car care, detailing, and automotive services.
                    </p>
                    <p className="text-sm leading-tight -mt-1">
                        Serving UAE with quality, trust, and expert technicians.
                    </p>

                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-secondary" />
                            <p>Dubai</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-secondary" />
                            <p>Sharjah</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-secondary" />
                            <p>Abu Dhabi</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/4">
                    <h1 className="text-2xl font-bold text-primary">Quick Links</h1>

                    <div className="flex flex-col gap-2 text-sm">
                        <Link href="/" className="hover:text-secondary">Home</Link>
                        <Link href="/about" className="hover:text-secondary">About Us</Link>
                        <Link href="/services" className="hover:text-secondary">Services</Link>
                        <Link href="/brands" className="hover:text-secondary">Our Brands</Link>
                        <Link href="/offers" className="hover:text-secondary">Offers</Link>
                        <Link href="/contact" className="hover:text-secondary">Contact</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/4">
                    <h1 className="text-2xl font-bold text-primary">Useful Links</h1>

                    <div className="flex flex-col gap-2 text-sm">
                        <Link href="/services/detailing" className="hover:text-secondary">Car Detailing</Link>
                        <Link href="/services/repair" className="hover:text-secondary">Auto Repair</Link>
                        <Link href="/services/oil-change" className="hover:text-secondary">Oil Change</Link>
                        <Link href="/services/engine" className="hover:text-secondary">Engine Service</Link>
                        <Link href="/services/tinting" className="hover:text-secondary">Tinting Service</Link>
                        <Link href="/services/inspection" className="hover:text-secondary">Car Inspection</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/4">
                    <h1 className="text-2xl font-bold text-primary">Connect With Us</h1>

                    <div className="flex items-center gap-2">
                        <Phone className="size-4 text-secondary" />
                        <p className="text-sm">+971 50 123 4567</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Mail className="size-4 text-secondary" />
                        <p className="text-sm">info@fullspeedautos.com</p>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                        <Link href="https://facebook.com" className="border p-2 rounded-full" target="_blank">
                            <Facebook className="size-5  hover:text-secondary cursor-pointer" />
                        </Link>

                        <Link href="https://instagram.com" className="border p-2 rounded-full" target="_blank">
                            <Instagram className="size-5 hover:text-secondary cursor-pointer" />
                        </Link>

                        <Link href="https://youtube.com" className="border p-2 rounded-full" target="_blank">
                            <Youtube className="size-5 hover:text-secondary cursor-pointer" />
                        </Link>
                    </div>

                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Full Speed Autos. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
