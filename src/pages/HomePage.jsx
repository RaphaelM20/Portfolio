import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import ProjectList from "../components/ProjectList";
import Reveal from "../components/Reveal";
import profile from "../data/profile";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <section className="container hero">
        <Reveal className="hero-inner">
          <div className="hero-meta">
            <img
              className="hero-avatar"
              src={profile.headshot}
              alt="Portrait of Raphael Moreira"
              width="64"
              height="64"
            />
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </p>
          </div>

          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-location">
            <FiMapPin aria-hidden="true" />
            {profile.location}
          </p>

          <div className="button-row hero-actions">
            <Link to="/projects" className="button button--primary">
              View projects
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={profile.resume} download className="button button--secondary">
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
          </div>
        </Reveal>
      </section>

      <AboutSection />

      <section className="container section" aria-labelledby="work-heading">
        <Reveal className="work-header">
          <div className="work-heading">
            <p className="eyebrow">Work</p>
            <h2 id="work-heading" className="section-title">
              Selected projects
            </h2>
          </div>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
            More on GitHub
            <FiArrowUpRight aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
        <ProjectList layout="grid" headingLevel={3} />
      </section>
    </>
  );
}

export default HomePage;
