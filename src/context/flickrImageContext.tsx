import { useState } from "react";
import { createContext } from "react";
import { Image } from "../models/Image";

export type FlickrImage = {
    images: Image[],
    setImages: (i : Image[]) => void
}

export const FlickrImageContext = createContext<FlickrImage>({
    images: [],
    setImages: () => null
});

export const FlickrImageContextProvider = ({children} : {children: any}) => {

    const [images, setImages] = useState<Image[]>([]);

    return(
        <FlickrImageContext.Provider value={{images, setImages}}>{children}</FlickrImageContext.Provider>
    )
}