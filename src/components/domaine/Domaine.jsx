/* eslint-disable react/no-unescaped-entities */
import fond from "../../assets/fond.png";

function Domaine() {
  return (
    <div className="container">
      <div className="img-container">
        <img className="img-fond" src={fond} alt="fond" />
      </div>

      <div className="about">
        <h3>Quel est mon domaine d'activité ?</h3>
      </div>
      <div className="paragraph">
        <p>
          Commerce de lutin du père noel <br />
          <br /> JE DECRIS MON DOMAINE D ACTIVITE JE SUIS UN CANON DE LA NATURE
          ET JE VAIS BIENTOT ME MARIER MON FILS EST AUSSI UN CANON OLALA ET OUII
          AUSSI MON CHIEN EST TELLEMENT BEAU!! <br />
          <br />
          BLABLA BLABLA <br />
        </p>
      </div>
    </div>
  );
}

export default Domaine;
