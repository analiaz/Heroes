import { useContext } from "react"
import { AuthConext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"


export const PublicRoute = ({ children }) => {
  
    const {logged} = useContext( AuthConext );
  
    return ( !logged )
    ? children
    : <Navigate to="/marvel" />
}
