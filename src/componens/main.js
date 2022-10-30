import { useState } from "react";
import "./buttons.css";
import "./content.css";
import Other from "./other.js";
import Design from "./design.js";
import Code from "./code.js";

const Main = () => {
  const initialState = {
    design: true,
    code: false,
    other: false,
    content: "design",
  };

  const [button, setbutton] = useState(initialState);

  const handleClick = (e) => {
    if (e.target.id === "design") {
      setbutton({ design: true, code: false, other: false, content: "design" });
    }
    if (e.target.id === "code") {
      setbutton({ design: false, code: true, other: false, content: "code" });
    }
    if (e.target.id === "other") {
      setbutton({ design: false, code: false, other: true, content: "other" });
    }
  };
  console.log(button);
  return (
    <div>
      <header>
        <div id="name" className={button.content}>
          <h1>Nico</h1>
          <h1>Neubauer</h1>
          <h2>Porfolio</h2>
        </div>
        <div className="buttondiv">
          <button id="design" className={button.content} onClick={handleClick}>
            design
          </button>
          <button id="code" className={button.content} onClick={handleClick}>
            code
          </button>
          <button id="other" className={button.content} onClick={handleClick}>
            other
          </button>
        </div>
      </header>
      <div className="conditional-render-section">
        {button.design ? <Design /> : <></>}
        {button.code ? <Code /> : <></>}
        {button.other ? <Other /> : <></>}
      </div>
    </div>
  );
};

export default Main;
