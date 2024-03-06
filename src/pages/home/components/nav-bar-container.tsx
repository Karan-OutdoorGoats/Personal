import CloseIcon from 'assets/svg/components/CloseIcon'
import React, { useState } from 'react'
import { colors } from 'utils/colors'
import NavListItem from './nav-list-item'
import MenIcon from 'assets/svg/components/MenIcon'
import WomenIcon from 'assets/svg/components/WomenIcon'
import AccessoriesIcon from 'assets/svg/components/AccessoriesIcon'
import EquipmentIcon from 'assets/svg/components/EquipmentIcon'
import FootwearIcon from 'assets/svg/components/FootwearIcon'
import ActivityIcon from 'assets/svg/components/ActivityIcon'
import StarIcon from 'assets/svg/components/StarIcon'
import DiscountIcon from 'assets/svg/components/DiscountIcon'


import "./styles/navbar-container.styles.css"

const subMenData = [
    {
        title: "Apparel",
        data: [
            "Tops",
            "Bottoms",
            "Jackets",
            "Innerwear",
            "Swimwear"
        ]
    },
    {
        title: "Accessories",
        data: [
            "Headwear & Neckwear",
            "Eyewear",
            "Socks & Gloves",
            "Other Accessories"
        ],
    },
    {
        title: "Equipments",
        data: [
            "Packs",
            "Tents & Sleeping Bags",
            "Other Equipments"
        ]
    },
]

const subAccessoriesData = [
    {
        title: "Categories",
        data: [
            "Headwear & Neckwear",
            "Eyewear",
            "Socks & Gloves",
            "Other Accessories"
        ],
    },
    {
        title: "Nutrition",
        data: [
            "Gels",
            "Bars"
        ]
    }
]

const subActivityData = [
    {
        title: "Land",
        data: [
            "Hike & Camp",
            "Motorcyle",
            "Snow Sports",
            "Urban Lifestyle",
        ]
    },
    {
        title: "Water",
        data: [
            "Water",
            "Surf & SUP",
            "Dive",
            "Swim",
            "Urban Lifestyle"
        ]
    }
]

interface NavBarContainerProps {
    closeMenu: () => void
    showMenuViaHam: boolean
}

const NavBarContainer = (props: NavBarContainerProps) => {

    const { closeMenu, showMenuViaHam } = props
    const [showAccOption, setShowAccOption] = useState("")

    return (
        <nav className={`z-[100] navbar_container  ${showMenuViaHam ? " duration-700 slide-in-from-left-0 direction-normal " : "translate-x-[-600px] slide-out-to-left-full duration-700 ease-in-out "}   bg-[rgba(0,0,0,0.2)] fixed  top-0 w-full `}>
            <div className='w-3/4 py-1 overflow-y-auto bg-white h-dvh'>
                <div className='flex justify-end px-2 my-2 '>
                    <div onClick={closeMenu} >
                        <CloseIcon fontSize={'2rem'} fill={colors.lightTextColor} />
                    </div>
                </div>
                {
                    [
                        {
                            title:"Men",
                            titleIcon:<MenIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        },
                        {
                            title:"Women",
                            titleIcon:<WomenIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData

                        },
                        {
                            title:"Accessories",
                            titleIcon:<AccessoriesIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                            
                        },
                        {
                            title:"Equipment",
                            titleIcon:<EquipmentIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        },
                        {
                            title:"Footwear",
                            titleIcon:<FootwearIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        },
                        {
                            title:"Activities",
                            titleIcon:<ActivityIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        },
                        {
                            title:"Brands",
                            titleIcon:<StarIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        },
                        {
                            title:"Deals",
                            titleIcon:<DiscountIcon fill={colors.lightTextColor} fontSize={'1.4rem'} />,
                            subData:subMenData
                        }
                    ].map((item,index)=> {
                        return <NavListItem setShowAccOption={setShowAccOption} showAccOption={showAccOption}  subData={item.subData} title={item.title} titleIcon={item.titleIcon} />       
                    })
                }
            </div>
        </nav>
    )
}

export default NavBarContainer