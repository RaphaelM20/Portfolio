import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function ProjectPage() {
  return (
    <div className="projects-page-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tech={project.tech}
          image={project.image}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export default ProjectPage;
