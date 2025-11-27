import React from "react";

function Facilities({
  facilities,
  brand,
}: {
  facilities: string[] | undefined;
  brand: string | undefined;
}) {
  return (
    <div className="w-[95%] mx-auto py-10">
      <h2 className="subHeading font-bold txtColor mb-6 text-center">
        Our Facilities for {brand} Repair and Service
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {facilities?.map((facility, i) => (
          <div
            key={facility + i}
            className="flex items-start gap-3 bg-white p-5 border border-secondary rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* <span className="txtColor">✔</span> */}
           
            <p className="txtColor normalText">{facility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
