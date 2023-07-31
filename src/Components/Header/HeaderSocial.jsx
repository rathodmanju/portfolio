import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function HeaderSocial() {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/manjunatha-rathod-031b76221/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/rathodmanju" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noreferrer">
        <CgProfile />
      </a>

      {/*After this we install a react-icons in a terminal for social icons -->> npm install react-icons --save*/}
    </div>
  );
}

export default HeaderSocial;
