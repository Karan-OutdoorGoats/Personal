import React from "react";
import FreeShippingPic from "assets/images/Free_Delivery.png";
import EasyReturn from "assets/images/Easy_Return.png";
import EasyPaymentOption from "assets/images/Easy_Payment_Options.png";
import AuthenticProd from "assets/images/100_Authentic.png";
import CODAvail from "assets/images/COD.png";
import EasyExch from "assets/images/Easy_Exchanges.png";

const PromiseGrid = () => {
  return (
    <div className="grid grid-cols-2 mx-auto sm:grid-cols-3 gap-2 sm:gap-0 *:w-auto my-2 *:rounded-md ">
      {[
        {
          title: "Free Shipping",
          img: FreeShippingPic,
        },
        {
          title: "Easy Returns",
          img: EasyReturn,
        },
        // {
        //   title: "Easy Payment Options",
        //   img: EasyPaymentOption,
        // },
        {
          title: "100% Authenthic Product",
          img: AuthenticProd,
        },
        // {
        //   title: "COD Available",
        //   img: CODAvail,
        // },
        // {
        //   title: "Easy Exchanges",
        //   img: EasyExch,
        // },
      ].map((item, index) => {
        return (
          <div className="py-2.5 text-center items-center border-primaryColor flex justify-center flex-row">
            <img src={item.img} className="size-[60px]" alt="" />
            <p className="text-sm font-OG-Bold text-grey">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PromiseGrid;
