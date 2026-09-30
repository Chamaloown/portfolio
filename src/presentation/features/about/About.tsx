import type { Stat } from "../../../domain/entities/Stat"
import "./About.css"

interface AboutProps {
  stats: readonly Stat[]
}

export function About({ stats }: AboutProps) {
  return (
    <section id="about" className="section">
      <h2 className="section-title reveal">About</h2>
      <div className="about-content reveal">
        <div className="about-text">
          <p>
            I'm a backend software engineer with 7+ years of experience building
            scalable systems, designing APIs, and architecting cloud-native
            solutions. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p>
            When I'm not coding, you can find me enjoying life, trying new
            experiences, or geeking out over the latest in tech and
            infrastructure.
          </p>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label.value} className="stat">
                <span className="stat-number">{stat.value.value}</span>
                <span className="stat-label">{stat.label.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
