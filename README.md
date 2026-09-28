# Blue Tokai — separate coffee website

The display branding was renamed from NOIR to Blue Tokai at the user's request. The original project folder and cart storage key remain stable. Reference-review notes retain the recording's original name for provenance.

This separate project recreates the visible structure and motion sequence of `Screen Recording 2026-09-14 212147.mp4`. The Brewns project is unchanged.

## Open

Run `node server.cjs` in this folder, then visit http://127.0.0.1:4174/. The production build and local image assets are included. Use this server rather than opening index.html directly.

To edit and rebuild: `npm ci`, then `npm run build`. Run `npm test` for cart validation and totals. React and GSAP are pinned in the lockfile. This project is independent of the Brewns folder.

## Included

- Seven scroll-controlled stages, beginning with the previously missing “Crafted from bean to perfection” intro, floating beans, and amber glow.
- Separate headline and background tracks, restrained camera zoom, overlapping dissolves, vertical scene navigation, and a final collection action.
- Nine products with filters, sorting, search, quick views, saved coffees and a local cart.
- Six category tiles, three subscription-plan previews, four best sellers, six process steps, three reference-transcribed review cards, and a twelve-image gallery.
- Responsive layouts, keyboard focus indicators, skip link, native dialogs and a reduced-motion fallback.
- Optional quiet synthesized ambient sound, activated only by the user.
- Local order previews; no payments, recurring subscriptions, orders, accounts, or emails are submitted.

## Reference and limitations

The recording was reviewed as 68 frames at 0.2-second intervals, with individual scenes inspected at larger size. It begins in the middle of the journey; the true opening appears around 10.6 seconds.

See [reference-review.md](reference-review.md) for the scene-by-scene comparison, implemented changes, exact known limitations, and a future footage brief.

The original photos, video assets, fonts, source code and timing curves were not supplied. Five generated replacement photographs are used, with prompts recorded in [asset-prompts.md](asset-prompts.md). Brewing scenes animate still photographs; water, espresso and steam do not physically flow. Several product/gallery images remain illustrative. This is not a pixel-identical recreation.

Review text was transcribed from the recording and is not verified customer feedback. Some small text, product descriptions, plan details and the unseen footer are approximate or illustrative. Mobile layouts are adaptations.

Higgsfield appeared as installed in plugin discovery, but its generation tools were not exposed in this session. No Higgsfield media was generated or used.

## Verification

The production build and cart test passed. Browser verification at 1280 × 800 and approximately 390 × 844 covered the opening and all seven chapter controls, shared backgrounds, collection navigation, nine-card catalogue, subscription modals, six process steps, three reviews, twelve gallery items, image modal, footer and mobile navigation. No horizontal overflow or broken loaded images was observed.

Earlier functional checks covered filtering, searching, sorting, adding/removing coffee, subtotal calculation, local order preview and sound controls. Cart calculations were rerun after the catalogue changes. The cart is local to this browser under `noir-cart`.

Reduced-motion rules were reviewed in code; browser preference emulation was not separately exercised. No performance benchmark or real checkout was performed.

## Main files

| File | Purpose |
| --- | --- |
| src/App.jsx | Main sections and interactions |
| src/journey.js | Reference sequence and background timing |
| src/motion.js | GSAP timeline and scroll reveals |
| src/ReferenceSections.jsx | Plans, process and review cards |
| src/shop.js | Catalogue and cart calculations |
| src/shop.test.js | Cart validation |
| style.css | Base layout and responsive styling |
| reference.css | Reference-specific opening and section refinements |
| assets/ | Generated replacement photographs |
| build/ | Ready-to-run browser bundle |
| server.cjs | Separate preview on port 4174 |

The ZIP excludes node_modules and build metadata. Dependencies are needed only when rebuilding.
