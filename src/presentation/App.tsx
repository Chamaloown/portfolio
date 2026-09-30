import { useMemo } from "react"
import { buildServices } from "./composition-root"
import { usePortfolio } from "./hooks/usePortfolio"
import { useScrollReveal } from "./hooks/useScrollReveal"
import { Header } from "./features/header/Header"
import { Hero } from "./features/hero/Hero"
import { Projects } from "./features/projects/Projects"
import { TechGrid } from "./features/tech/TechGrid"
import { About } from "./features/about/About"
import { Contact } from "./features/contact/Contact"
import { Footer } from "./features/footer/Footer"
import { BoneDivider } from "./components/Skeleton"
import "./crt-effects.css"
import "./styles/index.css"

export function App() {
  const services = useMemo(() => buildServices(), [])
  const portfolio = usePortfolio(services.portfolio)
  const mainRef = useScrollReveal<HTMLDivElement>([portfolio])

  if (!portfolio) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <div className="low-poly-bg" aria-hidden="true" />
      <div ref={mainRef}>
        <Header navLinks={portfolio.navLinks} />
        <main>
          <Hero profile={portfolio.profile} />
          <BoneDivider />
          <Projects projects={portfolio.projects} />
          <BoneDivider />
          <TechGrid tech={portfolio.tech} />
          <BoneDivider />
          <About stats={portfolio.stats} />
          <BoneDivider />
          <Contact contact={portfolio.contact} />
        </main>
        <Footer />
      </div>
    </>
  )
}
