import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

function Home() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  const [product, setProdct] = useState([]);

  useEffect(() => {
    setLoginUser(localStorage.getItem("loggedInUser"));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8000/product";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProdct(result);
      // console.log(product);
    } catch (err) {
      handleError(console.err);
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    handleSuccess("User Logout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div>
      <h1>{loginUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {product.map((p, index) => (
          <ul key={index}>
            <span>
              {p.name} : {p.price}
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
