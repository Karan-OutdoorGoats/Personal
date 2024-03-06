import { useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import {
	Autoplay,
	EffectCoverflow,
	EffectCreative,
	FreeMode,
	Navigation,
	Pagination,
	Thumbs,
} from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "../styles.css";

const TopBanner = () => {
	const [bannerThumbs, setBannerThumbs] = useState<SwiperClass>();
	const progressCircle = useRef<SVGSVGElement>(null);
	const progressContent = useRef<HTMLSpanElement>(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current!.style.setProperty(
			"--progress",
			(1 - progress).toString()
		);
		progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<div className="relative top_banner_container">
			<Swiper
				thumbs={{
					swiper:
						bannerThumbs && !bannerThumbs.destroyed
							? bannerThumbs
							: null,
				}}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 900, -90],
						scale: 0.9,
					},
					next: {
						shadow: true,
						translate: [0, 900, -90],
						scale: -0.9,
					},
				}}
				// effect={'coverflow'}
				effect={"creative"}
				navigation={true}
				coverflowEffect={{
					rotate: 30,
					stretch: 0,
					depth: 400,
					modifier: 4,
					slideShadows: true,
				}}
				modules={[
					Autoplay,
					Navigation,
					Pagination,
					Thumbs,
					EffectCoverflow,
					EffectCreative,
				]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="banner_swiper w-full h-[80vh] "
			>
				<SwiperSlide>
					<LazyLoadImage
						className="object-cover w-full "
						src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/Gear_for_you_main_banner_10_off_.jpg"
						alt="top_banner_images"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<LazyLoadImage
						className="object-cover w-full "
						src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/No_Plastic_banner_965_x_411_px_3_.jpg"
						alt="top_banner_images"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<LazyLoadImage
						className="object-cover w-full "
						src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/Backpacks_s_Banner.jpg"
						alt="top_banner_images"
					/>
				</SwiperSlide>
				<div
					className="autoplay-progress size-[40px]"
					slot="container-end"
				>
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle stroke="#ffff" cx="24" cy="24" r="20"></circle>
					</svg>
					<span className="text-white" ref={progressContent}></span>
				</div>
			</Swiper>
			<div className="absolute flex flex-row justify-center w-full bottom-[3%]">
				<Swiper
					modules={[Thumbs, FreeMode]}
					loop={true}
					slidesPerView={4}
					spaceBetween={5}
					watchSlidesProgress={true}
					freeMode={{ enabled: true }}
					onSwiper={(swiper) => setBannerThumbs(swiper)}
					className="banner_thumbs_swiper "
				>
					<SwiperSlide>
						<img
							data-tooltip-id="first_image"
							className="object-cover w-full "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/Gear_for_you_main_banner_10_off_.jpg"
							alt="top_banner_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							data-tooltip-id="second_image"
							className="object-cover w-full "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/No_Plastic_banner_965_x_411_px_3_.jpg"
							alt="top_banner_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							data-tooltip-id="third_image"
							className="object-cover w-full "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/Backpacks_s_Banner.jpg"
							alt="top_banner_image"
						/>
					</SwiperSlide>
				</Swiper>
				<Tooltip
					style={{
						zIndex: 9999,
						margin: 0,
						padding: 0,
						backgroundColor: "white",
					}}
					opacity={1}
					place="top"
					id="first_image"
				>
					<div className="">
						<img
							className="object-cover w-[190px] h-[80px] "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/Gear_for_you_main_banner_10_off_.jpg"
							alt="top_banner_image"
						/>
					</div>
				</Tooltip>
				<Tooltip
					style={{
						zIndex: 9999,
						margin: 0,
						padding: 0,
						backgroundColor: "white",
					}}
					opacity={1}
					place="top"
					id="second_image"
				>
					<div className="">
						<img
							className="object-cover w-[190px] h-[80px] "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/slideshow/No_Plastic_banner_965_x_411_px_3_.jpg"
							alt="top_banner_image"
						/>
					</div>
				</Tooltip>
				<Tooltip
					style={{
						zIndex: 9999,
						margin: 0,
						padding: 0,
						backgroundColor: "white",
					}}
					opacity={1}
					place="top"
					id="third_image"
				>
					<div className="">
						<img
							className="object-cover w-[190px] h-[80px] "
							src="https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/Backpacks_s_Banner.jpg"
							alt="top_banner_image"
						/>
					</div>
				</Tooltip>
			</div>
		</div>
	);
};

export default TopBanner;
