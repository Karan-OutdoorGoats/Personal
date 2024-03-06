import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React from "react";

const ApplyDiscountCode = () => {
  return (
    <div>
      <p className="uppercase text-s font-OG-Bold text-lightTextColor ">
        Apply discount code
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 my-2 border-b-[1px] pb-4">
        <InputBoxField
          placeholder="Enter discount code"
          className="h-[42px] focus:outline-primaryColor text-s px-2 font-OG-Regular w-full md:w-auto md:basis-[50%] border-[1px]"
        />
        <OGButton
          title="Apply Discount"
          className=" font-OG-Regular duration-300 hover:border-primaryColor w-full md:w-auto  uppercase text-s px-2 py-1 md:px-4 md:py-2 h-[42px] md:basis-[50%] text-primaryColor hover:text-white border-[1px] border-primaryColor rounded-[3px] bg-white hover:bg-primaryColor"
        />
      </div>
    </div>
  );
};

export default ApplyDiscountCode;
