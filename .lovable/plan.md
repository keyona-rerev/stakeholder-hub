

## Plan: Remove Ghost "1" from Waterloo Pledge Slide + Add Two New Slides

The giant decorative "1" on Slide 6 (Regional Pledge) was from the original spec as a watermark. User wants it gone.

### Changes in `src/pages/WRCFDeck.tsx`:

1. **Remove the ghost "1"**: Delete `<div className="wrcf-ghost-1">1</div>` from `SlidePledge` component and remove the `.wrcf-ghost-1` CSS block.

2. **Add Slide 5 — "Market-Aligned Impact"** (dark theme, bg image):
   - Eyebrow: "Our Approach"
   - H2: "Impact That Outlasts Us" (with teal accent on "Outlasts Us")
   - Core paragraph about market-aligned impact sustaining itself
   - 3 icon+text items: shield → "Survives political cycles", trending → "Every actor incentivized by market success", loop → "Impact that compounds"

3. **Add Slide 6 — "Investor Introductions"** (light theme, bg image):
   - Eyebrow: "Founder Support"
   - H2: "Introductions Are Our Primary Job" (teal accent)
   - Core paragraph: founders don't need coaching, they need fully raised rounds
   - 3 icon+text items: network → "Investor introductions to close rounds", target → "Structurally aligned support", rocket → "Founders succeed when capital flows"

4. **Update constants**: `TOTAL` 10→12, extend `THEMES` and `SLIDE_IMAGES` arrays, bump all subsequent slide indices by 2.

5. **Add new SVG icons** to `Icon` component: `shield`, `trending`, `loop`, `target`, `rocket`.

6. **Fix Slide 4 text contrast**: Force all text in case study cards to explicit `#f0ede6` with higher opacity.

