import { useState } from "react";

const useProfileDashboard = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const dashboardData = [
    {
      title: "My Orders",
      desc: "Check your orders here",
      link: "orders",
    },
    {
      title: "My Contact Information",
      desc: "View or Edit Your Information",
      link: "account",
    },
    {
      title: "My Wishlist",
      desc: "check your wishlist",
      link: "wishlist",
    },
    {
      title: "My Exchanges/Returns",
      desc: "View your order exchange/return",
      link: "exchange-return",
    },
    {
      title: "My Product Reviews",
      desc: "View your Product reviewed",
      link: "exchange-return",
    },
    {
      title: "My Wallet",
      desc: "Check Your Wallet Credit",
      link: "exchange-return",
    },

    // {

    //     title:"Account Information",
    //     link:"account-information-edit",
    // },
    // {

    //     title:"My Product Reviews",
    //     link:"/profile",
    // },
  ];

  return {
    dashboardData,
    openLogoutModal,
    setOpenLogoutModal,
  };
};

export { useProfileDashboard };
