

# Foundation Pitch Deck — `/foundation-deck`

## Core Narrative Arc

The presentation builds a single compelling argument for foundation audiences: **impact that depends on goodwill is fragile; impact built on market alignment is unstoppable.** Then it positions BlackTech Capital as the firm that architects exactly that.

## Slide Structure (12–14 slides)

1. **Title** — BlackTech Capital logo (white container), "Investing at the Intersection of Impact & Market", CONFIDENTIAL 2026
2. **The Landscape** — The state of impact: regulations shift with administrations, corporate pledges are seasonal, boards drop ESG when inconvenient. Three columns with concrete examples.
3. **The Fragility Problem** — Visual slide: three pillars (Regulation, Corporate Pledges, PR-Driven Impact) shown as unstable/cracking, with quotes or data points about how each has failed
4. **The Architecture Principle** — The core thesis: "Impact initiatives must be built for market-driven success from the jump." When market incentives and impact outcomes are aligned, even actors without your values are incentivized to sustain the work. This is the "setup" slide.
5. **What This Means in Practice** — Concrete framing: companies that solve real market problems AND deliver impact create natural momentum that survives political cycles, board turnover, and market pressure
6. **Why ClimateTech** — The sector where market and impact alignment is strongest. $150B projected market, growth stats, structural tailwinds
7. **The Gap** — <1% VC to Black founders, Pre-Seed is most underserved stage, Canada's untapped cleantech ecosystem
8. **Our Approach** — Pre-Seed ClimateTech, underrepresented founders, Canada geography, portfolio of 6 companies
9. **Fund Strategy** — Strategic pause from Fund I ($15M institutional blueprint) to build momentum and track record via Catalyst Fund ($500K–$2M), deploying fully in 2026
10. **Catalyst Fund Overview** — Key terms: size, check size, LP minimum, management fee, carry, hurdle rate
11. **Structural Advantage: Equivesto** — Cost comparison, services comparison highlights
12. **Team & Advisors** — Same layout as Catalyst deck (clickable LinkedIn), full horizontal width
13. **Track Record** — Bryan + Keyona highlights, WEF recognition
14. **Contact / CTA** — Tailored for foundations: "Partner with us", contact info

## Technical Implementation

- **New file**: `src/pages/FoundationDeck.tsx` — reuses the same `ScaledSlide` pattern and navigation system from `CatalystDeck.tsx`
- **Route**: `/foundation-deck` added to `App.tsx` alongside `/catalyst-deck` (no Navbar/Footer wrapper)
- **Shared components**: Extract `ScaledSlide` and the navigation shell into a shared module or duplicate inline (keeping it simple since these are standalone presentation files)
- **Design**: Same dark theme, same accent colors, same motion transitions. Slides 2–5 are the new narrative content; slides 6+ reuse/adapt existing data from the Catalyst deck
- **Exit button**: navigates to `/` instead of `/catalyst-fund`
- **Download button**: links to same one-pager PDF (or can be updated later)

## What's New vs. Reused

| New slides (custom content) | Adapted from Catalyst deck |
|---|---|
| Title, Landscape, Fragility Problem, Architecture Principle, What This Means | Market/Gap, Approach, Strategy, Fund Overview, Equivesto, Team, Track Record, Contact |

The first 5 slides are the narrative "setup" — the market-driven impact argument. Then it transitions into the firm and fund specifics that foundations need to see.

