import React from "react";

const BannerAll = ({ image }) => {
  return (
    <section className="w-full">
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BannerAll;

