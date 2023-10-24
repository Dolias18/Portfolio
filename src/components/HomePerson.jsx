import "../App.css";

import Perfil from "/public/images/Perfil.jpg";
import GitHub from "/public/icons/GitHub.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";
import Instagram from "/public/icons/Instagram.svg";

import Btn from "../components/Btn";

function HomePerson() {
  return (
    <section className="container-apresentation" id="home">
      <img src={Perfil} className="perfil" />
      <div className="content-apresentation">
        <h1>Elias Santos</h1>
        <p>Desenvolvedor Front-end</p>
        <p>Site Construido em React</p>
      </div>
      <div className="icons">
        <Btn link={"https://github.com/Dolias18"} img={GitHub} />
        <Btn link={"https://www.instagram.com/eliass20002/"} img={Instagram} />
        <Btn link={"https://www.linkedin.com/in/elias-santos-6626501a8/"} img={LinkedIn} />
      </div>
    </section>
  );
}
export default HomePerson;
