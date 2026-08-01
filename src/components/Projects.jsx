import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects, projectsIntro } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">GET /projects</span>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle">{projectsIntro}</p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1} className="project-card">
              <div className="project-card__head">
                <div>
                  <span className="project-card__endpoint">{project.endpoint}</span>
                  <h3 className="project-card__name">{project.name}</h3>
                  <span className="project-card__tag">{project.tag}</span>
                </div>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-card__live">
                    Live <FiArrowUpRight />
                  </a>
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-card__stack">
                {project.stackTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
