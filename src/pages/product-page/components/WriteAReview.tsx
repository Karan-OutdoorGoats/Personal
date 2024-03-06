import { ItemStyles, ThinRoundedStar } from "@smastrom/react-rating";
import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import RatingComp from "components/RatingComp/Rating";
import { useScreenSize } from "hooks/useScreenSize";
import { useState } from "react";
import ReactModal from "react-modal";
import { colors } from "utils/colors";
import "./styles/RatingDescription.css";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: colors.white,
};

interface WriteAReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const WriteAReview = (props: WriteAReviewProps) => {
  const [rating, setRating] = useState({
    quality: 0,
    value: 0,
    service: 0,
  });
  const screenSize = useScreenSize();

  // alert(screenSize.width);

  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="write a review form"
      style={{
        content: {
          backgroundColor: colors.white,
          height: screenSize.width > 600 ? "70vh" : "unset",
          overflowY: "scroll",
          width: screenSize.width > 600 ? "60%" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          display: "flex",
          flexDirection: screenSize.width > 600 ? "row" : "column",
          justifyContent: screenSize.width > 600 ? "center" : "end",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
      }}
      className="sm:border-2 sm:rounded-md focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3">
        <div className="">
          <div className="">
            <div className=" flex items-center justify-between mb-5 z-[1000] bg-white py-4">
              <p className="text-sm leading-8 uppercase text-lightTextColor font-OG-Bold">
                You're reviewing{" "}
              </p>
              {/* <IoIosCloseCircleOutline
              className="hover:cursor-pointer size-[2rem]"
              onClick={onClose}
              color={colors.primaryColor}
            /> */}
              <CircleCloseOutlineIcon
                onClick={onClose}
                className="hover:cursor-pointer text-[2rem] stroke-primaryColor "
              />
            </div>
          </div>
          <div className="pb-2 border-b-[1px]">
            <div className="flex flex-row justify-between sm:justify-center modal_top_container ">
              <div className="flex flex-col flex-wrap items-center sm:flex-row ">
                <div className="size-[70px]">
                  <img
                    className="rounded-md size-full "
                    src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/60d0bbf577afe6067417934a9b5e3e26/m/-/m-ts-101-rust_1.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-sm text-lightTextColor font-OG-Bold">
                    MEN'S K2 HEAVY FILL JACKET (UPTO -10 C) - SHERPA SERIES
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-8 sm:flex-row your_rating">
            <div className="">
              <p className="text-s font-OG-Regular after:content-['*'] after:ml-0.5 after:text-red-600">
                Your Rating
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <p className="font-OG-Regular text-s text-lightTextColor basis-[40%]">
                  Quality
                </p>
                <RatingComp
                  readOnly={false}
                  items={5}
                  value={rating.quality}
                  className=" rating_star"
                  itemStyles={myStyles}
                  onChange={(e) =>
                    setRating({
                      ...rating,
                      quality: e,
                    })
                  }
                  style={{ width: "6rem" }}
                />
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-OG-Regular text-s text-lightTextColor basis-[40%]">
                  Value
                </p>
                <RatingComp
                  readOnly={false}
                  items={5}
                  value={rating.value}
                  className="rating_star z-[1]"
                  itemStyles={myStyles}
                  onChange={(e) =>
                    setRating({
                      ...rating,
                      value: e,
                    })
                  }
                  style={{ width: "6rem" }}
                />
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-OG-Regular text-s text-lightTextColor basis-[40%]">
                  Service
                </p>
                <RatingComp
                  readOnly={false}
                  items={5}
                  value={rating.service}
                  className="rating_star"
                  itemStyles={myStyles}
                  onChange={(e) =>
                    setRating({
                      ...rating,
                      service: e,
                    })
                  }
                  style={{ width: "6rem" }}
                />
              </div>
            </div>
          </div>

          <div className="rating_form">
            <form action="">
              <div className="my-2.5">
                <label
                  htmlFor="nickname"
                  className="block after:content-['*'] text-s font-OG-Regular after:ml-0.5 after:text-red-600 "
                >
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  className="w-[100%] my-1 px-2 py-1 border-[1px] rounded-sm focus:outline-none"
                />
              </div>

              <div className="my-2.5">
                <label
                  htmlFor="summary"
                  className="block after:content-['*'] text-s font-OG-Regular after:ml-0.5 after:text-red-600 "
                >
                  Summary
                </label>
                <input
                  type="text"
                  id="summary"
                  className="font-OG-Regular text-s w-[100%] my-1 px-2 py-1 border-[1px] rounded-sm focus:outline-none"
                />
              </div>

              <div className="my-2.5">
                <label
                  htmlFor="summary"
                  className="block after:content-['*'] text-s font-OG-Regular after:ml-0.5 after:text-red-600 "
                >
                  Review
                </label>
                <textarea
                  id="summary"
                  rows={4}
                  className="font-OG-Regular text-s w-[100%] my-1 px-2 py-1 border-[1px] rounded-sm focus:outline-none"
                />
              </div>

              <div className="my-3">
                <OGButton
                  className="h-[40px] rounded-md uppercase text-s font-OG-Regular bg-primaryColor text-white sm:w-[20%] px-4 sm:px-0 "
                  title="Submit Review"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default WriteAReview;
