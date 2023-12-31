import React from "react";
import "./Header.css";

export default function Header() {
  const urlMenuClosed = "https://img.icons8.com/ios-glyphs/35/FFFFFF/menu--v1.png";
  const urlMenuOpened =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB70lEQVR4nO2Wv08UQRTHBxqJRCFKYozGY+ftCdVpgj/2vU3cUJgYEmjIRdn35kgobITOihht4R8QKu0g0cZKGxMjEHotLQwhARJCiI0FiD+ye3PmciHA7e3eNXzL2Tf7mfnOvDdPqVO1WoDyVKN80gPFrnrnauLnGnk1F4x3JADzSyD5C8iv65pH4SAQ/9bEO5cHHp+tG5wLxrs1ynoEd0hGTzLHvcPngWQtXjCFD1VSOb7cB5I/Gnnbufvo0nHxkTtlqCwkhlYEyHPRzzTyO3WEgHikHCcbV73iBdWoCgXpBJJv8U48KR0Wcz0Y6wHirdgdMkMqLQEZBJQDIPmhfXOt9rsmeWsv4lxq0IqAeMae30elVNv/cU9K9ii+99HEOZW23AdTZ4D4Swz3ZTIay3ulK4CyG6VPHsN7Kiv1+nJDk+wB8c9e4j5N/KHsAs+orAXE09babWv918iNzMFKvWgHlKUYTryvydxqArQC5mWbs7+aBoZWWJ2n8Gb15QKU9zZ/ZzODutXphPKkNp1czwSZgAF59tACgsZkVkAAhY4umfzGLmo+NWih+pFAY5r2SADJ/EmeRdeXYXv+m/23zcWGoE69jQDxK1tCFxNDc61qfcBa3EizF92PBGCe1iSfE7W3KM+AZCVRe3sqlbL+Aes93ChyGdg2AAAAAElFTkSuQmCC";

  let openMenuHamburguer = true;

  function openMenu() {
    document.querySelector(".container__header__navegacao").classList.toggle("open");
    document.querySelector(".container__header__botao").classList.toggle("menu-opened");

    if (openMenuHamburguer == true) {
      document
        .querySelector(".menu__hamburguer")
        .setAttribute("src", urlMenuOpened);
      openMenuHamburguer = false;
    } else {
      document
        .querySelector(".menu__hamburguer")
        .setAttribute("src", urlMenuClosed);
      openMenuHamburguer = true;
    }
  }

  return (
    <header className="container__header">
      <div onClick={openMenu} className="container__header__botao">
        <img className="menu__hamburguer" src={urlMenuClosed}></img>
      </div>
      <div className="container__header__titulo">
        <h1>Mateus Schulle</h1>
      </div>
      <nav className="container__header__navegacao">
        <ul>
          <li>Home</li>
          <li>Portfólio</li>
          <li className="link-contato">Contato</li>
        </ul>
      </nav>
    </header>
  );
}
