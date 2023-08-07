import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Curriculo from "../../assets/curriculo.pdf";
import "./About.css";

export default function About() {
  return (
    <section className="sobre">
      <Header />
      <div className="sobre__descricao">
        <img className="sobre__descricao__imagem" src="https://github.com/mateusschulle.png" />
        <div className="sobre__descricao__texto">
          <h1>Mateus Schulle Leite</h1>
          <p>
            Desenvolvedor web de 23 anos, casado e com mais de dois anos de
            experiência em desenvolvimento web. Possuo amplo conhecimento em
            tecnologias como HTML, CSS, JavaScript, React, NodeJs, e outras.
            Comprometido em aprimorar continuamente minhas habilidades e
            adquirir novos conhecimentos. Eu estou sempre aberto a novos
            desafios e projetos, e valorizo muito a colaboração em equipe para
            obter os melhores resultados.
          </p>
          <Button
            link={Curriculo}
            src="https://img.icons8.com/ios/50/ffffff/download--v1.png"
            titulo="Currículo"
          />
        </div>
      </div>
    </section>
  );
}
