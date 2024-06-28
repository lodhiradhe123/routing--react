import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import More from "./More";


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Routing;
