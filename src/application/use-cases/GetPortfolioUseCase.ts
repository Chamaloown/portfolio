import { Effect } from "effect"
import type { PortfolioPort } from "../../domain/ports/PortfolioPort"

export const makeGetPortfolioUseCase = (portfolioPort: PortfolioPort) =>
  Effect.sync(() => portfolioPort.getPortfolio())
