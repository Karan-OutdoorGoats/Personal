import MenIcon from 'assets/svg/components/MenIcon'
import OutlineArrowUpIcon from 'assets/svg/components/OutlineArrowUpIcon'
import WomenIcon from 'assets/svg/components/WomenIcon'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { colors } from 'utils/colors'
import NavListSubItem from './nav-list-sub-item'
import { Link } from 'react-router-dom'


interface NavListItemProps {
    title: string
    titleIcon: React.ReactElement
    subData: { title: string, data: string[] }[]
    showAccOption: string
    setShowAccOption: Dispatch<SetStateAction<string>>
}


const NavListItem = (props: NavListItemProps) => {


    const { title, titleIcon, subData, setShowAccOption, showAccOption } = props

    return (
        <div className='mb-1 nav_list_item_container'>
            <div onClick={() => setShowAccOption(title)} className='flex px-2 flex-row top_category bg-white items-center justify-between h-[50px] border-t-[1px] border-b-[1px]  gap-2'>

                <div className='flex flex-row items-center basis-[70%] gap-2 '>
                    <div className=''>
                        {titleIcon}
                    </div>
                    <p className='text-base uppercase text-lightTextColor font-OG-Bold '>{title}</p>
                </div>
                <div

                    className='h-full flex items-center justify-end basis-[30%]'  >
                    <OutlineArrowUpIcon
                        fontSize={'1.4rem'}
                        className={` fill-lightTextColor group-hover:fill-primaryColor ${showAccOption === title
                            ? "rotate-[180deg] animate-rotateTo180Deg"
                            : "rotate-[90deg] animate-rotateTo90Deg"
                            } `}
                    />
                </div>
            </div>
            <div className={`category_section ${showAccOption === title ? "block duration-1000" : "hidden"} `}>

                {subData.map((item) => {
                    return <NavListSubItem item={item} />
                })}
            </div>
        </div>
    )
}

export default NavListItem