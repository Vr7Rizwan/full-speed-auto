import React from "react";

const Banner = ({ banner }: { banner: string }) => {
  return (
    <div>
      <img src={banner} alt="" className="w-full object-center object-cover" />
    </div>
  );
};

export default Banner;
