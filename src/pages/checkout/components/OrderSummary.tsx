import React from 'react'
import CartList from './CartList';

const OrderSummary = (props) => {

  const {data} = props

  return (
    <div className='p-3 border-2 border-primaryColor rounded-xl'>
      <div className='order_summary_title'>
        <p className='text-base uppercase text-lightTextColor border-b-[1px] pb-2'>Order Summary</p>
      </div>
      <div className="my-3 border-b-[1px] amount_section">
        {[
          {
            title: "Bag MRP (incl. taxes)",
            amount: "₹7,096",
            type: "mrp",
          },
          {
            title: "Bag Discount",
            amount: "₹1,300",
            type: "discount",
          },
          {
            title: "Shipping (Free Shipping - Free)",
            amount: "₹0",
            type: "shipping",
          },
          {
            title: "You Pay",
            amount: "₹5,796",
            type: "you_pay",
          },
          {
            title: "Total Savings",
            amount: "₹1,300",
            type: "total_saving",
          },
        ].map((item) => {
          if (item.type === "you_pay") {
            return (
              <div className="flex flex-row items-center justify-between my-2">
                <p className="text-l font-OG-Bold text-lightTextColor">
                  {item.title}
                </p>
                <p className="text-l font-OG-Bold text-lightTextColor">
                  {item.amount}
                </p>
              </div>
            );
          }
          if (item.type === "total_saving") {
            return (
              <div className="flex flex-row items-center justify-between my-2">
                <p className="text-l font-OG-Bold text-[#008000]">
                  {item.title}
                </p>
                <p className="text-l font-OG-Bold text-[#008000]">
                  {item.amount}
                </p>
              </div>
            );
          }
          return (
            <div className="flex flex-row items-center justify-between my-2">
              <p className="text-m font-OG-Regular text-lightTextColor">
                {item.title}
              </p>
              <p className="text-m font-OG-Regular text-lightTextColor">
                {item.amount}
              </p>
            </div>
          );
        })}
      </div>
      <CartList data={data} />
    </div>
  )
}

export default OrderSummary