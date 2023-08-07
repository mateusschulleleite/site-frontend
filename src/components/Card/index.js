import React from "react";
import "./Card.css";

export default function Card(props) {
    let tecnologiasUtilizadas = props.tecnologias
    console.log(tecnologiasUtilizadas)
  return (
    <div className="card">
      <div className="card__imagem">
        <img src={props.imagem} alt="" />
      </div>
      <div className="card__descricao">
        <div>
          <h2>{props.titulo}</h2>
          <div className="card__descricao__botoes">
            <a href={props.repositorio}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/ffffff/github--v1.png"
                alt="github--v1"
              />
              <span>Repo</span>
            </a>
            <a href={props.linklive}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/ffffff/youtube-live.png"
                alt="ive"
              />
              <span>Live</span>
            </a>
          </div>
        </div>
        <p>{props.descricao}</p>
      </div>
      <div className="card__tecnologias">
        <ul>
            {tecnologiasUtilizadas.map((tecnologia, index) => 
                <li key={index}>{tecnologia}</li>
            )}
        </ul>
      </div>
    </div>
  );
}
