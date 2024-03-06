import CartIcon from "assets/svg/components/CartIcon";
import HamBurgerMid from "assets/svg/components/HamBurgerMid";
import HeartIcon from "assets/svg/components/HeartIcon";
import ManIcon from "assets/svg/components/ManIcon";
import ProfileIcon from "assets/svg/components/ProfileIcon";
import SearchIcon from "assets/svg/components/SearchIcon";
import React from "react";

import { colors } from "utils/colors";
import HamburgerIcon from "assets/svg/components/HamburgerIcon";
import MenIcon from "assets/svg/components/MenIcon";
import NavBarContainer from "../nav-bar-container";

interface NavBarMenuProps {
  setShowMenuViaHam:()=> void
  showMenuViaHam:boolean
}


const NavBarMemu = (props:NavBarMenuProps) => {
  
  const {setShowMenuViaHam} = props


  return (
    <header className="sticky top-0 z-[99] bg-white">
      <div className="flex flex-row items-center justify-between px-1 h-[50px] sm:hidden">
        <div className="flex flex-row items-center h-full gap-3 left_side">
          <div onClick={setShowMenuViaHam} className="flex items-center h-full ">
          <HamburgerIcon strokeWidth={3} stroke={colors.lightTextColor} fontSize={'2rem'} />
          </div>
          <div>
            <img
              className="w-[200px]"
              src="https://www.outdoorgoats.com/media/codazon/logo/3/default/OG_NEW_SITE_grey_head-_Green_Green_Logo_2_.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center right_side basis-[50%] gap-3 px-1 justify-end">
          <SearchIcon fill={colors.lightTextColor} fontSize={"1.5rem"} />
          <ManIcon fill={colors.lightTextColor} fontSize={"1.3rem"} />
          <HeartIcon stroke={colors.lightTextColor} fontSize={"1.5rem"} />
          <CartIcon stroke={colors.lightTextColor} fontSize={"1.5rem"} />
        </div>
      </div>
    </header>
  );
};

export default NavBarMemu;
