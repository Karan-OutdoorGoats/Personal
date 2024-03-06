import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/brand-roll.styles.css";
import { useScreenSize } from "hooks/useScreenSize";

const BrandRoll = () => {
  const screenSize = useScreenSize();

  return (
    <div className="px-2 md:px-10 md:my-5 brand_roll_container">
      <div className="flex flex-row items-center justify-between gap-4 h-[60px] md:h-[60px] ">
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
        <h3 className="text-xl text-lightTextColor font-OG-Bold underline-offset-4">
          Top Brands
        </h3>
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
      </div>
      <Swiper
        autoplay={{
          delay: screenSize.width > 600 ? 2000 : 1500,
          disableOnInteraction: false,
        }}
        // slidesPerGroupSkip={1}
        watchSlidesProgress={true}
        slidesPerView={screenSize.width > 600 ? 7 : 3}
        slidesPerGroup={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="brand_roll_swiper"
      >
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_98_Fahren.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Adventure_Worx.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Andune.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Apace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Brands_Logo_166x166_Athlos.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Baller_Athletik.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/catalog/category/thumbnail/Bands_Logo_132_132_px_Clawear.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Cocopalm.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_132_132_px_Craycol.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166_166_px_Ferrata.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Brands_Logo_166x166_Gokyo.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_132_132_px_Jag.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Kue.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Reccy.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Brands_Logo_166x166_River.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
        https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166_166_px_Skid_O2.webp
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
            https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_The_Mahua_Store.webp
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
            https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Trekk_Nutrition.webp
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
            https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Trekmonk.webp
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
            https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_166x166_Tripole.webp
        "
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className=" size-[120px] md:size-[150px] object-cover"
            src="
        https://www.outdoorgoats.com/media/bss/webp/media/codazon_cache/brand/200x200/wysiwyg/Bands_Logo_132_132_px_Wollen-wear_2_.webp
        "
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandRoll;
