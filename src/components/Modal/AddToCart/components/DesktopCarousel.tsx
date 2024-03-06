import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import leftIcon from "assets/svg/left-circle.svg";
import rightIcon from "assets/svg/right-circle.svg";
import { EffectCube, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-cube";

const DesktopCarousel = (props) => {
  const { showImgArr, listenForHoverOut, listenForHover } = props;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const thumbsRef = useRef<SwiperRef | null>(null);

  React.useEffect(() => {
    const thumbImage =
      document.querySelector<HTMLDivElement>(".modal_thumbImage")!;
    console.log(thumbImage, " CONSOEL");
    thumbImage?.addEventListener("mouseover", listenForHover);

    thumbImage?.addEventListener("mouseout", listenForHoverOut);
  }, []);

  return (
    <React.Fragment>


      <div className="relative flex flex-col gap-2 overflow-clip ">
        <div className="relative overflow-clip">
          <Swiper
            style={{
              margin: 0,
            }}
            effect={"cube"}
            grabCursor={true}
            cubeEffect={
              {
                // shadow: true,
                // slideShadows: true,
                // shadowOffset: 20,
                // shadowScale: 0.94,
              }
            }
            ref={thumbsRef}
            loop={true}
            // spaceBetween={50}
            navigation={showImgArr === "block" ? true : false}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs, EffectCube]}
            className="modal_thumbImage"
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

          <div className="absolute bottom-[10%] h-[20px]  flex flex-col justify-center  left-[30%]  origin-center rotate-[-33deg] z-[2]  bg-orange text-white font-OG-Regular w-full py-[1px]">
            <p className="text-xs text-center uppercase">Athlete Reviewed</p>
          </div>
          <div className="absolute top-[5%] left-[5%] z-[2]  bg-primaryColor text-white font-OG-Regular text-xs px-1 py-[2px]">
            <p>40% OFF</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between thumbs_container ">
          <div
            onClick={() => thumbsRef.current?.swiper.slidePrev()}
            className="hover:cursor-pointer"
          >
            <img
              className="size-[40px] rotate-[0deg]"
              src={leftIcon}
              alt="down arrow"
            />
          </div>
          <Swiper
            style={{
              margin: 0,
              marginRight: "10px",
            }}
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            spaceBetween={2}
            freeMode={{ enabled: true }}
            slidesPerView={3}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            direction="horizontal"
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs, FreeMode]}
            className="modal_thumbs"
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
          {/* <div className="flex flex-row h-8 "> */}

          <div
            onClick={() => thumbsRef.current?.swiper.slideNext()}
            className="hover:cursor-pointer"
          >
            <img
              className="size-[40px] rotate-[0deg]"
              src={rightIcon}
              alt="up arrow"
            />
          </div>
          {/* </div> */}
        </div>
      </div>

    </React.Fragment>
  );
};

export default DesktopCarousel;
