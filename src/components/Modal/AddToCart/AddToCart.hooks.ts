import { useState } from "react";

const useAddToCart = () => {
  const [showImgArr, setShowImgArr] = useState("hidden");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [isError, setIsError] = useState(false);

  const listenForHover = (e: Event) => {
    setShowImgArr("block");
  };

  const listenForHoverOut = (e: Event) => {
    setShowImgArr("hidden");
  };

  return {
    listenForHover,
    listenForHoverOut,
    showImgArr,
    showSizeChart,
    setShowSizeChart,
    isError,
    setIsError,
  };
};

export { useAddToCart };
