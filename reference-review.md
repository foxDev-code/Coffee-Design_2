# NOIR reference review — 20 September 2026

Source: `Screen Recording 2026-09-14 212147.mp4`. Reviewed as 68 frames sampled every 0.2 seconds, plus larger individual frames. Times below are approximate recording positions, not fixed animation durations. The page motion is driven by the person scrolling, and the recording begins partway down the journey.

## Observed scene order

| Recording time | Visible reference | Implementation |
| --- | --- | --- |
| 10.6–10.8 s | Actual opening: amber glow on dark indigo, floating beans, “Crafted from bean to perfection”, two actions | New first scene, floating beans, Explore the journey and The process |
| 11.0–11.2 s | “It begins with the bean” appears while the abstract background remains | Headline track changes before the photo track |
| 11.4–12.2 s | Grinder dissolves in behind the same origin headline | Delayed grinder background reveal |
| 12.4–13.2 s and 0.0–0.6 s | “Ground fresh, never stale”; grinder remains | Shared background, continuous restrained zoom |
| 0.6–2.4 s | Grinder dissolves to water on grounds; “Water meets fire” | Longer background crossfade and separate text crossfade |
| 2.4–3.6 s | “Liquid gold, slow poured”; same grounds photograph | Shared bloom background, no image restart |
| 3.6–4.6 s | Espresso machine; “Poured with intention” | Pour scene |
| 4.6–5.4 s | Finished cup, “Taste perfection”, Shop the collection | Final scene and working collection link |
| 5.4–7.8 s | Featured coffee, category filters, 3 × 3 product grid | Nine products, filtering, sorting, search, quick view |
| 8.0–8.6 s | Shop by category, six tiles | Three-column, two-row category grid |
| 8.8–9.0 s | Coffee, delivered; Taster $19, Connoisseur $34, Reserve $59 | Three selectable plans; highlighted middle plan |
| 9.2–9.6 s | Four best sellers and gold horizontal rule | Four cards and matching rule |
| 9.8 s | The process: Farm, Harvest, Roasting, Grinding, Brewing, Serving | Six illustrated steps |
| 10.0 s | People are obsessed; three reviews | Three reference-transcribed review cards |
| 10.2–10.4 s | Life in noir; twelve gallery tiles | Six columns and two rows on desktop |

## Animation choices

`src/journey.js` is the single source for chapter order, chapter navigation positions, background changes, and the total sequence length. `src/motion.js` uses separate GSAP tracks for text and photography. Headline fades overlap, with only eight pixels of incoming movement. Photos zoom from 1.015 to 1.075 rather than the previous large crop changes. Reverse scrolling reverses the same timeline. The final stage releases into normal document flow.

The seven scene controls sit vertically on the right. The scroll prompt advances one stage. The first action enters the origin scene; the final action opens the collection. A reduced-motion preference presents the static intro with access to the products and process, without a long scroll sequence.

## Fidelity limits still present

- Original media and source code were not supplied. The four brewing backgrounds are generated replacement still photographs with scroll-driven zooms and dissolves. They are not footage of moving water, espresso, or steam.
- The replacement grinder has a different camera angle. The bloom, machine and final cup also differ from the reference. The site does not claim pixel-identical imagery.
- Several products and gallery tiles reuse the existing five replacement photos. In particular the latte, accessory, capsule and cold-brew pictures are illustrative, not faithful product assets.
- Readable headings, prominent prices, review copy and opening copy were transcribed. Small labels, some plan features, supporting copy, fonts and exact motion curves remain approximations. Review author initials may be affected by recording blur; these are not independently verified customer testimonials.
- The footer is an inferred local-preview ending, because it is not visible in the supplied recording. Mobile arrangements are responsive adaptations; no mobile reference was supplied.
- Higgsfield was searched after the user suggested it. The directory reported an installed plugin, but no Higgsfield generation tool was callable in this session. No Higgsfield footage was generated or integrated.
- An earlier attempt to generate additional product images hit the image tool's usage limit; the existing asset files remain in use.

## Remaining media brief

If video generation becomes available, create four matching landscape shots: (1) circular transparent hopper filled with beans, centered brushed-steel grinder; (2) narrow vertical water stream entering a crater of dry reddish coffee grounds in a white filter; (3) front-facing espresso portafilter pouring into a clear glass cup; (4) clear glass espresso cup, handle right, black background, beans on the table, subtle rising steam. Keep the camera almost stationary and use gentle movement. No typography, controls, logos or camera shake should be baked into the footage. Each must be reviewed against the recording before replacing a background.

Generated footage would remain a reconstruction, not the original media. Keep the independently animated HTML headings and interface above any future video. Respect reduced motion, pause offscreen videos, and retain local poster images.
