import HeartIcon from "assets/svg/components/HeartIcon";
import OrderIcon from "assets/svg/components/OrderIcon";
import ProfileIcon from "assets/svg/components/ProfileIcon";
import ReturnIcon from "assets/svg/components/ReturnIcon";
import OGButton from "components/Button/OGButton";
import React from "react";
import { images } from "utils/images";
import { useProfileDashboard } from "./profile-dashboard.hooks";
import { NavLink } from "react-router-dom";
import ProductReviewIcon from "assets/svg/components/ProductReviewIcon";
import WalletIcon from "assets/svg/components/WalletIcon";
import RightArrowIcon from "assets/svg/components/RightArrowIcon";
import Logout from "components/Modal/LogoutModal";

const ProfileDashboardPage = () => {
  const { dashboardData, openLogoutModal, setOpenLogoutModal } =
    useProfileDashboard();

  const renderDashIcon = (value: string) => {
    switch (value) {
      case "My Orders":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <OrderIcon className="fill-lightTextColor size-[50px] ml-2 sm:ml-0 sm:size-[60px]  sm:mb-2 " />
          </div>
        );

      case "My Contact Information":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <ProfileIcon className="fill-lightTextColor size-[30px] sm:size-[40px] ml-4 sm:ml-0  mb-2  mt-[10px]" />
          </div>
        );

      case "My Wishlist":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <HeartIcon className="stroke-lightTextColor size-[30px] sm:size-[40px] mb-2 ml-4 sm:ml-0  mt-[10px]" />
          </div>
        );

      case "My Exchanges/Returns":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <ReturnIcon className="fill-lightTextColor font-xs size-[30px] sm:size-[40px] mb-2 ml-4 sm:ml-0 mt-[10px]" />
          </div>
        );

      case "My Product Reviews":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <ProductReviewIcon className="fill-lightTextColor font-xs size-[30px] sm:size-[40px] mb-2 ml-4 sm:ml-0  mt-[10px]" />
          </div>
        );

      case "My Wallet":
        return (
          <div className="basis-[15%] sm:basis-[40%]">
            <WalletIcon className="stroke-lightTextColor font-xs size-[30px] sm:size-[40px] mb-2 ml-4 sm:ml-0 mt-[10px]" />
          </div>
        );
    }
  };

  return (
    <>
      <Logout
        isOpen={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
      />
      <div className="my-4">
        <div className="border-[1px] sm:p-[15px]">
          <div className="flex flex-col items-center px-6 py-4 sm:px-8 sm:py-6 sm:items-start sm:gap-10 sm:flex-row bg-lightPrimaryColor overview_header_container">
            <img
              className="size-[90px] sm:size-[130px] object-contain"
              src="http://wildcountrygear.in/media/favicon/stores/1/grey_ODG_Head.png"
              alt=""
            />
            <div className="mt-3.5 flex flex-col items-center sm:items-start">
              <p className="text-base font-OG-Bold text-lightTextColor">
                Hello, Somnath Tiwari
              </p>
              <p className="text-sm font-OG-Bold text-lightTextColor">
                somnath.tiwari@outdoorgoats.com
              </p>
            </div>
          </div>
          <div className="grid gap-3 my-4 sm:grid-cols-3">
            {dashboardData.map((item) => {
              return (
                <NavLink
                  to={item.link}
                  className="flex flex-row sm:flex-col items-center border-b-[1px] sm:border-b-unset py-3 sm:py-0 sm:border-[1px] hover:bg-lightPrimaryColor hover:cursor-pointer  sm:rounded-md sm:h-[180px] sm:justify-center"
                >
                  {renderDashIcon(item.title)}
                  <div className="flex flex-row items-center justify-between flex-1 px-4 sm:px-0 sm:flex-none sm:flex-col">
                    <div className="flex flex-col sm:flex-col sm:items-center">
                      <p className="text-sm font-OG-Bold text-lightTextColor">
                        {item.title}
                      </p>
                      <p className="text-sm capitalize font-OG-Medium text-lightTextColor">
                        {item.desc}
                      </p>
                    </div>
                    <div className="sm:hidden">
                      <RightArrowIcon className="fill-lightTextColor text-[25px]" />
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="my-5 sm:my-2">
          <OGButton
            title="Logout"
            onClick={() => setOpenLogoutModal(true)}
            className="uppercase h-[40px] border-[1px] w-full sm:w-[unset] sm:px-[80px] hover:bg-white hover:border-primaryColor hover:text-primaryColor w rounded-sm text-white bg-primaryColor text-sm font-OG-Regular"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileDashboardPage;
