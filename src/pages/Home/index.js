import React from "react";
import Header from "../../components/Header";
import "./Home.css";
import Button from "../../components/Button";

export default function Home() {
  return (
    <section className="home">
      <Header />
      <div className="home__informacoes">
        <img src="https://github.com/mateusschulle.png" />
        <div className="home__informacoes__descricao">
        <div>
          <h1>Mateus Schulle Leite</h1>
          <p>Desenvolvedor Front-End</p>
        </div>
        <div className="home__informacoes__botoes">
          <Button 
          link='https://github.com/mateusschulleleite'
          src='https://img.icons8.com/material-outlined/20/ffffff/github.png'
          titulo='Github'
          />
          
          <Button
          link='https://www.linkedin.com/in/mateusschulle/'
          src='https://img.icons8.com/ios-filled/20/ffffff/linkedin.png'
          titulo='Linkedin'
          />
        </div>
        </div>
       
      </div>
    </section>
  );
}
