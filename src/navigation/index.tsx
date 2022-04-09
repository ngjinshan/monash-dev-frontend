import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useFlickrImgContext } from "../hooks/useFlickrImageContext";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { getFlickrImagesByTag } from "../api/flickrImage";
import { useLoggedInContext } from "../hooks/useLoggedInContext";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "../common/constants";
import { Search } from "../search";

export const Navigation = () => {

    const navigate = useNavigate();
    const {loggedIn, setLoggedIn} = useLoggedInContext();

    const navigateTo = (route: string) => {
        navigate(route);
    }

    const logOutButton = () => {
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
        setLoggedIn("LoggedOut");
        navigateTo("/")
    }

    const Login = () => {
        return(
            <Button className="btn btn-light btn-sm" onClick={() => navigateTo("/login")}>Login</Button>
        )
    }

    const Logout = () => {
        return(
            <Button className="btn btn-light btn-sm" onClick={() => logOutButton()}>Logout</Button>
        )
    }

   

    return(
        <div className="navigation">
            <div className="nav-item">
                <h5 style={{cursor: "pointer"}} onClick={() => navigateTo("/")}>Home</h5>
            </div>
            <div className="nav-item">
                <Search></Search>
            </div>
            <div className="nav-item">
                {loggedIn !== "Loading" && loggedIn === "LoggedIn" ? <Logout/> : <Login/>}
            </div>
        </div>
    )
}