import React from "react";
import "./footer.css";
import Svg from "./svg.js";

const Footer = () => {
  return (
    <footer>
      <div className="socals"></div>
      <div className="links"></div>
      <div id="contact">
        <h3>Contact</h3>
        <a href="tel:+47 98198978">98198978</a>
        <br />
        <a href="niconeubauer.me@gmail.com">niconeubauer.me@gmail.com</a>
        <br />
        <br />
        <p>Made by Nico N.</p>
      </div>
    </footer>
  );
};
export default Footer;
