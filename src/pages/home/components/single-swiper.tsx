import React, { forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProductCard from "./product-card";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./styles/single-row-grid.styles.css";
import { useScreenSize } from "hooks/useScreenSize";

interface SingleSwiperProps {
  openViewProduct: () => void;
}

type RefType = SwiperRef | null;

const SingleSwiper = forwardRef<RefType, SingleSwiperProps>((props, ref) => {
  const { openViewProduct } = props;
  const screenSize = useScreenSize();

  return (
    <div className="h-[380px] sm:h-auto">
      <Swiper
        ref={ref}
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
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i, index) => {
          return (
            <SwiperSlide>
              <ProductCard
              discount={0}
              id="0"
              image1=""
              image2=""
              name=""
              price={0}
              ratingCount={0}
              ratingStar={0}
              sku=""
              specialPrice={0}
              urlKey=""
              key={index}
                openViewProduct={openViewProduct}
                index={index}
                len={20}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default SingleSwiper;
