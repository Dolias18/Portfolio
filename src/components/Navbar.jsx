import "../App.css";

import { useState } from "react";


function Navbar() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };


  function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
  }

  return (
    <header className="header-container">
      <div className="logo">
        <a href="#home" className="title-header">Elias Santos</a>
      </div>
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="content-text">
          <ul>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#xp">Experiência</a>
            </li>
            <li>
              <a href="">Formação</a>
            </li>
            <li>
              <a href="">Conhecimentos</a>
            </li>
            <li>
              <a href="">Baixar CV</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
