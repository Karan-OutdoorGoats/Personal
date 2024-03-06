import React, { useState } from "react";
import Details from "./desktop/Details";
import MoreInformation from "./desktop/MoreInformation";
import ReturnExch from "./desktop/ReturnExch";

let sentence =
  "Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.Gently massage with circular movements, starting from the centre to the contours of your cleansed face. For best results use every morning and evening.";

type Title = "Details" | "More_Information" | "Return_And_Exchange";

const PrdDetails = () => {
  const [selectedDesc, setSelectedDesc] = useState<Title>("Details");

  const renderDesc = (value: Title) => {
    switch (value) {
      case "Details":
        return <Details />;

      case "More_Information":
        return <MoreInformation />;

      case "Return_And_Exchange":
        return <ReturnExch />;

      default:
        return null;
    }
  };

  const onSelectType = (selectedValue: Title) => {
    if (selectedDesc === selectedValue) {
      return true;
    } else {
      setSelectedDesc(selectedValue);
    }
  };

  return (
    <div className="my-3">
      <h2 className="text-base text-black font-OG-Bold">Product Details</h2>
      <div className="border-[0.1px] border-lightPrimaryColor my-2"></div>
      <div className="grid grid-cols-3">
        {[
          {
            type: "Details",
            title: "Details",
          },
          {
            type: "More_Information",
            title: "More Info",
          },

          {
            type: "Return_And_Exchange",
            title: "Return/Exch",
          },
        ].map((item, index) => {
          return (
            <div
              onClick={() => onSelectType(item.type as Title)}
              className={`text-center `}
            >
              <p
                className={`${
                  item.type === selectedDesc
                    ? "underline text-primaryColor"
                    : "no-underline"
                } text-base underline-offset-[12px] offset-2 break-words font-OG-Regular ${
                  index === 0
                }`}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="px-2 mt-6">{renderDesc(selectedDesc)}</div>
    </div>
  );
};

export default PrdDetails;
