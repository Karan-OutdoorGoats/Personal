import React, { forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProductCard from "./product-card";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./styles/premium-swiper.styles.css";
import { useScreenSize } from "hooks/useScreenSize";
import Skeleton from "react-loading-skeleton";
import { colors } from "utils/colors";

interface PremiumSwiperProps {
	openViewProduct: () => void;
	isLoading: boolean;
	data?: { [key: string]: any }[];
}

type RefType = SwiperRef | null;

const PremiumSwiper = forwardRef<RefType, PremiumSwiperProps>((props, ref) => {
	const { openViewProduct, isLoading, data } = props;
	const screenSize = useScreenSize();

	return (
		<Swiper
			ref={ref}
			slidesPerView={screenSize.width > 600 ? 3 : 2}
			spaceBetween={screenSize.width > 600 ? 10 : 10}
			slidesPerGroup={screenSize.width > 600 ? 3 : 2}
			pagination={{}}
			navigation={{
				nextEl: ".premium_row_arrow-right",
				prevEl: ".premium_row_arrow-left",
				enabled: true,
			}}
			grid={{
				rows: 1,
			}}
			modules={[Grid, Navigation]}
			className="premium_row_grid"
		>
			{isLoading
				? [1, 2, 3, 4].map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Skeleton
									baseColor={colors.lightPrimaryColor}
									highlightColor={colors.white}
									enableAnimation={true}
									height={500}
								/>
							</SwiperSlide>
						);
				  })
				: data?.map((i, index) => {
						return (
							<SwiperSlide key={i.uid}>
								<ProductCard
									sku={i?.sku}
									urlKey={i.url_key}
									image1={i?.media_gallery[0].url}
									image2={i?.media_gallery[1].url}
									ratingCount={i?.review_count}
									ratingStar={i?.rating_summary}
									name={i?.name}
									discount={
										i?.price_range?.maximum_price?.discount
											.percent_off
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
	);
});

export default PremiumSwiper;
