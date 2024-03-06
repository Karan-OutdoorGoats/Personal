import FixedArrow from "components/FixedArrow/FixedArrow";
import React, { useEffect } from "react";
import ShippingAddress from "./components/ShippingAddress";
import PaymentMethods from "./components/PaymentMethods";
import OrderSummary from "./components/OrderSummary";
import { useCheckoutPage } from "./checkout.hooks";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/mobile/components/Header";
import MobileOrderSummary from "./components/mobile/components/MobileOrderSummary";
import InputBoxField from "components/InputBoxField/InputBoxField";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import MobileAskEmailAndCoupon from "./components/mobile/components/MobileAskEmailAndCoupon";

const CheckoutPage = () => {
  const { data,setUserPrompt,userPrompt } = useCheckoutPage();
  const location = useLocation();

  return (
    <div>
      {/* for desktop */}
      <div className="flex-row hidden gap-3 px-3 my-5 sm:flex sm:px-10 ">
        <div className="border-[1px] h-max shipping_address basis-[33%]">
          <ShippingAddress userPrompt={userPrompt} setUserPrompt={setUserPrompt} />
        </div>
        <div className="shipping_payment_method basis-[33%]">
          <PaymentMethods />
        </div>
        <div className="order_summary basis-[33%]">
          <OrderSummary data={data} />
        </div>
      </div>
      {/* end */}

      {/* for mobile */}
      <div className="sm:hidden">
        <Header />
        <MobileOrderSummary data={data} />
        {location.pathname === "/checkout" && <MobileAskEmailAndCoupon userPrompt={userPrompt} setUserPrompt={setUserPrompt} />}
        {/* hide in larger device */}
        <div className="sm:hidden">
          <Outlet />
        </div>
        {/*  */}
      </div>
      {/* end */}

      <FixedArrow />
    </div>
  );
};

export default CheckoutPage;
