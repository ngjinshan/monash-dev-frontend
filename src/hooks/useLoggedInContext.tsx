import { useContext } from "react";
import { LoggedInContext } from "../context/loggedInContext";

export const useLoggedInContext = () => useContext(LoggedInContext);