import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { colors } from 'utils/colors';
import Details from './desktop/Details';
import MoreInformation from './desktop/MoreInformation';
import RatingBar from './RatingBar';
import ReturnExch from './desktop/ReturnExch';
import AthleteReview from './desktop/AthleteReview';

type Title =
    | "Details"
    | "More_Information"
    | "Athlete_Reviews"
    | "Community_Reviews"
    | "Return_And_Exchange"
    | "Delivery_Information"

const Accordian = (props) => {
    const { setShowReviewModalCB } = props;

    const [selectedAcc, setSelectedAcc] = useState<null | string>(null)
    const [accordianList, setAccordianList] = useState([
        {
            title: "Delivery Information",
            type: "Delivery_Information"
        },
        {
            title: "Details",
            type: "Details"
        },
        
        {
            title: "More Information",
            type: "More_Information"
        },
        {
            title: "Community Reviews (7)",
            type: "Community_Reviews",
        },
        {
            title: "Return And Exchange",
            type: "Return_And_Exchange"
        },

    ])

    const renderDesc = (value: Title) => {
        switch (value) {
            case "Details":
                return <Details />;

            case "More_Information":
                return <MoreInformation />;

            case "Community_Reviews":
                return <RatingBar setShowReviewModalCB={setShowReviewModalCB} />;

            case "Return_And_Exchange":
                return <ReturnExch />;

            case "Athlete_Reviews":
                return <AthleteReview />;

            case "Delivery_Information":
                return <div className="*:text-[0.8rem] flex flex-col items-start">
                    <p className="text-sm font-OG-Regular text-lightTextColor">
                        Expected delivery to metros: 4-5 days
                    </p>
                    <p className="text-sm font-OG-Regular text-lightTextColor">
                        Expected delivery to rest of India: 5-7 days
                    </p>
                </div>

            default:
                return null;
        }
    };


    return (
        <div>
            {accordianList.map((item) => {

                if (item.type === selectedAcc) {
                    return <div>
                        <a  onClick={() => setSelectedAcc(null)} className='flex flex-row items-center justify-between pb-2 mb-2 border-b-2 border-primaryColor'>
                            <p className='block text-sm uppercase font-OG-Regular text-primaryColor'>{item.title}</p>
                            <MdOutlineKeyboardArrowUp className='ease-in-out  rotate-[180deg] animate-rotateTo180Deg text-primaryColor' size={"1.5rem"} />
                        </a>
                        <div id={`${item.type}_Acc`} className={`px-2 py-3 ${selectedAcc === "Details" ? "mb-10" : "mb-0"}`}>{renderDesc(selectedAcc as Title)}</div>
                    </div>
                }

                return <div onClick={() => {
                    if(selectedAcc){
                        const elementToScroll = document.querySelector(`#${item.type}_Acc`)
                        setSelectedAcc(null)
                        elementToScroll?.scrollIntoView()
                        setTimeout(()=> {
                            setSelectedAcc(item.type)
                        },400)
                    }else{
                        const elementToScroll = document.querySelector(`#${item.type}_Acc`)
                        setSelectedAcc(null)
                        elementToScroll?.scrollIntoView()
                        setSelectedAcc(item.type)
                    }
                }
                 } className='flex flex-row items-center justify-between pb-2 mb-2 border-b-2 border-lightTextColor'>
                    <p className='text-sm uppercase font-OG-Regular text-lightTextColor'>{item.title}</p>
                    <MdOutlineKeyboardArrowUp className='rotate-[90deg] animate-rotateTo90Deg' size={"1.5rem"} />
                </div>
            })}
        </div>
    )
}

export default Accordian