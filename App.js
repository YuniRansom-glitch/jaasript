import React from "react";
import SigninAndSignup from "./SigninAndSignup";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<SigninAndSignup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
