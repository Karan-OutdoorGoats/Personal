import InputBoxField from "components/InputBoxField/InputBoxField";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import indiaFlag from "assets/images/flag_india.png";
import { colors } from "utils/colors";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import OGButton from "components/Button/OGButton";
import googleLogo from "assets/images/google_logo.png"
import HelpCircleOutline from "assets/svg/components/HelpCircleOutline";

const data = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
];

const ShippingAddress = (props) => {
  const { userPrompt, setUserPrompt } = props
  const [isUserPresent, setIsUserPresent] = React.useState(false)



  return (
    <div>
      <div className=" hidden sm:flex flex-row items-center sm:h-[48px] sm:px-3 gap-3 bg-primaryColor">
        <GrLocation className="text-white" size={"1.4rem"} />
        <p className="text-base text-white uppercase font-OG-Bold">
          Shipping Address
        </p>
      </div>

      <div className="px-3 my-4 sm:my-8 shipping_address_container">
        <div className="mb-4">
          <label
            className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
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
              id="email_address"
              className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
            />
            {/* <IoIosHelpCircleOutline
              data-tooltip-id="info_email"
              data-tooltip-content="We'll send your order confirmation here"
              size={"1.8rem"}
              className="fill-lightTextColor hover:cursor-pointer hover:fill-primaryColor"
            /> */}
            <HelpCircleOutline  data-tooltip-id="info_email"
              data-tooltip-content="We'll send your order confirmation here" className="stroke-lightTextColor hover:cursor-pointer hover:stroke-primaryColor text-[1.6rem]" />
            <Tooltip id="info_email" />
          </div>
        </div>

        {
          isUserPresent && <div className="mb-4">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex flex-row items-center gap-3">
              <InputBoxField
                type="password"
                id="password"
                placeholder="Password"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
              />
            </div>
            <div className="account_present">
              <p className="mt-1.5 text-s font-OG-Regular text-lightTextColor">You already have an account with us. <span className="underline font-OG-Bold ">Forgot Password?</span> </p>
            </div>


            <div>
              <Link to="/checkout/address">
                <OGButton
                  className="text-white hover:cursor-pointer hover:bg-white hover:text-primaryColor hover:border-primaryColor hover:border-[1px]  bg-primaryColor h-[35px] w-full mt-2 text-sm font-OG-Bold"
                  title={isUserPresent ? "Login" : "Continue"}
                />
              </Link>
              <div className="flex flex-row h-[35px] hover:cursor-pointer  border-ff0000 my-2  items-center  border-[1px]">
                <img src={googleLogo} alt="" className="size-[35px]" />
                <div className="w-full  bg-ff0000 h-[100%] flex items-center">
                  <p className="px-3 text-sm text-white font-OG-Bold ">Sign in with Google</p>
                </div>
              </div>
            </div>

          </div>
        }

        <div className="flex flex-row items-center gap-3 mb-4 names">
          <div className="flex-1">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="first_name"
            >
              First Name
            </label>
            <div className="">
              <InputBoxField
                id="first_name"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="last_name"
            >
              First Name
            </label>
            <div className="">
              <InputBoxField
                id="last_name"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
              />
            </div>
          </div>
        </div>

        <div className="street_address">
          <label
            className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
            htmlFor="street_address"
          >
            Street Address
          </label>
          <div className="">
            <InputBoxField
              id="street_address"
              className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
            />
            <InputBoxField
              id="street_address[2]"
              className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 mb-4 country_state_province">
          <div className="basis-[50%]">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="state"
            >
              Country
            </label>
            <SelectDropdown
              className="font-OG-Regular text-s"
              placeholder="Select Country"
              styles={{
                control(base, props) {
                  return {
                    ...base,
                    borderRadius: "4px",
                  };
                },
              }}
              name="country"
              classNames={{
                placeholder: (props) => {
                  return "";
                },
              }}
              isMulti={false}
              options={[
                {
                  value: "IN",
                  label: "India",
                },
              ]}
            />
          </div>
          <div className="basis-[50%]">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="state"
            >
              State/Province
            </label>
            <SelectDropdown
              id="state"
              styles={{
                control(base, props) {
                  return {
                    ...base,
                    borderRadius: "4px",
                  };
                },
              }}
              className="font-OG-Regular text-s"
              isSearchable={true}
              placeholder="Please select a region,state or province"
              classNames={{
                menuList(props) {
                  return "h-[200px]";
                },
                placeholder: (props) => {
                  return "flex truncate";
                },
              }}
              name="state"
              isMulti={false}
              options={[
                {
                  value: "assam",
                  label: "Assam",
                },
                {
                  value: "bihar",
                  label: "Bihar",
                },
                {
                  value: "delhi",
                  label: "Delhi",
                },
                {
                  value: "goa",
                  label: "Goa",
                },
                {
                  value: "karnataka",
                  label: "Karnataka",
                },
                {
                  value: "gujarat",
                  label: "Gujarat",
                },
                {
                  value: "himachal pradesh",
                  label: "Himachal Pradesh",
                },
                {
                  value: "kerala",
                  label: "Kerala",
                },
                {
                  value: "maharashtra",
                  label: "Maharashtra",
                },
                {
                  value: "punjab",
                  label: "Punjab",
                },
                {
                  value: "sikkim",
                  label: "Sikkim",
                },
                {
                  value: "tamil nadu",
                  label: "Tamil Nadu",
                },
                {
                  value: "uttar pradesh",
                  label: "Uttar Pradesh",
                },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 mb-4 names">
          <div className="flex-1">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="city"
            >
              City
            </label>
            <div className="">
              <InputBoxField
                id="city"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              className="block text-s font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="postal_code"
            >
              Zip/Postal Code
            </label>
            <div className="">
              <InputBoxField
                id="postal_code"
                className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs w-full h-[35px] flex-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 mb-4">
          <div
            tabIndex={-1}
            className=" flex-1 rounded-[3px] hover:border-[2px] hover:border-primaryColor overflow-hidden  border-[1px] h-[35px] names flex flex-row items-center"
          >
            <label
              htmlFor="phone_number"
              className="flex flex-row items-center gap-2"
            >
              <img
                src={indiaFlag}
                title="India (भारत): +91"
                className="h-[100%] w-[40px] py-1 px-1"
                alt="flag"
              />
              <p className="font-OG-Regular text-s text-lightTextColor">+91</p>
            </label>
            <InputBoxField
              id="phone_number"
              className=" px-3 focus:outline-none font-OG-Regular text-s h-[100%] items-center flex-1"
            />
          </div>
          {/* <IoIosHelpCircleOutline
            data-tooltip-id="info_phone_number"
            data-tooltip-content="For Order Verification Message"
            size={"1.8rem"}
            className="fill-lightTextColor hover:cursor-pointer hover:fill-primaryColor"
          /> */}
           <HelpCircleOutline   data-tooltip-id="info_phone_number"
            data-tooltip-content="For Order Verification Message" className="stroke-lightTextColor hover:cursor-pointer hover:stroke-primaryColor text-[1.6rem]" />
          <Tooltip id="info_phone_number" />
        </div>
      </div>

      <div className="mx-3 sm:hidden ">
        <Link to="/checkout/payment">
          <OGButton
            className="text-white rounded-md bg-primaryColor h-[50px] w-full my-4 text-base font-OG-Bold"
            title="Continue"
          />
        </Link>
      </div>
    </div>
  );
};

export default ShippingAddress;
