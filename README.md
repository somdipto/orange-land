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

Images depict illustrative settings, not a delivered Orange product or customer property. Actual Android reference device supplied by the owner is composited into those settings. No invented metrics, testimonials or hotel logos.

PILOT_WEBHOOK_URL and optional PILOT_WEBHOOK_SECRET are server environment variables only. Configure only an approved endpoint; the server validates required fields, consent, origin and a honeypot. Before activating public lead intake, implement rate limiting, retention controls and a full privacy notice. The destination must durably save before returning success.

QR derives location.origin + /piloto. QR download is vector SVG. Fonts are self-hosted. Future analytics can listen for orange:pageview, with consent controls before any external tracker.
