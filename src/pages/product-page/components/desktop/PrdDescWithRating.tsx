import React, { useState } from "react";
import MoreInformation from "./MoreInformation";
import Details from "./Details";
import RatingBar from "../RatingBar";
import ReturnExch from "./ReturnExch";
import AthleteReview from "./AthleteReview";

type Title =
  | "Details"
  | "More_Information"
  | "Athlete_Review"
  | "Community_Review"
  | "Return_And_Exchange";

const PrdDescWithRating = (props) => {
  const { setShowReviewModalCB } = props;
  const [selectedDesc, setSelectedDesc] = useState<Title>("Details");

  const onSelectType = (selectedValue: Title) => {
    if (selectedDesc === selectedValue) {
      return true;
    } else {
      setSelectedDesc(selectedValue);
    }
  };

  const renderDesc = (value: Title) => {
    switch (value) {
      case "Details":
        return <Details />;

      case "More_Information":
        return <MoreInformation />;

      case "Community_Review":
        return <RatingBar setShowReviewModalCB={setShowReviewModalCB} />;

      case "Return_And_Exchange":
        return <ReturnExch />;

      case "Athlete_Review":
        return <AthleteReview />;

      default:
        return null;
    }
  };

  return (
    <div className="my-3">
      <h2 className="text-base text-black font-OG-Bold">Product Details</h2>
      <div className="my-2 border-lightPrimaryColor"></div>
      <div className="flex flex-row  border-b-[1.6px]">
        {[
          {
            type: "Details",
            title: "Details",
          },
          {
            type: "More_Information",
            title: "More Information",
          },
          {
            type: "Athlete_Review",
            title: "Athlete Reviews",
          },
          {
            type: "Community_Review",
            title: "Community Reviews (7)",
          },
          {
            type: "Return_And_Exchange",
            title: "Return And Exchange",
          },
        ].map((item, index) => {
          return (
            <div
              onClick={() => onSelectType(item.type as Title)}
              className={`text-center hover:cursor-pointer px-3 py-4  break-words *:font-OG-Regular  ${
                item.type === "Athlete_Review" ? "*:text-[#ef5714]" : ""
              }
              ${
                item.type === selectedDesc
                  ? "border-b-2 border-b-primaryColor text-primaryColor"
                  : "text-lightTextColor"
              } 
              `}
            >
              <p className={`uppercase text-sm  `}>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="px-2 mt-6">{renderDesc(selectedDesc)}</div>
    </div>
  );
};

export default PrdDescWithRating;
