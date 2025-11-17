import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Facebook, Instagram } from "lucide-react"


const CarWorkshopForm = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-20 gap-8">

            {/* Left Image - Fully Responsive */}
            <section className="bg-txtColor text-primary py-16 px-6 flex md:px-20 relative overflow-hidden">

      {/* Background Texture (optional) */}

      <div className="relative z-10 max-w-6xl mx-auto">

        <div>
            {/* Heading */}
                <h4 className="text-secondary subHeading font-bold mb-2 tracking-wide">
                 CONTACT US
                </h4>
                <h2 className="heading font-extrabold mb-6">Get In Touch</h2>
                <p className="text-primary normalText max-w-2xl mb-10">
                For any inquiries or to schedule a service, feel free to reach out to us.
                 Our team is ready to assist you with all your car repair and servicing needs.
                </p>
        </div>
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="text-secondary mt-1" size={24} />
            <p className="leading-tight normalText">
              <strong>Haleb Street, Al Qusais Industrial - 1 , Dubai</strong>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="text-secondary mt-1" size={24} />
            <p className="leading-tight normalText">052 174 3438</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="text-secondary mt-1" size={24} />
            <p className="leading-tight normalText">fullspeedauto@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 bg-secondary text-black rounded-md hover:bg-secondary"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-secondary text-black rounded-md hover:bg-secondary"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden h-80 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.815024647876!2d55.370376!3d25.278007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fb2e7c3e93f%3A0x4fb6ea9dd7c03033!2sAwtar%20Auto%20Multi%20Brand%20Repairing%20Garage!5e0!3m2!1sen!2sae!4v1700000000000"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

            {/* Right Form */}
            <div className="w-full md:w-1/2 bg-primary p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-txtColor">
                    Book Your Car Service
                </h2>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="text"
                        placeholder="Car Model"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <textarea
                        placeholder="Additional Details"
                        rows={4}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-secondary cursor-pointer text-primary font-semibold py-3 rounded transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </section>
    );
};

export default CarWorkshopForm;
