import CloseIcon from "assets/svg/components/CloseIcon";
import Qty from "pages/product-page/components/Qty";
import React from "react";
import { IoClose } from "react-icons/io5";

const CartItem = (props) => {
  return (
    <div className="px-2 py-4 border-b-[1px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1">
          <img
            className="size-[90px]"
            src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/60d0bbf577afe6067417934a9b5e3e26/m/-/m-ts-101-rust_1.webp"
            alt=""
          />
          <div>
            <p className="brand_name font-OG-Medium text-s">Reccy</p>
            <p className="w-[90%] break-words font-OG-Regular text-s text-lightTextColor prd_name">
              Men's Athletic Outdoor Ultrabreathe T-Shirt
            </p>

            <div className="flex flex-row flex-wrap items-center gap-2 my-2">
              <div className="flex flex-row gap-1 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor after:content-[':'] after:ml-1">
                  Size
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">M</p>
              </div>
              <div className="flex flex-row gap-1 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor after:content-[':'] after:ml-1">
                  Color
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">
                  Blue
                </p>
              </div>
              <div className="flex flex-row gap-1 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor after:content-[':'] after:ml-1">
                  Bundle
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">
                  1 Pair
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <IoClose
          size={"1.2rem"}
          className="text-doveGray hover:cursor-pointer "
        /> */}
        <CloseIcon className="m-1 fill-doveGray size-[1rem]  group-hover:fill-white" />
      </div>
      <div className="flex flex-row ">
        <div className="w-[90px]"></div>
        <Qty showHeader={false} className="h-[30px]" />
        <div className="flex flex-row items-end justify-end flex-1 gap-1">
          <p className="text-s font-OG-Regular text-lightTextColor">₹3,299</p>
          <p className="text-[10px] relative bottom-[0] line-through font-OG-Regular text-dustyGray">
            ₹3,299
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
