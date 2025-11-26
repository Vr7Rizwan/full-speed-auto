import React from "react";
import Link from "next/link";

const Hero = ({
  heroTxt,
  description,

  contentimg,
}: {
  heroTxt: string;
  description: string;

  contentimg: string;
}) => {
  return (
    <div className="flex flex-col bg-gray-50 justify-center w-full px-4 md:px-6 gap-5  py-5 md:py-10 md:pt-30">
      <div className="w-full flex flex-col lg:flex-row justify-center bg-gray-100 rounded-2xl gap-2 lg:my-5 md:gap-0">
        <div className="w-full lg:w-[60%] flex flex-col px-5 py-5 lg:px-10 lg:py-10 ">
            <p className="normalText">{description}</p>
        </div>
        <div className="w-full lg:w-[40%] h-54 lg:h-auto flex justify-center md:justify-end bg-cover bg-center rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-tr-2xl"
         style={{ backgroundImage: `url('/assets/services/brake-system-content.webp')` }}>
          {/* <img src={contentimg} alt="" className="w-full object-cover rounded-br-2xl rounded-bl-2xl md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl" /> */}

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
          className="hidden md:block w-full h-auto"
        />

        {/* Mobile Image */}
        <img
          src="/assets/services/discounting-mob.webp"
          alt="discount"
          className="block md:hidden w-full h-auto"
        />
      </Link>

      {/* <h2 className="heading text-txtColor font-bold pt-5 md:pt-10">
        Our Features
      </h2>

      <ul className="list-disc pl-5 space-y-2">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Hero;
