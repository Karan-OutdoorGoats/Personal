import { ItemStyles, RoundedStar } from "@smastrom/react-rating";
import RatingComp from "components/RatingComp/Rating";
import React, { useState } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { colors } from "utils/colors";
import { useOrderList } from "../order-list.hooks";
import RefundDetails from "./refund-details";
import WriteAReview from "pages/product-page/components/WriteAReview";
import OGButton from "components/Button/OGButton";

const myStyles: ItemStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "white",
  inactiveStrokeColor: colors.grey,
  itemStrokeWidth: 2,
  activeStrokeColor: "#ffb700",
};

const OrderListItem = (props) => {
  const { rating, setRating } = useOrderList();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { item } = props;

  return (
    <>
      <WriteAReview
        onClose={() => setShowReviewModal(false)}
        isOpen={showReviewModal}
      />
      <div className="p-4 mb-8 bg-white">
        <div className="flex flex-row gap-2 mb-3 orer_stauts">
          <div className="size-[40px] rounded-full bg-lightPrimaryColor flex items-center justify-center">
            {item.orderStatus !== "Cancel" ? (
              <BsFillBoxSeamFill size={"20px"} />
            ) : (
              <IoMdCloseCircle size={"25px"} />
            )}
          </div>
          <div className="status_desc">
            <p
              className={`text-sm font-OG-Bold ${
                item.orderStatus === "Cancel"
                  ? "text-ff0000"
                  : "text-primaryColor"
              }`}
            >
              {item.orderStatus}
            </p>
            <p className="text-sm font-OG-Regular text-lightTextColor">
              On Thu, 4 Jan
            </p>
            {item.orderStatus === "Cancel" ? <RefundDetails /> : null}
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 px-3 py-5 mb-[2px] order_desc bg-aquaHaze">
          <div className="">
            <img
              className="size-[70px] rounded-md"
              src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/60d0bbf577afe6067417934a9b5e3e26/m/-/m-ts-101-rust_1.webp"
              alt=""
            />
          </div>
          <div className="order_desc_brief">
            <p className="text-sm font-OG-Bold text-lightTextColor">Reccy</p>
            <p className="mb-1 text-sm font-OG-Regular text-lightTextColor">
              Men's Athletic Outdoor Ultrabreathe T-Shirt
            </p>
            <div className="flex flex-row flex-wrap items-center gap-2 mb-1">
              <div className="flex flex-row gap-2 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor">
                  Size:
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">M</p>
              </div>
              <div className="flex flex-row gap-2 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor">
                  Color:
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">
                  Blue
                </p>
              </div>
              <div className="flex flex-row gap-2 mb-[2px]">
                <p className="text-xs font-OG-Bold text-lightTextColor">
                  Bundle:
                </p>
                <p className="text-xs font-OG-Regular text-lightTextColor">
                  1 Pair
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 exchange_return mb-[2px] bg-aquaHaze ">
          <ul className="flex flex-wrap text-base list-disc list-inside">
            <li className="text-s font-OG-Regular text-lightTextColor ">
              Exchange/Return window closed on 18 Jan
            </li>
          </ul>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-3 px-4 py-3 rate_product bg-aquaHaze">
          <div className="flex flex-row items-center gap-3">
            <p className="text-sm font-OG-Regular text-lightTextColor ">
              Rate Product
            </p>
            <RatingComp
              items={5}
              style={{ width: "90px" }}
              onChange={setRating}
              itemStyles={myStyles}
              readOnly={false}
              value={rating}
            />
          </div>
          {!!rating && (
            <OGButton
              onClick={() => setShowReviewModal(true)}
              title="Submit Review"
              className="text-sm hover:cursor-pointer  border-[1px] border-primaryColor py-2 px-3 rounded-sm  font-OG-Medium text-primaryColor"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OrderListItem;
