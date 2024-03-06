import React from "react";

// https://www.outdoorgoats.com/media/clothfeatures/Rain cover.png

interface PrdQuickInfoDeskProps {
  className?:HTMLDivElement["className"]
}

const PrdQuickInfoDesk = (props:PrdQuickInfoDeskProps) => {

  const {className} = props
  
  return (
    <div className={`grid grid-rows-4 bg-aquaHaze gap-3 py-4 px-2 ${className} `}>
      {[
        "https://www.outdoorgoats.com/media/clothfeatures/Ultra comfort.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Zippered Pockets.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Include carry bag.png",
        "https://www.outdoorgoats.com/media/clothfeatures/Drawcord adjustment.png",
      ].map((item) => {
        return <img className="h-[90px] w-[90px]" src={item} alt="" />;
      })}
    </div>
  );
};

export default PrdQuickInfoDesk;
