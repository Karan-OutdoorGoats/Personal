import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import websiteLogo from "assets/images/website_logo.png";

const Header = () => {
  return (
    <div className=" flex flex-row items-center gap-3 px-3 py-3 border-b-[1px]">
      <IoArrowBackOutline fontSize={"1.4rem"} />
      <img className="object-contain w-2/4" src={websiteLogo} alt="logo" />
    </div>
  );
};

export default Header;
