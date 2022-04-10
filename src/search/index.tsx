import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { getFlickrImagesByTag } from "../api/flickrImage";
import { useFlickrImgContext } from "../hooks/useFlickrImageContext";
import "./style.css";

export const Search = () => {
    const [tags, setTags] = useState<string[]>([]);
    const {setImages, setLoading} = useFlickrImgContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        if(searchParams.get("tags")){
            getImages(searchParams.get("tags") || "");
        }
    },[location])

    const search = () => {
        navigate(`/?tags=${tags.join(",")}`)
    }

    const getImages = async (tagInput: string) => {
        setImages([]);
        setLoading(true);
        const res = await getFlickrImagesByTag(tagInput);
        if(res.status === 200) {
            setImages(res.data)
            setLoading(false);
            
        }
    }

    const deleteTag = (tag: string) => {
        setTags(tags.filter(e => e !== tag));
    }

    const Tags = (tag: string, index: number) => {
        if(tag.trim() != ""){
            return(
                <span key={index} className="tag">{tag} <span className="tag-delete" onClick={() => deleteTag(tag)}>X</span></span>
            )
        }
    }
    
    return(
        <>
        <div>
            <input type="text" placeholder="Search photos by tags (separated by commas)..." value={tags.join(",")} onChange={e => {
                setTags(e.target.value.split(","));
            }}></input>
            <div className="tags">
            <span  style={{fontStyle: "italic", fontWeight: "lighter"}}>tags:&nbsp;</span>{tags.map(Tags)} 
            </div>
        </div>
        <Button className="btn btn-light btn-sm" onClick={search}>Search</Button>
        </>
    )
}