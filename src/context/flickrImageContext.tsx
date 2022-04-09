import { useState } from "react";
import { createContext } from "react";
import { Image } from "../models/Image";

export type FlickrImage = {
    images: Image[],
    setImages: (i : Image[]) => void,
    loading: boolean,
    setLoading: (l: boolean) => void
}

export const FlickrImageContext = createContext<FlickrImage>({
    images: [],
    setImages: () => null,
    loading: false,
    setLoading: () => null
});

export const FlickrImageContextProvider = ({children} : {children: any}) => {

    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    return(
        <FlickrImageContext.Provider value={{images, setImages, loading, setLoading}}>{children}</FlickrImageContext.Provider>
    )
}