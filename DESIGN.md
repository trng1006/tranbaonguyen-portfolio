# Design System — Tran Bao Nguyen Portfolio

## 1. Design Direction
- **Aesthetic**: Modern Clean Tech / Bento Editorial (inspired by Linear and Vercel).
- **Primary Audience**: HR recruiters and Tech Leads evaluating candidates for **Backend / Fullstack Software Engineering Internships** within a 30-second scan.
- **Core Principles**:
  - Instant content availability (no splash-screen gate).
  - Crisp visual hierarchy: high-contrast typography, generous breathing room, and 1px hairline borders instead of heavy drop shadows or decorative gradients.
  - Scannable Bento Grid cards for Tech Stack, Projects, Education, and Experience.
  - Both **Light** and **Dark** themes supported natively via CSS Custom Properties.

## 2. Color Tokens
### Light Mode (`:root`)
- `--bg-canvas`: `#FAFAFA`
- `--bg-surface`: `#FFFFFF`
- `--bg-surface-elevated`: `#F4F4F5`
- `--bg-surface-hover`: `#F4F4F5`
- `--text-primary`: `#09090B`
- `--text-secondary`: `#52525B`
- `--text-muted`: `#71717A`
- `--border-subtle`: `#E4E4E7`
- `--border-strong`: `#D4D4D8`
- `--accent`: `#2563EB`
- `--accent-hover`: `#1D4ED8`
- `--accent-soft`: `rgba(37, 99, 235, 0.08)`
- `--accent-border`: `rgba(37, 99, 235, 0.25)`
- `--status-available`: `#16A34A`
- `--status-available-soft`: `rgba(22, 163, 74, 0.10)`

### Dark Mode (`.dark-mode`)
- `--bg-canvas`: `#09090B`
- `--bg-surface`: `#111114`
- `--bg-surface-elevated`: `#18181B`
- `--bg-surface-hover`: `#1F1F23`
- `--text-primary`: `#FAFAFA`
- `--text-secondary`: `#A1A1AA`
- `--text-muted`: `#71717A`
- `--border-subtle`: `rgba(255, 255, 255, 0.09)`
- `--border-strong`: `rgba(255, 255, 255, 0.18)`
- `--accent`: `#3B82F6`
- `--accent-hover`: `#60A5FA`
- `--accent-soft`: `rgba(59, 130, 246, 0.12)`
- `--accent-border`: `rgba(59, 130, 246, 0.30)`
- `--status-available`: `#22C55E`
- `--status-available-soft`: `rgba(34, 197, 94, 0.12)`

## 3. Typography
- **Sans-Serif**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace**: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace`
- **Scale & Rhythm**:
  - Hero H1: `clamp(2.25rem, 4.5vw, 3.5rem)`, `font-weight: 800`, `letter-spacing: -0.035em`, `line-height: 1.1`
  - Section Title (H2): `clamp(1.625rem, 2.5vw, 2.125rem)`, `font-weight: 700`, `letter-spacing: -0.025em`
  - Card Title (H3): `1.125rem`, `font-weight: 600`, `letter-spacing: -0.015em`
  - Body Copy: `0.975rem–1.05rem`, `line-height: 1.65`, `color: var(--text-secondary)`
  - Metadata / Tags / Eyebrows: `0.75rem–0.8125rem` in `JetBrains Mono`

## 4. Layout, Spacing & Elevation
- **Container**: `max-width: 1120px`, `margin: 0 auto`, `padding: 0 clamp(20px, 4vw, 32px)`.
- **Section Vertical Rhythm**: `padding: 64px 0` (desktop), `48px 0` (mobile).
- **Card Radius**: `14px` for Bento cards, `10px` for buttons/badges, `9999px` for status pills.
- **Elevation**: Flat surface hierarchy (`--bg-surface` on `--bg-canvas`) with `1px solid var(--border-subtle)`. On hover (desktop pointer only): `border-color: var(--border-strong)` and subtle `translateY(-2px)`.

## 5. Motion & Interaction Rules
- Never use `transition: all`; specify `transform`, `opacity`, `border-color`, `background-color`, `color`.
- Standard easing: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.
- UI transitions: `150ms–220ms`; button press `:active { transform: scale(0.97); }`.
- Gate hover elevations behind `@media (hover: hover) and (pointer: fine)`.
- Respect `@media (prefers-reduced-motion: reduce)` by disabling transform animations.
