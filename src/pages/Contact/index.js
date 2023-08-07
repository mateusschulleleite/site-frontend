import React, { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = { nome, email, texto };
      await axios.post('http://localhost:3001/enviar-formulario', formData);
      alert('Formulário enviado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar o formulário.');
    }
  };

  return (
    <section className="contato">
      <Header />
      <h2>Me envie uma mensagem</h2>
      <form onSubmit={handleSubmit} className="contato__formulario">
        <fieldset>
          <label htmlFor="form-name">Nome</label>
          <input required id="form-name" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Insira o seu nome" />
        </fieldset>
        <fieldset>
          <label htmlFor='form-email'>Email</label>
          <input required type="email" id='form-email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira o seu melhor email"/>
        </fieldset>
        <textarea required minLength="20" value={texto} onChange={(e) => setTexto(e.target.value)} rows={10} placeholder="Insira uma mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
