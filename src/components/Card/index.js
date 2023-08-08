import React from "react";
import "./Card.css";

export default function Card(props) {
  let tecnologiasUtilizadas = props.tecnologias;
  console.log(tecnologiasUtilizadas);
  return (
    <div class="card">
      <div class="card__imagem">
        <img src={props.imagem}></img>
      </div>
      <div className="card__descricao">
        <h3 className="card__descricao-titulo">{props.titulo}</h3>
        <p className="card__descricao-texto">{props.descricao}</p>
      </div>
      <div className="card__links">
        <ul className="card__links__container-links">
          <li>
          <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/000/github--v1.png"
                alt="github--v1"
              />
            <a href={props.repositorio}>Repo</a>
          </li>
          <li>
          <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/000/youtube-live.png"
                alt="ive"
              />
            <a href={props.linklive}>Live</a>
          </li>
        </ul>
        <ul className="card__links__tecnologias">
          {tecnologiasUtilizadas.map((tecnologia, index) => (
            <li key={index}>{tecnologia}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /*
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
            */
}
