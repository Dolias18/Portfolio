import "./App.css";
import "../public/images/Perfil.jpg";
import "../public/icons/GitHub.svg";
import "../public/icons/LinkedIn.svg";
import "../public/icons/Instagram.svg";
import "../public/icons/envelope.svg";
import "../public/icons/GitHub.svg";
import "../public/icons/Instagram.svg";
import "../public/icons/LinkedIn.svg";
import "../public/icons/Whatsapp.svg";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  var root = document.documentElement;
  root.className += " js";

  function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
  }

  return (
    <div className="container">
      <header className="header-container">
        <div className="logo">
          <h1 className="title-header">Elias Santos</h1>
        </div>
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={ToggleMode}
        >
          <div className="hamburguer hamburguerIcon"></div>
        </div>
        <div className={active ? "menu menuOpen" : "menu menuClose"}>
          <div className="content-text">
            <ul>
              <li>
                <a href="#about">Sobre mim</a>
              </li>
              <li>
                <a href="">Experiência</a>
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

      <main className="container-main">
        <section className="container-apresentation">
          <img src="../public/images/Perfil.jpg" className="perfil" />
          <div className="content-apresentation">
            <h1>Elias Santos</h1>
            <p>Desenvolvedor Front-end</p>
            <p>Site Construido em React</p>
          </div>
          <div className="icons">
            <a href="https://github.com/Dolias18" target="_blank">
              <img src="../public/icons/GitHub.svg" />
            </a>
            <a href="https://www.instagram.com/eliass20002/" target="_blank">
              <img src="../public/icons/Instagram.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/elias-santos-6626501a8/"
              target="_blank"
            >
              <img src="../public/icons/LinkedIn.svg" />
            </a>
          </div>
        </section>
        <section className="about-me anime">
          <div className="container-about">
            <img
              src="../public/images/Perfil.jpg"
              className="perfil"
              alt="Perfil"
            />
            <div className="grid-card">
              <div className="main-about" id="about">
                <p className="text-about">Sobre mim</p>
                <h1 className="title-about">Elias Santos</h1>
                <p className="paragraph-about">Desenvolvedor Front-End</p>
              </div>

              <div className="container-description">
                <p className="descrição-about">
                  Aos meus 8 anos já amava computadores, hardware e software,
                  Aos 17 anos ingressei no curso de análise e desenvolvimento de
                  sistemas, Já fiz 2 projetos freelancers envolvendo construção
                  de sites, Já trabalhei por 4 meses em 1 estágio de T.i. minha
                  especialidade inclui React, HTML, CSS (design responsivo),
                  Javascript (ES6), Bootstrap e Banco de dados MySQL e SQL
                  server da Microsoft.
                </p>
              </div>
              <div className="Container-buttons">
                <a href="https://github.com/Dolias18" target="_blank">
                  <img src="../public/icons/GitHub.svg" />
                </a>
                <a
                  href="https://www.instagram.com/eliass20002/"
                  target="_blank"
                >
                  <img src="../public/icons/Instagram.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/elias-santos-6626501a8/"
                  target="_blank"
                >
                  <img src="../public/icons/LinkedIn.svg" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511964150195&text=Ola%C2%B4Vim%20pelo%20seu%20portf%C3%B3lio."
                  target="_blank"
                >
                  <img src="../public/icons/Whatsapp.svg" />
                </a>
                <a
                  href="https://criarmeulink.com.br/u/1697033977"
                  target="_blank"
                >
                  <img src="../public/icons/envelope.svg" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;