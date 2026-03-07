

## Plan: Restructure WRCF Deck — Delete Venn, Reorder, Add Impact Metrics, Replace Fund Terms

### New Slide Order (13 slides)

| Idx | Slide | Theme | Background |
|-----|-------|-------|------------|
| 0 | Cover | dark | bgOcean |
| 1 | Values | light | null |
| 2 | Thesis | dark | bgRain |
| 3 | Team | light | bgLake (new) |
| 4 | Case Studies | dark | bgFlamingo |
| 5 | Market Aligned | dark | bgSea (new) |
| 6 | Founder Support | light | bgIce |
| 7 | Stats | light | null |
| 8 | Pledge (redesigned) | teal | null |
| 9 | Two Funds One Mission (new) | dark | bgSplash (new) |
| 10 | Impact Metrics (new) | light | null |
| 11 | Track Record | dark | bgRain → null (avoid repeat) |
| 12 | CTA | dark | null |

### Changes in `src/pages/WRCFDeck.tsx`

**1. Delete `SlideVenn` component** — remove entirely.

**2. Reorder slides** — Values (idx 1) before Thesis (idx 2), Team moves to idx 3.

**3. Add 3 new background images** — import `bg-sea.jpg`, `bg-lake.jpg`, `bg-splash.jpg` from uploaded files into `src/assets/`.

**4. Redesign `SlidePledge`** — "Partnering with WRCF" as the dominant centered headline. The investment commitment ("at least one Waterloo Region company") becomes smaller supporting text below. Keep the 4 icon items subordinate.

**5. Replace `SlideFundTerms` with `SlideTwoFunds`** — "Two Funds, One Mission" with two side-by-side cards:
- **Fund I** (PAUSED badge, dimmed): $15M target, Institutional LP base, Full portfolio construction, Long-term institutional vehicle
- **Catalyst Fund** (ACTIVE NOW badge, highlighted): $500K–$2M flexible fund size, Accessible LP minimums ($10K), 6 Pre-Seed investments, Equivesto partnership for efficiency, Building track record for Fund I

**6. Add `SlideImpactMetrics`** (new, idx 10) — Three sections:
- **GHG Reduction Targets**: Year 3: 2 MMT CO2e, Year 5: 10 MMT CO2e, Year 7 (2033): 25 MMT CO2e, Year 10 (2036): 50 MMT CO2e, 2050 Projection (Cumulative): 1,500 MMT (1.5 GT) CO2e
- **Equity Impacts Targets**: Women Founders – 50%, BIPOC/Minority Founders – 60%, Black Founders – 40%, 2SLGBTQ+ Founders – 5%, Indigenous Founders – 5%
- **Other Metrics Tracked** (no specific targets): Litres of Water Conserved/Saved, Metric Tonnes of Waste Diverted, Metric Tonnes of Plastic Removed/Reduced/Replaced, Kg of Toxins Eliminated

**7. Update constants** — `TOTAL` stays 13, rebuild `THEMES` and `SLIDE_IMAGES` arrays, update `Slide` component's teal index from 7→8, update radial gradient indices.

### Files to create
- Copy uploaded images → `src/assets/bg-sea.jpg`, `src/assets/bg-lake.jpg`, `src/assets/bg-splash.jpg`

### Files to edit
- `src/pages/WRCFDeck.tsx`

