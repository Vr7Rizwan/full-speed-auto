import React from "react";

const Banner = ({ banner }: { banner: string }) => {
  return (
    <div className="w-full overflow-hidden">
  <img
    src={banner}
    alt="Hero"
    className="w-full max-h-[400px] object-cover"
  />
</div>

  );
};

export default Banner;
