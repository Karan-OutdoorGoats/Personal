import React from "react";
import AccountInformation from "./components/account-information";
import AddressBook from "./components/address-book";
import { useAccount } from "./account.hooks";
import EditAddressModal from "components/Modal/EditAddressModal";
import CreateNewAddress from "./components/create-new-address";
import AdditionalAddress from "./components/additional-address";

const AccountPage = () => {
  const {
    isShipEditModal,
    setIsShipEditModal,
    isBillEditModal,
    setIsBillEditModal,
    openNewAddressModal,
    otherAddressList,
    setOpenNewAddressModal,
    setOtherAddressList,
    onSubmit,
  } = useAccount();

  return (
    <div>
      <div className="border-[1px] hover:border-b-[2.4px] hover:border-primaryColor py-2 px-3 my-4 sm:my-0  sm:px-5 sm:py-4 sm:mb-6">
        <AccountInformation />
      </div>
      <div className=" border-[1px] hover:border-b-[2.4px] hover:border-primaryColor  px-5 py-4">
        <AddressBook
          setIsBillEditModal={() => setIsBillEditModal(true)}
          setIsShipEditModal={() => setIsShipEditModal(true)}
          setOpenNewAddressModal={() => setOpenNewAddressModal(true)}
        />
        <AdditionalAddress />
      </div>
      {
        <EditAddressModal
          addressType={"Shipping"}
          isOpen={isShipEditModal}
          onClose={() => setIsShipEditModal(false)}
        />
      }
      {
        <EditAddressModal
          addressType={"Billing"}
          isOpen={isBillEditModal}
          onClose={() => setIsBillEditModal(false)}
        />
      }
      {/* modal for adding new address */}
      <CreateNewAddress
        onSubmit={onSubmit}
        isOpen={openNewAddressModal}
        onClose={() => setOpenNewAddressModal(false)}
      />
    </div>
  );
};

export default AccountPage;
