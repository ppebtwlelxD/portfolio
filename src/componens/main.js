import React from "react";
import "./main.css";


const Main = (content) => {

  console.log(content)

  if ((content = "design")) {
    return <p>design</p>;
  }
  if ((content = "code")) {
    return <p>code</p>;
  }
  if ((content = "others")) {
    return <p>others</p>;
  }
};

export default Main;
