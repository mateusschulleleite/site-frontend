import React from "react";
import './Button.css';

export default function Button(props) {
  return (
    <button className="home__informacoes__link">
      <a target="_blank" href={props.link}>
        <img
          width="20"
          height="20"
          src={props.src}
          alt="github"
        />
        {props.titulo}
      </a>
    </button>
  );
}
