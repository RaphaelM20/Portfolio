import ProjectList from "../components/ProjectList";
import Reveal from "../components/Reveal";
import profile from "../data/profile";

function ProjectPage() {
  return (
    <div className="container page">
      <Reveal as="header" className="page-header">
        <p className="eyebrow">Work</p>
        <h1 className="page-title">Projects</h1>
        {profile.projectsIntro && <p className="page-lede">{profile.projectsIntro}</p>}
      </Reveal>
      <ProjectList layout="list" headingLevel={2} />
    </div>
  );
}

export default ProjectPage;
