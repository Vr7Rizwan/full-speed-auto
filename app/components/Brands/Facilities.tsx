import React from "react";

function Facilities({
  facilities,
  brand,
}: {
  facilities: string[] | undefined;
  brand: string | undefined;
}) {
  return (
    <div className="w-[95%] mx-auto py-10 px-6 rounded-2xl bg-gray-50">
      <h2 className="subHeading font-bold text-txtColor mb-6 text-center">
        Our Facilities for {brand} Repair and Service
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {facilities?.map((facility, i) => (
          <div
            key={facility + i}
            className="flex items-center  gap-3 bg-primary p-4 border border-secondary rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-txtColor normalText">{facility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
