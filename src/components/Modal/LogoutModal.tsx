import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import { useScreenSize } from "hooks/useScreenSize";
import ReactModal from "react-modal";
import { colors } from "utils/colors";

interface logoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Logout = (props: logoutProps) => {
  const screenSize = useScreenSize();

  // alert(screenSize.width);

  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Manage Cookies"
      style={{
        content: {
          backgroundColor: colors.white,
          height: screenSize.width > 600 ? "unset" : "auto",
          width: screenSize.width > 600 ? "33vw" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          // backgroundColor: "transparent",
          // padding: screenSize.width > 600 ? "2rem" : "0.5rem",
          display: "flex",
          flexDirection: screenSize.width > 600 ? "row" : "column",
          justifyContent: screenSize.width > 600 ? "center" : "end",
          alignItems: "center",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
      }}
      className="border-2 focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3 py-4 ">
        <div className="">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm leading-8 uppercase text-lightTextColor font-OG-Bold">
              Confirm logout
            </p>
            {/* <IoIosCloseCircleOutline
              className="hover:cursor-pointer size-[2rem]"
              onClick={onClose}
              color={colors.primaryColor}
            /> */}
            {/* <CircleCloseOutlineIcon
              onClick={onClose}
              className="hover:cursor-pointer text-[2rem] stroke-primaryColor "
            /> */}
          </div>

          <div className="flex flex-col ">
            <p className="text-base font-OG-Regular text-lightTextColor ">
              Are you sure you want to logout?
            </p>
            <div className="my-2 sm:flex sm:flex-row sm:gap-3 ">
              <OGButton
                onClick={onClose}
                className="h-[40px] mb-2 rounded-sm w-full uppercase text-s font-OG-Regular bg-white text-primaryColor border-primaryColor border-[1px]   px-4 sm:px-4 "
                title="No"
              />
              <OGButton
                className="h-[40px] mb-2 rounded-sm w-full uppercase text-s font-OG-Regular bg-primaryColor text-white   px-4 sm:px-4 "
                title="Logout"
              />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Logout;
