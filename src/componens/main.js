import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./buttons.css";
import Other from "./other.js";
import Design from "./design.js";
import Code from "./code.js";

const Main = () => {
  const [content, setcontent] = useState("Click");

  function handleClickDesign() {
    setcontent("design");
  }
  function handleClickCode() {
    setcontent("code");
  }
  function handleClickOther() {
    setcontent("other");
  }

  return (
    <Router>
      <div>
        
        <div className="linkdiv">
        <Link onClick={handleClickDesign} className={content} to="/">
          Design
        </Link>
        <Link onClick={handleClickCode} className={content} to="/Code">
          Code
        </Link>
        <Link onClick={handleClickOther} className={content} to="/Other">
          Other
        </Link>
        </div>
        <Routes>
          <Route path="/" element={<Design />} />
          <Route path="/Code" element={<Code />} />
          <Route path="/Other" element={<Other />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
