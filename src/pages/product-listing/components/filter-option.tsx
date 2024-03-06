import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import TickIcon from "assets/svg/components/TickIcon";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React, { useState } from "react";
import { colors } from "utils/colors";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "white",
  inactiveStrokeColor: colors.grey,
  itemStrokeWidth: 1,
  activeStrokeColor: "#ffb700",
};

const FilterOption = (props) => {
  const { values, selectedValues, setSelectedValues, type = "" } = props;
  const [amountPrompt, setAmountPrompt] = useState({
    min: 0,
    max: 6000,
  });

  if (type === "price") {
    return (
      <div className="flex flex-row items-center justify-center h-[50px] gap-3">
        <p className="text-sm font-OG-Regular text-lightTextColor">Min</p>
        <InputBoxField
          value={amountPrompt.min}
          onChange={(e) => {
            setAmountPrompt((prev) => {
              return {
                ...prev,
                min: parseInt(e.target.value) || 0,
              };
            });
          }}
          className="rounded-[3px] text-center border-primaryColor border-b-[1.5px] focus:outline-primaryColor  font-OG-Regular text-xs h-[25px] w-[20%] "
        />
        <div className="text-xs font-OG-Regular ">-</div>
        <InputBoxField
          value={amountPrompt.max}
          onChange={(e) => {
            setAmountPrompt((prev) => {
              return {
                ...prev,
                max: parseInt(e.target.value) || 0,
              };
            });
          }}
          // value={values[1].toString()}
          // onChange={(e) =>
          //   setValues((prev) => {
          //     return [prev[0], parseInt(e.target.value) || 0];
          //   })
          // }
          className="rounded-[3px] text-center border-primaryColor border-b-[1.5px] focus:outline-primaryColor  font-OG-Regular text-xs h-[25px] w-[20%] "
        />
        <p className="text-sm font-OG-Regular text-lightTextColor">Max</p>
      </div>
    );
  }

  if (type === "rating") {
    return values.map((item) => {
      return (
        <div
          onClick={() => {
            return setSelectedValues((prev: Set<string>) => {
              const isTrue = prev.has(item);
              return isTrue
                ? (prev.delete(item), new Set(prev))
                : new Set([...prev, item]);
            });
          }}
          className={`flex flex-row items-center justify-between gap-4 px-5 h-[50px] border-b-[1px] `}
        >
          <div className="flex flex-row gap-2">
            <Rating
              readOnly
              style={{ width: "80px" }}
              value={item}
              itemStyles={myStyles}
              onChange={() => {}}
            />
            <p
              className={`text-sm  ${
                selectedValues.has(item)
                  ? "text-primaryColor font-OG-Bold"
                  : "text-lightTextColor font-OG-Regular"
              } `}
            >
              and above
            </p>
            <div>
              <p
                className={`text-xs rounded-sm  border-[1px] px-1 ${
                  selectedValues.has(item)
                    ? "text-primaryColor font-OG-Bold border-primaryColor border-b-[2px]"
                    : "text-lightTextColor font-OG-Regular"
                } `}
              >
                4
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {values.map((item) => {
        return (
          <div
            onClick={() => {
              return setSelectedValues((prev: Set<string>) => {
                const isTrue = prev.has(item);
                return isTrue
                  ? (prev.delete(item), new Set(prev))
                  : new Set([...prev, item]);
              });
            }}
            className={`flex flex-row items-center justify-between gap-4 px-5 h-[50px] border-b-[1px] `}
          >
            <div className="flex flex-row gap-2">
              <p
                className={`text-sm  ${
                  selectedValues.has(item)
                    ? "text-primaryColor font-OG-Bold"
                    : "text-lightTextColor font-OG-Regular"
                } `}
              >
                {item}
              </p>
              <div>
                <p
                  className={`text-xs rounded-sm  border-[1px] px-1 ${
                    selectedValues.has(item)
                      ? "text-primaryColor font-OG-Bold border-primaryColor border-b-[2px]"
                      : "text-lightTextColor font-OG-Regular"
                  } `}
                >
                  4
                </p>
              </div>
            </div>
            <div>
              <InputBoxField
                checked={selectedValues.has(item) ? true : false}
                type="checkbox"
                className="items-center px-3 text-sm focus:outline-none font-OG-Regular checked:border-primaryColor hover:cursor-pointer checked:accent-primaryColor focus:accent-primaryColor"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilterOption;
