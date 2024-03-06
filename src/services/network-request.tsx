import axios from "axios"



const networkRequest = () => {
    const headers = {
        
    }

    const networkInstance = axios.create({
        
    })


    networkInstance.interceptors.request.use((request)=> {
        return request
    })

    networkInstance.interceptors.response.use((response)=> {
        return response
    })



    return networkInstance
}


export default networkRequest