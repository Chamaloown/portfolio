import type { Tech } from "../../../domain/entities/Tech"
import reactLogo from "../../../assets/react.png"
import tsLogo from "../../../assets/ts.png"
import nodeLogo from "../../../assets/node.png"
import nestLogo from "../../../assets/nest.png"
import postgresLogo from "../../../assets/postgres.png"
import dockerLogo from "../../../assets/docker.png"
import awsLogo from "../../../assets/aws.png"
import terraformLogo from "../../../assets/terraform.png"
import effectLogo from "../../../assets/effect.png"
import redisLogo from "../../../assets/redis.png"
import "./TechGrid.css"

const logoMap: Record<string, string> = {
  React: reactLogo,
  TypeScript: tsLogo,
  "Node.js": nodeLogo,
  NestJS: nestLogo,
  PostgreSQL: postgresLogo,
  Docker: dockerLogo,
  AWS: awsLogo,
  Terraform: terraformLogo,
  Effect: effectLogo,
  Redis: redisLogo,
}

interface TechGridProps {
  tech: readonly Tech[]
}

export function TechGrid({ tech }: TechGridProps) {
  return (
    <section id="tech" className="section">
      <h2 className="section-title reveal">Tech Stack</h2>
      <p className="section-subtitle reveal">
        Technologies I work with
      </p>
      <div className="tech-grid">
        {tech.map((t, i) => {
          const logo = logoMap[t.name.value]
          if (!logo) return null

          return (
            <div
              key={t.name.value}
              className="tech-card reveal"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="tech-logo">
                <img src={logo} alt={t.name.value} />
              </div>
              <span className="tech-name">{t.name.value}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
