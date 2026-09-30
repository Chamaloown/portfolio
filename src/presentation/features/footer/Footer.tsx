import { useState } from "react"
import "./Footer.css"

export function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear())
  return (
    <footer className="footer">
      <p>{"\u00A9"} {currentYear} Malo. Built with React, TypeScript & Effect.</p>
    </footer>
  )
}
