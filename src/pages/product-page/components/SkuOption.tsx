import React from "react";
import "./styles/SkuOptions.css";
import { RxRulerHorizontal } from "react-icons/rx";
import { colors } from "utils/colors";
import RulerHorizontal from "assets/svg/components/RulerHorizontal";
import { useProductPage } from "../product-page.hooks";

interface SkuOptionsProps {
  title: string;
  selectedTitle: string;
  skuName: string;
  options: { title: string; qty: string }[];
  onSizeChartClick?: () => void;
  isError?: boolean;
}

const SkuOption = (props: SkuOptionsProps) => {
  const {
    selectedTitle,
    title,
    skuName,
    options,
    onSizeChartClick,
    isError = false,
  } = props;

  return (
    <div
      className={`my-4 ${isError ? "border-l-[2.5px] pl-2 border-ff0000" : ""}`}
    >
      <div className="flex flex-row items-center my-2.5 pb-1 gap-4">
        <div className="flex flex-row items-center justify-between flex-1">
          <div className="flex flex-row gap-5">
            <h3
              className={`text-sm uppercase font-OG-Bold ${
                isError
                  ? "text-ff0000 underline underline-offset-2  "
                  : "text-lightTextColor"
              } `}
            >
              {title}
            </h3>
            {/* <p className="text-sm sm:text-s font-OG-Medium text-doveGray">
              {selectedTitle}
            </p> */}
          </div>
          {skuName === "size" && (
            <button
              onClick={onSizeChartClick}
              className=" basis-[40%] flex flex-row items-center gap-2 justify-center"
            >
              {/* <RxRulerHorizontal size={"2rem"} color={colors.grey} /> */}
              <RulerHorizontal className="text-3xl" />
              <p className="underline underline-offset-2 uppercase text-xs sm:text-xs font-OG-Regular font-[600] text-lightTextColor">
                Size Chart
              </p>
            </button>
          )}
        </div>
      </div>
      <div className=" flex flex-row items-center flex-shrink-0 *:flex-shrink-0 gap-2 overflow-x-auto disable_scrollbar ">
        {options.map((item, index) => {
          if (skuName === "size") {
            return (
              <div>
                <button
                  key={index}
                  className="rounded-md border-aquaHaze border-[1.5px]   text-lightTextColor font-OG-Bold text-[.80rem] px-3 py-1  group hover:bg-primaryColor"
                >
                  <p aria-disabled className="group-hover:text-white">
                    {item.title}
                  </p>
                </button>
                <p className="text-xs sm:text-[0.70rem] font-OG-Medium py-1 text-center text-red-600">
                  {item.qty}
                </p>
              </div>
            );
          }

          // return (
          //   <button
          //     key={index}
          //     className="rounded-md border-aquaHaze border-[1.5px]   text-lightTextColor font-OG-Bold text-[.80rem] px-3 py-1  group hover:bg-primaryColor"
          //   >
          //     <p aria-disabled className="group-hover:text-white">
          //       1 Pair
          //     </p>
          //   </button>
          // );
        })}
      </div>
    </div>
  );
};

export default SkuOption;
