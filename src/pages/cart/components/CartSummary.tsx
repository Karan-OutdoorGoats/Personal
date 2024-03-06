import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const CartSummary = () => {
  const [showShippingEl, setShowShippingEl] = useState(false);
  const [showDiscountCodeEl, setShowDiscountCodeEl] = useState(false);

  return (
    <div className="sticky !top-[2%] ">
      <p className="text-[#ff0000] text-[0.938rem] font-OG-Medium mb-3">
        10% additional discount applicable on all prepaid orders
      </p>
      <p className="pb-2 text-sm uppercase border-b-[1px] font-OG-Medium text-lightTextColor">
        Summary
      </p>
      <div className={`border-b-[1px] ${showShippingEl ? "pb-3" : "pb-0"}`}>
        <div
          onClick={() => setShowShippingEl(!showShippingEl)}
          className="flex flex-row items-center justify-between hover:cursor-pointer"
        >
          <p className="my-2 text-sm uppercase font-OG-Medium text-lightTextColor">
            Estimate Shipping and Tax
          </p>
          <MdOutlineKeyboardArrowUp
            className={`${
              showShippingEl
                ? "rotate-[180deg] animate-rotateTo180Deg"
                : "rotate-[90deg] animate-rotateTo90Deg"
            } `}
            size={"1.5rem"}
          />
        </div>
        {showShippingEl && (
          <div className="mt-3">
            <p className="font-OG-Bold text-s text-lightTextColor">
              Free Shipping
            </p>
            <div className="flex flex-row items-center gap-3 my-2 hover:cursor-pointer free_radio_container">
              <input
                type="radio"
                value={"true"}
                checked
                className="checked:accent-primaryColor "
              />
              <p className="text-s font-OG-Regular text-lightTextColor">
                Free ₹0
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="my-3 border-b-[1px]">
        {[
          {
            title: "Bag MRP (incl. taxes)",
            amount: "₹7,096",
            type: "mrp",
          },
          {
            title: "Bag Discount",
            amount: "₹1,300",
            type: "discount",
          },
          {
            title: "Shipping (Free Shipping - Free)",
            amount: "₹0",
            type: "shipping",
          },
          {
            title: "You Pay",
            amount: "₹5,796",
            type: "you_pay",
          },
          {
            title: "Total Savings",
            amount: "₹1,300",
            type: "total_saving",
          },
        ].map((item) => {
          if (item.type === "you_pay") {
            return (
              <div className="flex flex-row items-center justify-between my-2">
                <p className="text-l font-OG-Bold text-lightTextColor">
                  {item.title}
                </p>
                <p className="text-l font-OG-Bold text-lightTextColor">
                  {item.amount}
                </p>
              </div>
            );
          }
          if (item.type === "total_saving") {
            return (
              <div className="flex flex-row items-center justify-between my-2">
                <p className="text-l font-OG-Bold text-[#008000]">
                  {item.title}
                </p>
                <p className="text-l font-OG-Bold text-[#008000]">
                  {item.amount}
                </p>
              </div>
            );
          }
          return (
            <div className="flex flex-row items-center justify-between my-2">
              <p className="text-m font-OG-Regular text-lightTextColor">
                {item.title}
              </p>
              <p className="text-m font-OG-Regular text-lightTextColor">
                {item.amount}
              </p>
            </div>
          );
        })}
      </div>

      <div className="my-2">
        <div
          onClick={() => setShowDiscountCodeEl(!showDiscountCodeEl)}
          className="flex flex-row items-center justify-between hover:cursor-pointer"
        >
          <p className="uppercase text-m font-OG-Bold text-lightTextColor">
            Apply discount code
          </p>
          <MdOutlineKeyboardArrowUp
            className={`${
              showDiscountCodeEl
                ? "rotate-[180deg] animate-rotateTo180Deg"
                : "rotate-[90deg] animate-rotateTo90Deg"
            } `}
            size={"1.5rem"}
          />
        </div>

        {showDiscountCodeEl && (
          <div className="mt-5">
            <div className="mt-1">
              <InputBoxField
                className="w-[100%] placeholder:font-OG-Regular border-[1px] bg-white focus:outline-primaryColor placeholder:text-lightTextColor text-xs font-OG-Regular px-3 h-[40px]"
                placeholder="Enter discount code"
              />
            </div>
            <div className="mt-4">
              <OGButton
                title="Apply Discount"
                className="text-xs bg-white uppercase border-primaryColor hover:duration-300  hover:bg-primaryColor hover:text-white font-OG-Bold text-lightTextColor border-[1px] w-full h-[40px]"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <OGButton
          title="Proceed to checkout"
          className="text-base uppercase bg-primaryColor text-white hover:border-[1px] hover:duration-300  hover:border-primaryColor hover:bg-white hover:text-primaryColor font-OG-Bold border-[1px] w-full h-[40px]"
        />
      </div>
    </div>
  );
};

export default CartSummary;
