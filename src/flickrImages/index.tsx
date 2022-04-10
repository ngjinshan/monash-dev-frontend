import { useFlickrImgContext } from "../hooks/useFlickrImageContext";
import { Image } from "../models/Image";
import { Navigation } from "../navigation";
import "./style.css";

export const FlickrImages = () => {

    const {images, loading } = useFlickrImgContext();
    
    const showImages = (data : Image, index: number) => {
        return(
            <div className="flickr-item" key={index}>
                <img className="image" src={data.url} ></img>
            </div>
        )
    }

    const Loader = () => {
        return(
            <div className="lds-dual-ring"></div>
        )
    }

    return(
        <div>
            <Navigation/>
            <div className="flickr-container">
                {loading ? <Loader/> : images.map(showImages)}
            </div>
        </div>
    )
}