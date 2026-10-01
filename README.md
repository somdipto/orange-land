# Orange design preview

Spanish responsive hospitality site for review only. Not a commercial launch.

## Run
npm install
npm run dev
npm run build
npm test (with the dev server running; install Playwright Chromium first)

Routes: /, /piloto, /demo, /privacidad.

## Production launch blockers
- Hosting plan approved for commercial usage. Current preview is scoped to review on Vercel Hobby, with noindex and a preview label.
- Owner-approved lead destination. Client submission is currently disabled; server returns 503 without configuration.
- Full privacy notice with legal controller and rights/contact details.
- Real LinkedIn and contact destinations. No invented links.
- Final model at /public/models/orange.glb. Replacement architecture lives in src/components/OrangeDevice3D.js.

Images depict illustrative settings, not a delivered Orange product or customer property. Photos were generated to match the supplied October 1 mockup, including the complete telephone cord, handset close-up and call-screen illustration. They are close visual recreations, not identical source photographs. No invented metrics, testimonials or hotel logos.

PILOT_WEBHOOK_URL and optional PILOT_WEBHOOK_SECRET are server environment variables only. Configure only an approved endpoint; the server validates required fields, consent, origin and a honeypot. Before activating public lead intake, implement rate limiting, retention controls and a full privacy notice. The destination must durably save before returning success.

QR derives location.origin + /piloto. QR download is vector SVG. Fonts are self-hosted. Future analytics can listen for orange:pageview, with consent controls before any external tracker.

## October 1 fidelity revision
The homepage follows the definitive supplied mockup: parenthesized hero, reception photo, three-icon strip, numbered four-item product section, sky-backed three cards, human-control/key exchange section, coastal CTA and split footer. No extra homepage sections. Mobile uses readable stacked cards and uncropped hero imagery.

Preview: https://orange-hospitality-preview.vercel.app/
Verified at 360, 390, 768 and 1440 pixel viewport widths across all four routes. Use tests-live.mjs for the deployed preview.

## Follow-up design revision
The second product-section image now restores the earlier Mediterranean reception setting, without a second telephone. Decorative edge foliage is reduced to two alternating accents. The coastal CTA/footer is taller, with separate cream corner panels curved on the inner top corners and more visible sea/coastline. Mobile preserves the same separated corner panels and panorama.

## Conversation-scene revision
The second section now shows an illustrative guest/Orange conversation over the Mediterranean reception photo, with a 23:30 badge, voice waveform and language chips. Text stays live and readable rather than being embedded into generated pixels. Both alternating branch accents are larger. The hero icon strip has a corrected chat SVG viewBox and stroke clearance. Spacing between product, night and human-control sections is increased.

## Bilingual revision
The top-right globe button toggles Spanish and English across all four routes, preserves the selection on navigation/reload, updates document language and accessible labels, and retains the same layout. Use node language-test.mjs (or SITE_URL=https://orange-hospitality-preview.vercel.app node language-test.mjs) for 64 bilingual checks. Spanish is the initial default. Branches enlarged again as requested.

## Corner and control polish
Top-left foliage uses one aligned natural sprig rather than two disconnected clusters. The language switch is a complete 44px circle with an inset language code. Buttons use a restrained lift, shadow and light sweep on hover, with active feedback and reduced-motion/touch handling.
