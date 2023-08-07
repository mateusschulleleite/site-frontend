import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="container__home">
      <div className="container__home__descricao">
        <p>Hello World</p>
        <h2>Mateus Schulle</h2>
        <span>
          Desenvolvedor Frontend especializado em React, com habilidades sólidas
          em HTML, CSS e JavaScript. Possuo inúmeros projetos focado em criar
          interfaces interativas e responsivas para melhorar a experiência do
          usuário.
        </span>
      </div>
      <div className="container__home__imagem">
        <img src="https://github.com/mateusschulle.png"></img>
      </div>
    </section>
  );
}
