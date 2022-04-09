import { axiosInstance } from ".";

export const getFlickrImagesByTag = async (tags: string) => {
    return axiosInstance()
    .get(`images/?tags=${tags}`)
    .then(res => res)
    .catch(err => err.response)
}