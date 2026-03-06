

# Replace WRCF Deck with v3 Design

## What Changed

The uploaded HTML is a completely redesigned 10-slide deck with a refined, minimal aesthetic. Key differences from the current React version:

- **Typography**: Cormorant Garamond (serif) for headings, DM Sans for body, DM Mono for labels — replaces the current bold/heavy style
- **Color palette**: `#0c1410` ink, `#f0ede6` light, `#2ec4b6` teal — much warmer and more editorial
- **Slide themes**: Alternating dark/light/teal backgrounds (not all dark)
- **Less text, more space**: Exactly what the feedback requested
- **10 slides** (down from 11): Title, Values (light), Venn (light), Case Studies (dark), Structural Advantage (light), Pledge (teal bg), Fund Terms (dark), Team (light), Track Record (dark), CTA (dark)
- **SVG Venn diagram** on slide 3 instead of CSS circles
- **Pledge slide** uses giant ghost "1" with teal background — very visual
- **Team slide** uses light background with a horizontal layout (Executive | IC | Advisory)
- **No ScaledSlide wrapper** — uses viewport-relative sizing (`vw`/`vh`/`clamp`) for responsive scaling
- **Cloudinary URLs** for team photos instead of local imports

## Implementation

**Single file change**: Rewrite `src/pages/WRCFDeck.tsx` entirely to be a React port of the HTML:

- Import Google Fonts via `@import` in a style block or add to `index.html`
- Convert each of the 10 HTML slides into React components
- Port all CSS as inline styles or a `<style>` tag within the component (keeping it self-contained like the HTML)
- Keep the existing navigation pattern (keyboard, click, dots) but style it per the HTML's nav design (fixed dots + arrow buttons with theme-aware colors)
- Use Cloudinary URLs for team photos (matching the HTML) since the local assets may not match the layout expectations
- Use the logo Cloudinary URL from the HTML
- Keep the route and `App.tsx` unchanged

**No changes needed to `App.tsx`** — the route already exists.

## Slide mapping (HTML → React)

1. **S1 Cover** — Dark, radial gradient, Cloudinary logo, "BlackTech Capital × WRCF" lockup
2. **S2 Values** — Light bg, 3×2 grid with icon/title/phrase cells
3. **S3 Venn** — Light bg, inline SVG (Equitable/Sustainable/Connected → Thriving People)
4. **S4 Case Studies** — Dark, two-column cards (Mars Materials, Serenity Power)
5. **S5 Structural Advantage** — Light bg, two stat blocks (<1%, <6%), italic tagline
6. **S6 Pledge** — Teal bg, giant ghost "1", commitment items with emoji icons
7. **S7 Fund Terms** — Dark, 3×2 grid of term blocks, Equivesto savings note
8. **S8 Team** — Light bg, horizontal layout with Executive/IC/Advisory columns, Cloudinary photos
9. **S9 Track Record** — Dark, two-column blocks for Bryan & Keyona, WEF badge
10. **S10 CTA** — Dark with radial gradient, "Let's Build This Together", email, pills

## Files

- `src/pages/WRCFDeck.tsx` — full rewrite

