import React from "react";

const CategoryItem = () => {
  return (
    <div>
      <div className="w-full overflow-clip">
        <img
          className="h-[220px]   object-cover transition duration-1000 hover:scale-125 hover:duration-700"
          src="https://cdn.anscommerce.com/live/image/adventuras/banner/623_202401040303_Men.jpg"
          alt=""
        />
      </div>
      <div className="mt-1">
        <p className="text-base font-OG-Medium text-lightTextColor">
          Men's Apparel
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
