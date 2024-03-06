import React from "react";

// https://www.outdoorgoats.com/media/clothfeatures/Rain cover.png

interface PrdQuickInfoDeskProps {
  className?: HTMLDivElement["className"];
}

const PrdQuickInfoDesk = (props: PrdQuickInfoDeskProps) => {
  const { className } = props;

  return (
    <div
      className={`grid grid-cols-4  gap-3 py-2 px-2 ${className} `}
    >
      {[
        "https://www.outdoorgoats.com/media/clothfeatures/Ultra comfort.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Zippered Pockets.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Include carry bag.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Drawcord adjustment.png",
      ].map((item) => {
        return (
          <img
            className="size-[70px] object-contain"
            src={item}
            alt="Prd_QuickInfo_Images"
          />
        );
      })}
    </div>
  );
};

export default PrdQuickInfoDesk;
