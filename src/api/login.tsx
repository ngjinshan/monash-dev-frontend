import { axiosInstance } from ".";

export const login = async (body : {username: string, password: string}) => {
    return axiosInstance()
    .post(`login`, body)
    .then(res => res)
    .catch(err => err.response)
}