"use client";

import Slider from "react-slick";
import ContactBtn from "./ContactBtn";

const Banner = () => {
  const slides = [
    {
      image: "/assets/banner1.webp",
      heading: "Premium Luxury Car Service",
      subHeading:
        "Dealership-level diagnostics, genuine manufacturer parts, and expert technicians.",
      buttonText: "Schedule Now",
    },
    {
      image: "/assets/banner2.webp",
      heading: "Expert Maintenance & Repair",
      subHeading:
        "Certified professionals delivering precision service for every vehicle.",
      buttonText: "Book Appointment",
    },
    {
      image: "/assets/banner3.webp",
      heading: "Performance You Can Trust",
      subHeading:
        "Advanced tools and technology to keep your car at peak performance.",
      buttonText: "Get Started",
    },
    {
      image: "/assets/banner4.webp",
      heading: "Luxury Care, Redefined",
      subHeading: "Premium service experience designed for luxury vehicles.",
      buttonText: "Contact Us",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {/* Background Image */}
            <div
              className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-[90%] md:w-full text-center flex flex-col items-center gap-10 animate-fadeIn">
                  <h1 className="heading font-bold text-primary leading-tight drop-shadow-xl">
                    {slide.heading}
                  </h1>

                  <p className="text-primary/95 subHeading leading-relaxed max-w-2xl">
                    {slide.subHeading}
                  </p>

                  <ContactBtn
                    text={slide.buttonText}
                    classes="px-6 py-3 cursor-pointer bg-secondary normalText text-txtcolor rounded-md text-base font-semibold hover:bg-secondary/85 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
