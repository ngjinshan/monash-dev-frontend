import { useEffect } from "react";
import { useFlickrImgContext } from "../hooks/useFlickrImageContext";
import { Image } from "../models/Image";
import { Navigation } from "../navigation";
import "./style.css";

export const FlickrImages = () => {

    const {images, } = useFlickrImgContext();

    useEffect(() => {
        console.log(images);
    },[images])

    const showImages = (data : Image) => {
        return(
            <div className="col-lg-4">
                <img src={data.url}></img>
            </div>
        )
    }

    return(
        <div>
            <Navigation/>
            <div className="flickr container">
                <div className="row">
                    {images.map(showImages)}
                </div>
            </div>
        </div>
    )
}