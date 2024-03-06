import { useRef, useState } from "react";

import BoxLeftIcon from "assets/svg/components/BoxLeftIcon";
import { SwiperRef } from "swiper/react";
import { images } from "utils/images";
import PremiumSwiper from "./premium-swiper";

interface SeasonSingleRowGridProps {
	title: string;
	openViewProduct: () => void;
	isLoading: boolean;
	data?: { [key: string]: any }[];
}

const SeasonSingleRowGrid = (props: SeasonSingleRowGridProps) => {
	const singleGridSwiperRef = useRef<SwiperRef | null>(null);
	const { title, openViewProduct, isLoading, data } = props;
	const [showNavigation, setShowNavigation] = useState({
		left: false,
		right: true,
	});

	if (data?.length < 1) {
		return null;
	}

	return (
		<div className="px-2  md:px-10  pb-5 md:pb-[30px] bg-gradient-to-r from-[#36656d] from-[5%] via-[#36656d] via-[70%] to-[#36656d]">
			<div className="flex flex-row items-center justify-between gap-4 h-[40px] py-5  md:h-[60px]">
				<div className=" flex-1 border-[0.5px] border-white"></div>
				<h3 className="text-xl text-white font-OG-Bold underline-offset-4">
					{title}
				</h3>
				<div className=" flex-1 border-[0.5px] border-white"></div>
			</div>
			<div className="hidden mb-3 md:block">
				<div className="flex flex-row items-center justify-end gap-1 ">
					<div
						onClick={() => {
							singleGridSwiperRef.current?.swiper.slidePrev();
							singleGridSwiperRef.current?.swiper.isBeginning
								? setShowNavigation({
										left: false,
										right: true,
								  })
								: setShowNavigation({
										left: true,
										right: true,
								  });
						}}
						className={` arrow  ${
							showNavigation.left
								? "opacity-100 hover:cursor-pointer "
								: "opacity-40"
						} `}
					>
						<BoxLeftIcon className="size-[40px] stroke-white" />
					</div>
					<div
						onClick={() => {
							singleGridSwiperRef.current?.swiper.slideNext();
							singleGridSwiperRef.current?.swiper.isEnd
								? setShowNavigation({
										left: true,
										right: false,
								  })
								: setShowNavigation({
										left: true,
										right: true,
								  });
						}}
						className={`   ${
							showNavigation.right
								? "opacity-100 hover:cursor-pointer"
								: "opacity-40"
						} `}
					>
						<BoxLeftIcon className="size-[40px] rotate-[180deg] stroke-white" />
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 md:gap-0 md:items-start md:flex-row ">
				<div className="h-[500px] w-full  md:w-[350px]">
					<img
						className="object-cover object-right w-full h-full"
						src={images.stockImage}
						alt=""
					/>
				</div>
				<PremiumSwiper
					data={data}
					isLoading={isLoading}
					ref={singleGridSwiperRef}
					openViewProduct={openViewProduct}
				/>
			</div>
		</div>
	);
};
export default SeasonSingleRowGrid;
