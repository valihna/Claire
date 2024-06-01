/* eslint-disable react/no-unescaped-entities */
import profile from "../../assets/profile.png";

import "./About.css";

function About() {
  return (
    <div>
      <div className="about">
        <h1>Qui suis-je ?</h1>
      </div>
      <div className="paragraph">
        <p>
          Bonjour je m'appelle Claire <br />
          <br /> JE DECRIS MES MOTIVATION JE SUIS UN CANON ET JE VAIS BIENTOT ME
          MARIER MON FILS EST AUSSI UN CANON OLALA ET OUII AUSSI MON CHIEN EST
          TELLEMENT BEAU!! <br />
          <br />
          BLABLA BLABLA <br />
        </p>
      </div>
      <div className="app-about">
        <img className="profile" src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default About;
