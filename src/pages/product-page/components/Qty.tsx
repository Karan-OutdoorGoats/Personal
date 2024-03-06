import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MinusIcon from "assets/svg/components/MinusIcon";
import PlusIcon from "assets/svg/components/PlusIcon";
import React, { HTMLProps } from "react";

interface QtyProps {
  className?: HTMLProps<HTMLElement>["className"];
  showHeader?:boolean
}

const Qty = (props: QtyProps) => {
  const { className = "",showHeader = true } = props;

  return (
    <div className={`${className}`}>
      {showHeader && <h3 className="text-sm font-OG-Bold font-[700]">QTY</h3>}
      <div className={`border-[0.7px] rounded-md overflow-hidden ${showHeader ? "h-10" : "h-full" }  border-[#e1e1e1] flex flex-row items-center justify-between ${showHeader ? "mt-2" : "" }`}>
        <button className="px-2 sm:px-4 border-none  hover:bg-primaryColor group h-[100%]">
          {/* <FontAwesomeIcon icon={faMinus} className="group-hover:text-white" /> */}
          <MinusIcon className="font-[1000] text-sm group-hover:stroke-white stroke-black" />
        </button>
        <div className="flex-1 w-[30px] text-center text-sm font-OG-Regular">1</div>
        <button className="px-2 sm:px-4  border-none group  hover:bg-primaryColor h-[100%]">
          {/* <FontAwesomeIcon icon={faPlus} className="group-hover:text-white" /> */}
          <PlusIcon className="font-[1000] text-sm group-hover:stroke-white stroke-black" />
        </button>
      </div>
    </div>
  );
};

export default Qty;
