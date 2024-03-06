import InputBoxField from 'components/InputBoxField/InputBoxField'
import React from 'react'

const EditPassword = (props) => {


    const {userPrompt} = props

    return (
        <div>
            <div className='mb-3'>
                <label
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="new_password"
                >
                    New Password
                </label>
                <div className="">
                    <InputBoxField
                        id="new_password"
                        type={userPrompt.showPassword ? "text" : "password"}
                        className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                    />
                </div>
            </div>
            <div className='mb-3'>
                <label
                    className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="confirm_new_password"
                >
                    Confirm New Password
                </label>
                <div className="">
                    <InputBoxField
                        id="confirm_new_password"
                        type={userPrompt.showPassword ? "text" : "password"}
                        className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
                    />
                </div>
            </div>
        </div>
    )
}

export default EditPassword