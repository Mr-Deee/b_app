import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer__container">
      <p class="website__rights">Borla 2023.</p>
      <div className="icon">
        <Link to="">
          <div className="icons">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="">
          <div className="icons">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="">
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="">
          <div className="icons">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
