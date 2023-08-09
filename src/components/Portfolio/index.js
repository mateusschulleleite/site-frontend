import React, { useEffect } from "react";
import "./Portfolio.css";
import Card from "../Card";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import imagemCalculadora from "../../assets/calculadora.jpg";
import imagemJogoNumeroSecreto from "../../assets/jogo-numero-secreto.jpg";
import imagemRobotron from "../../assets/robotron.jpg";

export default function Portfolio() {
  useEffect(() => {
    // Inicialize o Swiper quando o componente montar
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20, // Espaçamento entre slides
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);
  return (
    <section className="container__portfolio">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Card
              imagem={imagemCalculadora}
              titulo="Calculadora"
              descricao="Calculadora é um projeto autoral em JavaScript que oferece uma interface minimalista e funcional para realizar cálculos matemáticos de forma rápida e eficiente."
              repositorio="https://github.com/mateusschulleleite/calculadora"
              linklive="https://calculadora.mateusschulle.vercel.app"
              tecnologias={["HTML", "CSS", "JavaScript"]}
            />
          </div>
          <div class="swiper-slide">
            <Card
              imagem={imagemJogoNumeroSecreto}
              titulo="Jogo Número Secreto"
              descricao="Projeto criado junto ao curso de JavaScript sobre validações e reconhecimento de voz na Alura."
              repositorio="https://github.com/mateusschulleleite/jogo-numero-secreto"
              linklive="https://numero-secreto.mateusschulle.vercel.app"
              tecnologias={["HTML", "CSS", "JavaScript"]}
            />
          </div>
          <div class="swiper-slide">
            <Card
              imagem={imagemRobotron}
              titulo="Robotron 2000"
              descricao="Projeto criado junto ao curso de JavaScript na Alura com o objetivo de aprender a manipulação do DOm."
              repositorio="https://github.com/mateusschulleleite/robotron-2000"
              linklive="https://robotron.mateusschulle.vercel.app/"
              tecnologias={["HTML", "CSS", "JavaScript"]}
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </section>
  );
}
