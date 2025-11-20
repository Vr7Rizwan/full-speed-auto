"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
    return (
        <section className="w-[95%] mx-auto bg-white py-16">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="heading font-bold text-center mb-12">
                    Get in <span className="text-secondary">Touch With Us</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Phone */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
                        <Phone className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="subHeading font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+971 55 123 4567</p>
                    </div>

                    {/* Email */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
                        <Mail className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="subHeading font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">fullspeedauto@gmail.com</p>
                    </div>

                    {/* Location */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
                        <MapPin className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="subHeading font-semibold mb-2">Location</h3>
                        <p className="text-gray-600">
                            Al Quoz Industrial Area 3, Dubai, UAE
                        </p>
                    </div>

                    {/* Business Hours */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
                        <Clock className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="subHeading font-semibold mb-2">Business Hours</h3>
                        <p className="text-gray-600">Mon – Sat: 9:00 AM – 8:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
