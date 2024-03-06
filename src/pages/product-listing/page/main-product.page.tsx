import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductItemCard from "../components/product-item-card";

const MainProductPage = () => {
  const { isGrid } = useOutletContext<any>();

  return (
    <div className=" mt-11">
      <div
        className={` ${
          isGrid ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4"
        }   `}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
          return <ProductItemCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default MainProductPage;
