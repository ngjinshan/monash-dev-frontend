import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "../common/constants";

export type LoggedIn = {
    loggedIn: AuthState,
    setLoggedIn: (a : AuthState) => void
}

export type AuthState = "Loading"|"LoggedOut"|"LoggedIn"

export const LoggedInContext = createContext<LoggedIn>({
    loggedIn: "Loading",
    setLoggedIn: () => null
});

export const LoggedInContextProvider = ({children} : {children: any}) => {

    const [loggedIn, setLoggedIn] = useState<AuthState>("Loading");
    const navigate = useNavigate();
    
    useEffect(() => {
        const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
        if(accessToken) setLoggedIn("LoggedIn") //In a real use case scenario, we will check our accessTokens against our database's accessTokens 

        const listen = () => {
            const accessTokenListened = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
            
            if(!accessTokenListened) {
                setLoggedIn("LoggedOut");
                navigate("/")
            };
        }

        window.addEventListener('storage', listen)

        return () => {
            window.removeEventListener('storage', listen);
        }
    },[])

    return(
        <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>{children}</LoggedInContext.Provider>
    )
}