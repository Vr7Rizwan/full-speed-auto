import { MapPin, Phone, Mail } from "lucide-react";
import Form from "./Form";

const CarWorkshopForm = () => {
  return (
    <section className="mx-auto flex flex-col md:flex-row items-center bg-gray-100 py-15 px-4 md:px-6 gap-8">
      {/* Left Image - Fully Responsive */}
      <section className="bg-txtColor rounded-2xl w-full text-primary py-16 px-6 flex md:px-20 relative overflow-hidden">
        {/* Background Texture (optional) */}

        <div className="relative max-w-6xl mx-auto">
          <div>
            {/* Heading */}
            <p className="text-secondary heading font-bold mb-2 tracking-wide">
              CONTACT US
            </p>
            <p className="subHeading font-extrabold mb-6">Get In Touch</p>
            <p className="text-primary normalText max-w-2xl mb-10">
              For any inquiries or to schedule a service, feel free to reach out
              to us. Our team is ready to assist you with all your car repair
              and servicing needs.
            </p>
          </div>
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Address */}
            <div className="flex items-center gap-3">
              <MapPin className="text-secondary mt-1" size={30} />
              <p className="leading-tight normalText">
                <strong>
                  Ras Al Khor Industrial Area 2, Warehouse No. 56, Dubai-UAE
                </strong>
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-secondary mt-1" size={24} />
              <p className="leading-tight normalText font-bold">
                +971 56 322 0861
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-secondary mt-1 w-[10%]" size={24} />
              <p className="leading-tight normalText w-[90%] font-bold">
                speedfullauto21@gmail.com
              </p>
            </div>

            {/* Social Icons */}
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-60 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.689093853261!2d55.36501520203905!3d25.17217144182619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67ec76d0ae0b%3A0x482ba993ace9d7aa!2sSpeed%20Full%20Auto%20Garage!5e0!3m2!1sen!2s!4v1764074839736!5m2!1sen!2s"
              width="100%"
              height="100%"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Right Form */}
      <Form />
    </section>
  );
};

export default CarWorkshopForm;
