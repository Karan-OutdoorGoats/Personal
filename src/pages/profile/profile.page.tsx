import React from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "./profile.hooks";
import HamBurgerMid from "assets/svg/components/HamBurgerMid";
import "./styles.css";
import RightArrowIcon from "assets/svg/components/RightArrowIcon";

const ProfilePage = () => {
  const { navLinkData, setShowProfileMenu, showProfileMenu } = useProfile();
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <div className="gap-3 px-3 py-3 sm:px-12 sm:py-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 sm:gap-2 sm:mb-4">
          <div className="flex flex-row items-center gap-2 sm:gap-0 sm:block">
            <div onClick={() => navigate(-1)} className="flex flex-row items-center gap-1 sm:gap-0 sm:block">
              <RightArrowIcon className="rotate-[180deg] stroke-lightTextColor text-3xl sm:hidden" />
            </div>
            <Link to={"/profile"}>
              <p className="flex text-xl sm:text-2xl font-OG-Bold text-lightTextColor">
                Profile
              </p>
            </Link>
          </div>

          {/* {{
            "/profile": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  Overview
                </p>
              </>
            ),
            "/profile/orders": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  My Orders
                </p>
              </>
            ),
            
            "/profile/orderlist": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  Order Details
                </p>
              </>
            ),
            "/profile/account": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  My Account
                </p>
              </>
            ),
            "/profile/wishlist": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  My Wishlist
                </p>
              </>
            ),
            "/profile/account-information-edit": (
              <>
                <RightArrowIcon className="stroke-black text-[1.6rem] sm:hidden" />
                <p className="text-xl underline sm:hidden font-OG-Medium text-lightTextColor">
                  Edit Account
                </p>
              </>
            ),
          }[location.pathname] || ""} */}
        </div>
        {/* <div
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          className=" rounded-md border-[1px] bg-primaryColor sm:hidden"
        >
          <HamBurgerMid className="text-3xl fill-white" />
        </div> */}
      </div>
      <div className={`flex-col flex gap-4 sm:flex-row`}>
        <div
          className={`${showProfileMenu ? "block animate-fadeDown  " : "hidden"
            } sm:animate-none sm:block profile_section sm:basis-[23%] `}
        >
          {navLinkData.map((item) => {
            return (
              <NavLink
                onClick={() => setShowProfileMenu(false)}
                to={item.link}
                end
              >
                {({ isActive, isPending, isTransitioning }) => {
                  return (
                    <div className="hover:cursor-pointer border-b-[2px] pb-2 my-3 border-dashed">
                      <p
                        className={`${isActive
                            ? "text-primaryColor font-OG-Bold"
                            : "text-lightTextColor  font-OG-Regular"
                          } text-sm `}
                      >
                        {item.title}
                      </p>
                    </div>
                  );
                }}
              </NavLink>
            );
          })}
        </div>
        <div className="sm:basis-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
