import AddressList from 'pages/account/components/address-list'
import React from 'react'
import { useAddAddress } from '../add-address.hooks'
import EditAddressModal from 'components/Modal/EditAddressModal'

const DefaultAddress = () => {

    const { isBillEditModal, isShipEditModal, setIsBillEditModal, setIsShipEditModal } = useAddAddress()

    return (
        <div className=''>
            <div className='flex box-border flex-row items-center justify-between acc_address_info_header border-b-[1px] pb-2 mb-4'>
                <p className='text-base uppercase font-OG-Medium text-lightTextColor'>Default Address</p>

            </div>

            <div className='grid items-center gap-3 sm:gap-0 sm:grid-cols-2'>
                <AddressList setShowEditAdrModal={setIsBillEditModal} addressTitle={"Default Billing Address"} />
                <AddressList setShowEditAdrModal={setIsShipEditModal} addressTitle={"Default Shipping Address"} />
            </div>
            {<EditAddressModal addressType={"Shipping"} isOpen={isShipEditModal} onClose={() => setIsShipEditModal(false)} />}
            {<EditAddressModal addressType={"Billing"} isOpen={isBillEditModal} onClose={() => setIsBillEditModal(false)} />}
        </div>
    )
}

export default DefaultAddress