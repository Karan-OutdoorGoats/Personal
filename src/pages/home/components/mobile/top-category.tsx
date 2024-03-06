import { useScreenSize } from "hooks/useScreenSize";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import CategoryItem from "./category-item";
import "./styles/top-category.styles.css";

interface TopCategoryProps {
  title: string;
}

const TopCategory = (props: TopCategoryProps) => {
  const { title } = props;
  const multiGridSwiperRef = useRef<SwiperRef | null>(null);
  const screenSize = useScreenSize();
  const [showNavigation, setShowNavigation] = useState({
    left: false,
    right: true,
  });

  return (
    <div className="px-2 md:px-10 md:my-5">
      <div className="flex flex-row items-center justify-between gap-4 h-[60px] md:h-[60px] ">
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
        <h3 className="text-xl text-lightTextColor font-OG-Bold underline-offset-4">
          {title}
        </h3>
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
      </div>

      <Swiper
        ref={multiGridSwiperRef}
        slidesPerView={"auto"}
        spaceBetween={10}
        slidesPerGroup={2}
        modules={[Navigation]}
        className="top_category_swiper"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i, index) => {
          return (
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopCategory;
