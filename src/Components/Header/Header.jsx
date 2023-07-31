import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/MyPic.png";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Manju Rathod</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="My pic" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
