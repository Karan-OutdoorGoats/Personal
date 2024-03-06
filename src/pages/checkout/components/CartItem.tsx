import CloseIcon from "assets/svg/components/CloseIcon";
import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import PencilIcon from "assets/svg/components/PencilIcon";
import QtyDropdown from "pages/cart/components/QtyDropdown";
import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { MdClose, MdOutlineKeyboardArrowUp } from "react-icons/md";

const CartItem = (props) => {
  const { item } = props;

  const [showViewDetail, setShowViewDetail] = useState(false);

  return (
    <div className="my-4 border-b-[1px]">
      <div className="flex flex-row gap-2">
        <div className="relative cart_item_container basis-[25%] ">
          <img className="size-[60px] object-cover" src={item.prdImg} alt="" />

          <div className="absolute top-0 left-[0%] icon_abs_container">
            <div className="border-[1px] bg-white hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
              {/* <MdClose
                className="m-[2px] group-hover:text-white text-primaryColor"
                size={"1rem"}
              /> */}
              <CloseIcon className="m-[2px] group-hover:fill-white fill-primaryColor text-primaryColor " />
            </div>
          </div>
          <div className="absolute top-[25px] left-[0%] icon_abs_container">
            <div className="border-[1px] bg-white hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
              {/* <BiPencil
                className="m-[2px] group-hover:text-white text-primaryColor"
                size={"1rem"}
              /> */}
              <PencilIcon className="m-[2px] group-hover:fill-white fill-primaryColor" />
            </div>
          </div>
        </div>

        <div className="prd_desc">
          <p className="text-s text-lightTextColor font-OG-Bold">
            {item.prdTitle}
          </p>
          <p className="mb-2 text-s text-lightTextColor font-OG-Regular">
            {item.prdDesc}
          </p>
          <QtyDropdown />
        </div>

        <div className="flex flex-row items-end gap-1 amount_container self-baseline">
          <p className="text-xs line-through text-dustyGray">
            {item.specialPrice}
          </p>
          <p className="text-sm text-lightTextColor">{item.price}</p>
        </div>
      </div>

      <div className="my-2 view_details">
        <div
          onClick={() => setShowViewDetail(!showViewDetail)}
          className="flex flex-row items-center gap-1 hover:cursor-pointer"
        >
          <p className="text-s font-OG-Regular text-lightTextColor">
            View Details
          </p>
          {/* <MdOutlineKeyboardArrowUp
            className={` ${showViewDetail
                ? "rotate-[180deg] animate-rotateTo180Deg"
                : "rotate-[90deg] animate-rotateTo90Deg"
              } `}
            size={"1rem"}
          /> */}

          <OutlineArrowUpIcon
            className={`fill-[#0f0f0f] text-base ${
              showViewDetail
                ? "rotate-[180deg] animate-rotateTo180Deg"
                : "rotate-[90deg] animate-rotateTo90Deg"
            } `}
          />
        </div>

        {showViewDetail && (
          <div className="my-2">
            {item.skuOptions.map((item) => {
              return (
                <div className="flex flex-row gap-2 mb-[2px]">
                  <p className="text-xs font-OG-Bold text-lightTextColor">
                    {item.type} :
                  </p>
                  <p className="text-xs font-OG-Regular text-lightTextColor">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
