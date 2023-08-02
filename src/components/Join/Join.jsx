import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "email_envia",
        "template_1wn6i8d",
        form.current,
        "Xj58tKSyYTSZReHdx"
      )
      .then(
        (success) => {
          toast.success("Mensagem Enviada com sucesso!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Erro ao enviar a mensagem, tente novamente", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
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
        <p>Apenas digite seu E-mail a mensagem é automática! </p>
        <p>Entrarei em contato pelo seu E-mail</p>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action="true"
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Digite seu endereço de e-mail"
          />

          <button className="btn btn-j" action="true">
            Enviar
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Join;
