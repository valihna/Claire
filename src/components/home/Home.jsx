/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import about from "../../assets/about.png";
import experiences from "../../assets/experiences.jpg";
import domaine from "../../assets/domaine.jpg";
import Footer from "../footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="card-home">
        <Link to={`/about`} className="card-about">
          <img className="img-about" src={about} alt="about" />
          <h3>À propos de moi</h3>
        </Link>
      </div>
      <div>
        <Link to={`/experiences`} className="card-experiences">
          <img
            className="img-experiences"
            src={experiences}
            alt="experiences"
          />
          <h3>Mes exprériences</h3>
        </Link>
      </div>
      <div>
        <Link to={`/domaine`} className="card-domaine">
          <img className="img-domaine" src={domaine} alt="domaine" />
          <h3>Domaine d'activité</h3>
          {/* Skills */}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
