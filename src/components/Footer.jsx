import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import profile from "../data/profile";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-contact">
            <p className="eyebrow">Contact</p>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <ul className="footer-links">
            <li>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> GitHub
                <FiArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" /> LinkedIn
                <FiArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="text-link" href={profile.resume} download>
                <FiDownload aria-hidden="true" /> Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.name}
          </p>
          <p>Built with React &amp; Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
