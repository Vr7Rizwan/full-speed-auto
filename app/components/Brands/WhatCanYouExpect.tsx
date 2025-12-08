import React from "react";

function WhatCanYouExpect({
  whatToExpect,
}: {
  whatToExpect: string[] | undefined;
}) {
  return (
    <div className="w-[95%] mx-auto">
      <h2 className="subHeading font-bold txtColor mb-10 text-center tracking-wide">
        What You Can Expect at <span className="subHeading font-bold txtColor mb-10 text-center tracking-wide text-secondary">SPEED FULL AUTO</span>
      </h2>

      <div className="flex flex-col gap-6">
        {whatToExpect?.map((item, i) => (
          <div
            key={item + i}
            className="flex items-center gap-4 p-4 md:p-6 rounded-lg border-l-4 border-secondary border-r-4 border-b border-t shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-[20%] md:w-8 h-8 py-3 md:py-0 flex text-center items-center justify-center rounded-full bg-secondary text-primary font-semibold ">
              {i + 1}
            </div>
            <p className="w-[80%] txtColor normalText">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatCanYouExpect;
