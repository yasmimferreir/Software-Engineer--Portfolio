import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "email_envia",
        "template_1wn6i8d",
        form.current,
        "QuG-93sjbNCR_B3DZ"
      )
      .then(
        (result) => {
          alert("Mensagem Enviada com sucesso!");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Quer entrar</span>
          <span> em contato </span>
        </div>

        <div>
          <span className="stroke-text">comigo?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="digite seu endereço de e-mail"
          />
          <button className="btn btn-j">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
