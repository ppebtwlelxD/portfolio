import { render } from "@testing-library/react";
import React from "react";

const Svg = (colur) => {

render(
    console.log(colur)
)   
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15.8685" cy="15.3278" r="15" fill={colur}/>
        <path d="M16.5756 7.80381C16.1851 7.41329 15.5519 7.41329 15.1614 7.80381L8.79746 14.1678C8.40694 14.5583 8.40694 15.1915 8.79746 15.582C9.18799 15.9725 9.82115 15.9725 10.2117 15.582L15.8685 9.92513L21.5254 15.582C21.9159 15.9725 22.5491 15.9725 22.9396 15.582C23.3301 15.1915 23.3301 14.5583 22.9396 14.1678L16.5756 7.80381ZM16.8685 21.8317L16.8685 8.51092L14.8685 8.51092L14.8685 21.8317L16.8685 21.8317Z" fill="black"/>
        </svg>
    );
   };


export default Svg;
