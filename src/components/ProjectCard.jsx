import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
  layout = "grid",
  headingLevel = 3,
}) {
  const Heading = `h${headingLevel}`;
  const tags = tech
    .split("·")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <article className={`project-card project-card--${layout}`}>
      <div className="project-media">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-body">
        <Heading className="project-title">{title}</Heading>
        <p className="project-description">{description}</p>
        <ul className="chips" aria-label="Tech stack">
          {tags.map((tag) => (
            <li className="chip" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {liveLink && (
            <a className="text-link" href={liveLink} target="_blank" rel="noreferrer">
              Live site<span className="sr-only"> for {title} (opens in a new tab)</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          <a className="text-link" href={githubLink} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            Source<span className="sr-only"> code for {title} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
