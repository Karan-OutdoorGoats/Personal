import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import CloseIcon from "assets/svg/components/CloseIcon";
import PencilIcon from "assets/svg/components/PencilIcon";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { colors } from "utils/colors";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: colors.white,
};

const WishlistItem = (props) => {
  const [qty, setQty] = useState("1");

  const { item, index } = props;
  return (
    <div className="gap-2 sm:mb-5 border-b-[1px] overflow-hidden pb-3 sm:pb-0 sm:gap-0 sm:flex-col">
      <div className="rounded-md sm:rounded-sm h-[200px] overflow-hidden sm:h-[250px] border-[1.2px] border-b-[3px] sm:border-b-[2px] border-primaryColor relative  hover:border-[1.5px] hover:rounded-md hover:cursor-pointer   sm:hover:border-primaryColor sm:hover:border-b-[2.5px]">
        <img src={item.prdImage} className="object-contain size-full" alt="" />
        <div className="absolute top-1 sm:top-3 right-[3%]  sm:right-[unset]  sm:left-[5%] icon_abs_container">
          <div className="border-[1px] bg-white hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
            {/* <MdClose
              className="m-[2px] group-hover:text-white text-primaryColor"
              size={"1rem"}
            /> */}
            <CloseIcon className="m-[2px] text-2xl sm:text-base group-hover:fill-white fill-primaryColor text-primaryColor " />
          </div>
        </div>
        <div className="absolute top-[20%] sm:top-10 right-[3%] sm:right-[unset]  sm:left-[5%] icon_abs_container">
          <div className="border-[1px] bg-white hover:cursor-pointer group hover:bg-primaryColor border-primaryColor rounded-full">
            {/* <BiPencil
              className="m-[2px] group-hover:text-white text-primaryColor"
              size={"1rem"}
            /> */}
            <PencilIcon className="m-[2px] text-2xl sm:text-base group-hover:fill-white fill-primaryColor" />
          </div>
        </div>

        {index === 0 && (
          <div className="absolute flex flex-row items-center justify-center w-full bottom-[0px] bg-ff0000">
            <p className="text-sm text-white font-OG-Bold">OUT OF STOCK</p>
          </div>
        )}
      </div>

      <div className="my-1.5">
        <div className="sm:h-[90px]">
          <p className="text-sm brand_name font-OG-Bold text-lightTextColor">
            {item.brandName}
          </p>
          <p className="text-sm font-OG-Regular line-clamp-2 text-lightTextColor">
            {item.title}
          </p>
          {item.isRated && (
            <div className="flex flex-row items-center gap-3">
              <Rating
                readOnly
                style={{ width: "4rem" }}
                value={1}
                items={5}
                className="rating_star"
                itemStyles={myStyles}
                onChange={() => {}}
              />
              <p className="text-sm font-OG-Regular text-lightTextColor">
                3 Review
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-row items-center gap-1 price_special_price">
          <p className="text-lg text-lightTextColor font-OG-Bold">
            {item.price}
          </p>
          <p className="text-xs line-through text-aluminium font-OG-Bold">
            {item.specialPrice}
          </p>
        </div>

        <div className="my-1.5 flex flex-col  ">
          <div className="flex flex-row items-center justify-center gap-2 sm:justify-start qty_section basis-full">
            <div className="basis-[100%]">
              {index === 0 ? (
                <OGButton
                  title="Add to cart"
                  className="uppercase hover:cursor-not-allowed  hover:duration-300 text-sm font-OG-Bold bg-primaryColor  text-white hover:border-[1.5px] hover:border-primaryColor rounded-sm w-full h-[40px] "
                />
              ) : (
                <OGButton
                  title="Add to cart"
                  className="uppercase hover:duration-300 text-sm font-OG-Bold bg-primaryColor hover:bg-white hover:text-primaryColor text-white hover:border-[1.5px] hover:border-primaryColor rounded-sm w-full h-[40px] "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
