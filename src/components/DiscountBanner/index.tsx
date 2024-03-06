import React from "react";

const DiscountBanner = () => {
  return (
    <div className="sm:hidden py-4  relative px-2 text-center text-base bg-gradient-to-r from-[#2acdee] from-[5%] via-[#36656d] via-[90%] to-[#36656d] text-white border-2 bg-primaryColor font-OG-Bold">
      <h2 className="">
        10% Discount on <span className="underline">PREPAID</span>
      </h2>
      <div className="absolute scale-[8] top-[30%] left-[20%] z-[3] opacity-40">
        %
      </div>
    </div>
  );
};

export default DiscountBanner;
