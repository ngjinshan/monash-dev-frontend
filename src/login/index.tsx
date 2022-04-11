import { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "../common/constants";
import { useLoggedInContext } from "../hooks/useLoggedInContext";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {loggedIn, setLoggedIn} = useLoggedInContext();
    const [display, setDisplay] = useState<string>("none");


    const loginButton = async () => {
        const res = await login({username, password});
        if(res.status === 201) {
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, res.data.access_token);
            setLoggedIn("LoggedIn");
            setDisplay("none");
            navigate("/");
        }
        else{
            setDisplay("initial");
        }
    }

    return(
        <div className="container" style={{marginTop: "66px"}}>
            <div className="row">
                <div className="col-lg-1" style={{textAlign: "left"}}>
                    <label>Username</label>
                </div>
                <div className="col-lg-11" style={{textAlign: "left"}}>
                    <input type="text" onChange={e => setUsername(e.target.value)}></input>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-1" style={{textAlign: "left"}}>
                    <label>Password</label>
                </div>
                <div className="col-lg-11" style={{textAlign: "left"}}>
                    <input type="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1" style={{textAlign: "left"}}>
                <button onClick={loginButton}>Login</button>
                </div>
                <div className="col-lg-11" style={{textAlign: "left"}}>
                    <div style={{fontStyle: "italic", color: "red", display: `${display}`}}>Incorrect credentials</div>
                </div>
            </div>
        </div>
    )
}