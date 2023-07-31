import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { useState } from "react";

function Nav() {
  const [activeNav, setActivenav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={()=> setActivenav("#")} className={activeNav ==="#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=> setActivenav("#about")} className={activeNav ==="#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#Services" onClick={()=> setActivenav("#Services")} className={activeNav ==="#Services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#experience" onClick={()=> setActivenav("#experience")} className={activeNav ==="#experience" ? "active" : ""}>
        <FiBook />
      </a>
      <a href="#contact" onClick={()=> setActivenav("#contact")} className={activeNav ==="#contact" ? "active" : ""}>
        <TiContacts />
      </a>
    </nav>
  );
}

export default Nav;
