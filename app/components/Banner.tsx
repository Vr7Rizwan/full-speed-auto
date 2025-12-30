"use client";

import Slider from "react-slick";
import ContactBtn from "./ContactBtn";

const Banner = () => {
  const images: string[] = [
    "/assets/banner1.webp",
    "/assets/banner2.webp",
    "/assets/banner3.webp"
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
  
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>

  
      <div className="absolute inset-0 bg-black/50 z-10" />


      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-[90%] md:w-full text-center flex flex-col items-center gap-10 animate-fadeIn">
          <h1 className="heading font-bold text-primary leading-tight drop-shadow-xl">
            Premium Luxury Car Service
          </h1>

          <p className="text-primary/95 subHeading leading-relaxed max-w-2xl">
            Dealership-level diagnostics, genuine manufacturer parts, and expert
            technicians all in one place.
          </p>

          <ContactBtn
            text="Schedule now"
            classes="px-6 py-3 cursor-pointer bg-secondary normalText text-txtcolor rounded-md text-base font-semibold hover:bg-secondary/85 transition duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
