import { useState, useEffect } from "react"
import type { NavLink } from "../../../domain/entities/NavLink"
import "./Header.css"

interface HeaderProps {
  navLinks: readonly NavLink[]
}

export function Header({ navLinks }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#home" className="logo">
          &lt;Malo /&gt;
        </a>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label.value}
              href={link.href.value}
              onClick={() => setMobileOpen(false)}
            >
              {link.label.value}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
