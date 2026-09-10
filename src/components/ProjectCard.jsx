function ProjectCard({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
}) {
  return (
    <div className="project-card">
      <div className="project-info">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="tech">{tech}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live Site
          </a>
        </div>
      </div>
      <img className="image" src={image} />
    </div>
  );
}

export default ProjectCard;
