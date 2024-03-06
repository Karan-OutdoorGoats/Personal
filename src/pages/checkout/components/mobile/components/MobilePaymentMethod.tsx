import OGButton from "components/Button/OGButton";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const MobilePaymentMethod = () => {
    return (
        <div className="mx-2 my-4 sm:my-0 sm:mx-0">
           
            <div className="border-[1px]">
                <div className="flex flex-row items-center h-[48px] px-3 gap-3 bg-primaryColor">
                    <FaRegCreditCard className="text-white" size={"1.4rem"} />
                    <p className="text-base text-white uppercase font-OG-Bold">
                        Payment methods
                    </p>
                </div>

                <div className="px-3 py-4 ">
                    <label className="flex flex-row hover:cursor-pointer items-center gap-4  border-b-[1px] pb-3 mb-3">
                        <input
                            type="radio"
                            value={"true"}
                            checked
                            className="checked:accent-primaryColor"
                        />
                        <p className="text-s font-OG-Regular text-lightTextColor">
                            Cash On Delivery
                        </p>
                    </label>
                    <label className="flex flex-row items-center gap-4 pb-3 hover:cursor-pointer">
                        <input
                            type="radio"
                            value={"true"}
                            checked
                            className="checked:accent-primaryColor"
                        />
                        <p className="text-s font-OG-Regular text-lightTextColor">
                            Pay by debit or credit card, UPI or netbanking
                        </p>
                    </label>
                    <p className="text-s font-OG-Regular text-ff0000">
                        10% additional discount applicable on all prepaid orders
                    </p>
                </div>
            </div>
            <div className="my-2 sm:hidden sm:my-0">
                <OGButton
                    title="Place Order"
                    className=" font-OG-Bold hover:border-primaryColor   uppercase text-base px-4 py-2 h-[42px] basis-[50%]  hover:text-primaryColor text-white border-[1px] border-primaryColor rounded-[3px] bg-primaryColor hover:bg-white w-full duration-300 "
                />
            </div>
        </div>
    );
};

export default MobilePaymentMethod;
