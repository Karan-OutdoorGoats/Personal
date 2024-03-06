import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import HelpCircleOutline from "assets/svg/components/HelpCircleOutline";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import { useScreenSize } from "hooks/useScreenSize";
import ShippingAddress from "pages/checkout/components/ShippingAddress";
import { useState } from "react";
import ReactModal from "react-modal";
import { Tooltip } from "react-tooltip";
import { colors } from "utils/colors";
import { images } from "utils/images";

interface CreateAddressProps {
  isOpen: boolean;
  onClose: () => void;
  addressType: string;
}

const EditAddressModal = (props: CreateAddressProps) => {
  const screenSize = useScreenSize();

  // alert(screenSize.width);

  const { isOpen, onClose, addressType } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Edit Address"
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
      className="border-2 rounded-md focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3 py-4">
        <div className="">
          <div className="flex items-center justify-between mb-5">
            <p className="text-base leading-8 uppercase text-lightTextColor font-OG-Bold">
              Edit {addressType} Address
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

          <div>
            <div className="contact_information_container">
              <div>
                <p className="text-sm uppercase border-b-[1px] pb-2 mb-3 font-OG-Bold text-lightTextColor">
                  Contact Information
                </p>
              </div>

              <div className="first_name">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <div className="">
                  <InputBoxField
                    id="first_name"
                    className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                  />
                </div>
              </div>

              <div className="last_name">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <div className="">
                  <InputBoxField
                    id="last_name"
                    className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                  />
                </div>
              </div>
              {/* end for first and last name */}

              <label
                className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
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
                      src={images.flagIndia}
                      title="India (भारत): +91"
                      className="h-[100%] w-[40px] py-1 px-1"
                      alt="flag"
                    />
                    <p className="text-sm font-OG-Regular text-lightTextColor">
                      +91
                    </p>
                  </label>
                  <InputBoxField
                    id="phone_number"
                    className=" px-3 focus:outline-none font-OG-Regular text-sm h-[100%] items-center flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="address_container">
              <div>
                <p className="text-sm uppercase border-b-[1px] pb-2 mb-3 font-OG-Bold text-lightTextColor">
                  Address
                </p>
              </div>
              <div className="street_address">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="street_address"
                >
                  Street Address
                </label>
                <div className="">
                  <InputBoxField
                    id="street_address"
                    className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                  />
                  <InputBoxField
                    id="street_address[2]"
                    className="rounded-[3px] border-[1px] mb-3 focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 mb-4 country_state_province">
                <div className="basis-[50%]">
                  <label
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="state"
                  >
                    Country
                  </label>
                  <SelectDropdown
                    className="text-sm font-OG-Regular"
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
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
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
                    className="text-sm font-OG-Regular"
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
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <div className="">
                    <InputBoxField
                      id="city"
                      className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="postal_code"
                  >
                    Zip/Postal Code
                  </label>
                  <div className="">
                    <InputBoxField
                      id="postal_code"
                      className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <InputBoxField
                id="save_default"
                type="checkbox"
                className="items-center px-3 text-sm focus:outline-none font-OG-Regular checked:border-primaryColor hover:cursor-pointer checked:accent-primaryColor focus:accent-primaryColor"
              />
              <label
                htmlFor="save_default"
                className="text-sm font-OG-Regular text-lightTextColor"
              >
                Use as my default{" "}
                {addressType === "Shipping" ? "shipping" : "billing"} address
              </label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <OGButton
                title="Save Address"
                className="text-white rounded-md bg-primaryColor h-[40px] w-full my-4 text-base font-OG-Bold"
              />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default EditAddressModal;
