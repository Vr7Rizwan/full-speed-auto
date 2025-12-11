import React from "react";
import Link from "next/link";

const Hero = ({
  description,
  subheading,

  contentimg,
}: {
  description: string;
  subheading: string;

  contentimg: string;
}) => {
  return (
    <div className="flex flex-col bg-gray-50 justify-center w-full px-4 md:px-6 gap-5  py-5 md:py-10 md:pt-30">
      <div className="w-full flex flex-col lg:flex-row justify-center bg-gray-100 rounded-2xl gap-2  md:gap-0 my-5">
        <div className="w-full lg:w-[60%] flex flex-col gap-2 px-5 py-5 lg:px-10 lg:py-10 ">
          <h2 className="text-[1.2rem] md:subHeading text-txtColor font-bold">
            {subheading}
          </h2>
          <p className="normalText text-justify">{description}</p>
        </div>
        <div
          className="w-full lg:w-[40%] h-54 lg:h-auto flex justify-center md:justify-end bg-cover bg-center rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-tr-2xl lg:rounded-tl-none"
          style={{ backgroundImage: `url(${contentimg}` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
