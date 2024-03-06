import OutlineArrowUpIcon from 'assets/svg/components/OutlineArrowUpIcon'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavListSubItemProps {
    item: { title: string, data: string[] }
}

const NavListSubItem = (props: NavListSubItemProps) => {
    const { item } = props

    const [showSubAccOption, setShowSubAccOption] = useState(false)
    return (
        <div className='nav_list_sub_item'>
            <div className='flex px-2 flex-row top_category bg-lightPrimaryColor items-center justify-between h-[50px] border-t-[1px] border-b-[1px] border-lightPrimaryColor gap-2' >
                <Link className='basis-[70%] h-full  flex items-center' to={"/product-list/men"}> 
                <div className='flex flex-row items-center gap-2 '>
                    <p className='text-sm uppercase font-OG-Bold text-lightTextColor'>{item.title}</p>
                </div>
                </Link>
                <div onClick={() => setShowSubAccOption(!showSubAccOption)}
                    className='h-full flex items-center basis-[30%] justify-end '
                >
                    <OutlineArrowUpIcon
                        fontSize={'1.4rem'}
                        className={` fill-lightTextColor group-hover:fill-primaryColor ${showSubAccOption
                            ? "rotate-[180deg] animate-rotateTo180Deg"
                            : "rotate-[90deg] animate-rotateTo90Deg"
                            } `}
                    />
                </div>
            </div>
            <div className={`${showSubAccOption ? "block" : "hidden"}`}>
                {item.data.map((dataItem) => {
                    return <div className='px-2 py-2 my-1 bg-white before:flex before:font-OG-Regular before:text-sm before:flex-row'>
                        <p className='text-sm font-OG-Medium  before:content-["-"] before:mr-2 text-lightTextColor'>{dataItem}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default NavListSubItem