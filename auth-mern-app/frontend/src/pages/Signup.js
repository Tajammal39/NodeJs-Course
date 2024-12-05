import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpInfo = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      handleError("Fileds data are required");
    }
    try {
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        navigate("/login");
      } else if (error) {
        const detail = error[0].message;
        handleError(detail);
      } else {
        //user alredy register
        handleSuccess(message);
      }
      console.log(result);
    } catch (error) {}
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignUpInfo}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoFocus
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
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
            value={password}
            placeholder="Enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Sign up</button>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
