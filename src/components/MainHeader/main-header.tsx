import CartIcon from "assets/svg/components/CartIcon";
import HeartIcon from "assets/svg/components/HeartIcon";
import ManIcon from "assets/svg/components/ManIcon";
import PhoneIcon from "assets/svg/components/PhoneIcon";
import SearchIcon from "assets/svg/components/SearchIcon";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React from "react";
import { colors } from "utils/colors";
import { images } from "utils/images";

const MainHeader = () => {
	return (
		<div className="flex flex-row items-center px-10 py-2 bg-white">
			<div className="basis-[30%]">
				<img
					src={images.websiteLogo}
					className="h-[55px] w-[200px] object-contain"
					alt=""
				/>
			</div>
			<div className="basis-[70%] flex flex-row items-center ">
				<div className="basis-[45%] gap-3 border-[1px] flex flex-row bg-white pl-5 rounded-sm  items-center ">
					<InputBoxField placeholder="Search for products, brands and more..." className="w-full h-[30px] outline-none font-OG-Regular text-sm" />
					<div className="bg-lightTextColor cursor-pointer w-[40px] justify-center h-[30px] flex items-center ">
					<SearchIcon
						stroke={colors.white}
						fill="white"
						className="text-[18px]  "
					/>
					</div>
				</div>
				<div className="basis-[10%]">

				</div>
				<div className="flex flex-row items-center gap-2 basis-[25%] justify-center ">
					<div className="rounded-full border-[1px] p-1 border-lightTextColor">
						<PhoneIcon className="text-[20px] fill-lightTextColor" />
					</div>
					<div>
						<p className="text-xs font-[500] font-OG-Regular text-primaryColor ">
							Need Help? Call us now
						</p>
						<a className="block text-13 font-OG-Regular text-primaryColor" href="tel:+9198190 39500">+91 (98190 39500)</a>
					</div>
				</div>
				<div className="basis-[25%]  flex flex-row items-center  justify-end">
					<div className="basis-[33%] flex justify-end">
						<ManIcon
							className="hover:cursor-pointer"
							fill={colors.lightTextColor}
							fontSize={"1.3rem"}
						/>
					</div>
					<div className="basis-[33%] flex justify-end ">
						<HeartIcon
							className="hover:cursor-pointer"
							stroke={colors.lightTextColor}
							fontSize={"1.5rem"}
						/>
					</div>
					<div className="basis-[33%] flex justify-end">
						<CartIcon
							className="hover:cursor-pointer"
							stroke={colors.lightTextColor}
							fontSize={"1.5rem"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
