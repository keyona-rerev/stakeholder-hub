

## Plan: Multiple WRCF Deck Refinements

### Changes in `src/pages/WRCFDeck.tsx`:

**1. Add new background image** — Copy uploaded puddle/ripple image to `src/assets/bg-puddle.jpg`, import it, and assign it to a slide that currently repeats or lacks a unique image. Since user says "no pictures should repeat" and wants to swap one out, replace the Track Record slide's null background with `bgPuddle`.

**2. Values slide (Slide 1)** — Remove the `desc` field from `BTC_VALUES` array (the black text under each value title). Keep the icon, title, and WRCF alignment text. Add the line "This isn't philanthropy. It's performance, powered by purpose." — likely as a closing statement below the 4-value grid or replacing the current philosophy paragraph.

**3. Thesis slide (Slide 2)** — Remove two bullets from the "Pre-Seed Stage" column: `"$50K–$250K investments"` and `"Portfolio of 6 companies"`. Change `"Canada Geography"` to `"Canadian Geography"`.

**4. Team slide (Slide 3)** — Add `flag="CA"` to everyone EXCEPT Keyona, Jade, and Lindsey. Currently Bryan has it, Watson has it, Nicholas has it. Need to ADD it to: Allison, John, Melissa, Marlon. Need to REMOVE it from: nobody extra. So add `flag="CA"` to Allison Gibson, John Nicholson, Melissa Allen, and Marlon Thompson.

**5. Background uniqueness** — Update `SLIDE_IMAGES` to use the new puddle image on one slide (Track Record at idx 11) so no image repeats.

### Files to create:
- `src/assets/bg-puddle.jpg` (from uploaded image)

### Files to edit:
- `src/pages/WRCFDeck.tsx`

