import { ItemStyles, ThinRoundedStar } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles/PrdImageCarousel.css";

import "swiper/css/effect-cube";
import { useScreenSize } from "hooks/useScreenSize";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const PrdImageCarousel = () => {
  const screenSize = useScreenSize();

  return (
    <div className="relative">
      <div className="relative overflow-clip">
        <div className="">
          <Swiper
            style={{
              // @ts-ignore
              "--swiper-pagination-bullet-horizontal-gap": "2px",
              margin: 0,
            }}
            pagination={{
              dynamicBullets: true,
              dynamicMainBullets: 4,
            }}
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 0,
              shadowScale: 0.94,
            }}
            loop
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Pagination, EffectCube]}
            centeredSlides
            className="PrdImageSwiper w-[100%] "
          >
            <SwiperSlide>
              <img
                className="object-cover aspect-square "
                alt="bag"
                src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_1.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover aspect-square "
                alt="bag"
                src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_3.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover aspect-square "
                alt="bag"
                src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_2.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover aspect-square "
                alt="bag"
                src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_4.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover aspect-square "
                alt="bag"
                src="https://www.outdoorgoats.com/media/bss/webp/media/catalog/product/cache/9d1d9925e1c9523ef836ba9c23cffffa/j/a/jacket_yellow_5.webp"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="absolute top-[5%] left-[5%] z-[20]  bg-primaryColor text-white font-OG-Regular text-xs px-3 py-1">
          <p>40% OFF</p>
        </div>

        <div className="absolute bottom-[10%]  left-[32%]  origin-center rotate-[-33deg] z-[20]  bg-orange text-white font-OG-Regular text-[0.6rem] w-full py-[1px]">
          <p className="text-xs text-center uppercase">Athlete Reviewed</p>
        </div>
      </div>

      {/* <div>
        <div>
          <h1 className="text-sm break-all font-OG-Regular">
            Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)
          </h1>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-between mt-2">
          <div>
            <Rating
              readOnly
              style={{ width: "90px" }}
              value={3.4}
              itemStyles={myStyles}
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-1 text-xs font-OG-Bold">
            <p>8 Reviews</p>
            <div> | </div>
            <p className="underline underline-offset-2">Add Your Review</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 my-3">
          <h2 className="text-sm font-OG-ExtraBold text-grey font-[900]">
            SKU
          </h2>
          <p className="text-sm font-OG-Regular text-grey ">COLAG80C</p>
        </div>

        <div className="flex flex-row items-center gap-2 my-3">
          <h2 className="text-sm font-OG-ExtraBold text-grey font-[900]">
            BRAND
          </h2>
          <p className="text-sm font-OG-Regular text-grey ">Tripole</p>
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <div className="flex flex-row items-center gap-1 text-2xl font-OG-ExtraBold">
            <h2>₹3,299</h2>
            <sup>
              <h2 className="line-through text-grey">₹3,299</h2>
            </sup>
          </div>
          <div className=" basis-[40%] flex flex-row items-center gap-2 justify-center">
            <RxRulerHorizontal size={"2rem"} color={colors.grey} />
            <p className="underline underline-offset-2 uppercase text-xs font-OG-ExtraBold font-[600]">
              Size Chart
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PrdImageCarousel;
