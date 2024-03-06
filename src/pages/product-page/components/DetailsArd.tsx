import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DetailsArd = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-2 border-b-2 border-black">
        <p className="uppercase font-[400] text-sm text-black font-OG-Regular">
          Details
        </p>
        <MdKeyboardArrowDown size={"2rem"} />
      </div>
      {/* description */}
      <div className="*:text-sm font-OG-Regular font-[400] py-2 relative">
        <p>
          Gear up for your favorite activities, including biking, with our
          versatile Arm Compression Sleeves! Designed to provide optimal support
          and protection, these sleeves are perfect for intense bike rides. Say
          goodbye to muscle fatigue and hello to improved endurance on the road.
          Whether you're cycling through scenic routes, playing cricket, or
          engaging in other sports, our Arm Compression Sleeves are the ultimate
          performance enhancer. Don't settle for less when it comes to your
          athletic performance.
          <span>...</span>
          <span className="hidden">
            Elevate your game and conquer new challenges with our Arm
            Compression Sleeves! Designed for both men and women, this
            premium-quality sleeve is crafted to provide enhanced compression,
            support, and comfort for your arms, whether you're an athlete,
            fitness enthusiast, or recovering from an injury. Designed for both
            men and women, this premium-quality sleeve is crafted to provide
            enhanced compression, support, and comfort for your arms, whether
            you're an athlete, fitness enthusiast, or recovering from an injury.
          </span>
        </p>
        <div className="absolute bottom-0 z-10 left-[37%]  ">
          <button className="flex items-center justify-center w-full h-full px-2 py-1 text-sm bg-white border-2 rounded-md outline-none border-primaryColor font-OG-Regular text-primaryColor">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsArd;
