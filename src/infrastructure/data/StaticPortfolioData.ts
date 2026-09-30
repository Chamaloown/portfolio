import type { PortfolioPort } from "../../domain/ports/PortfolioPort"
import type { PortfolioData } from "../../domain/ports/PortfolioPort"
import { NonEmptyString } from "../../domain/value-objects/NonEmptyString"
import { Email } from "../../domain/value-objects/Email"
import { Url } from "../../domain/value-objects/Url"
import { Availability } from "../../domain/value-objects/Availability"

const ne = (value: string) => {
  const result = NonEmptyString.make(value)
  if (!result) throw new Error(`Invalid NonEmptyString: "${value}"`)
  return result
}

const url = (value: string) => {
  const result = Url.make(value)
  if (!result) throw new Error(`Invalid Url: "${value}"`)
  return result
}

const email = (value: string) => {
  const result = Email.make(value)
  if (!result) throw new Error(`Invalid Email: "${value}"`)
  return result
}

const portfolioData: PortfolioData = {
  profile: {
    name: ne("Malo"),
    title: ne("Backend Software Engineer"),
    greeting: ne("Hello, I'm"),
    description: ne(
      "I build scalable backend systems with modern technologies. Passionate about clean code, performance, and great user experiences."
    ),
    available: Availability.true,
  },

  projects: [
    {
      title: ne("Kolecto"),
      description: ne(
        "Backend development for a data collection and analytics platform."
      ),
      tags: [ne("Node.js"), ne("PostgreSQL"), ne("Redis"), ne("AWS"), ne("Event-Driven")],
      link: url("https://kolecto.com"),
    },
    {
      title: ne("Atelier256"),
      description: ne(
        "Backend services for a digital studio's client projects."
      ),
      tags: [ne("TypeScript"), ne("Node.js"), ne("Terraform"), ne("AWS")],
      link: url("https://atelier256.com"),
    },
    {
      title: ne("Wisebuilding"),
      description: ne(
        "Backend for a building management app — room booking, incident tracking, and facility operations."
      ),
      tags: [ne("Node.js"), ne("PostgreSQL"), ne("AWS")],
      link: url("https://wisebuilding.com"),
    },
    {
      title: ne("Self Developer"),
      description: ne(
        "Personal projects and freelance work across various technologies."
      ),
      tags: [ne("Next.js"), ne("Node.js"), ne("Terraform"), ne("AWS")],
      link: url("https://github.com"),
    },
    {
      title: ne("Biocodex"),
      description: ne(
        "Data visualization for a pharmaceutical data management platform."
      ),
      tags: [ne("Flutter")],
      link: url("https://biocodex.com"),
    },
  ],

  tech: [
    { name: ne("React"), color: ne("#61dafb"), colorDark: ne("#21a1c4") },
    { name: ne("TypeScript"), color: ne("#3178c6"), colorDark: ne("#235a97") },
    { name: ne("Node.js"), color: ne("#3c873a"), colorDark: ne("#2d6a2e") },
    { name: ne("NestJS"), color: ne("#ea2845"), colorDark: ne("#c01e38") },
    { name: ne("PostgreSQL"), color: ne("#336791"), colorDark: ne("#2a5578") },
    { name: ne("Docker"), color: ne("#2496ed"), colorDark: ne("#1a7ab8") },
    { name: ne("AWS"), color: ne("#ff9900"), colorDark: ne("#cc7a00") },
    { name: ne("Terraform"), color: ne("#7b42bc"), colorDark: ne("#62339a") },
    { name: ne("Effect"), color: ne("#7c3aed"), colorDark: ne("#6d28d9") },
    { name: ne("Redis"), color: ne("#dc382d"), colorDark: ne("#b02e24") },
  ],

  contact: {
    email: email("contact@malolandemaine.dev"),
    github: url("https://github.com/Chamaloown"),
    linkedin: url("https://www.linkedin.com/in/malo-landemaine"),
    twitter: url("https://twitter.com"),
  },

  stats: [
    { value: ne("7+"), label: ne("Years Experience") },
    { value: ne("50+"), label: ne("Projects Completed") },
    { value: ne("30+"), label: ne("Happy Clients") },
  ],

  navLinks: [
    { label: ne("Home"), href: url("#home") },
    { label: ne("Projects"), href: url("#projects") },
    { label: ne("Tech"), href: url("#tech") },
    { label: ne("About"), href: url("#about") },
    { label: ne("Contact"), href: url("#contact") },
  ],
}

export const StaticPortfolioAdapter: PortfolioPort = {
  getPortfolio: () => portfolioData,
}
