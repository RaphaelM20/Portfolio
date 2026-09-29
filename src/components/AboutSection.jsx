import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import aboutMe from "../data/aboutMe";
import { aboutMeMore, funFacts } from "../data/aboutMeMore";
import profile from "../data/profile";
import Reveal from "./Reveal";
import "./AboutSection.css";

// Shared by HomePage (as a section) and AboutPage (as the page itself).
function AboutSection({ variant = "section" }) {
  const isPage = variant === "page";
  const [showMore, setShowMore] = useState(isPage);
  const Heading = isPage ? "h1" : "h2";
  const SubHeading = isPage ? "h2" : "h3";
  const { me, cat } = profile.photos;

  return (
    <section
      className={`container about ${isPage ? "page about--page" : "section"}`}
      aria-labelledby="about-heading"
    >
      <div className="about-grid">
        <Reveal className="about-header">
          <p className="eyebrow">About</p>
          <Heading id="about-heading" className={isPage ? "page-title" : "section-title"}>
            About me
          </Heading>
        </Reveal>

        <div className="about-content">
          <Reveal className="about-intro">
            <p className="about-lede">{aboutMe}</p>
            <dl className="about-facts">
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <button
            type="button"
            className="button button--secondary about-toggle"
            aria-expanded={showMore}
            aria-controls="about-more"
            onClick={() => setShowMore((open) => !open)}
          >
            {showMore ? "Show less" : "More about me"}
            <FiChevronDown aria-hidden="true" />
          </button>

          <div id="about-more" className="about-more" hidden={!showMore}>
            <div className="about-more-row">
              <figure className="about-photo">
                <img src={me.src} alt={me.alt} loading="lazy" decoding="async" />
              </figure>
              <div>
                <SubHeading className="about-subtitle">A little more</SubHeading>
                <p className="about-more-text">{aboutMeMore}</p>
              </div>
            </div>

            <div className="about-more-row about-more-row--reverse">
              <div>
                <SubHeading className="about-subtitle">Fun facts</SubHeading>
                <ol className="fun-facts">
                  {funFacts.map((fact, index) => (
                    <li key={fact}>
                      <span className="fun-fact-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {fact}
                    </li>
                  ))}
                </ol>
              </div>
              <figure className="about-photo">
                <img src={cat.src} alt={cat.alt} loading="lazy" decoding="async" />
                <figcaption>{cat.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
