import type { Project } from "../entities/Project"
import type { Tech } from "../entities/Tech"
import type { Profile } from "../entities/Profile"
import type { Contact } from "../entities/Contact"
import type { Stat } from "../entities/Stat"
import type { NavLink } from "../entities/NavLink"

export interface PortfolioData {
  readonly profile: Profile
  readonly projects: readonly Project[]
  readonly tech: readonly Tech[]
  readonly contact: Contact
  readonly stats: readonly Stat[]
  readonly navLinks: readonly NavLink[]
}

export interface PortfolioPort {
  readonly getPortfolio: () => PortfolioData
}
