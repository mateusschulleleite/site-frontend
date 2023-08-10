import React, { useEffect } from "react";
import "./Portfolio.css";
import Card from "../Card";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Portfolio() {
  let telaSlide = 1;
  if(window.screen.width >= 1024) {
    telaSlide = 3;
  } else if (window.screen.width >= 768) {
    telaSlide = 2;
  }
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: telaSlide,
      spaceBetween: 1, // Espaçamento entre slides
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
      <h2 className="container__portfolio__titulo">Projetos</h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Card
              imagem='https://img.icons8.com/ios/50/ff4900/calculator--v1.png'
              titulo="Calculadora"
              descricao="Calculadora é um projeto autoral em JavaScript que oferece uma interface minimalista e funcional para realizar cálculos matemáticos de forma rápida e eficiente."
              linklive="https://calculadora.mateusschulle.vercel.app"
              />
          </div>
          <div class="swiper-slide">
            <Card
              imagem='https://img.icons8.com/ios/50/ff4900/controller.png'
              titulo="Jogo Número Secreto"
              descricao="Projeto criado junto ao curso de JavaScript sobre validações e reconhecimento de voz na Alura."
              linklive="https://numero-secreto.mateusschulle.vercel.app"
            />
          </div>
          <div class="swiper-slide">
            <Card
              imagem='https://img.icons8.com/quill/50/ff4900/retro-robot.png'
              titulo="Robotron 2000"
              descricao="Projeto criado junto ao curso de JavaScript na Alura com o objetivo de aprender a manipulação do DOM."
              linklive="https://robotron.mateusschulle.vercel.app/"
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
