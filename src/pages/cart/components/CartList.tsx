import React from "react";
import QtyDropdown from "./QtyDropdown";
import { FaRegHeart } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import OGButton from "components/Button/OGButton";
import { MdOutlineChevronLeft } from "react-icons/md";

const CartList = () => {
  return (
    <div className="sm:mt-8 sm:px-5">
      <div className="flex flex-row *:uppercase justify-between items-center *:font-OG-Medium border-b-[1px] pb-3">
        <div className="basis-[60%]">
          <p className="text-lightTextColor">Item</p>
        </div>
        <div className="flex flex-row basis-[40%] *:basis-[33%] items-center">
          <p className="">Price</p>
          <p>QTY</p>
          <p className="text-center">Subtotal</p>
        </div>
      </div>

      <div className="">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div className="pb-4 border-b-[1px]">
              <div className="flex flex-row justify-between pt-5 item_container ">
                <div className="basis-[60%] flex flex-row">
                  <img
                    className="size-[110px]"
                    src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/60d0bbf577afe6067417934a9b5e3e26/m/-/m-ts-101-rust_1.webp"
                    alt=""
                  />
                  <div>
                    <p className="brand_name font-OG-Regular text-s">Reccy</p>
                    <p className="w-[90%] break-words font-OG-Regular text-s text-lightTextColor">
                      Men's Athletic Outdoor Ultrabreathe T-Shirt
                    </p>

                    <div className="my-2">
                      <div className="flex flex-row gap-2 mb-[2px]">
                        <p className="text-xs font-OG-Bold text-lightTextColor">
                          Size:
                        </p>
                        <p className="text-xs font-OG-Regular text-lightTextColor">
                          M
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 mb-[2px]">
                        <p className="text-xs font-OG-Bold text-lightTextColor">
                          Color:
                        </p>
                        <p className="text-xs font-OG-Regular text-lightTextColor">
                          Blue
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 mb-[2px]">
                        <p className="text-xs font-OG-Bold text-lightTextColor">
                          Bundle:
                        </p>
                        <p className="text-xs font-OG-Regular text-lightTextColor">
                          1 Pair
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row basis-[40%] *:basis-[33%] ">
                  <div className="flex flex-col">
                    <p className="text-lg font-OG-Bold text-lightTextColor">
                      ₹999
                    </p>
                    <p className="text-lg line-through font-OG-Bold text-dustyGray">
                      ₹1,299
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <QtyDropdown />
                  </div>
                  <div>
                    <p className="text-lg text-center font-OG-Bold text-lightTextColor">
                      ₹999
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-3 ">
                <div className="border-[1px] group hover:bg-primaryColor border-primaryColor rounded-full">
                  <FaRegHeart
                    className="m-1 hover:cursor-pointer group-hover:text-white text-primaryColor"
                    size={"0.8rem"}
                  />
                </div>
                <div className="border-[1px] hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
                  <BiPencil
                    className="m-1 group-hover:text-white text-primaryColor"
                    size={"0.8rem"}
                  />
                </div>
                <div className="border-[1px] hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
                  <MdClose
                    className="m-1 group-hover:text-white text-primaryColor"
                    size={"0.8rem"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center gap-4 my-4">
        <OGButton
          icon={<MdOutlineChevronLeft size={"1rem"} />}
          title="Continue shopping"
          className="text-xs uppercase flex flex-row items-center gap-3 bg-primaryColor text-white hover:border-[1px] hover:duration-300 px-4  hover:border-primaryColor hover:bg-white hover:text-primaryColor font-OG-Bold border-[1px]  h-[40px]"
        />
        <OGButton
          title="Move all to wishlist"
          className="text-xs uppercase bg-primaryColor text-white hover:border-[1px] hover:duration-300 px-4  hover:border-primaryColor hover:bg-white hover:text-primaryColor font-OG-Bold border-[1px]  h-[40px]"
        />
      </div>
    </div>
  );
};

export default CartList;
