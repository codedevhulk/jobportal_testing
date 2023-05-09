import React, { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

interface WithAuthProps {}

function withAuth<T extends WithAuthProps>(WrappedComponent: ComponentType<T>) {
  const WithAuth = (props: T) => {
    const navigate = useNavigate();
    useEffect(() => {
      // Get the JWT token from localStorage, if it exists.
      const token = localStorage.getItem("token");

      // If the token doesn't exist or is invalid, redirect to the login page.
      if (!token || !isValidToken(token)) {
        // You can replace this with the appropriate login route in your application.
        window.location.href = "/";
      }
    }, []);

    if (!isValidToken(localStorage.getItem("token"))) {
      // If the token is invalid, render a useNavigate component to redirect the user to the login page.
      navigate("/");
    }

    // If the user is authenticated, render the wrapped component with the props passed down to this component.
    return <WrappedComponent {...props} />;
  };

  return WithAuth;
}

function isValidToken(token: string | null) {
  if (!token) {
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);

    // Check if the token is expired
    if (decoded.exp < Date.now() / 1000) {
      return false;
    }

    // Add additional checks here if necessary

    return true;
  } catch (e) {
    return false;
  }
}

export default withAuth;
