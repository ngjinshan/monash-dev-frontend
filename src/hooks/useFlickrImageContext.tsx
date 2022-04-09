import { useContext } from "react";
import { FlickrImageContext } from "../context/flickrImageContext";

export const useFlickrImgContext = () => useContext(FlickrImageContext);