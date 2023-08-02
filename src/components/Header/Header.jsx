import React from "react";
import "./Header.css";
import Logo from "../../assets/logoYF.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo-img" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="img-bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" smooth={true}>
              {" "}
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              Habilidades
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
            >
              Sobre mim
            </Link>
          </li>

          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" smooth={true}>
              Projetos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
