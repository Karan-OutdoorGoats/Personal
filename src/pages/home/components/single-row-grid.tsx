import { useRef, useState } from "react";

import BoxLeftIcon from "assets/svg/components/BoxLeftIcon";
import { useScreenSize } from "hooks/useScreenSize";
import Skeleton from "react-loading-skeleton";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { colors } from "utils/colors";
import ProductCard from "./product-card";

interface SingleRowGridProps {
	title: string;
	openViewProduct: () => void;
	isLoading: boolean;
	data?: { [key: string]: any }[];
}

const SingleRowGrid = (props: SingleRowGridProps) => {
	const screenSize = useScreenSize();
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
		<div className="px-2 my-2 md:px-10 md:my-5">
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
			
			<div className="h-[380px] sm:h-auto">
				<Swiper
					ref={singleGridSwiperRef}
					slidesPerView={screenSize.width > 600 ? 4 : 2}
					spaceBetween={screenSize.width > 600 ? 15 : 10}
					slidesPerGroup={screenSize.width > 600 ? 4 : 2}
					pagination={{}}
					navigation={{
						nextEl: ".single_row_arrow-right",
						prevEl: ".single_row_arrow-left",
						enabled: true,
					}}
					grid={{
						rows: 1,
					}}
					modules={[Grid, Navigation]}
					className="single_row_grid"
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
						: data.map((i, index) => {
								return (
									<SwiperSlide key={i?.uid}>
										<ProductCard
											sku={i?.sku}
											urlKey={i.url_key}
											image1={i?.media_gallery[0].url}
											image2={i?.media_gallery[1].url}
											ratingCount={i?.review_count}
											ratingStar={i?.rating_summary}
											name={i?.name}
											discount={
												i?.price_range?.maximum_price
													?.discount.percent_off
											}
											price={
												i?.price_range?.maximum_price
													?.final_price.value
											}
											specialPrice={
												i?.price_range?.maximum_price
													?.regular_price.value
											}
											id={i?.uid}
											openViewProduct={openViewProduct}
											index={index}
											len={data.length}
										/>
									</SwiperSlide>
								);
						  })}
				</Swiper>
			</div>
		</div>
	);
};
export default SingleRowGrid;
