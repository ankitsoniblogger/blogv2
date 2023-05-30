import React from "react";
import Header from "./components/Header";
import "./common.css";
import BannerText from "./components/BannerText";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div className="bg-bgImg bg-cover bg-no-repeat h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<BannerText />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
