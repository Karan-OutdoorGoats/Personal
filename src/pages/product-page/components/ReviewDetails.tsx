import React, { useState } from "react";
import RatingBar from "./RatingBar";
import AthleteReview from "./desktop/AthleteReview";

type Title =
  | "Details"
  | "More_Information"
  | "Athlete_Review"
  | "Community_Review"
  | "Return_And_Exchange";

const ReviewDetails = (props) => {
  const { setShowReviewModalCB } = props;

  const [selectedDesc, setSelectedDesc] = useState<Title>("Community_Review");

  const onSelectType = (selectedValue: Title) => {
    if (selectedDesc === selectedValue) {
      return true;
    } else {
      setSelectedDesc(selectedValue);
    }
  };

  const renderDesc = (value: Title) => {
    switch (value) {
      case "Community_Review":
        return <RatingBar setShowReviewModalCB={setShowReviewModalCB} />;

      case "Athlete_Review":
        return <AthleteReview />;

      default:
        return null;
    }
  };

  return (
    <div className="my-3 mt-10">
      <h2 className="text-base font-OG-Bold">Rating & Reviews</h2>
      <div className="border-[0.1px] border-lightPrimaryColor my-2"></div>
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            type: "Community_Review",
            title: "Community Review",
          },
          {
            type: "Athlete_Review",
            title: "Athlete Review",
          },
        ].map((item, index) => {
          return (
            <div className={`text-center `}>
              <p
                onClick={() => onSelectType(item.type as Title)}
                className={`underline  text-base sm:text-base underline-offset-[12px] offset-2 font-OG-Regular ${
                  item.type === selectedDesc
                    ? "underline text-primaryColor"
                    : "text-lightTextColor no-underline"
                }  ${
                  item.type === "Athlete_Review" ? "text-athleteColor" : ""
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

export default ReviewDetails;
