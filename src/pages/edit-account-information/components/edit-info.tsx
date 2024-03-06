import InputBoxField from 'components/InputBoxField/InputBoxField'
import React from 'react'
import { userPromptType } from '../edit-account-information.hooks';


interface EditInfoProps {
    userPrompt:{
        emailCheckbox: boolean;
        passwordCheckbox: boolean;
    },
    setUserPromptCB:(value:boolean,type:userPromptType)=>  void
}

const EditInfo = (props:EditInfoProps) => {

    const { userPrompt, setUserPromptCB} = props


    return (
        <div>
            <div>
                <p className='text-lg text-lightTextColor font-OG-Bold pb-2 border-b-[1px] uppercase'>Account Information</p>
            </div>
            <div className='my-5 user_edit_info'>
                <div className='mb-3'>
                    <label
                        className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                        htmlFor="first_name"
                    >
                        First Name
                    </label>
                    <div className="">
                        <InputBoxField
                            id="first_name"
                            className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                        />
                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                        htmlFor="first_name"
                    >
                        Last Name
                    </label>
                    <div className="">
                        <InputBoxField
                            id="first_name"
                            className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                        />
                    </div>
                </div>

                <div className='flex flex-row items-center gap-1 mb-1'>
                    <InputBoxField
                        id='edit_email_checkbox'
                        type='checkbox'
                        checked={userPrompt.emailCheckbox}
                        onChange={(e)=> setUserPromptCB(e.target.checked,"emailCheckbox")}
                        value={userPrompt.emailCheckbox as unknown as string}
                        className='size-[15px] checked:border-primaryColor checked:accent-primaryColor focus:accent-primaryColor hover:cursor-pointer'
                    />
                    <label htmlFor="edit_email_checkbox" className='text-sm font-OG-Regular text-lightTextColor hover:cursor-pointer'>Change Email</label>
                </div>

                <div className='flex flex-row items-center gap-1 mb-1'>
                    <InputBoxField
                        id='edit_password_checkbox'
                        type='checkbox'
                        checked={userPrompt.passwordCheckbox}
                        onChange={(e)=> setUserPromptCB(e.target.checked,"passwordCheckbox")}
                        value={userPrompt.passwordCheckbox as unknown as string}
                        className='size-[15px] checked:border-primaryColor checked:accent-primaryColor focus:accent-primaryColor hover:cursor-pointer'
                    />
                    <label htmlFor="edit_password_checkbox" className='text-sm font-OG-Regular text-lightTextColor hover:cursor-pointer'>Change Password</label>
                </div>

            </div>

            <div className='save_btn_container'>

            </div>

        </div>
    )
}

export default EditInfo