import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="left-container">
        <a href="mailto:Rmoreira711@gmail.com">Email: Rmoreira711@gmail.com</a>
        <a href="/raphael-resume.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="right-container">
        <a
          href="https://github.com/RaphaelM20"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
