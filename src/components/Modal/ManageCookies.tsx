import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import { useScreenSize } from "hooks/useScreenSize";
import ReactModal from "react-modal";
import { colors } from "utils/colors";

interface ManageCookiesProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManageCookies = (props: ManageCookiesProps) => {
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
          height: screenSize.width > 600 ? "auto" : "auto",
          overflowY: "scroll",
          width: screenSize.width > 600 ? "100%" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          // backgroundColor: "transparent",
          // padding: screenSize.width > 600 ? "2rem" : "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          backdropFilter:"blur(8px)",
         WebkitBackdropFilter:"blur(8px)"
        },
      }}
      className="border-2 focus:outline-primaryColor border-primaryColor"
    >
      <div className="px-3 py-4 ">
        <div className="">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm leading-8 uppercase text-lightTextColor font-OG-Bold">
              Manage Cookies
            </p>
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

          <div className="flex flex-col sm:flex-row ">
            <p className="text-sm font-OG-Regular text-lightTextColor sm:basis-[50%]">
              By Clicking "Accept All Cookies", you agree to the storing of
              cookies on your device to enhance site navigation,analyze site
              usage, and assit in our marketing efforts.
            </p>
            <div className="my-2 sm:basis-[50%] sm:flex sm:justify-end sm:gap-3">
              <OGButton
                className="h-[40px] mb-2 rounded-sm w-full uppercase text-s font-OG-Regular bg-white text-primaryColor border-primaryColor border-[1px] sm:w-[unset]  px-4 sm:px-4 "
                title="Cookies Settings"
              />
              <OGButton
                className="h-[40px] mb-2 rounded-sm w-full uppercase text-s font-OG-Regular bg-primaryColor text-white sm:w-[unset]  px-4 sm:px-4 "
                title="Reject All"
              />
              <OGButton
                className="h-[40px] mb-2 rounded-sm w-full uppercase text-s font-OG-Regular bg-primaryColor text-white sm:w-[unset]  px-4 sm:px-4 "
                title="Accept All Cookies"
              />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ManageCookies;
