import AccessoriesIcon from "assets/svg/components/AccessoriesIcon";
import ActivityIcon from "assets/svg/components/ActivityIcon";
import ChevronDownArrow from "assets/svg/components/ChevronDownArrow";
import DiscountIcon from "assets/svg/components/DiscountIcon";
import DownArrowIcon from "assets/svg/components/DownArrowIcon";
import EquipmentIcon from "assets/svg/components/EquipmentIcon";
import FootwearIcon from "assets/svg/components/FootwearIcon";
import MenIcon from "assets/svg/components/MenIcon";
import WomenIcon from "assets/svg/components/WomenIcon";
import { Variants, motion } from "framer-motion";
import { useScreenSize } from "hooks/useScreenSize";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { colors } from "utils/colors";

const superCategory = [
    {
        title: "Men",
        icon: <MenIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />,
        children: [
            {
                heading: "Tops",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
            {
                heading: "Bottoms",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
            {
                heading: "Bottoms",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Women",
        icon: <WomenIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />,
        children: [
            {
                heading: "Tops",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
            {
                heading: "Bottoms",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Accessories",
        icon: (
            <AccessoriesIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />
        ),
        children: [
            {
                heading: "Tops",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Equipment",
        icon: (
            <EquipmentIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />
        ),
        children: [
            {
                heading: "Tops",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
            {
                heading: "Bottoms",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Footwear",
        icon: <FootwearIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />,
        children: [
            {
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Sports",
        icon: <ActivityIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />,
        children: [
            {
                heading: "Tops",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
            {
                heading: "Bottoms",
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
    {
        title: "Deals",
        icon: <DiscountIcon fill={colors.lightTextColor} fontSize={"1.4rem"} />,
        children: [
            {
                data: [
                    "Tops",
                    "Shirts",
                    "T-Shirt,Sweatshirt and Polos",
                    "Jackets and Vest",
                    "Baselayers & Thermals",
                    "Jerseys",
                ],
            },
        ],
    },
];

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 20,
        },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const NavBar = () => {
    const screenSize = useScreenSize()
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className=" nav_bar_main_container">
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="nav_bar_container z-[100]"
            >
                <div className="bg-white">
                    <nav className="flex flex-row items-center relative justify-center gap-5  h-[44px]">
                        {superCategory.map((item, index) => {
                            return (
                                <div
                                    onMouseEnter={() =>
                                        setTimeout(() => setIsOpen(true), 100)
                                    }
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    <div
                                        data-tooltip-id={index.toString()}
                                        className="flex h-[44px] peer flex-row items-center gap-3 hover:cursor-pointer "
                                    >
                                        {item.icon}
                                        <p className="uppercase text-lightTextColor text-15 font-OG-Medium ">
                                            {item.title}
                                        </p>
                                        <ChevronDownArrow
                                            stroke={colors.lightTextColor}
                                            fontSize={"1.4rem"}
                                        />
                                    </div>
                                    <motion.div
                                        variants={{
                                            open: {
                                                clipPath:
                                                    "inset(0% 0% 0% 0% )",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0,
                                                    duration: 0.7,
                                                    delayChildren: 0,
                                                    staggerChildren: 0.05,
                                                },
                                            },
                                            closed: {
                                                clipPath:
                                                    "inset(10% 50% 90% 50% round 10px)",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0,
                                                    duration: 0.3,
                                                },
                                            },
                                        }}
                                        style={{
                                            pointerEvents: isOpen
                                                ? "auto"
                                                : "none",
                                        }}
                                        className={`absolute max-h-[300px] rounded-b-2xl    overflow-y-auto border-primaryColor   menu_list_item   shadow-md hover:block hidden  peer-hover:block z-[99] py-2 bg-white `}
                                    >
                                        {item?.children?.map((childItem) => {
                                            return (
                                                <motion.div
                                                    variants={itemVariants}
                                                >
                                                    {childItem?.heading && (
                                                        <div className="h-[35px] mt-1 hover:cursor-pointer  w-full flex items-center px-5 ">
                                                            <p className="w-full text-sm uppercase text-lightTextColor font-OG-Bold">
                                                                {
                                                                    childItem?.heading
                                                                }
                                                            </p>
                                                        </div>
                                                    )}
                                                    {childItem.data.map(
                                                        (dataItem) => {
                                                            return (
                                                                <div className="flex flex-row w-full gap-2 px-5 py-1 hover:cursor-pointer">
                                                                    {/* <p className="text-sm opacity-0 text-lightTextColor font-OG-Medium">-</p> */}
                                                                    <p className="w-full text-sm hover:underline text-lightTextColor font-OG-Medium">
                                                                        {
                                                                            dataItem
                                                                        }
                                                                    </p>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </motion.div>
        </div>
    );
};

export default NavBar;
