import React from "react";
import Link from "next/link";

const Hero = ({
  heroTxt,
  description,
  subheading,


  contentimg,
}: {
  heroTxt: string;
  description: string;
  subheading: string;


  contentimg: string;
}) => {
  return (
    <div className="flex flex-col bg-gray-50 justify-center w-full px-4 md:px-6 gap-5  py-5 md:py-10 md:pt-30">
      <div className="w-full flex flex-col lg:flex-row justify-center bg-gray-100 rounded-2xl gap-2 lg:my-5 md:gap-0">
        <div className="w-full lg:w-[60%] flex flex-col px-5 py-5 lg:px-10 lg:py-10 ">
          <h2 className="subHeading text-txtColor font-semibold">{subheading}</h2>
          <p className="normalText text-justify pt-8">{description}</p>
        </div>
        <div className="w-full lg:w-[40%] h-54 lg:h-auto flex justify-center md:justify-end bg-cover bg-center rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-tr-2xl"
          style={{ backgroundImage: `url(${contentimg}` }}>

        </div>
      </div>

      <h2 className="subHeading text-txtColor font-semibold">{heroTxt}</h2>

      <Link
        href="https://wa.me/971563220861?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
        target="_blank"
        className="block w-full my-3 md:my-10"
      >
        {/* Desktop Image */}
        <img
          src="/assets/services/discounting.webp"
          alt="discount"
          className="hidden md:block w-full h-auto rounded-2xl"
        />

        {/* Mobile Image */}
        <img
          src="/assets/services/discounting-mob.webp"
          alt="discount"
          className="block md:hidden w-full h-auto rounded-2xl"
        />
      </Link>


    </div>
  );
};

export default Hero;
