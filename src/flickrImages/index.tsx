import { useEffect } from "react";
import { useFlickrImgContext } from "../hooks/useFlickrImageContext";
import { Image } from "../models/Image";
import { Navigation } from "../navigation";
import "./style.css";

export const FlickrImages = () => {

    const {images, loading } = useFlickrImgContext();

    console.log(loading);
    
    const showImages = (data : Image) => {
        return(
            <div className="col-lg-4">
                <img className="image" src={data.url}></img>
            </div>
        )
    }

    const Loader = () => {
        return(
            <div className="col-lg">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return(
        <div>
            <Navigation/>
            <div className="flickr container">
                <div className="row">
                    {loading && <Loader/>}
                    {!loading && images.map(showImages)}
                </div>
            </div>
        </div>
    )
}