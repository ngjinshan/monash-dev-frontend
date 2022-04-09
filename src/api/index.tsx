import axios from "axios";
import { BASE_URL, LOCAL_STORAGE_ACCESS_TOKEN } from "../common/constants";


export const axiosInstance = () => {    
    
    const _axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: 5000,
        headers: {
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN) ? localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN) : null}`
        }
    })

    _axiosInstance.interceptors.response.use(
        res => new Promise((resolve, reject) => {
            resolve(res)
        }),
        async err => {
            if(!err.response){
                return new Promise((resolve, reject) => {
                    reject(err);
                })
            }

            if(err.response.status === 401){
                window.location.href = "login";
            }else{
                return new Promise((resolve, reject)=> {
                    reject(err);
                })
            }
        }
    )

    return _axiosInstance;
}