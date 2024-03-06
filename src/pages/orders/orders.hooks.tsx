import React from "react"

const useOrders = () => {

    const [perPage,setPerPage] = React.useState<{value:number,label:number}>({
        value:10,
        label:10
    })

    const [offset,setOffSet] = React.useState({
        value:1,
        label:1
    })

    return {
        perPage,
        setPerPage,
        offset,
        setOffSet
    }
}


export {useOrders}