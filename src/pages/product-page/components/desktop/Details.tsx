import { useScreenSize } from "hooks/useScreenSize";
import React, { useEffect, useState } from "react";

const Details = () => {
  const screenSize = useScreenSize()
  const [viewMore, setViewMore] = useState(true);


  useEffect(() => {
    const viewMoreDiv = document.querySelector<HTMLDivElement>(".long_text")!;
    if (viewMoreDiv.scrollHeight > 200) {
      setViewMore(true);
    } else {
      setViewMore(false);
    }
  }, []);

  return (
    <div className="relative">
      <div
        className={`value ${
          viewMore ? "overflow-y-hidden max-h-[180px]" : "overflow-y-auto "
        } long_text font-OG-Regular text-s text-lightTextColor`}
      >
        The Tripole Colonel Series Rucksack Bag with Detachable Day Pack is the
        ultimate solution for your long duration hikes or travel. This rucksack
        bag can hold everything you need for 12 to 20 days, depending on the
        size you choose. The rucksack bag has a large main compartment with a
        drawstring closure that can fit your clothes, sleeping bag, tent or
        other bulky items. The rucksack bag also has two side pockets and a
        front pocket that can store your water bottle, snacks, map or other
        small items. The rucksack bag has padded shoulder straps and a waist
        strap that provide comfort and stability. The rucksack bag also has
        torso adjustment straps that can fit variable heights and physiques. The
        rucksack bag comes with a detachable day pack that can be used
        separately or attached to the front of the rucksack bag. The day pack
        has a similar design and features a zipper closure, a front pocket and
        shoulder straps. The day pack is ideal for carrying your essentials when
        you go for a short hike, sightseeing or shopping. The Tripole Colonel
        Series Rucksack Bag with Detachable Day Pack is a versatile and spacious
        option for your outdoor adventures. <br />
        <br />{" "}
        <u>
          <span
            className="font-OG-Regular text-lightTextColor"
            style={{ fontSize: 16 }}
          >
            Features
          </span>
        </u>
        <br /> 1. Hard fiber support in the back along with aluminum rod
        provides a strong internal frame
        <br /> 2. Extra soft breathable cushioning on the back provides easy air
        flow while walking for long hours
        <br /> 3. 8 Utility straps to wrap additional items (sleeping bag, mat,
        camping equipment) on the sides, bottom and top
        <br /> 4. Elastic cords and hooks on the day pack to hold mountaineering
        gear and additional emergency items
        <br /> 5. Double layered strong fabric at the bottom provides durability
        for rough usage and carrying excess load and base pads on the bottom for
        rough terrain
        <br /> 5. Elastic loops for holding trekking poles
        <br />
        <br />{" "}
        <u>
          <span style={{ fontSize: 16 }}>Compartments</span>
        </u>
        <br /> 1. Top section with zipper (Ideal for handy items like eye wear,
        medicines)
        <br /> 2. Main Upper Compartment
        <br /> 3. Main Lower Compartment - Separate bottom opening, to be used
        for storing soiled
        <br /> clothing, emergency items or shoes
        <br /> 4. Spacious deep pockets on each side
        <br /> 5. Mesh pockets on each side
        <br /> 6. Easily detachable 12 Litre Day Pack on the front
        <br />
        <br />{" "}
        <u>
          <span style={{ fontSize: 16 }}>Load Management</span>
        </u>
        <br /> 1. Torso adjustment straps to fit variable heights and physiques
        <br /> 2. Chest strap with elastic provides movability and aids in
        adjusting load
        <br /> 3. Four load setting pulls on the shoulder straps
        <br /> 4. Flexible and movable waist strap to fit below the pelvis area
      </div>
      <div
        className={`absolute left-0 right-0 h-16 flex flex-col justify-center ${
          viewMore ? (screenSize.width > 600 ? "bottom-[-15px]" : "bottom-[-40px]") : ("bottom-[-50px] sm:bottom-[-60px]")
        }   ${
          viewMore ? "bg-[rgba(255,255,255,0.9)]" : "bg-transparent"
        } outline-none`}
      >
        <p
          onClick={() => setViewMore(!viewMore)}
          className="rounded-md  px-2 py-1.5 mx-auto text-white hover:cursor-pointer text-s font-OG-Regular w-fit bg-primaryColor"
        >
          {viewMore ? "View More" : "View Less"}
        </p>
      </div>
    </div>
  );
};

export default Details;
