import { useState } from "react"

const useHome = () => {
    const [viewProduct,setViewProduct] = useState(false)

    const [showMenuViaHam,setShowMenuViaHam] = useState(false)

    return {   
        viewProduct,
        setViewProduct,
        setShowMenuViaHam,
        showMenuViaHam
    }
}


export {useHome}