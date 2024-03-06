import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CartItem from "./CartItem";
import "./styles/styles.css";
import InputBoxField from "components/InputBoxField/InputBoxField";
import OGButton from "components/Button/OGButton";
import ApplyDiscountCode from "./ApplyDiscountCode";
import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";

const CartList = (props) => {
  const { data } = props;

  const [showCartItem, setShowCartItem] = useState(true);

  return (
    <div>
      <div
        onClick={() => setShowCartItem(!showCartItem)}
        className="flex hover:cursor-pointer flex-row items-center justify-between border-b-[1px]  pb-2"
      >
        <p className="text-lg text-lightTextColor font-OG-Medium">
          {`${data.length} ${data.length > 1 ? "Items" : "Item"} in Cart`}
        </p>
        {/* <MdOutlineKeyboardArrowUp
          className={` ${
            showCartItem
              ? "rotate-[180deg] animate-rotateTo180Deg"
              : "rotate-[90deg] animate-rotateTo90Deg"
          } `}
          size={"1.5rem"}
        /> */}

        <OutlineArrowUpIcon
          className={`fill-[#0f0f0f] text-2xl ${
            showCartItem
              ? "rotate-[180deg] animate-rotateTo180Deg"
              : "rotate-[90deg] animate-rotateTo90Deg"
          } `}
        />
      </div>

      <div
        className={`overflow-y-scroll  ${
          data.length > 2 ? "max-h-[350px]" : "h-auto"
        } hide_scrollbar `}
      >
        {showCartItem &&
          data.map((item) => {
            return <CartItem item={item} />;
          })}
      </div>

      <div className="hidden my-4 sm:block order_summary_bottom">
        <ApplyDiscountCode />
        <OGButton
          title="Place Order"
          className=" font-OG-Bold hover:border-primaryColor   uppercase text-base px-4 py-2 h-[42px] basis-[50%]  hover:text-primaryColor text-white border-[1px] border-primaryColor rounded-[3px] bg-primaryColor hover:bg-white w-full duration-300 "
        />
      </div>
    </div>
  );
};

export default CartList;
