import { useScreenSize } from "hooks/useScreenSize";
import { useRef, useState } from "react";

const useProductPage = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [showImgArr, setShowImgArr] = useState("hidden");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [outOfStock, setOutOfStock] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    // return
    const placed = document.querySelector<HTMLDivElement>(
      ".product_action_btn"
    )?.offsetTop;
    const fixedDiv = document.querySelector<HTMLDivElement>(".fixed_top");
    const offsetHeight = document.querySelector<HTMLDivElement>(
      ".product_action_btn"
    )?.offsetHeight;
    const onScrollBoundingRect = document
      .querySelector(".product_action_btn")
      ?.getBoundingClientRect();
    const scrollY = window.scrollY;
    // console.log(window.scrollY , "SCROLL YYY")
    // console.log(placed , "PLACED TOP")
    // console.log(onScrollBoundingRect, "BOUNIDNG BOUDING")
    // console.log(offsetHeight, "OOFSET HEIGHT ")
    // console.log(window.innerHeight, " INNER HRIEHGT")
    // console.log(boundingRect, " BOUNDING BOUNDING")
    // const diff = placed! - scrollY
    // console.log(diff, " IDFFF")

    if (scrollY > 400) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }

    if (window.innerWidth > 600) {
      if (scrollY > 700) {
        fixedDiv!.style.cssText = "display:block; position:fixed";
      } else {
        fixedDiv!.style.cssText = "display:none; position:static";
      }
    }
  };

  const setShowReviewModalCB = (value: boolean) => {
    setShowReviewModal(value);
  };

  const fixedAddCounter = () => {};

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

  const listenForHover = (e: Event) => {
    setShowImgArr("block");
  };

  const listenForHoverOut = (e: Event) => {
    setShowImgArr("hidden");
  };

  return {
    scrollVisible,
    scrollToTop,
    listenForScroll,
    listenForHover,
    listenForHoverOut,
    showImgArr,
    showReviewModal,
    setShowReviewModalCB,
    onScroll,
    isSticky,
    showAuth,
    setShowAuth,
    showSizeChart,
    setShowSizeChart,
    outOfStock,
    setOutOfStock,
  };
};

export { useProductPage };
