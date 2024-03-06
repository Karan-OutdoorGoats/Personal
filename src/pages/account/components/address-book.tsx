import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AddressList from "./address-list";
import Redirect from "assets/svg/components/Redirect";
import { Link } from "react-router-dom";

const AddressBook = (props) => {
  const { setIsShipEditModal, setIsBillEditModal, setOpenNewAddressModal } =
    props;

  return (
    <div className="">
      <div className="flex box-border flex-row items-center justify-between acc_address_info_header border-b-[1px] pb-2 mb-4">
        <p className="text-lg uppercase font-OG-Bold text-lightTextColor">
          Address Book
        </p>
        <div
          onClick={setOpenNewAddressModal}
          className="flex flex-row items-center  gap-2 h-[30px] px-1.5 sm:px-2 rounded-md border-primaryColor  border-[1.4px]  group bg-white hover:cursor-pointer "
        >
          <p className="hidden text-xs uppercase sm:block text-primaryColor font-OG-Regular">
            Add New Address
          </p>
          <Redirect className="text-[18px]  stroke-primaryColor" />
        </div>
      </div>

      <div className="grid items-center gap-3 sm:gap-0 sm:grid-cols-2">
        <AddressList
          setShowEditAdrModal={setIsBillEditModal}
          addressTitle={"Default Billing Address"}
        />
        <AddressList
          setShowEditAdrModal={setIsShipEditModal}
          addressTitle={"Default Shipping Address"}
        />
      </div>
    </div>
  );
};

export default AddressBook;
