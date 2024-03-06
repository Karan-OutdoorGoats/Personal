import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import HelpCircleOutline from "assets/svg/components/HelpCircleOutline";
import OGButton from "components/Button/OGButton";
import InputBoxField from "components/InputBoxField/InputBoxField";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import { useScreenSize } from "hooks/useScreenSize";
import ShippingAddress from "pages/checkout/components/ShippingAddress";
import { useState } from "react";
import ReactModal from "react-modal";
import { Tooltip } from "react-tooltip";
import { colors } from "utils/colors";
import { images } from "utils/images";

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeChartModal = (props: SizeChartModalProps) => {
  const screenSize = useScreenSize();

  // alert(screenSize.width);

  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Edit Address"
      style={{
        content: {
          backgroundColor: colors.white,
          height: screenSize.width > 600 ? "60vh" : "auto",
          overflowY: "scroll",
          width: screenSize.width > 600 ? "60%" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: screenSize.width > 600 ? "center" : "end",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        },
      }}
      className="border-2 sm:rounded-md focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3 py-4 ">
        <div className="">
          <div className="flex items-center justify-end mb-3">
            {/* <IoIosCloseCircleOutline
              className="hover:cursor-pointer size-[2rem]"
              onClick={onClose}
              color={colors.primaryColor}
            /> */}
            <CircleCloseOutlineIcon
              onClick={onClose}
              className="hover:cursor-pointer text-[2rem] stroke-primaryColor "
            />
          </div>

          <div>
            <img
              className="object-cover"
              src="https://www.outdoorgoats.com/media/wysiwyg/size_chart/Andune_Men's%20Barefoot%20Shoes.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default SizeChartModal;
