import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginInfo = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Fileds data are required");
    }
    try {
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log(result.jwtToken);
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        navigate("/home");
      } else if (error) {
        const detail = error[0].message;
        handleError(detail);
      } else {
        //user is not register
        handleError(message);
      }
      console.log(result);
    } catch (error) {}
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLoginInfo}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Login up</button>
        <span>
          Don't have an account ?<Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
