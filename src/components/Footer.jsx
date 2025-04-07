import "../styles/Footer.css";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Ujjwal Vaishnav</h3>


      <div className="social-icons">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://github.com/vaishnavujwal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/ujwal-vaishnav-2ba3b1224/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://www.linkedin.com/in/ujwal-vaishnav-2ba3b1224/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
      </div>

      <p>All Rights Reserved</p>
      <p >Contact us: <a className="tag" href="mailto:vaishnavujwal07@gmail.com">vaishnavujwal07@gmail.com</a></p>
    </footer>
  );
};

export default Footer;
