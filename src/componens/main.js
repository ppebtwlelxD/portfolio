import { useState } from "react";
import "./buttons.css";
import "./content.css";
import "./footer.css";
import Other from "./other.js";
import Design from "./design.js";
import Code from "./code.js";
import AbuteMe from "./abuteMe.js";

const Main = () => {
  const initialState = {
    design: true,
    code: false,
    other: false,
    abuteMe: false,
    content: "design",
  };

  const [button, setbutton] = useState(initialState);

  const handleClick = (e) => {
    if (e.target.id === "design") {
      setbutton({
        design: true,
        code: false,
        other: false,
        abuteMe: false,
        content: "design",
      });
    }
    if (e.target.id === "code") {
      setbutton({
        design: false,
        code: true,
        other: false,
        abuteMe: false,
        content: "code",
      });
    }
    if (e.target.id === "other") {
      setbutton({
        design: false,
        code: false,
        other: true,
        abuteMe: false,
        content: "other",
      });
    }
    if (e.target.id === "abuteMe") {
      setbutton({
        design: false,
        code: false,
        other: false,
        abuteMe: true,
        content: "abuteMe",
      });
    }
  };
  return (
    <>
      <header>
        <div id="name" className={button.content}>
          <h1>Nico</h1>
          <h1>Neubauer</h1>
          <h2>Porfolio</h2>
        </div>
        <div className="buttondiv">
          <button id="design" className={button.content} onClick={handleClick}>
            Design
          </button>
          <button id="code" className={button.content} onClick={handleClick}>
            Code
          </button>
          <button id="other" className={button.content} onClick={handleClick}>
            Other
          </button>
        </div>
      </header>
      
      <div className="conditional-render-section">
        {button.design ? <Design /> : <></>}
        {button.code ? <Code /> : <></>}
        {button.other ? <Other /> : <></>}
        {button.abuteMe ? <AbuteMe /> : <></>}
      </div>

      <footer>
        <div className="socals"></div>
        <div className="links"></div>
        <div id="contact">
          <h3>Contact</h3>
          <a href="tel:+47 98198978">98198978</a>
          <br />
          <button id="abuteMe" className={button.content} onClick={handleClick}>
            Abute Me
          </button>
          <a href="niconeubauer.me@gmail.com">niconeubauer.me@gmail.com</a>
          <br />
          <br />
          <p>Made by Nico N.</p>
        </div>
      </footer>
    </>
  );
};

export default Main;
