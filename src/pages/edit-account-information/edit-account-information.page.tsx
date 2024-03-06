import React from 'react'
import EditInfo from './components/edit-info'
import { useEditAccInformation } from './edit-account-information.hooks'
import EditEmail from './components/edit-email'
import EditPassword from './components/edit-password'
import InputBoxField from 'components/InputBoxField/InputBoxField'
import OGButton from 'components/Button/OGButton'
import { Link, redirect, useNavigate } from 'react-router-dom'

const EditAccountInformation = () => {

  const { userPrompt, setUserPromptCB } = useEditAccInformation()

  const navigate = useNavigate()



  return (
    <div className="border-[1px] hover:border-b-[2.4px] hover:border-primaryColor py-2 px-3 my-4 sm:my-0  sm:px-5 sm:py-4 mb-6">
      <EditInfo userPrompt={userPrompt} setUserPromptCB={setUserPromptCB} />
      {(userPrompt.emailCheckbox || userPrompt.passwordCheckbox) && <div className='my-10 edit_email_password' >
        <div className='border-b-[1px] pb-2 mb-5'>
          <p className='text-lg uppercase text-lightTextColor font-OG-Bold'>Change {userPrompt.emailCheckbox && userPrompt.passwordCheckbox && "Email and Password"} {userPrompt.emailCheckbox && !userPrompt.passwordCheckbox && "Email"} {!userPrompt.emailCheckbox && userPrompt.passwordCheckbox && "Password"}</p>
        </div>
        {userPrompt.emailCheckbox && <EditEmail userPrompt={userPrompt} />}
        {userPrompt.passwordCheckbox && <EditPassword userPrompt={userPrompt} />}

        <div className='flex flex-row items-center gap-1 mb-1'>
          <InputBoxField
            id='edit_show_password'
            type='checkbox'
            checked={userPrompt.showPassword}
            onChange={(e) => setUserPromptCB(e.target.checked, "showPassword")}
            value={userPrompt.showPassword as unknown as string}
            className='size-[15px] checked:border-primaryColor hover:cursor-pointer checked:accent-primaryColor focus:accent-primaryColor'
          />
          <label htmlFor="edit_show_password" className='text-sm hover:cursor-pointer font-OG-Regular text-lightTextColor'>Show Password</label>
        </div>


      </div>}


      <div className='save_btn'>
        <OGButton title='SAVE' onClick={() => navigate("/profile/account")} className='uppercase text-sm font-OG-Regular hover:bg-white hover:border-primaryColor hover:border-[1.5px] hover:text-primaryColor rounded-sm bg-primaryColor h-[40px] w-[90px] text-white' />
      </div>

    </div>
  )
}

export default EditAccountInformation