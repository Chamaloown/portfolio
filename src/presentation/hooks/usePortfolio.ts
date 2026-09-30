import { useEffect, useState } from "react"
import { Effect } from "effect"
import type { PortfolioService } from "../../application/services/PortfolioService"
import type { PortfolioData } from "../../domain/ports/PortfolioPort"

export const usePortfolio = (portfolioService: PortfolioService) => {
  const [data, setData] = useState<PortfolioData | null>(null)

  useEffect(() => {
    const program = Effect.gen(function* () {
      const portfolio = yield* portfolioService.getPortfolio
      setData(portfolio)
    })
    Effect.runPromise(program)
  }, [portfolioService])

  return data
}
