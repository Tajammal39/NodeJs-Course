import React, { useEffect } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAutenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAutenticated(true);
      if (
        location.pathname === "" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setIsAutenticated]);
  return null;
}

export default RefreshHandler;
