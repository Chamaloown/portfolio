import { useEffect, useRef, useState } from "react"

export const useScrollReveal = <T extends HTMLElement>(deps: unknown[] = []) => {
  const ref = useRef<T>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Wait a tick so the DOM has painted before observing
    const raf = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!ready) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const children = el.querySelectorAll(".reveal")
    children.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [ready, ...deps])

  return ref
}
