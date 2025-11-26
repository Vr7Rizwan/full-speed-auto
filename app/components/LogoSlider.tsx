"use client";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface LogoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

type Direction = "left" | "right";

interface LogoSliderProps {
  logos: LogoData[];

  /** Scroll direction. 'left' = default marquee (LTR). 'right' = reverse (RTL). */
  direction?: Direction;

  /** Slick overrides (optional) */
  slidesToShow?: number;
  autoplaySpeed?: number;
  speed?: number;
  className?: string;
}

export default function LogoSlider({
  logos,
  direction = "left",
  slidesToShow = 5,
  autoplaySpeed = 0,
  speed = 2000,
  className = "",
}: LogoSliderProps) {
  // In react-slick, reverse movement is achieved with RTL mode.
  const isRTL = direction === "right";

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(4, slidesToShow),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: Math.max(2000, autoplaySpeed),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: Math.max(2000, autoplaySpeed),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: Math.max(2000, autoplaySpeed),
        },
      },
    ],
  };

  return (
    // dir attribute keeps layout consistent with slick's rtl flag
    <div dir={isRTL ? "rtl" : "ltr"} className={className}>
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="px-1 sm:px-2 md:px-4 outline-none">
            <div className="flex overflow-hidden rounded-2xl items-center justify-center w-full h-full bg-white">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="hover:cursor-pointer w-1/2 h-1/2 object-contain scale-100"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
