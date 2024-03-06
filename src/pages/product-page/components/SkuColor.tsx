import React from "react";
import "./styles/SkuOptions.css";

interface SkuOptionsProps {
  title: string;
  selectedTitle: string;
  isError?: boolean;
}

const SkuColor = (props: SkuOptionsProps) => {
  const { title, selectedTitle, isError = false } = props;
  return (
    <div
      className={` ${
        isError ? "border-l-[2.5px] pl-2 border-ff0000 " : ""
      }`}
    >
      <div className="flex flex-row items-center my-2.5 pb-1 gap-4 ">
        <h3
          className={`text-sm uppercase font-OG-Bold ${
            isError
              ? "text-ff0000 underline underline-offset-2  "
              : "text-lightTextColor"
          }`}
        >
          {title}
        </h3>
        {/* <p className="text-sm sm:text-s font-OG-Medium text-doveGray">
          {selectedTitle}
        </p> */}
      </div>
      <div className="flex flex-row items-center flex-shrink-0 *:flex-shrink-0 gap-2 overflow-x-auto disable_scrollbar ">
        {[
          {
            title: "black",
            img: "https://www.outdoorgoats.com/media/catalog/product/cache/ca78c0f5e594a11f9bc4b39a563d8a5f/1/1/11232416-black_1_1.jpg",
          },
          {
            title: "orange",
            img: "https://www.outdoorgoats.com/media/catalog/product/cache/ca78c0f5e594a11f9bc4b39a563d8a5f/j/a/jacket_orange_1.jpg",
          },
          {
            title: "yellow",
            img: "https://www.outdoorgoats.com/media/catalog/product/cache/ca78c0f5e594a11f9bc4b39a563d8a5f/j/a/jacket_yellow_1.jpg",
          },
          {
            title: "red",
            img: "https://www.outdoorgoats.com/media/catalog/product/cache/ca78c0f5e594a11f9bc4b39a563d8a5f/1/1/11232416-orange_1.jpg",
          },          
        ].map((item) => {
          return (
            <button className="group h-[5rem]">
              <img
                className="size-[3.875rem]  border-grey rounded-md"
                src={item.img}
                alt="sku thumb"
              />
              <p className="hidden group-hover:block text-xs capitalize sm:text-[0.70rem] font-OG-Medium text-center text-lightTextColor">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SkuColor;
