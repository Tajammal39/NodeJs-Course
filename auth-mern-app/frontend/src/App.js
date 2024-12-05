import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import RefreshHandler from "./pages/RefreshHandler";

function App() {
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setIsAutenticated={setIsAutenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
