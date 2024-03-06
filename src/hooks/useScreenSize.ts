import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const getSize = () => {
    setScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);

  return screenSize;
};

export { useScreenSize };
