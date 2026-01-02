import React from "react";
import CarWorkshopForm from "../components/CarWorkshopForm";
import ContactInfoSection from "../components/Contact/ContactInfoSection";
import { logos } from "../resources/logos";
import LogoSlider from "../components/LogoSlider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - Speed Full Auto",
  description:
    "Get in touch with Speed Full Auto World for expert car care services in Dubai. Call, email, or visit our service center to request quotes or book an appointment.",
  alternates: {
    canonical: "https://www.speedfullauto.com/contact",
  },
};
const ContactPage = () => {
  return (
    <div>
      <CarWorkshopForm />
      <ContactInfoSection />
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:gap-10 py-7 md:py-10">
        <h2 className="subHeading font-bold text-center">
          <span className="text-secondary">Brands</span> we have dealt with
        </h2>
        <LogoSlider logos={logos} />
      </div>
    </div>
  );
};

export default ContactPage;
