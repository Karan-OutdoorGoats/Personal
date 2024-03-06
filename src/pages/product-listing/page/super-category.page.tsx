import React from "react";
import ProductItemCard from "../components/product-item-card";
import { useOutletContext } from "react-router-dom";
import FilterIcon from "assets/svg/components/FilterIcon";

const SuperCategoryPage = () => {
  const { isGrid } = useOutletContext<any>();

  return (
    <div className="mt-2 md:mt-5 product_item_container_root ">

      <div
        className={`grid grid-cols-2 md:gap-2 product_item_container ${isGrid ? "md:grid md:grid-cols-3 md:gap-4" : "md:flex md:flex-col md:gap-4"
          }   `}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
          return <ProductItemCard key={index} />;
        })}
       
      </div>
      
    </div>
  );
};

export default SuperCategoryPage;
