import type { Profile } from "../../../domain/entities/Profile"
import "./Hero.css"

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">{profile.greeting.value}</p>
        <h1 className="hero-name">{profile.name.value}</h1>
        <h2 className="hero-title">{profile.title.value}</h2>
        <p className="hero-description">{profile.description.value}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
