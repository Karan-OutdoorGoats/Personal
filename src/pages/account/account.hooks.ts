import * as React from "react";

const useAccount = () => {
  const [isShipEditModal, setIsShipEditModal] = React.useState(false);
  const [isBillEditModal, setIsBillEditModal] = React.useState(false);
  const [openNewAddressModal, setOpenNewAddressModal] = React.useState(false);

  const [otherAddressList, setOtherAddressList] = React.useState<[] | {}[]>([]);

  const onSubmit = (value) => {
    setOtherAddressList((prev) => {
      return [...prev, value];
    });
  };

  return {
    isShipEditModal,
    setIsShipEditModal,
    isBillEditModal,
    setIsBillEditModal,
    openNewAddressModal,
    setOpenNewAddressModal,
    otherAddressList,
    setOtherAddressList,
    onSubmit,
  };
};

export { useAccount };
