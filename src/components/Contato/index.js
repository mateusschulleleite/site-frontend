import React, { useState } from "react";
import "./Contato.css";
import axios from "axios";
import contatoImagem from "../../assets/contato-imagem.svg";
import Load from "../Load";

export default function Contato() {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const imageContact = document.querySelector(".container__contato__imagem");
    const positionY = imageContact.offsetTop;
    if (scrollPosition >= positionY) {
      imageContact.classList.add("show");
    }
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let loadFormulario = document.querySelector(".load__formulario");
    loadFormulario.classList.add("show-load");

    let loadFormularioSpin = document.querySelector(".load__formulario__spin");
    loadFormularioSpin.classList.add("show-load-done");
    loadFormularioSpin.classList.add("load__rotate");

    let loadFormularioError = document.querySelector('.load__formulario__error');

    let load__formulario__done = document.querySelector(
      ".load__formulario__done"
    );
    try {
      const formData = { nome, email, texto };
      await axios.post(
        "https://portfolio-server-v4xf.onrender.com/enviar-formulario",
        formData
      );

      loadFormularioSpin.classList.remove("load__rotate");
      loadFormularioSpin.classList.remove("show-load-done");
      load__formulario__done.classList.add("show-load-done");

      setTimeout(() => {
        loadFormulario.classList.remove("show-load");
        load__formulario__done.classList.remove("show-load-done");
      }, 1000);
    } catch (error) {
      loadFormularioSpin.classList.remove("load__rotate");
      loadFormularioSpin.classList.remove("show-load-done");
      loadFormularioError.classList.add("show-load-done");

      setTimeout(() => {
        loadFormulario.classList.remove("show-load");
        loadFormularioError.classList.remove("show-load-done");
      }, 1000);
    }
  };

  return (
    <section className="container__contato">
      <h2 className="container__contato-titulo">Contato</h2>
      <div className="container__contato__imagem">
        <img src={contatoImagem}></img>
      </div>
      <form onSubmit={handleSubmit} className="contato__formulario">
        <fieldset>
          <label for="form-name">Nome</label>
          <input
            required
            id="form-name"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira o seu nome"
          />
        </fieldset>
        <fieldset>
          <label for="form-email">Email</label>
          <input
            required
            type="email"
            id="form-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira o seu melhor email"
          />
        </fieldset>
        <fieldset>
          <label>Mensagem</label>
          <textarea
            required
            minlength="20"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={10}
            placeholder="Insira uma mensagem"
          />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
      <Load />
    </section>
  );
}
