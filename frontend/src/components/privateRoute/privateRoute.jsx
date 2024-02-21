import { Navigate } from "react-router";
import axios from "axios";
export const PrivateRoute = ({ children}) => {
  const isAuthenticated = true
  // localStorage.setItem('token',JSON.stringify(data.token))
  // localStorage.getItem()

      
  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="/" />
}