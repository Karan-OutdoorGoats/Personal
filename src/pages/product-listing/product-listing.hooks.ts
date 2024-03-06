import { useState } from "react";

const useProductListing = () => {
  const [viewProduct, setViewProduct] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [isAsc, setIsAsc] = useState(false);
  const [showOption, setShowOption] = useState<"filter" | "sort" | false>(
    false
  );

  return {
    viewProduct,
    setViewProduct,
    isGrid,
    setIsGrid,
    setIsAsc,
    isAsc,
    showOption,
    setShowOption,
  };
};

export { useProductListing };
