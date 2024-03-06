import Invoice from "assets/svg/components/Invoice";
import OrderListItem from "./components/order-list-item";
import { useOrderList } from "./order-list.hooks";

const OrderListPage = () => {
  const { data } = useOrderList();

  return (
    <div className="my-4">
      <div className="flex flex-row flex-wrap items-center justify-between ">
        <div className="flex flex-row items-center gap-2">
          <p className="text-base font-OG-Bold text-lightTextColor">Order</p>
          <p className="text-base font-OG-Bold text-lightTextColor">
            #00001092
          </p>
        </div>
        <div className="flex flex-row items-center hover:cursor-pointer hover:underline">
          <Invoice className="text-base" />
          <p className="text-base font-OG-Bold text-lightTextColor">
            Download Invoice
          </p>
        </div>
      </div>

      <div className="px-3 py-4 my-4 bg-aquaHaze">
        {data.map((item, index) => {
          return <OrderListItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderListPage;
