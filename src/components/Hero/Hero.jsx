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

        <div className="the-best-ad">
          <span>Olá Sou Yasmim Ferreira Costa</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Software Engineer</span>
            <br />
            <br />
            <span> Desenvolvedora Júnior</span>
          </div>
          <div>
            <span> </span>
          </div>
          <div>
            <span>
              Desenvolvedor(a) Júnior, que atua há mais de 1 ano e meio, atuando
              como Freenlancer, desenvolvendo projetos, no momento Cursando
              Desenvolvimento Full Stack no Devclub, Cursando Engenharia de
              Software - UNIFAVIP, domínio em tecnologicas Front-end e Back-end.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+1</span>
            <span>Na carreira de Programação</span>
          </div>
          <div>
            <span>+30</span>
            <span>Projetos no Github</span>
          </div>
          <div>
            <span>+2</span>
            <span>Trabalhos Freenlancer</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">
            <a href="https://linkwhats.app/5dce67"> Contato</a>
          </button>
          <button className="btn">
            <a href="https://github.com/yasmimferreir">Github</a>
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <a href="https://linkwhats.app/5dce67"> Entre em contato</a>
        </button>

        <div className="heart-rate">
          <img src={reactImg} alt="img-react" />
          <span>Biblioteca ReactJs</span>
          <span>Front-end </span>
        </div>

        <img src={hero_image} alt="img-hero" className="hero-image"></img>

        <div className="node">
          <img src={Node} alt="img-node"></img>
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
