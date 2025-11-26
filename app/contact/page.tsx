import React from "react";
import CarWorkshopForm from "../components/CarWorkshopForm";
import ContactInfoSection from "../components/Contact/ContactInfoSection";
import { logos } from "../resources/logos";
import LogoSlider from "../components/LogoSlider";
const ContactPage = () => {
  return (
    <div>
      <CarWorkshopForm />
      <ContactInfoSection />
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:gap-10 py-7 md:py-10">
        <h2 className="subHeading font-bold text-center">
          Brands we have dealth with
        </h2>
        <LogoSlider logos={logos} />
      </div>
    </div>
  );
};

export default ContactPage;
