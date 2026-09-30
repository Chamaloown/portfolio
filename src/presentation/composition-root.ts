import { StaticPortfolioAdapter } from "../infrastructure/data/StaticPortfolioData"
import { makePortfolioService } from "../application/services/PortfolioService"
import type { PortfolioService } from "../application/services/PortfolioService"

export interface AppServices {
  readonly portfolio: PortfolioService
}

export const buildServices = (): AppServices => ({
  portfolio: makePortfolioService(StaticPortfolioAdapter),
})
