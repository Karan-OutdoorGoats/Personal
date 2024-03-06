import OrderTrackIcon from "assets/svg/components/OrderTrackIcon";
import React from "react";
import "./footer.styles.css";
import ReturnIcon from "assets/svg/components/ReturnIcon";
import FacebookIcon from "assets/svg/components/FacebookIcon";
import YoutubeIcon from "assets/svg/components/YoutubeIcon";
import LinkedIn from "assets/svg/components/LinkedIn";
import InstagramIcon from "assets/svg/components/Instagram";
import CopyRightIcon from "assets/svg/components/CopyRightIcon";

const FooterTitle = ({ title, isUnderline = true }) => {
	return (
		<p
			className={`w-max text-sm text-white  font-OG-Regular ${
				isUnderline ? "un cursor-pointer" : "hover:no-underline"
			}`}
		>
			{title}
		</p>
	);
};

const Footer = () => {
	return (
		<footer className="flex flex-col sm:flex-row  bg-[#2c454d] px-[20px] sm:px-[60px] py-5">
			<div className="policies sm:basis-[20%] mb-5 sm:mb-[unset] ">
				<h2 className="mb-2 text-base text-white uppercase font-OG-Medium">
					Policies
				</h2>
				<div className="divide-y-[6px]  divide-[#2c454d]">
					<FooterTitle title={"Privacy Policy"} />
					<FooterTitle title={"Terms & Conditions"} />
					<FooterTitle title={"Return & Exchanges"} />
					<FooterTitle title={"Brand Partner Policy"} />
					<FooterTitle title={"Shipping Policy"} />
				</div>
			</div>
			<div className="customer_support sm:basis-[30%]  mb-5 sm:mb-[unset] ">
				<h2 className="mb-2 text-base text-white uppercase font-OG-Medium">
					Customer Support
				</h2>
				<div className="divide-y-[6px]  divide-[#2c454d]">
					<FooterTitle title={"FAQ's"} />
					<FooterTitle title={"Contact Us"} />
					<FooterTitle
						title={"Phone No : +91 9819039500"}
						isUnderline={false}
					/>
					<FooterTitle
						title={"Monday - Saturday 10.00 am to 06.00 pm"}
						isUnderline={false}
					/>
				</div>
			</div>
			<div className="discover_join sm:basis-[15%] sm:mx-auto  mb-5 sm:mb-[unset] ">
				<h2 className="mb-2 text-base text-white uppercase font-OG-Medium">
					Discover
				</h2>
				<div className="divide-y-[6px] mb-7 divide-[#2c454d]">
					<FooterTitle title={"About Us"} />
					<FooterTitle title={"Blogs"} />
				</div>

				<h2 className="mb-2 text-base text-white uppercase font-OG-Medium">
					Join US
				</h2>
				<div className="divide-y-[6px]  divide-[#2c454d]">
					<FooterTitle title={"Become An Athlete"} />
					<FooterTitle title={"Becoma a Partner"} />
				</div>
			</div>
			<div className="flex flex-col  justify-between sm:flex-1 socail_order_option mb-5 sm:mb-[unset]  ">
				<div className="flex flex-col w-full items-center gap-2 mb-5 sm:mb-[unset] ">
					<div className="flex w-full justify-center flex-row border-[1.2px] hover:border-b-[2.5px] hover:cursor-pointer px-2 py-2 rounded-sm items-center gap-2">
						<OrderTrackIcon className="text-base fill-white" />
						<p className="text-sm text-white font-OG-Regular ">
							Track Your Orders
						</p>
					</div>
					<div className="flex w-full justify-center flex-row items-center gap-2 hover:cursor-pointer hover:border-b-[2.5px] border-[1.2px] px-2 py-2 rounded-sm">
						<ReturnIcon className="size-[20px] fill-white" />
						<p className="text-sm text-white font-OG-Regular">
							Return & Exchanges
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center gap-2 sm:gap-2 mb-5 sm:mb-[unset]  ">
					<a
						className="circle group hover:-translate-y-2"
						href="https://www.facebook.com/outdoorgoats?hc_ref=ARSekseszOVu10i6oHPLTJU80yHbWPHk0RHr6vj68rAcmaHBri5ikhyONfQ9IFHmMZ8&amp;ref=nf_target&amp;__xts__[0]=68.ARBRCSn2pvHlbhfhOQCpgbMwSu08apx-1BGtDGTF7MENcNI-oRMgQXdB4ylakTZbNtS_UOTFBZgDKdnCjlbm4LtvW7nrJl28UCZqclG8Jem6r22JFj2upo6AXRIdHO2kY5KawRJXHo1e9NXRcn8Bgv_OypgVxidpYubbskvIFbo1ARjQnuKJ9GEhxr5mexeoUoSrN4b1M-rUvsdmop_hA5u5nZQuxTo0070IRKCfXxwdxzzLDV8iD33ewB7yuyJvkoh8wvfdrF5kMe8ZKRhQq_X-VrGm8_w2gE9NRX-WPKvh_4QOq6DwVQHZ9NuaH8WY-eTJc0et8L0hhiwFLIBf6JTHMgRU7gDby8c3iiUOT52gUryChmNRni-jAfB8tmBaSWzoaQ"
						target="_blank"
						rel="noopener"
					>
						<div className="size-[28px] group-hover:bg-primaryColor  bg-white rounded-full flex items-center justify-center">
							<FacebookIcon className="fill-lightTextColor group-hover:fill-white text-[22px]" />
						</div>
					</a>
					<a
						className="circle group hover:-translate-y-2"
						href="https://www.youtube.com/@outdoorgoats"
						target="_blank"
						rel="noopener"
					>
						<div className="size-[28px] group-hover:bg-primaryColor  bg-white rounded-full flex items-center justify-center">
							<YoutubeIcon className="fill-lightTextColor group-hover:fill-white  text-[18px]" />
						</div>
					</a>
					<a
						className="circle group hover:-translate-y-2"
						href="https://www.instagram.com/outdoorgoatsofficial/"
						target="_blank"
						rel="noopener"
					>
						<div className="size-[28px] bg-white rounded-full group-hover:bg-primaryColor flex items-center justify-center">
							<LinkedIn className="group-hover:fill-white  fill-lightTextColor text-[16px]" />
						</div>
					</a>
					<a
						className="circle group hover:-translate-y-2"
						href="http://linkedin.com/company/Outdoorgoats"
						target="_blank"
						rel="noopener"
					>
						<div className="size-[28px] bg-white rounded-full group-hover:bg-primaryColor flex items-center justify-center">
							<InstagramIcon className="fill-lightTextColor group-hover:fill-white text-[16px]" />
						</div>
					</a>
				</div>
				<div className="flex flex-row items-center gap-2">
					<CopyRightIcon
						className="text-base"
						stroke="white"
						fill="white"
					/>
					<p className="text-sm text-white font-OG-Regular">{2023}</p>
					<p className="text-sm text-white font-OG-Regular">
						Wild Country PVT LTD - All Rights Resevered
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
