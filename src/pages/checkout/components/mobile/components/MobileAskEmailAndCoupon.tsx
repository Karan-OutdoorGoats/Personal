import React, { useState } from "react";
import ApplyDiscountCode from "../../ApplyDiscountCode";
import InputBoxField from "components/InputBoxField/InputBoxField";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import OGButton from "components/Button/OGButton";
import { Link } from "react-router-dom";
import googleLogo from "assets/images/google_logo.png"

const MobileAskEmailAndCoupon = (props) => {

  const [isUserPresent, setIsUserPresent] = useState(false)


  const { userPrompt, setUserPrompt } = props
  return (
    <div>
      <div className="px-4 py-3 bg-aquaHaze">
        <ApplyDiscountCode />
      </div>
      <div className="mx-5 my-5">
        <label
          className="block text-sm mb-1 font-OG-Bold text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
          htmlFor="email_address"
        >
          Email Address
        </label>
        <div className="flex flex-row items-center gap-3">
          <InputBoxField
            onChange={(e) => setUserPrompt((prev) => ({ ...prev, email: e.target.value }))}
            type="email"
            onBlur={(e) => {
              if (e.target.value === "karan@mail.com") {
                setIsUserPresent(true)
              } else {
                isUserPresent && setIsUserPresent(false)
              }
            }}
            value={userPrompt.email}
            id="email_address"
            placeholder="Enter your email id"
            className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[40px] flex-1"
          />
          <IoIosHelpCircleOutline
            data-tooltip-id="info_email"
            data-tooltip-content="We'll send your order confirmation here"
            size={"1.8rem"}
            className="fill-lightTextColor hover:cursor-pointer hover:fill-primaryColor"
          />
          <Tooltip id="info_email" />
        </div>

        {
          isUserPresent && <div className="my-3">
            <label
              className="block text-sm mb-1 font-OG-Bold text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex flex-row items-center gap-3">
              <InputBoxField
                type="password"
                id="password"
                placeholder="Password"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[40px] flex-1"
              />
            </div>
            <div className="account_present">
              <p className="mt-1.5 text-sm font-OG-Regular text-lightTextColor">You already have an account with us. <span className="underline font-OG-Bold ">Forgot Password?</span> </p>
            </div>
          </div>
        }

        <div>
          <Link to="/checkout/address">
            <OGButton
              className="text-white rounded-md bg-primaryColor h-[40px] w-full mt-4 text-base font-OG-Bold"
              title={isUserPresent ? "Login" : "Continue"}
            />
          </Link>
          {isUserPresent && <div className="flex flex-row h-[40px] rounded-md my-4  items-center border-ff0000 border-[1px]">
            <img src={googleLogo} alt="" className="size-[40px]" />
            <div className="flex-1 bg-ff0000 h-[100%] flex items-center">
              <p className="px-3 text-base text-white font-OG-Bold ">Sign in with Google</p>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default MobileAskEmailAndCoupon;
