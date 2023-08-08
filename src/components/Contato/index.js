import React, { useState } from "react";
import "./Contato.css";
import axios from "axios";
import contatoImagem from '../../assets/contatp-imagem.svg'

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = { nome, email, texto };
      await axios.post("https://portfolio-server-v4xf.onrender.com/enviar-formulario", formData);
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar o formulário.");
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
    </section>
  );
}
