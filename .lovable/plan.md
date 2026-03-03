

# Catalyst Fund Pitch Deck — Presentation Mode

## Approach

Build a standalone presentation page at `/catalyst-deck` that renders a fullscreen, slide-based pitch deck using the existing Catalyst Fund content. It lives as a separate route — not embedded in the main site nav — so you can share the URL directly or present it in meetings.

## Slide Structure (approx. 8–10 slides)

1. **Title Slide** — BlackTech Capital logo, "Catalyst Fund", tagline, date
2. **The Problem** — Market gap: underrepresented founders in ClimateTech lack early-stage capital
3. **Our Thesis** — ClimateTech focus areas, Pre-Seed stage, Canada geography
4. **Fund Strategy: Two Funds, One Mission** — The one comparison slide: Fund I ($15M blueprint, paused) vs Catalyst Fund ($500K–$2M, active now), framing Catalyst as the tactical execution of the institutional thesis
5. **Fund Overview** — Key terms: size, check size, 6 companies, LP minimum, management fee, carry
6. **Equivesto Advantage** — Structural partnership, cost savings ($190K vs $375K–$650K), services comparison highlights
7. **Market Opportunity** — $150B ClimateTech VC by 2032, growth stats
8. **Team** — Leadership + Investment Committee + Advisory highlights (photos where available)
9. **Track Record** — Bryan and Keyona's deal history, WEF recognition
10. **Contact / CTA** — How to get involved, contact info

## Technical Implementation

- **New page**: `src/pages/CatalystDeck.tsx` — fullscreen slide presentation
- **Scaling**: Fixed 1920×1080 slide canvas, scaled via CSS `transform: scale()` to fit viewport
- **Navigation**: Arrow keys, click, swipe. Slide counter in bottom corner. ESC to exit back to site
- **Route**: `/catalyst-deck` added to App.tsx, rendered WITHOUT the Navbar/Footer wrapper
- **Design**: Dark background (matching hero aesthetic), clean typography, accent color highlights, team photos
- **No external dependencies** — built with existing Framer Motion + Tailwind + Lucide icons

## Where It Lives

A hidden route (`/catalyst-deck`) not in the navbar. You'd navigate to it directly or link from an internal page. Optionally, a small "View Deck" button could be added to the Catalyst Fund page.

