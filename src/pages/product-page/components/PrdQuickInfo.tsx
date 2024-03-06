import React from "react";

// https://www.outdoorgoats.com/media/clothfeatures/Rain cover.png

const PrdQuickInfo = (props) => {
  return (
    <div className={`grid grid-cols-4 bg-white py-2 gap-1 my-4 sm:hidden`}>
      {[
        "https://www.outdoorgoats.com/media/clothfeatures/Ultra comfort.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Zippered Pockets.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Include carry bag.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Drawcord adjustment.png",
      ].map((item) => {
        return <img src={item} alt="Prd_QuickInfo_Images" />;
      })}
    </div>
  );
};

export default PrdQuickInfo;
