import React, { useState } from "react";
import "./buttons.css";
import Main from "./main"

const Header = () => {
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
    <div>
      <header>
        <button onClick={handleClickDesign} className={content}>
          Design
        </button>
        <button onClick={handleClickCode} className={content}>
          Code
        </button>
        <button onClick={handleClickOther} className={content}>
          Other
        </button>
      </header>
      <Main content={content}/>
    </div>
  );
};

export default Header;
