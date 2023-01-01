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
          <h2>Portfolio</h2>
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

      {button.abuteMe ? (
        <></>
      ) : (
        <div className="buttondivbottom">
          {button.design ? (
            <></>
          ) : (
            <button
              style={{ backgroundColor: "#fff4bf" }}
              id="design"
              className={button.content}
              onClick={handleClick}
            >
              Design
            </button>
          )}
          {button.code ? (
            <></>
          ) : (
            <button
              style={{ backgroundColor: "#92beff" }}
              id="code"
              className={button.content}
              onClick={handleClick}
            >
              Code
            </button>
          )}
          {button.other ? (
            <></>
          ) : (
            <button
              style={{ backgroundColor: "#DF8282" }}
              id="other"
              className={button.content}
              onClick={handleClick}
            >
              Other
            </button>
          )}
        </div>
      )}

      <footer>
        <div className="contact">
          <h3>Contact</h3>
          <a href="https://discordapp.com/users/Shabdadhab#7445">
            <img src="img/footer/discord.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nico-neubauer-57bb49233/ ">
            <img src="img/footer/linktin.png" alt="" />
          </a>
          <a href="mailto:niconeubauer.me@gmail.com">
            <img src="img/footer/email.png" alt="" />
          </a>
          <a href="tel:98187978">
            <img src="img/footer/call.png" alt="" />
          </a>
        </div>
        <div className="abuteMeFooter">
          <a href="/img/footer/CV_NicoNeubauer.pdf" download>
            <img src="img/footer/cv.png" alt="" />
          </a>
          <a href="https://github.com/NicoNeubauer">
            <img src="img/footer/github.png" alt="" />
          </a>
        </div>
        <button id="abuteMe" className={button.content} onClick={handleClick}>
          About me
        </button>
        <p className="madeBy">Made by Nico with React</p>
      </footer>
    </>
  );
};

export default Main;
