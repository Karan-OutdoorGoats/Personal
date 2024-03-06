import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import React from "react";
import { colors } from "utils/colors";
import "./styles/RatingDescription.css";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: colors.white,
};

const RatingDescription = () => {
  return (
    <div className="pb-4 my-5 border-b-[1px]">
      <div className="grid items-center justify-center grid-cols-3 my-2 sm:grid-cols-none sm:flex sm:flex-col sm:items-start">
        {["Performance", "Quality", "Value"].map((item) => {
          return (
            <div className="flex flex-col items-start sm:w-full sm:flex-row sm:items-center ">
              <p className="text-sm text-center text-black sm:text-base font-OG-Regular sm:w-[150px] sm:text-left">
                {item}
              </p>
              <Rating
                readOnly
                style={{ width: "4rem" }}
                value={1}
                items={5}
                className="rating_star"
                itemStyles={myStyles}
                onChange={() => {}}
              />
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-sm sm:text-sm font-OG-Bold">Very nice quality</h2>
        <p className="pb-2 text-sm text-black sm:text-sm font-OG-Regular">
          The thought that has gone into making this jacket is exceptional. From
          the neck adjustment to the wrist adjustment and the internal pocket -
          nicely built guys. My 2024 pick
        </p>
        <p className="text-sm italic sm:text-sm font-OG-Regular">
          By Chickoo AppUser on 11/16/23
        </p>
      </div>
    </div>
  );
};

export default RatingDescription;
