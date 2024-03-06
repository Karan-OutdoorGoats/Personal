import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CartList from "../../CartList";

const MobileOrderSummary = (props) => {
  const { data } = props;

  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="px-3 py-3 border-b-[1px] ">
      <div
        onClick={() => setShowOrderSummary(!showOrderSummary)}
        className="flex flex-row items-center justify-between"
      >
        <div className="flex flex-row items-center gap-2">
          <div>
            <div className="flex flex-row items-center">
              <img
                className="size-[35px] border-[1px] rounded-full border-black"
                src="https://www.outdoorgoats.com/media/catalog/product/cache/1181b1f44976cbd1fbef0bc7cea70f88/c/o/colag80_2_1.jpg"
                alt=""
              />
              <div className="size-[35px] relative right-2 bg-aquaHaze border-[1px] flex flex-row justify-center items-center rounded-full border-primaryColor">
                <p className="text-sm text-primaryColor font-OG-Bold">
                  +{data.length}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-OG-Medium text-lightTextColor">
              Order Summary
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <p className="text-sm font-OG-Medium text-lightTextColor">
              You Pay ₹5,796
            </p>
          </div>
          <MdOutlineKeyboardArrowUp
            className={`text-lightTextColor ${
              showOrderSummary
                ? "rotate-[180deg] animate-rotateTo180Deg"
                : "rotate-[90deg] animate-rotateTo90Deg"
            } `}
            size={"1.5rem"}
          />
        </div>
      </div>
      {showOrderSummary && (
        <>
          <div className="my-3 border-b-[1px] amount_section">
            {[
              {
                title: "Bag MRP (incl. taxes)",
                amount: "₹7,096",
                type: "mrp",
              },
              {
                title: "Bag Discount",
                amount: "₹1,300",
                type: "discount",
              },
              {
                title: "Shipping (Free Shipping - Free)",
                amount: "₹0",
                type: "shipping",
              },
              {
                title: "You Pay",
                amount: "₹5,796",
                type: "you_pay",
              },
              {
                title: "Total Savings",
                amount: "₹1,300",
                type: "total_saving",
              },
            ].map((item) => {
              if (item.type === "you_pay") {
                return (
                  <div className="flex flex-row items-center justify-between my-2">
                    <p className="text-l font-OG-Bold text-lightTextColor">
                      {item.title}
                    </p>
                    <p className="text-l font-OG-Bold text-lightTextColor">
                      {item.amount}
                    </p>
                  </div>
                );
              }
              if (item.type === "total_saving") {
                return (
                  <div className="flex flex-row items-center justify-between my-2">
                    <p className="text-l font-OG-Bold text-[#008000]">
                      {item.title}
                    </p>
                    <p className="text-l font-OG-Bold text-[#008000]">
                      {item.amount}
                    </p>
                  </div>
                );
              }
              return (
                <div className="flex flex-row items-center justify-between my-2">
                  <p className="text-m font-OG-Regular text-lightTextColor">
                    {item.title}
                  </p>
                  <p className="text-m font-OG-Regular text-lightTextColor">
                    {item.amount}
                  </p>
                </div>
              );
            })}
          </div>
          <CartList data={data} />
        </>
      )}
    </div>
  );
};

export default MobileOrderSummary;
