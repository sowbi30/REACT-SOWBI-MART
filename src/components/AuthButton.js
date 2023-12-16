import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const AuthButton = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    // Add logic to clear user data if needed
  };

  console.log("isAuthenticated:", isAuthenticated);


  return (
    <ul>
      {isAuthenticated ? (
        <>
          <li>
            <p>Welcome, {user.name}</p>
          </li>
          <li>
            <Button onClick={handleLogout}>Log Out</Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </Link>
          </li>
         
        </>
      )}
    </ul>
  );
};

export default AuthButton;
