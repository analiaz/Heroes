import { useNavigate } from "react-router-dom"
import { AuthConext } from "../context/AuthContext";
import { useContext } from "react";


export const LoginPage = () => {
  
  const {login} = useContext( AuthConext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('anill soul' );

    navigate(lastPath, {
      replace: true
    });
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}> Login</button>
    </div>
  )
}
