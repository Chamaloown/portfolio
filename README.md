# Malo — Portfolio

A personal portfolio website for **Malo**, a Backend Software Engineer with 7+ years of experience building scalable systems, designing APIs, and architecting cloud-native solutions.

## Tech Stack

- **React** + **TypeScript**
- **Vite** — build tool
- **Effect** — functional programming library
- **CSS** — custom properties, CRT effects, low-poly background animations

## Features

- Responsive design (desktop / tablet / mobile)
- CRT scanline & vignette effects
- Animated low-poly background
- Scroll reveal animations
- Tech stack grid with pixel-art logos
- Project showcase with tags
- Contact section with social links

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── presentation/          # UI layer
│   ├── styles/            # Global styles (variables, utilities)
│   ├── components/        # Shared UI primitives
│   └── features/          # Domain-driven sections
│       ├── header/
│       ├── hero/
│       ├── projects/
│       ├── tech/
│       ├── about/
│       ├── contact/
│       └── footer/
├── application/           # Use cases & services
├── domain/                # Entities, value objects, ports
└── infrastructure/        # Data adapters
```

## License

MIT
