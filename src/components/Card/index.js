import React from "react";
import "./Card.css";

export default function Card(props) {
  let tecnologiasUtilizadas = props.tecnologias;
  console.log(tecnologiasUtilizadas);
  return (
    <div class="card">
      <img width="50" height="50" src={props.imagem}/>
      <h2 className="card__descricao-titulo">{props.titulo}</h2>
      <p className="card__descricao-texto">{props.descricao}</p>
    </div>
  );
}
