import { useState } from "react"
import { useLocation } from "react-router-dom"

export type userPromptType = "emailCheckbox" | "passwordCheckbox" | "showPassword"

const useEditAccInformation = () => {

    const {state} = useLocation()


    const [userPrompt,setUserPrompt] = useState({
        emailCheckbox:state?.changeEmail ?? false,
        passwordCheckbox: state?.changePassword ?? false,
        showPassword:false
    })

    const setUserPromptCB = (value:boolean,type:userPromptType) => {
        setUserPrompt((prev)=> {
            return {
                ...prev,
                [type]:value
            }
        })
    }


    return {
        userPrompt,
        setUserPromptCB
    }
}

export {useEditAccInformation}