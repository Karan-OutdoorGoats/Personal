import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { colors } from "utils/colors";

const RangeSlider = (props) => {
  const { title } = props;
  const [values, setValues] = useState([0, 6000]);
  const [amountPrompt, setAmountPrompt] = useState({
    min: values[0],
    max: values[1],
  });
  const [showAccOption, setShowAccOption] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => setShowAccOption(!showAccOption)}
        className="flex flex-row items-center border-b-[1px] border-dashed pb-2 group hover:cursor-pointer justify-between"
      >
        <p className="text-sm uppercase group-hover:text-primaryColor text-lightTextColor font-OG-Bold">
          {title}
        </p>
        <OutlineArrowUpIcon
          className={`fill-lightTextColor group-hover:fill-primaryColor text-xl ${
            showAccOption
              ? "rotate-[180deg] animate-rotateTo180Deg"
              : "rotate-[90deg] animate-rotateTo90Deg"
          } `}
        />
      </div>
      {showAccOption && (
        <div className="mt-4">
          {/* <div className="flex flex-row items-center justify-center mt-2">
            <Range
              step={1}
              min={amountPrompt.min}
              max={amountPrompt.max}
              values={values}
              onChange={()=> {}}
              // onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "80%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values,
                        colors: [
                          colors.lightPrimaryColor,
                          colors.primaryColor,
                          colors.lightPrimaryColor,
                        ],
                        min: amountPrompt.min,
                        max: amountPrompt.max,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ index, props, isDragged }) => (
                <div
                  {...props}
                  className="size-[15px] group  rounded-full focus-visible:outline-primaryColor"
                  style={{
                    ...props.style,
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                  }}
                >
                  <div
                    className="hidden text-xs group-hover:block group-active:block font-OG-Regular"
                    style={{
                      position: "absolute",
                      top: "-34px",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "4px",
                      borderRadius: "4px",
                      backgroundColor: colors.primaryColor,
                    }}
                  >
                    {values[index]}
                  </div>
                </div>
              )}
            />
          </div> */}
          <div className="flex flex-row items-center w-[90%] justify-center">
            <div className="flex flex-row items-center justify-center gap-3">
              <InputBoxField
                value={amountPrompt.min}
                onChange={(e) => {
                  setAmountPrompt((prev) => {
                    return {
                      ...prev,
                      min: parseInt(e.target.value) || 0,
                    };
                  });
                  setValues((prev) => {
                    return [parseInt(e.target.value) || 0, prev[1]];
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
                  setValues((prev) => {
                    return [prev[0], parseInt(e.target.value) || 0];
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
            </div>
            <OGButton
              className="text-primaryColor border-[1.3px] border-primaryColor rounded-sm hover:cursor-pointer   px-2   bg-white h-[25px]  text-sm font-OG-Bold"
              title="Apply"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
