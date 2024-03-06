import { useState } from "react";

const useOrderList = () => {
  const [rating, setRating] = useState(0);

  const data = [
    {
      orderStatus: "Delivered",
      deliveredTime: "On Thu, 4 Jan",
      brandName: "Reccy",
      title: "Men's Athletic Outdoor Ultrabreathe T-Shirt",
    },
    {
      orderStatus: "Cancel",
      deliveredTime: "On Thu, 4 Jan",
      brandName: "Reccy",
      title: "Men's Athletic Outdoor Ultrabreathe T-Shirt",
    },
    {
      orderStatus: "Delivered",
      deliveredTime: "On Thu, 4 Jan",
      brandName: "Reccy",
      title: "Men's Athletic Outdoor Ultrabreathe T-Shirt",
    },
    {
      orderStatus: "Delivered",
      deliveredTime: "On Thu, 4 Jan",
      brandName: "Reccy",
      title: "Men's Athletic Outdoor Ultrabreathe T-Shirt",
    },
    {
      orderStatus: "Delivered",
      deliveredTime: "On Thu, 4 Jan",
      brandName: "Reccy",
      title: "Men's Athletic Outdoor Ultrabreathe T-Shirt",
    },
  ];

  return {
    rating,
    setRating,
    data,
  };
};

export { useOrderList };
