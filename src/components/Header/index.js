import React from "react";
import "./Header.css";

export default function Header() {
  // const urlMenuClosed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR4nO3VwQkAIQwEwBTiK0kNIsaHfUR7uNLt4K4CwU9Ajh3Y97KvJQL4Nc2euPgTEc2etsVi3qWONyTm/b7FAGHYZpM6VkTYZruvGCCM4hYLbhGAjn0gIQe43FenVgAAAABJRU5ErkJggg==";
  // const urlMenuOpened = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB70lEQVR4nO2Wv08UQRTHBxqJRCFKYozGY+ftCdVpgj/2vU3cUJgYEmjIRdn35kgobITOihht4R8QKu0g0cZKGxMjEHotLQwhARJCiI0FiD+ye3PmciHA7e3eNXzL2Tf7mfnOvDdPqVO1WoDyVKN80gPFrnrnauLnGnk1F4x3JADzSyD5C8iv65pH4SAQ/9bEO5cHHp+tG5wLxrs1ynoEd0hGTzLHvcPngWQtXjCFD1VSOb7cB5I/Gnnbufvo0nHxkTtlqCwkhlYEyHPRzzTyO3WEgHikHCcbV73iBdWoCgXpBJJv8U48KR0Wcz0Y6wHirdgdMkMqLQEZBJQDIPmhfXOt9rsmeWsv4lxq0IqAeMae30elVNv/cU9K9ii+99HEOZW23AdTZ4D4Swz3ZTIay3ulK4CyG6VPHsN7Kiv1+nJDk+wB8c9e4j5N/KHsAs+orAXE09babWv918iNzMFKvWgHlKUYTryvydxqArQC5mWbs7+aBoZWWJ2n8Gb15QKU9zZ/ZzODutXphPKkNp1czwSZgAF59tACgsZkVkAAhY4umfzGLmo+NWih+pFAY5r2SADJ/EmeRdeXYXv+m/23zcWGoE69jQDxK1tCFxNDc61qfcBa3EizF92PBGCe1iSfE7W3KM+AZCVRe3sqlbL+Aes93ChyGdg2AAAAAElFTkSuQmCC";

  // let openMenuHamburguer = true;

  // function openMenu() {
  //   document.querySelector(".container__menu").classList.toggle("open");
  //   document.querySelector(".header__menu-image").classList.toggle("menu-opened");

  //   if (openMenuHamburguer == true) {
  //     document.querySelector(".header__menu-image").setAttribute("src", urlMenuOpened);
  //     openMenuHamburguer = false;
  //   } else {
  //     document.querySelector(".header__menu-image").setAttribute("src", urlMenuClosed);
  //     openMenuHamburguer = true;
  //   }
  // }

  return (
    <header className="container__header">
      <div>
        <h1>Mateus Schulle</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfólio</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
