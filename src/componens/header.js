import React from "react";
import "./buttons.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <button className="button button1">Design</button>
        <button className="button button1">Code</button>
        <button className="button button1">Other</button>
        <br />
        <button className="button button2">Design</button>
        <button className="button button2">Code</button>
        <button className="button button2">Other</button>
        <br />
        <button className="button button3">Design</button>
        <button className="button button3">Code</button>
        <button className="button button3">Other</button>
      </header>
    );
  }
}
export default Header;
