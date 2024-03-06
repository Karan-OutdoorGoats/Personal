import React, { useCallback, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import leftIcon from "assets/svg/left-circle.svg";
import rightIcon from "assets/svg/right-circle.svg";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-cube";

import "./styles/DesktopCarousel.css";

// 
import { EffectCube, FreeMode, Navigation, Thumbs } from "swiper/modules";
import PromiseGrid from "./PromiseGrid";
import { FaRegHeart } from "react-icons/fa6";
import { colors } from "utils/colors";

interface DesktopCarouselProps {
  showImgArr: string;
}

export default function DesktopCarousel(props: DesktopCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const thumbsRef = useRef<SwiperRef | null>(null);
  const { showImgArr } = props;


  // console.log(thumbsRef.current?.swiper.sli, "REFF");

  return (
    <div className="flex flex-col">
      <div className="hidden sm:flex sm:flex-row h-[530px]">
        <div className="">
          <Swiper
            style={{
              margin: 0,
              marginRight: "10px",
            }}
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            spaceBetween={15}
            freeMode={{ enabled: true }}
            slidesPerView={5}
            slidesOffsetAfter={100}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            direction="vertical"
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs, FreeMode]}
            className="thumbs"
          >
            <SwiperSlide>
              <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/a08da31aeb3d533e25fe9545e03f4768/j/a/jacket_yellow_1.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/a08da31aeb3d533e25fe9545e03f4768/j/a/jacket_yellow_3.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/a08da31aeb3d533e25fe9545e03f4768/j/a/jacket_yellow_2.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/a08da31aeb3d533e25fe9545e03f4768/j/a/jacket_yellow_4.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/a08da31aeb3d533e25fe9545e03f4768/j/a/jacket_yellow_1.webp" />
            </SwiperSlide>
            
          </Swiper>
          <div className="flex flex-row h-8 justify-evenly">
            <div
              onClick={() => thumbsRef.current?.swiper.slidePrev()}
              className="hover:cursor-pointer"
            >
              <img
                className="size-[40px] rotate-[90deg]"
                src={leftIcon}
                alt="down arrow"
              />
            </div>
            <div
              onClick={() => thumbsRef.current?.swiper.slideNext()}
              className="hover:cursor-pointer"
            >
              <img
                className="size-[40px] rotate-[90deg]"
                src={rightIcon}
                alt="up arrow"
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-clip">
          <div>
            <Swiper
              style={{
                margin: 0,
              }}
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              ref={thumbsRef}
              loop={true}
              spaceBetween={50}
              navigation={showImgArr === "block" ? true : false}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs, EffectCube]}
              className="thumbImage"
            >
              <SwiperSlide>
                <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_1.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_3.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_2.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_4.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_5.webp" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute top-[5%] left-[5%] z-[20]  bg-primaryColor text-white font-OG-Regular text-xs px-3 py-1">
            <p>40% OFF</p>
          </div>

          {/* <div className="absolute top-[5%] right-[5%]  z-[20]">
            <FaRegHeart size={"2rem"} color={colors.primaryColor} />
          </div> */}

          <div className="absolute bottom-[8%] h-[30px]  flex flex-col justify-center  left-[33%]  origin-center rotate-[-33deg] z-[20]  bg-orange text-white font-OG-Regular text-xs w-full py-[1px]">
            <p className="text-sm text-center uppercase">Athlete Reviewed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
