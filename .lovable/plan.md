

# WRCF Pitch Deck — `/wrcf-deck`

## Context

This is a competition deck for Waterloo Region Community Foundation. They're already sold on the mission — they believe in all 12 funds. The scoring is:
- **Strategic Fit (40%)**: Alignment with WRCF priorities, relevance to Waterloo Region
- **Impact & Credibility (40%)**: Model strength, team, track record, financial clarity
- **Regional Engagement (20%)**: Willingness to engage with Waterloo Region partners

The existing Foundation Deck covers the 40% Impact & Credibility well. This new deck needs to nail the other 60%.

**Main competitor**: Velocity Fund II (University of Waterloo, local presence).

## Design Approach

- Same `ScaledSlide` system, dark theme, navigation from Foundation Deck
- **Fewer words, more visuals** — high-level concepts only, bullets become speaker notes in your head
- ~10-12 slides, tight and visual
- Route: `/wrcf-deck`, no Navbar/Footer

## Slide Structure

1. **Title** — "BlackTech Capital × WRCF" — framed as a partnership pitch, not a fund pitch. CONFIDENTIAL 2026.

2. **Shared Values** — Side-by-side visual mapping of WRCF's 6 values (Equity-centred, Approachable, Accountable, Catalytic, Collaborative, Impactful) to concrete BTC behaviors. Icon-driven, minimal text. This is the "we already speak the same language" slide.

3. **Mission Alignment Framework** — Pull directly from WRCF's Investment Policy Venn diagram structure (Equitable Communities, Connected Communities, Sustainable Communities → Thriving People). Show how BTC's ClimateTech focus maps to their framework — especially Climate Action, Economic Security, Racial Equity, and Smart/Resilient Cities.

4. **How We Work With Founders** — Concrete examples, not intentions. Visual cards showing:
   - Mars Materials: what BTC actually did (intros, support, round completion)
   - Serenity Power: how BTC got into a deal others couldn't, and what collaboration looks like
   - Emphasis on investor introductions as primary strategy — show the receipts

5. **Already Building Together** — Subtly highlight that BTC is the only fund that showed up to WRCF's calls. Frame the existing relationship as proof of collaborative DNA. Position this as "we've already started working together."

6. **Waterloo Region Commitment** — The concrete pledge: commit to investing in at least one company from Waterloo Region. Show a proposed collaboration process between BTC and WRCF for sourcing, evaluating, and supporting local founders. Canadian team members, Canadian geography focus, local connections.

7. **Why We Win Deals Others Can't** — Serenity Power case study. Short, visual. The point: underrepresented founders trust BTC because of who we are and how we operate. That's a structural sourcing advantage no one else has.

8. **Fund Overview** — Condensed version: Catalyst Fund key terms in a clean visual grid. Minimal — they've done diligence already.

9. **Team & Canadian Connections** — Same clickable team grid but with emphasis on Canadian/local presence. Highlight team members with Waterloo Region or Canadian ties.

10. **Track Record** — Bryan + Keyona highlights, WEF recognition. Brief — they know this.

11. **Partnership Vision** — CTA slide reframed: "Let's Build This Together." Not "invest in us" but "partner with us to prove that impact investing works when it's collaborative." Contact info.

## Technical Implementation

- **New file**: `src/pages/WRCFDeck.tsx` — seeded from `FoundationDeck.tsx`, reusing `ScaledSlide`, navigation shell, team data, and shared slide components
- **Route**: `/wrcf-deck` added to `App.tsx` (no Navbar/Footer)
- New slides: 1 (Title), 2 (Values), 3 (Mission Framework), 4 (How We Work), 5 (Already Building), 6 (Waterloo Commitment), 7 (Why We Win Deals), 11 (Partnership CTA)
- Adapted/condensed: 8 (Fund Overview), 9 (Team), 10 (Track Record)
- Visual style: larger icons, bigger type, fewer bullets — designed so the audience watches Bryan, not the screen

