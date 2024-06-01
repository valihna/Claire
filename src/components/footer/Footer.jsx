import { Link } from "react-router-dom";
import linkedIn from "../../assets/linkedIn.png";
// import github from "../../assets/github.jpg";
import gmail from "../../assets/gmail.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/claire-van-cleemput-b2b60911b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={linkedIn} alt="linkedIn" />
        </a>
        {/* <a
          href="https://github.com/valihna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={github} alt="github" />
        </a> */}
        <Link to="/contact" rel="noopener noreferrer">
          <img className="img" src={gmail} alt="gmail" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
