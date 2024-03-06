import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import { useScreenSize } from "hooks/useScreenSize";
import ReactModal from "react-modal";
import { colors } from "utils/colors";
import SortOptions from "./sort-options";
import { useState } from "react";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SortModal = (props: SortModalProps) => {
  const screenSize = useScreenSize();

  const [selectedValue, setSelectedValue] = useState("");

  // console.log(selectedValues);

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
          height: "auto",
          // overflowY: "auto",
          width: "100%",
          outline: "none",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          display: "flex",
          flexDirection: screenSize.width > 600 ? "row" : "column",
          justifyContent: screenSize.width > 600 ? "center" : "end",

          // backdropFilter: "blur(8px)",
          // WebkitBackdropFilter: "blur(8px)",
        },
      }}
      className=" h-[90px] "
    >
      <div className="h-full px-5 mt-3 ">
        <div className="flex items-center justify-between py-2 ">
          <p className="text-base leading-8 uppercase text-lightTextColor font-OG-Bold">
            Sort
          </p>
          <CircleCloseOutlineIcon
            onClick={onClose}
            className="hover:cursor-pointer text-[2rem] stroke-lightTextColor"
          />
        </div>
        <SortOptions
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
    </ReactModal>
  );
};

export default SortModal;
