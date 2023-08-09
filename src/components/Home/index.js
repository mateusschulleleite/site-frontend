import React from "react";
import "./Home.css";
import imagemTech from "../../assets/imagem-home.svg";

export default function Home() {
  return (
    <section className="container__home">
      <div className="container__home__descricao">
        <p>Hello World!</p>
        <h2>Mateus Schulle</h2>
        <span>
          Desenvolvedor Frontend especializado em React, com habilidades sólidas
          em HTML, CSS e JavaScript. Possuo inúmeros projetos focado em criar
          interfaces interativas e responsivas para melhorar a experiência do
          usuário.
        </span>
        <div className="container__home__redes-sociais">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mateusschulle">
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/sf-regular-filled/50/ff4900/github.png"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/mateusschulleleite">
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/sf-regular-filled/50/ff4900/linkedin.png"
                  alt="github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container__home__imagem">
        <img src={imagemTech}></img>
      </div>
    </section>
  );
}
