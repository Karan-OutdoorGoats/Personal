import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import { useScreenSize } from "hooks/useScreenSize";
import React from "react";
import ReactModal from "react-modal";
import { colors } from "utils/colors";
import { images } from "utils/images";
import { useUserCred } from "./UserCred.hooks";

interface UserCredProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserCred = (props: UserCredProps) => {
  const { isOpen, onClose } = props;

  const { credType, setCredType } = useUserCred();

  const renderCredType = (value) => {
    switch (value) {
      case "Login":
        return (
          <div className="mt-[25px]">
            <div className="my-4">
              <div className="flex  flex-row w-max mx-auto rounded-md px-2 justify-center  h-[38px] hover:cursor-pointer   items-center  border-lightTextColor border-[1px]">
                <img src={images.googleLogo} alt="" className="size-[35px]" />
                <div className="h-[100%] flex items-center">
                  <p className="px-3 text-sm text-lightTextColor font-OG-Bold ">
                    Sign in with Google
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 my-2">
                <div className="flex-1 border-[1px] border-lightPrimaryColor" />
                <p className="text-base font-OG-Regular text-lightTextColor">
                  OR
                </p>
                <div className="flex-1 border-[1px] border-lightPrimaryColor" />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="email_address"
                >
                  Email Address
                </label>
                <div className="flex flex-row items-center gap-3">
                  <InputBoxField
                    type="email"
                    id="email_address"
                    className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex flex-row items-center gap-3">
                <InputBoxField
                  type="email"
                  id="password"
                  className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[35px] flex-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <OGButton
                title="Login"
                className="border-none hover:bg-white hover:text-primaryColor hover:border-solid hover:border-primaryColor hover:border-[1px]  bg-primaryColor text-white text-base font-OG-Regular w-full h-[40px] rounded-sm"
              />
              <div className="flex flex-row items-center justify-center mt-1">
                <p
                  onClick={() => setCredType("ForgotPassword")}
                  className="text-sm underline hover:cursor-pointer font-OG-Regular"
                >
                  Forgot Your Password?
                </p>
              </div>
            </div>
          </div>
        );

      case "SignUp":
        return (
          <div className="">
            <div className="my-4">
              <div className="flex  flex-row w-max mx-auto rounded-md px-2 justify-center  h-[38px] hover:cursor-pointer   items-center  border-lightTextColor border-[1px]">
                <img src={images.googleLogo} alt="" className="size-[35px]" />
                <div className="h-[100%] flex items-center">
                  <p className="px-3 text-sm text-lightTextColor font-OG-Bold ">
                    Sign in with Google
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 my-2">
                <div className="flex-1 border-[1px] border-lightPrimaryColor" />
                <p className="text-base font-OG-Regular text-lightTextColor">
                  OR
                </p>
                <div className="flex-1 border-[1px] border-lightPrimaryColor" />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <div className="flex flex-row items-center gap-3">
                  <InputBoxField
                    type="email"
                    id="first_name"
                    className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <div className="flex flex-row items-center gap-3">
                  <InputBoxField
                    type="email"
                    id="last_name"
                    className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="email_address"
                >
                  Email Address
                </label>
                <div className="flex flex-row items-center gap-3">
                  <InputBoxField
                    type="email"
                    id="email_address"
                    className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex flex-row items-center gap-3">
                <InputBoxField
                  type="email"
                  id="password"
                  className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[35px] flex-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <div className="flex flex-row items-center gap-3">
                <InputBoxField
                  type="email"
                  id="confirm_password"
                  className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[35px] flex-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <OGButton
                title="Sign Up"
                className="border-none hover:bg-white hover:text-primaryColor hover:border-solid hover:border-primaryColor hover:border-[1px]  bg-primaryColor text-white text-base font-OG-Regular w-full h-[40px] rounded-sm"
              />
            </div>
          </div>
        );

      case "ForgotPassword":
        return (
          <div className="">
            <div className="my-4">
              <p className="mb-4 text-sm font-OG-Bold text-lightTextColor">
                Please enter your email address below to receive a password
                reset link.
              </p>
              <div className="mb-4">
                <label
                  className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex flex-row items-center gap-3">
                  <InputBoxField
                    type="email"
                    id="email"
                    className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-xs h-[35px] flex-1"
                  />
                </div>
              </div>

              <OGButton
                title="Submit"
                className="border-none hover:bg-white hover:border-primaryColor hover:text-primaryColor hover:border-solid hover:border-[1px]  bg-primaryColor text-white text-base font-OG-Regular w-full h-[40px] rounded-sm"
              />

              <div className="flex flex-row items-center justify-center mt-1">
                <p
                  onClick={() => setCredType("Login")}
                  className="text-sm underline hover:cursor-pointer font-OG-Regular"
                >
                  Go back to login
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const screenSize = useScreenSize();
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Edit Address"
      style={{
        content: {
          // backgroundColor: colors.white,
          // height: screenSize.width > 600 ? "auto" : "98dvh",
          height: screenSize.width > 600 ? "auto" : "auto",
          overflowY: "scroll",
          width: screenSize.width > 600 ? "40%" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          display: "flex",
          flexDirection: "column",
          justifyContent: screenSize.width > 600 ? "center" : "end",
          alignItems: "center",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        },
      }}
      className="bg-white border-2 sm:rounded-md focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3 py-2">
        <div className="">
          <div className="sticky top-0 z-[100] py-2 bg-white">
            <div className="flex items-center justify-end mb-3">
              <CircleCloseOutlineIcon
                onClick={onClose}
                className="hover:cursor-pointer text-[2rem] stroke-primaryColor "
              />
            </div>

            {credType !== "ForgotPassword" && (
              <div className="user_cred_container">
                <div className="grid grid-cols-2 gap-5 cred_header_bar ">
                  <div
                    onClick={() => {
                      return credType === "Login" ? true : setCredType("Login");
                    }}
                    className={`${credType === "Login"
                      ? "border-primaryColor border-b-[2px]"
                      : "border-b-[1.5px] "
                      } pb-1 hover:cursor-pointer  flex justify-center`}
                  >
                    <p
                      className={`text-base ${credType === "Login"
                        ? "text-primaryColor font-OG-Bold"
                        : "font-OG-Regular text-lightTextColor "
                        }`}
                    >
                      Login
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      return credType !== "Login" ? true : setCredType("SignUp");
                    }}
                    className={`${credType !== "Login"
                      ? "border-primaryColor border-b-[2px]"
                      : "border-b-[1.5px] "
                      } pb-1 hover:cursor-pointer  flex justify-center`}
                  >
                    <p
                      className={`text-base ${credType !== "Login"
                        ? "text-primaryColor font-OG-Bold"
                        : "font-OG-Regular text-lightTextColor "
                        }`}
                    >
                      Sign Up
                    </p>
                  </div>
                </div>

              </div>
            )}
            {credType === "ForgotPassword" && (
              <div className="user_cred_container">
                <div className="grid grid-cols-1 cred_header_bar ">
                  <div
                    className={`${credType === "ForgotPassword"
                      ? "border-primaryColor border-b-[2px]"
                      : "border-b-[1.5px] "
                      } pb-1  flex w-max mx-auto justify-center`}
                  >
                    <p
                      className={`text-base ${credType === "ForgotPassword"
                        ? "text-primaryColor font-OG-Bold"
                        : "font-OG-Regular text-lightTextColor "
                        }`}
                    >
                      Forgot Password
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>

          <div className="mx-3 sm:mx-10">{renderCredType(credType)}</div>

        </div>
      </div>
    </ReactModal>
  );
};

export default UserCred;
