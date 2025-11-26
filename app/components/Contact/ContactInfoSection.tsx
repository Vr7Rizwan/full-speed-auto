"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="w-[95%] mx-auto bg-white py-16">
      <div>
        {/* Heading */}
        <h2 className="subHeading font-bold text-center mb-12">
          Get in <span className="text-secondary">Touch With Us</span>
        </h2>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {/* Phone */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
            <Phone className="w-10 h-10 text-secondary mb-4" />
            <h3 className="subHeading font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+971 56 322 0861</p>
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
              Ras Al Khor Industrial Area 2, Warehouse No. 56, Dubai-UAE
            </p>
          </div>

          {/* Business Hours */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
            <Clock className="w-10 h-10 text-secondary mb-4" />
            <h3 className="subHeading font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600">24/7</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
