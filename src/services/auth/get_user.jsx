import { useQuery } from "@tanstack/react-query";

import http from '../../utils/http'
import { API_ENDPOINT } from "../../utils/api-endpoint";

const fetchUserData = async ({queryKey}) => {
    const [_key] = queryKey;
    const {data} = await http.get(_key).then(()=>{

    }).catch((err)=>{
        if(err.response.status === 401){
            window.location.href ='/login'
        }
        else{
            window.location.href = '/dashboard'
        }
    })
    return data
}

const reduxUser = async() => {
    return await http.get(API_ENDPOINT.GET_USER)
}
const useGetDataUser = (options) => {
    return useQuery([API_ENDPOINT.GET_USER, options] ,fetchUserData)
}

export {fetchUserData, useGetDataUser, reduxUser}