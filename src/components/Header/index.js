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
      {/* <nav>
         <img
           className="header__menu-image"
           onClick={openMenu}
           src={urlMenuClosed}
         />
         <h1>Portfólio</h1>
         <div className="container__menu">
           <ul>
             <Link className="container__menu-link" to='/'>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAw0lEQVR4nO3SMWoCURSF4Q9tXICthW7AImnFyoAuws5pYx0LGzdhoStIGRAsBa0EOxfhKkS4gsgwjr4q4A8HHude/hkej3IMIslUMcNfZBbdS9SxwhSVyDS6y2we6ZSRfeKAfs6sH7Nj/HH2SDbCDs2CnWbsrIuENSywjPMjarH7m7ffwAbfnmeILVrXoosTxl5nHI6LSxs/ZS63gCwc7dsiVZgVFsHk5r1dM0kR7vFxl32q8J638L/e4VcspqSX86F0znQdRAJFA/uNAAAAAElFTkSuQmCC" />
               Início
             </Link>
             <Link className="container__menu-link" to='/projetos'>
               <img width="25" height="25" src="https://img.icons8.com/ios/20/source-code.png" alt="source-code"/>
               Projetos</Link>
             <Link className="container__menu-link" to='/sobre-mim'>
               <img width="25" height="25" src="https://img.icons8.com/dotty/20/guest-male.png" alt="guest-male"/>
               Sobre Mim</Link>
             <Link className="container__menu-link" to='/contato'>
               <img width="25" height="25" src="https://img.icons8.com/ios-filled/20/calling.png" alt="calling"/>
               Contato</Link>
           </ul>
         </div>
       </nav> */}
    </header>
  );
}
