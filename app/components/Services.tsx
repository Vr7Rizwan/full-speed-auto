"use client";
import Link from "next/link";
import { useState } from "react";
const Services = ({
  Services,
  brand,
  expertService,
}: {
  Services: { name: string; link: string; description: string }[] | undefined;
  brand?: string;
  expertService?: { title: string; description: string };
}) => {
  const [flip, setFlip] = useState<number | null>(null);
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-gray-50">
      {Services && (
        <div>
          {expertService ? (
            <div className="mb-12">
              <h1 className="subHeading font-bold text-txtColor mb-3">
                {expertService.title}
              </h1>
              <p className="text-txtColor normalText text-justify">
                {expertService.description}
              </p>
            </div>
          ) : (
            <div className="mb-12">
              <h1 className="subHeading font-bold text-txtColor mb-3">
                Automotive Solutions
              </h1>
              <p className="text-txtColor normalText text-justify">
                Expert care for maintenance, repairs, and performance upgrades,
                ensuring your vehicle runs smoothly, stays reliable, and
                delivers its full potential.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((value, i) => (
              <div
                key={`${value} ${i}`}
                onClick={() => setFlip(flip === i ? null : i)}
                className="group w-full h-64 md:h-80  xl:h-64  perspective-[1000px]"
              >
                <div
                  className={`relative w-full h-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)] ${
                    flip === i ? "transform-[rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute w-full md:h-80 h-64  xl:h-64  p-8 bg-primary flex flex-col gap-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-secondary">
                   
                    {brand ? (
                  
                      <h3 className="subHeading font-semibold text-txtColor">
                        {brand + " " + value.name}
                      </h3>
                    ) : (
                      <h3 className="subHeading font-semibold text-txtColor">
                        {value.name}
                      </h3>
                    )}

                    <p className="text-txtColor normalText wrap-break-word">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute w-full h-full  bg-primary flex flex-col items-center justify-center gap-10 rounded-2xl shadow-md hover:shadow-lg transition-all p-8 text-center border border-secondary backface-hidden transform-[rotateY(180deg)]">
                    <h3 className="subHeading font-semibold text-txtColor mb-2">
                      {value.name}
                    </h3>
                    <Link
                      className="px-6 py-2 bg-txtColor text-white rounded-full hover:bg-gray-800 transition"
                      href={value.link}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
