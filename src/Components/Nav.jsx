import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // Adjusted import path
import About from "./About"; // Adjusted import path
import Contact from "./Contact"; // Adjusted import path

const Nav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Nav;
