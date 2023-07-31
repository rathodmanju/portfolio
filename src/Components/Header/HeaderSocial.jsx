import React from "react";
{
  /*after install import the icons from chrome --> React-icons */
}
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>

      {/*After this we install a react-icons in a terminal for social icons -->> npm install react-icons --save*/}
    </div>
  );
}

export default HeaderSocial;
