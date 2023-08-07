import React from 'react';
import Header from '../../components/Header';
import './Projects.css';
import Card from '../../components/Card';
import imagemCalculadora from '../../assets/calculadora.jpg';
import imagemJogoNumeroSecreto from '../../assets/jogo-numero-secreto.jpg';
import imagemRobotron from '../../assets/robotron.jpg';


export default function Projects() {
  return (
    <section className='container__projetos'>
      <Header />
      <div className='container__projetos__cards'>
        <Card
          imagem={imagemCalculadora}
          titulo='Calculadora'
          descricao='Calculadora é um projeto autoral em JavaScript que oferece uma interface minimalista e funcional para realizar cálculos matemáticos de forma rápida e eficiente.'
          repositorio='https://github.com/mateusschulleleite/calculadora'
          linklive='https://calculadora.mateusschulle.vercel.app'
          tecnologias={['HTML', 'CSS', 'JavaScript']}
        />
        <Card
          imagem={imagemJogoNumeroSecreto}
          titulo='Jogo Número Secreto'
          descricao='Projeto criado junto ao curso de JavaScript sobre validações e reconhecimento de voz na Alura.'
          repositorio='https://github.com/mateusschulleleite/jogo-numero-secreto'
          linklive='https://numero-secreto.mateusschulle.vercel.app'
          tecnologias={['HTML', 'CSS', 'JavaScript']}
        />
        <Card
          imagem={imagemRobotron}
          titulo='Robotron 2000'
          descricao='Projeto criado junto ao curso de JavaScript na Alura com o objetivo de aprender a manipulação do DOm.'
          repositorio='https://github.com/mateusschulleleite/robotron-2000'
          linklive='https://robotron.mateusschulle.vercel.app/'
          tecnologias={['HTML', 'CSS', 'JavaScript']}
        />
      </div>
    </section>
  )
}
