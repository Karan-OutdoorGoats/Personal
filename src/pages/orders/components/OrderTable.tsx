import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import React from "react";
import { useOrders } from "../orders.hooks";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import RightArrowIcon from "assets/svg/components/RightArrowIcon";

const OrderTable = (props) => {
  const { data, perPage, setPerPage } = props;

  const getCount = React.useMemo(() => {
    const emptyArr = Array(Math.ceil(data.length / perPage.value));
    return emptyArr.fill("I");
  }, [perPage]);

  return (
    <div>
      <div className="border-[1px] px-3  sm:px-5  sm:py-4">
        <div className="hidden sm:grid grid-cols-4 gap-3  border-b-[1px] pb-2">
          {["Order #", "Date", "Order Total", "Action"].map((item) => {
            return (
              <p className="text-sm uppercase font-OG-Bold text-lightTextColor">
                {item}
              </p>
            );
          })}
        </div>

        <div className="gap-3 my-2">
          {data.slice(0, perPage.value).map((item) => {
            return (
              <div className="grid sm:grid-cols-4 hover:border-b-[2.5px] hover:border-primaryColor gap-1 sm:gap-3 my-2 border-[1px] p-3 sm:px-2 sm:py-3">
                <div className="flex flex-row gap-3">
                  <p className="text-sm uppercase basis-[50%] sm:hidden font-OG-Bold text-lightTextColor">
                    Order
                  </p>
                  <p className="text-sm uppercase font-OG-Regular text-lightTextColor">
                    #{item.orderNo}
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <p className="text-sm uppercase basis-[50%] sm:hidden font-OG-Bold text-lightTextColor">
                    Date
                  </p>
                  <p className="text-sm uppercase font-OG-Regular text-lightTextColor">
                    {item.date}
                  </p>
                </div>


                <div className="flex flex-row gap-3">
                  <p className="text-sm uppercase basis-[50%] sm:hidden font-OG-Bold text-lightTextColor">
                    Order Total
                  </p>
                  <p className="text-sm uppercase font-OG-Regular text-lightTextColor">
                    {item.orderTotal}
                  </p>

                </div>

                <div className="flex flex-row gap-3">
                <p className="text-sm uppercase basis-[50%] sm:hidden font-OG-Bold text-lightTextColor">
                  Action
                </p>
                <div className="flex flex-row items-center gap-3">
                  <NavLink to={"../orderlist"}>
                    <p className="text-sm font-OG-Regular hover:cursor-pointer hover:underline hover:text-primaryColor text-lightTextColor">
                      {item.action.title}
                    </p>
                  </NavLink>
                  {item.action.reorder && (
                    <p className="text-sm hover:underline hover:cursor-pointer hover:text-primaryColor font-OG-Regular text-lightTextColor">
                      Reorder
                    </p>
                  )}
                </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
      {data.length > 10 && (
        <div className="flex flex-col mt-3 sm:items-center sm:justify-between sm:flex-row">
          <div className="flex flex-row basis-[50%] items-center justify-between">
            <div>
              <p className="text-sm font-OG-Regular text-lightTextColor">
                Items 1 to{" "}
                {data.length < perPage.value ? data.length : perPage.value} of{" "}
                {data.length} total
              </p>
            </div>
            <div className="flex flex-row">
              {getCount.map((i, index) => {
                return (
                  <div
                    className={`border-[1px] ${index === 0 ? "bg-primaryColor *:text-white" : "bg-white"
                      } hover:cursor-pointer  h-[30px] w-[30px] flex justify-center items-center mx-[1px]`}
                  >
                    <p className={`font-OG-Medium text-sm text-lightTextColor`}>
                      {index + 1}
                    </p>
                  </div>
                );
              })}
              {getCount.length > 1 && (
                <div className="border-[1px] hover:cursor-pointer size-[30px] flex justify-center items-center">
                  {/* <FaAngleRight /> */}
                  <RightArrowIcon className="text-xl stroke-lightTextColor " />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm font-OG-Regular text-lightTextColor">Show</p>
            <SelectDropdown
              onChange={(e) => setPerPage(e)}
              value={perPage}
              // defaultValue={{
              //     value: "10",
              //     label: "10"
              // }}
              id="order_limit"
              options={[
                {
                  value: "10",
                  label: "10",
                },
                {
                  value: "20",
                  label: "20",
                },
                {
                  value: "50",
                  label: "50",
                },
              ]}
              className="text-sm font-OG-Regular"
            />
            <p className="text-sm font-OG-Regular text-lightTextColor">
              per page
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
