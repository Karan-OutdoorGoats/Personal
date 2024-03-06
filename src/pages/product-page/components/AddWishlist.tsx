import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { colors } from "utils/colors";

const AddWishlist = () => {
  return (
    <button className="sm:hidden">
      <FaRegHeart size={"2.4rem"} color={colors.grey} />
    </button>
  );
};

export default AddWishlist;
