import { useState } from "react"

const useProfile = () => {


    const [showProfileMenu,setShowProfileMenu] = useState(false)

    const navLinkData = [
        {
            title:"Overview",
            link:"/profile"
        },
        {

            title:"My Orders",
            link:"orders",
        },
        {

            title:"My Contact Information",
            link:"account",
        },
        {

            title:"My Exchanges/Returns",
            link:"exchange-return",
        },
        {

            title:"My Wishlist",
            link:"wishlist",
        },
        {

            title:"My Product Reviews",
            link:"*",
        },
        {

            title:"My Wallet",
            link:"*",
        },
        // {

        //     title:"Account Information",
        //     link:"account-information-edit",
        // },
        // {

        //     title:"My Product Reviews",
        //     link:"/profile",
        // },
    ]
    return {
        navLinkData,
        showProfileMenu,
        setShowProfileMenu
    }
}


export {useProfile}