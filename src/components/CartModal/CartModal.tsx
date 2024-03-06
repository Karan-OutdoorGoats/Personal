import CloseIcon from "assets/svg/components/CloseIcon";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import CartItem from "./components/CartItem";
import "./components/styles.css";
import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import { useScreenSize } from "hooks/useScreenSize";

const CartModal = (props) => {
  const { isOpen, closeModal } = props;
  const [showViewMore, setShowViewMore] = useState(false);
  const [showDiscountCodeEl, setShowDiscountCodeEl] = useState(true);
  const navigate = useNavigate();
  const screenSize = useScreenSize();

  return (
    <ReactModal
      closeTimeoutMS={500}
      className={" w-[100%]  sm:w-[35%] outline-none cart_modal"}
      style={{
        content: {
          backgroundColor: "white",
          height: screenSize.width > 600 ? "100vh" : "100dvh",
          margin: 0,
          position: "absolute",
          right: "0%",
          overflowY: "scroll",
        },
        overlay: {
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 9999,
          width: "100%",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
      }}
      contentLabel="Cart Screen"
      isOpen={isOpen}
    >
      <div>
        <div
          className={`flex border-b-[1px] flex-row items-center justify-between px-3 py-3 md:px-4 md:py-5 cart_header`}
        >
          <p className="text-xl sm:text-2xl font-OG-Bold text-lightTextColor">
            Cart <span className="text-dustyGray">6</span>{" "}
          </p>
          <div
            onClick={closeModal}
            className="border-[1px] duration-300 hover:cursor-pointer group hover:bg-primaryColor bg-f5 rounded-full"
          >
            {/* <IoClose className="m-1 text-doveGray size-[1rem] md:size-[1.5rem] group-hover:text-white" /> */}
            <CloseIcon className="m-1 fill-doveGray size-[1rem] md:size-[1.5rem] group-hover:fill-white" />
          </div>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="px-4 py-1 my-2 md:px-10 md:py-4 ">
          <div
            onClick={() => setShowDiscountCodeEl(!showDiscountCodeEl)}
            className="flex flex-row items-center justify-between hover:cursor-pointer"
          >
            <p className="uppercase text-s md:text-m font-OG-Bold text-lightTextColor">
              Apply discount code
            </p>
            {/* <MdOutlineKeyboardArrowUp
              className={`md:size-[1.5rem] size-[1.2rem] ${
                showDiscountCodeEl
                  ? "rotate-[180deg] animate-rotateTo180Deg"
                  : "rotate-[90deg] animate-rotateTo90Deg"
              } `}
            /> */}
            <OutlineArrowUpIcon
              className={`fill-[#0f0f0f] md:size-[1.5rem] size-[1.2rem] ${
                showDiscountCodeEl
                  ? "rotate-[180deg] animate-rotateTo180Deg"
                  : "rotate-[90deg] animate-rotateTo90Deg"
              } `}
            />
          </div>

          {showDiscountCodeEl && (
            <div className="mt-5">
              <div className="mt-1">
                <InputBoxField
                  className="w-[100%] placeholder:font-OG-Regular border-[1px] bg-white focus:outline-primaryColor placeholder:text-lightTextColor text-xs font-OG-Regular px-3 h-[40px]"
                  placeholder="Enter discount code"
                />
              </div>
              <div className="mt-4">
                <OGButton
                  title="Apply Discount"
                  className="text-xs bg-white uppercase border-primaryColor hover:duration-300  hover:bg-primaryColor hover:text-white font-OG-Bold text-lightTextColor border-[1px] w-full h-[40px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sticky md:sticky bottom-0 bg-aquaHaze cart_modal_footer  w-[100%] px-2 py-3 sm:px-4 sm:py-5">
        {!showViewMore ? (
          <div className="flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-3">
              <p className="text-sm font-OG-Bold text-lightTextColor">
                You Pay
              </p>
              <p
                onClick={() => setShowViewMore(!showViewMore)}
                className="text-xs underline hover:cursor-pointer font-OG-Bold text-lightTextColor"
              >
                View Details
              </p>
            </div>
            <p className="text-sm font-OG-Bold text-lightTextColor">₹5,796</p>
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-end">
              <p
                onClick={() => setShowViewMore(!showViewMore)}
                className="text-xs hover:cursor-pointer font-OG-Bold hover:underline text-lightTextColor"
              >
                View Less
              </p>
            </div>
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
              if (item.type === "shipping") {
                return (
                  <div className="flex flex-row items-center justify-between my-2">
                    <p className="text-sm md:text-l font-OG-Medium text-[#008000]">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-l font-OG-Medium text-[#008000]">
                      FREE
                    </p>
                  </div>
                );
              }

              if (item.type === "you_pay") {
                return (
                  <div className="flex flex-row items-center justify-between my-2">
                    <p className="text-sm md:text-l font-OG-Bold text-lightTextColor">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-l font-OG-Bold text-lightTextColor">
                      {item.amount}
                    </p>
                  </div>
                );
              }
              if (item.type === "total_saving") {
                return (
                  <div className="flex flex-row items-center justify-between my-2">
                    <p className="text-sm md:text-l font-OG-Bold text-[#008000]">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-l font-OG-Bold text-[#008000]">
                      {item.amount}
                    </p>
                  </div>
                );
              }
              return (
                <div className="flex flex-row items-center justify-between my-2">
                  <p className="text-s font-OG-Medium text-lightTextColor">
                    {item.title}
                  </p>
                  <p className="text-s font-OG-Medium text-lightTextColor">
                    {item.amount}
                  </p>
                </div>
              );
            })}
          </>
        )}
        <div className="flex flex-row justify-center my-2 ">
          <p className="text-sm font-OG-Bold text-lightTextColor">
            Free Shipping Unlocked🎉
          </p>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <OGButton
            onClick={() => {
              closeModal();
            }}
            title="Continue"
            className="shadow-xl drop-shadow-xl uppercase border-[1.4px]  text-sm w-full h-[40px] font-OG-Bold text-white rounded-md bg-primaryColor"
          />
          <OGButton
            onClick={() => {
              closeModal();
              navigate("/checkout");
            }}
            title="Proceed to checkout"
            className="shadow-xl drop-shadow-xl uppercase border-[1.4px] w-full h-[40px]  text-sm font-OG-Bold text-white rounded-md bg-primaryColor"
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default CartModal;
