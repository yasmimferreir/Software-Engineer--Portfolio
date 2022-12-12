import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/projeto.png";
import reactImg from "../../assets/react.png";
import Node from "../../assets/nodejs-logo.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}

        <div className="the-best-ad">
          <span>Olá Sou Yasmim Ferreira Costa</span>
        </div>

        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Software Engineer</span>
            <br />
            <span> desenvolvimento de sistemas</span>
          </div>
          <div>
            <span> </span>
          </div>
          <div>
            <span>
              Desenvolvedor(a) Full Stack Júnior autodidata, que atua há mais de
              1 ano. Cursando Desenvolvimento Full Stack no Devclub, domínio em
              tecnologicas Front-end, Back-end, Banco de Dados
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+1</span>
            <span>Na carreira de Programação</span>
          </div>
          <div>
            <span>+50</span>
            <span>Projetos no Github</span>
          </div>
          <div>
            <span>+2</span>
            <span>Trabalhos Freenlancer</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-buttons">
          <buttons className="btn">
            <a href="https://linkwhats.app/5dce67"> Contato</a>
          </buttons>
          <buttons className="btn">
            <a href="https://github.com/yasmimferreir">Github</a>
          </buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <a href="https://linkwhats.app/5dce67"> Entre em contato</a>
        </button>

        <div className="heart-rate">
          <img src={reactImg} alt="" />
          <span>Biblioteca ReactJs</span>
          <span>Front-end </span>
        </div>

        {/* HERO IMAGENS */}
        <img src={hero_image} alt="" className="hero-image"></img>

        {/* nodejs */}
        <div className="node">
          <img src={Node} alt=""></img>
          <div>
            <span>Back-end NodeJs</span>
            <span>NodeJs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
