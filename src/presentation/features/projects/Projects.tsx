import type { Project } from "../../../domain/entities/Project"
import "./Projects.css"

interface ProjectsProps {
  projects: readonly Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title reveal">Companies</h2>
      <p className="section-subtitle reveal">
        Places I've worked with
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            key={project.title.value}
            className="project-card reveal"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="project-header">
              <div className="project-icon">{"\u{1F4C1}"}</div>
              <a
                href={project.link.value}
                className="project-link"
                aria-label={`View ${project.title.value}`}
              >
                {"\u2197"}
              </a>
            </div>
            <h3 className="project-title">{project.title.value}</h3>
            <p className="project-description">{project.description.value}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag.value} className="tag">
                  {tag.value}
                </span>
              ))}
            </div>
          </article>
        ))}
        <div className="project-card project-card-more reveal">
          <div className="project-header">
            <div className="project-icon">{"\u{1F4C1}"}</div>
          </div>
          <h3 className="project-title">More</h3>
          <p className="project-description">
            And other companies I've worked with...
          </p>
        </div>
      </div>
    </section>
  )
}
