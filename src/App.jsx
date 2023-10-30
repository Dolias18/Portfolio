import "./App.css";

import Perfil from "/public/images/Perfil.jpg";
import GitHub from "/public/icons/GitHub.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";
import Instagram from "/public/icons/Instagram.svg";
import Whatsapp from "/public/icons/Whatsapp.svg";

import Btn from "./components/Btn";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
  }

  return (
    <div className="container">
      <Navbar />
      <main className="container-main">
        <section className="container-apresentation" id="home">
          <img src={Perfil} className="perfil" />
          <div className="content-apresentation">
            <h1>Elias Santos</h1>
            <p>Desenvolvedor Front-end</p>
            <p>Site Construido em React</p>
          </div>
          <div className="icons">
            <Btn link={"https://github.com/Dolias18"} img={GitHub} />
            <Btn
              link={"https://www.instagram.com/eliass20002/"}
              img={Instagram}
            />
            <Btn
              link={"https://www.linkedin.com/in/elias-santos-6626501a8/"}
              img={LinkedIn}
            />
          </div>
        </section>
        <section className="about-me anime" id="about">
          <div className="container-about">
            <img src={Perfil} className="perfil" alt="Perfil" />
            <div className="grid-card">
              <div className="main-about">
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
                <Btn link={"https://github.com/Dolias18"} img={GitHub} />
                <Btn
                  link={"https://www.instagram.com/eliass20002/"}
                  img={Instagram}
                />
                <Btn
                  link={
                    "https://api.whatsapp.com/send?phone=5511964150195&text=Ola%C2%B4Vim%20pelo%20seu%20portf%C3%B3lio."
                  }
                  img={Whatsapp}
                />
                <Btn
                  link={"https://www.linkedin.com/in/elias-santos-6626501a8/"}
                  img={LinkedIn}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="experience" id="xp">
          <div className="circle"></div>
          <div className="card">
            <div className="list-xp">
              <button className={active ? "box iconActive" : "box"} onClick={ToggleMode}>Reyes Seguros Eirel</button>
              <button className={active ? "box iconActive" : "box"} onClick={ToggleMode}>Freelancer - Loja</button>
              <button>Freelancer - Confidencial</button>
            </div>
          </div>
          <div className="card-visibility">
            <div className={active ? "container-xp1 card1 menuOpen" : "container-xp1 card1 menuClose"}>
              <div>
                <h2>
                  Dev Front end / Serv. gerais T.i
                </h2>
                <p>Dez/20 a abril/21.</p>
              </div>
              <div>
                <p>Reyes Representações de Seguros Eirel:</p>
              </div>
              <div>
                <p>executava serviços gerais na área de t.i como realizar planilhas e estudar o site da empresa para estar começando a realizar manutenções e etc, sai antes do término  do contrato pois era epoca de pandemia e a empresa entrou em problemas financeiros.</p>
              </div>
            </div>
            <div className={active ? "container-xp card2 menuOpen" : "container-xp card2 menuClose"}>
              <div>
                <h2>
                  Dev Front end / Serv. gerais T.i
                </h2>
                <p>Dez/20 a abril/21.</p>
              </div>
              <div>
                <p>Reyes Representações de Seguros Eirel:</p>
              </div>
              <div>
                <p>executava serviços gerais na área de t.i como realizar planilhas e estudar o site da empresa para estar começando a realizar manutenções e etc, sai antes do término  do contrato pois era epoca de pandemia e a empresa entrou em problemas financeiros.</p>
              </div>
            </div>
            </div>
            
        </section>
      </main>
    </div>
  );
}

export default App;
