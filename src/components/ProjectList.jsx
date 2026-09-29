import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

function ProjectList({ layout = "grid", headingLevel = 3 }) {
  return (
    <ul className={`project-list project-list--${layout}`}>
      {projects.map((project) => (
        <Reveal as="li" key={project.title}>
          <ProjectCard {...project} layout={layout} headingLevel={headingLevel} />
        </Reveal>
      ))}
    </ul>
  );
}

export default ProjectList;
