import EditPencil from 'assets/svg/components/EditPencil'

const AddressList = (props) => {

    const { addressTitle, setShowEditAdrModal } = props


    return (
        <div className=''>
            <div>
                <p className='text-sm uppercase text-lightTextColor font-OG-Bold'>{addressTitle}</p>
            </div>
            <div className='my-2'>
                <p className='text-sm user_name font-OG-Regular text-lightTextColor'>Somnath Tiwari</p>
                <p className='text-sm user_address font-OG-Regular text-lightTextColor'>Sonda East,Deoria House No 37</p>
                <p className='text-sm user_address_2 font-OG-Regular text-lightTextColor'>Near Sunbeam School, Uttar Pradesh, 274001</p>
                <p className='text-sm user_country font-OG-Regular text-lightTextColor'>India</p>
                <p className='text-sm user_telephone font-OG-Regular text-lightTextColor'>T: 8318492639</p>
            </div>
            <div onClick={setShowEditAdrModal} className='flex flex-row items-center gap-1 mb-3 hover:cursor-pointer w-max'>
                <EditPencil className='text-base stroke-lightTextColor' />
                <p className='text-sm uppercase font-OG-Regular text-lightTextColor'>Edit Address</p>
            </div>
        </div>
    )
}

export default AddressList