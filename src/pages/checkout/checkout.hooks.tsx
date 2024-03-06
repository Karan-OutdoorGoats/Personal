import { useEffect, useState } from "react";

const useCheckoutPage = () => {
  const data = [
    {
      prdImg:
        "https://www.outdoorgoats.com/media/catalog/product/cache/1181b1f44976cbd1fbef0bc7cea70f88/c/o/colag80_2_1.jpg",
      prdTitle: "Tripole",
      prdDesc: "Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)",
      specialPrice: "₹3,299",
      price: "₹3,299",
      skuOptions: [
        {
          type: "Color",
          name: "Blue",
        },
        {
          type: "Size",
          name: "M",
        },
        {
          type: "Bundle",
          name: "1 Pair",
        },
      ],
    },
    {
      prdImg:
        "https://www.outdoorgoats.com/media/catalog/product/cache/1181b1f44976cbd1fbef0bc7cea70f88/c/o/colag80_2_1.jpg",
      prdTitle: "Tripole",
      prdDesc: "Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)",
      specialPrice: "₹3,299",
      price: "₹3,299",
      skuOptions: [
        {
          type: "Color",
          name: "Blue",
        },
        {
          type: "Size",
          name: "M",
        },
        {
          type: "Bundle",
          name: "1 Pair",
        },
      ],
    },
    {
      prdImg:
        "https://www.outdoorgoats.com/media/catalog/product/cache/1181b1f44976cbd1fbef0bc7cea70f88/c/o/colag80_2_1.jpg",
      prdTitle: "Tripole",
      prdDesc: "Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)",
      specialPrice: "₹3,299",
      price: "₹3,299",
      skuOptions: [
        {
          type: "Color",
          name: "Blue",
        },
        {
          type: "Size",
          name: "M",
        },
        {
          type: "Bundle",
          name: "1 Pair",
        },
      ],
    },
    {
      prdImg:
        "https://www.outdoorgoats.com/media/catalog/product/cache/1181b1f44976cbd1fbef0bc7cea70f88/c/o/colag80_2_1.jpg",
      prdTitle: "Tripole",
      prdDesc: "Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)",
      specialPrice: "₹3,299",
      price: "₹3,299",
      skuOptions: [
        {
          type: "Color",
          name: "Blue",
        },
        {
          type: "Size",
          name: "M",
        },
        {
          type: "Bundle",
          name: "1 Pair",
        },
      ],
    },
  ];

  const [userPrompt,setUserPrompt] = useState({
    email:"",
    firstName:"",
    lastName:"",
    streetAddress:"",
    country:"",
    state:"",
    city:"",
    zipCode:"",
    mobileNumber:""
  })

  return {
    data,
    userPrompt,
    setUserPrompt
  };
};

export { useCheckoutPage };
