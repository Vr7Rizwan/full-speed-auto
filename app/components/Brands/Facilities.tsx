import React from "react";

function Facilities({
  facilities,
  brand,
}: {
  facilities: string[] | undefined;
  brand: string | undefined;
}) {
  return (
    <div className="flex flex-col justify-center w-[95%] mx-auto gap-4">
      <h2 className="subHeading">
        Our facilities are geared for your {brand} Repair and Service:
      </h2>
      <ul>
        {facilities?.map((facility, i) => (
          <li className="list-disc normalText" key={facility + i}>
            {facility}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Facilities;
