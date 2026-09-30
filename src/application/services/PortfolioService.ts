import { Context, Effect, Layer } from "effect"
import type { PortfolioPort, PortfolioData } from "../../domain/ports/PortfolioPort"
import { makeGetPortfolioUseCase } from "../use-cases/GetPortfolioUseCase"

export interface PortfolioService {
  readonly getPortfolio: Effect.Effect<PortfolioData>
}

export const PortfolioService = Context.Service<PortfolioService>("PortfolioService")

export const makePortfolioService = (
  portfolioPort: PortfolioPort
): PortfolioService => ({
  getPortfolio: makeGetPortfolioUseCase(portfolioPort),
})

export const PortfolioServiceLayer = (portfolioPort: PortfolioPort) =>
  Layer.succeed(
    PortfolioService,
    makePortfolioService(portfolioPort)
  )
