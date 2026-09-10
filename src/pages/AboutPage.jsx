import aboutMe from "../data/aboutMe";
import { aboutMeMore, funFacts } from "../data/aboutMeMore";
import { useState } from "react";

function AboutPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>{aboutMe}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Less..." : "More..."}
      </button>
      {showMore && (
        <div className="about-me-more">
          <h2>A Little More</h2>
          <div className="about-me-more-content">
            <img
              src="https://res.cloudinary.com/zrc0epiv/image/upload/v1789061706/me_pqyo29.webp"
              className="about-me-more-img"
            />
            <p>{aboutMeMore}</p>
          </div>
          <h3>Fun Facts!</h3>
          <div className="fun-facts-container">
            <ul className="fun-facts">
              {funFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <img
              src="https://res.cloudinary.com/zrc0epiv/image/upload/v1789061699/ellie_wv5yfs.webp"
              className="about-me-more-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
