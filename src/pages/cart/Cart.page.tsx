import React from "react";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";
import FixedArrow from "components/FixedArrow/FixedArrow";

const Cart = () => {
  return (
    <div>
      <div className="px-3 my-5 sm:px-20 ">
        <div className="cart_page_header">
          <h1 className="mb-2 text-2xl text-lightTextColor font-OG-Bold">
            Shopping Cart
          </h1>
          <p className="my-2 font-OG-Regular text-s text-lightTextColor">
            To edit address go to{" "}
            <span className="underline capitalize hover:text-primaryColor font-OG-Bold hover:cursor-pointer">
              profile setting
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between border-[1px] cart_container">
          <div className="cart_side basis-[70%]">
            <CartList />
          </div>
          <div className="p-5 bg-f5">
            <CartSummary />
          </div>
        </div>
        <FixedArrow />
      </div>
    </div>
  );
};

export default Cart;
