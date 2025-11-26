import React from "react";
import Link from "next/link";

const Hero = ({
  heading,
  heroTxt,
  description,

  contentimg,
}: {
  heading: string;
  heroTxt: string;
  description: string;

  contentimg: string;
}) => {
  return (
    <div className="flex flex-col bg-gray-50 justify-center py-10 w-full px-4 md:px-6 md:py-10 gap-5">
      <div className="flex flex-col md:flex-row justify-center  gap-6 md:gap-0">
        <div className="flex flex-col gap-6 md:gap-8 md:pr-10">
          <h1 className="heading text-txtColor font-bold">{heading}</h1>

          <div className="flex flex-col gap-1">
            <p className="normalText">{description}</p>
          </div>
        </div>
        <div className="md:w-full w-full flex justify-center md:justify-end">
          <img
            src={contentimg}
            alt=""
            className="w-full max-w-[280px] md:max-w-full object-cover"
          />
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
