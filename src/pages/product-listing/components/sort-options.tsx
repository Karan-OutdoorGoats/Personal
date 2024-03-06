import InputBoxField from "components/InputBoxField/InputBoxField";
import React from "react";

const SortOptions = (props) => {
  const { selectedValue, setSelectedValue } = props;

  return (
    <div className="my-3">
      {[
        "Rating - High to Low",
        "Rating - Low to High",
        "Price - High to Low",
        "Price - Low to High",
        "Product Name - Ascending",
        "Product Name - Descending",
        // "Position - First to Last",
        // "Position - Last to First",
      ].map((item) => {
        return (
          <div
            onClick={() => setSelectedValue(item)}
            className="h-[40px] flex flex-row items-center justify-between"
          >
            <p
              className={`text-sm ${
                selectedValue === item
                  ? "text-primaryColor font-OG-Bold"
                  : "text-lightTextColor font-OG-Regular "
              } `}
            >
              {item}
            </p>
            <InputBoxField
              checked={selectedValue === item ? true : false}
              type="checkbox"
              className="items-center size-[18px]   px-3 text-sm focus:outline-none font-OG-Regular checked:border-primaryColor hover:cursor-pointer checked:accent-primaryColor focus:accent-primaryColor"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SortOptions;
