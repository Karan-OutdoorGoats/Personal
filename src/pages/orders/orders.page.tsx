import React from "react";
import OrderTable from "./components/OrderTable";
import { useOrders } from "./orders.hooks";

const data = [
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "01/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "10/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "01/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "10/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "01/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "10/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: true,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  {
    orderNo: "000001952",
    date: "11/22/23",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
  // {
  //     orderNo: "000001952",
  //     date: "11/22/23",
  //     orderTotal: "₹6,500",
  //     action: {
  //         title: "View Order",
  //         reorder: true
  //     }
  // },
  // {
  //     orderNo: "000001952",
  //     date: "01/22/23",
  //     orderTotal: "₹6,500",
  //     action: {
  //         title: "View Order",
  //         reorder: true
  //     }
  // },
  // {
  //     orderNo: "000001952",
  //     date: "10/22/23",
  //     orderTotal: "₹6,500",
  //     action: {
  //         title: "View Order",
  //         reorder: false
  //     }
  // },
  // {
  //     orderNo: "000001952",
  //     date: "11/22/23",
  //     orderTotal: "₹6,500",
  //     action: {
  //         title: "View Order",
  //         reorder: true
  //     }
  // },
  // {
  //     orderNo: "000001952",
  //     date: "11/22/23",
  //     orderTotal: "₹6,500",
  //     action: {
  //         title: "View Order",
  //         reorder: false
  //     }
  // },
  {
    orderNo: "000001952",
    date: "11/11/11",
    orderTotal: "₹6,500",
    action: {
      title: "View Order",
      reorder: false,
    },
  },
];

const OrdersPage = () => {
  const { perPage, setPerPage, offset, setOffSet } = useOrders();

  return (
    <div>
      <div className="mb-[150px] mt-[20px] sm:mb-[200px]">
        <OrderTable data={data} perPage={perPage} setPerPage={setPerPage} />
      </div>
    </div>
  );
};

export default OrdersPage;
