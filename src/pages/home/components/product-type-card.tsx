import OGButton from "components/Button/OGButton";
import React from "react";

const ProductTypeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[350px] w-full gap-5 px-2 mt-5 mb-8  md:px-10 md:my-5">
      <div className="relative group overflow-clip ">
        <div className="h-full group-hover:scale-125 duration-1000 transition hover:duration-700  w-[100%] bg-cover bg-no-repeat bg-[url(https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/Backpacks_s_Banner.jpg)]"></div>
        <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-center">
          <p className="text-2xl text-white uppercase font-OG-Bold">
            Rugged Men's Bottoms
          </p>
          <OGButton
            className="h-[30px] rounded-sm hover:bg-primaryColor hover:border-primaryColor transition text-sm mt-3  border-[1px] px-2 text-white font-OG-Regular py-1"
            title="Shop Now"
          />
        </div>
      </div>

      <div className="relative group overflow-clip ">
        <div className="h-full group-hover:scale-125 duration-1000 transition hover:duration-700  w-[100%] bg-cover bg-no-repeat bg-[url(https://www.outdoorgoats.com/media/slideshow/cache/1900x808/wysiwyg/Backpacks_s_Banner.jpg)]"></div>
        <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-center">
          <p className="text-2xl text-white uppercase font-OG-Bold">
            Outdoor Essentials
          </p>
          <OGButton
            className="h-[30px] rounded-sm hover:bg-primaryColor hover:border-primaryColor transition text-sm mt-3  border-[1px] px-2 text-white font-OG-Regular py-1"
            title="Shop Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTypeCard;
