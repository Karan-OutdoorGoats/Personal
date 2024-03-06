import React from 'react'
import DefaultAddress from './components/default-address'
import AdditionalAddress from './components/additional-address'
import PlusIcon from 'assets/svg/components/PlusIcon'
import CreateNewAddress from './components/create-new-address'
import { useAddAddress } from './add-address.hooks'

const AddAddressPage = () => {

  const { isBillEditModal, isShipEditModal, openNewAddressModal, otherAddressList, setIsBillEditModal, setIsShipEditModal, setOpenNewAddressModal,setOtherAddressList,onSubmit } = useAddAddress()


  console.log(JSON.stringify(otherAddressList, undefined,4))


  return (
    <div className='mt-3 sm:mt-0'>
      <div className='flex flex-row items-center justify-between mb-2'>
        <p className='text-lg capitalize text-lightTextColor font-OG-Bold'>Saved Addresses</p>
        <div onClick={() => setOpenNewAddressModal(true)} className='flex flex-row items-center gap-1 border-[1px] hover:bg-primaryColor group  hover:cursor-pointer px-3 rounded-sm py-2'>
          <PlusIcon className='text-base stroke-lightTextColor group-hover:stroke-white ' />
          <p className='text-sm uppercase text-lightTextColor font-OG-Bold group-hover:text-white'>Add New Address</p>
        </div>
      </div>
      <div className="border-[1px] hover:border-b-[2.4px] hover:border-primaryColor py-2 px-3 my-4 sm:my-0  sm:px-5 sm:py-4 sm:mb-6">
        <DefaultAddress />
      </div>
      {!!!otherAddressList.length && <div className=" border-[1px]  border-b-[2.4px]  px-5 py-4">
        <AdditionalAddress />
      </div>}


      {/* modal for adding new address */}
      <CreateNewAddress onSubmit={onSubmit}  isOpen={openNewAddressModal} onClose={() => setOpenNewAddressModal(false)} />
    </div>
  )
}

export default AddAddressPage