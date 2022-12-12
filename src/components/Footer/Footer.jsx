import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoYF.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/yasmimferreir">
            <AiFillGithub className="icons" />
          </a>

          <a href="https://stackoverflow.com/users/19934186/yasmim-ferreira-costa">
            <FaStackOverflow className="icons" />
          </a>

          <a href="https://www.linkedin.com/in/yasmim-ferreira-costa-186852229/">
            <AiFillLinkedin className="icons" />
          </a>
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
