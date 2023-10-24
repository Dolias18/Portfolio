import '../App.css';

import Perfil from "/public/images/Perfil.jpg";
import GitHub from "/public/icons/GitHub.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";
import Instagram from "/public/icons/Instagram.svg";
import Whatsapp from "/public/icons/Whatsapp.svg";

import Btn from "../components/Btn";

function AboutMe() {
    return (
        <section className="about-me anime" id="about">
          <div className="container-about">
            <img
              src={Perfil}
              className="perfil"
              alt="Perfil"
            />
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
                  <Btn link={'https://github.com/Dolias18'} img={GitHub}/>
                  <Btn link={'https://www.instagram.com/eliass20002/'} img={Instagram}/>
                  <Btn link={'https://api.whatsapp.com/send?phone=5511964150195&text=Ola%C2%B4Vim%20pelo%20seu%20portf%C3%B3lio.'} img={Whatsapp}/>
                  <Btn link={'https://www.linkedin.com/in/elias-santos-6626501a8/'} img={LinkedIn}/>
              </div>
            </div>
          </div>
        </section>
    )
}
export default AboutMe