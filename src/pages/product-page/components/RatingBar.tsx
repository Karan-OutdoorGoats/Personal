import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import RatingDescription from "./RatingDescription";
import { FaPlus } from "react-icons/fa6";
import WriteAReview from "./WriteAReview";
import { useProductPage } from "../product-page.hooks";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import PencilIcon from "assets/svg/components/PencilIcon";
import EditPencil from "assets/svg/components/EditPencil";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const RatingBar = (props) => {
  const { setShowReviewModalCB } = props;
  return (
    <>
      <div
        onClick={() => setShowReviewModalCB(true)}
        className="flex flex-row items-center justify-end gap-3 underline hover:cursor-pointer"
      >
        {/* <HiOutlinePencilSquare size={"1rem"} /> */}
        <EditPencil className="text-[1.4rem] stroke-black" />
        <p className="text-sm font-OG-Regular">Write a Review</p>
      </div>
      <div className="sm:gap-7 sm:flex sm:flex-row">
        <div className="flex flex-row items-start gap-4 my-3  sm:my-0  sm:flex-col sm:basis-[30%]">
          <div className="flex flex-col content-center basis-[30%] sm:basis-0 ">
            <div className="flex flex-row items-center justify-center">
              <p className="text-[1.5rem] sm:text-[1.8rem] font-OG-Bold ">
                4.67
              </p>
              <div className="sm:hidden ">
                <Rating
                  readOnly
                  style={{ width: "1.5rem" }}
                  value={1}
                  items={1}
                  itemStyles={myStyles}
                  onChange={() => {}}
                />
              </div>
              <div className="hidden sm:block ">
                <Rating
                  readOnly
                  style={{ width: "7rem" }}
                  value={1}
                  items={5}
                  itemStyles={myStyles}
                  onChange={() => {}}
                />
              </div>
            </div>
            <p className="text-sm text-center sm:text-start sm:text-base font-OG-Medium">
              8 Reviews
            </p>
          </div>

          <div className="flex flex-col flex-1 basis-[70%] sm:pr-5 sm:basis-0 w-full gap-3">
            <div className="">
              {[5, 4, 3, 2, 1].map((item) => {
                return (
                  <div className="flex flex-row items-center flex-1 gap-3">
                    <div className="flex flex-row items-center ">
                      <p className="text-xs text-black sm:text-sm font-OG-Regular">
                        {item}
                      </p>
                      <Rating
                        readOnly
                        style={{ width: "0.7rem" }}
                        value={1}
                        items={1}
                        itemStyles={myStyles}
                        onChange={() => {}}
                      />
                    </div>
                    <div className="flex-1">
                      <ProgressBar
                        completed={item * 10}
                        isLabelVisible={false}
                        bgColor="black"
                        borderRadius="4px"
                        height="6px"
                      />
                    </div>
                    <div className="sm:hidden">
                      <p className="text-xs text-black sm:text-sm font-OG-Regular">
                        100%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* user rating */}
        <div className="w-full user_rating">
          {[1, 2, 3, 4, 5].map((item) => {
            return <RatingDescription />;
          })}
        </div>
      </div>
    </>
  );
};

export default RatingBar;
