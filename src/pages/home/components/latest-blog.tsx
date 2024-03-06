import BoxLeftIcon from "assets/svg/components/BoxLeftIcon";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import BlogItem from "./blog-item";
import { Navigation } from "swiper/modules";
import "./styles/latest-blog.styles.css";
import { useScreenSize } from "hooks/useScreenSize";
import Skeleton from "react-loading-skeleton";
import { colors } from "utils/colors";

interface LatestBlogProps {
	title: string;
	isLoading: boolean;
	data?: { [key: string]: any }[];
}

const LatestBlog = (props: LatestBlogProps) => {
	const { title, isLoading, data } = props;
	const latestGridSwiperRef = useRef<SwiperRef | null>(null);
	const screenSize = useScreenSize();
	const [showNavigation, setShowNavigation] = useState({
		left: false,
		right: true,
	});

	return (
		<div className="px-2 md:px-10 md:my-5">
			{isLoading ? (
				<Skeleton
					baseColor={colors.lightPrimaryColor}
					highlightColor={colors.white}
					enableAnimation={true}
				/>
			) : (
				<div className="flex flex-row items-center justify-between gap-4 h-[40px]  md:h-[60px]">
					<div className=" flex-1 border-[0.5px] border-lightTextColor"></div>
					<h3 className="text-xl text-lightTextColor font-OG-Bold underline-offset-4">
						{title}
					</h3>
					<div className=" flex-1 border-[0.5px] border-lightTextColor"></div>
				</div>
			)}

			<div className="hidden mb-3 md:block">
				<div className="flex flex-row items-center justify-end gap-1 ">
					<div
						onClick={() => {
							latestGridSwiperRef.current?.swiper.slidePrev();
							latestGridSwiperRef.current?.swiper.isBeginning
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
						{isLoading ? (
							<Skeleton
								baseColor={colors.lightPrimaryColor}
								highlightColor={colors.white}
								enableAnimation={true}
								height={30}
								width={30}
							/>
						) : (
							<BoxLeftIcon className="size-[40px] stroke-lightTextColor" />
						)}
					</div>
					<div
						onClick={() => {
							latestGridSwiperRef.current?.swiper.slideNext();
							latestGridSwiperRef.current?.swiper.isEnd
								? setShowNavigation({
										left: true,
										right: false,
								  })
								: setShowNavigation({
										left: true,
										right: true,
								  });
						}}
						className={`${
							showNavigation.right
								? "opacity-100 hover:cursor-pointer"
								: "opacity-40"
						} `}
					>
						{isLoading ? (
							<Skeleton
								baseColor={colors.lightPrimaryColor}
								highlightColor={colors.white}
								enableAnimation={true}
								height={30}
								width={30}
							/>
						) : (
							<BoxLeftIcon className="size-[40px] rotate-[180deg] stroke-lightTextColor" />
						)}
					</div>
				</div>
			</div>

			<Swiper
				ref={latestGridSwiperRef}
				slidesPerView={screenSize.width > 600 ? 3 : 1.5}
				spaceBetween={screenSize.width > 600 ? 20 : 10}
				slidesPerGroup={screenSize.width > 600 ? 3 : 1}
				pagination={{}}
				navigation={{
					nextEl: ".multi_row_arrow-right",
					prevEl: ".multi_row_arrow-left",
					enabled: true,
				}}
				modules={[Navigation]}
				className="latest_blog_swiper"
			>
				{isLoading
					? [1, 2, 3, 4].map((item, index) => {
							return (
								<SwiperSlide key={index}>
									<Skeleton
										baseColor={colors.lightPrimaryColor}
										highlightColor={colors.white}
										enableAnimation={true}
										height={600}
									/>
								</SwiperSlide>
							);
					  })
					: data?.map((i, index) => {
							return (
								<SwiperSlide>
									<BlogItem
										title={i.title}
										content={i.content}
										media={i.media_gallery}
									/>
								</SwiperSlide>
							);
					  })}
			</Swiper>
		</div>
	);
};

export default LatestBlog;
