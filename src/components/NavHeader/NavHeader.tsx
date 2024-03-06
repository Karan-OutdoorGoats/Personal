import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import websiteLogo from "assets/images/website_logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";

const NavHeader = () => {
  return (
    <div className="sm:hidden sticky top-0 border-solid z-[100] bg-white  border-b-2 py-1 justify-center">
      <div className="flex flex-row items-center justify-between px-2 py-2 ">
        <div className="flex flex-row items-center gap-3">
          <IoArrowBackOutline fontSize={"1.4rem"} />
          <img className="object-contain w-2/3" src={websiteLogo} alt="logo" />
        </div>
        <div className="flex flex-row items-center justify-between gap-4 ">
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={"1rem"} /> */}
          <IoSearchSharp size={"1.4rem"} />
          <FaRegHeart size={"1.4rem"} />
          {/* <FontAwesomeIcon icon={faCartShopping} fontSize=1.4rem"} /> */}
          <FiShoppingCart size={"1.4rem"} />
        </div>
      </div>

      {/* code commented */}
      {/* <div className="flex flex-row justify-evenly items-center flex-wrap px-4 *:text-center *:text-xs *:text-primaryColor gap-1 *:font-OG-Bold">
        <p>
          <strong>Free Shipping</strong>
        </p>
        <div className="">|</div>
        <p>
          <strong>Cash on Delivery</strong>
        </p>
        <div className="">|</div>
        <p>
          <strong>Easy Returns</strong>
        </p>
        <div className="">|</div>
        <p>
          <strong>10% Discount On all prepaid orders</strong>
        </p>
      </div> */}
    </div>
  );
};

export default NavHeader;
