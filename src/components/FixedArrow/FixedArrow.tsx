import React, { useEffect, useState } from "react";
import rightIcon from "assets/svg/right-circle.svg";

const FixedArrow = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenForScroll = () => {
    window.addEventListener("scroll", (e: Event) => {
      const scrollvalue = document.documentElement.scrollTop;
      if (scrollvalue > 250) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  };

  useEffect(() => {
    listenForScroll();
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed_bottom hidden  fixed rounded-[3rem] z-[1000] ${
        scrollVisible ? "sm:block" : "hidden"
      } bottom-4 right-3`}
    >
      <img
        className="size-[4rem] rotate-[-90deg]"
        src={rightIcon}
        alt="up arrow"
      />
    </button>
  );
};

export default FixedArrow;
