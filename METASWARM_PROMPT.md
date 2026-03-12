# Metaswarm Build Prompt

/start-task Read SPEC.md for the complete functional specification.

Build a modern, responsive Databricks partner portal microsite for databricks.blueorange.digital.

## Design Inspiration
- Draw design inspiration from the CorpSanity website (corpsanity.com) combined with Databricks themes
- The design should be a blend of Blue Orange Digital's brand and the Databricks design language — similar to how Databricks styles their own assessment and partner-facing sites
- It should feel native to the Databricks ecosystem while being clearly Blue Orange's portal
- Primary colors: Blue Orange deep navy + vibrant orange, harmonized with Databricks' color system
- Databricks accent: Databricks red (#FF3621) used for co-branded elements and highlights

## Key Requirements
- 9 pages: Homepage, Why Blue Orange, Credits, Value-Based Pricing, Offers, Case Studies, Events, Resources, Contact
- Value-Based Pricing MUST be visually flagged as a unique/exclusive offer across the site
- Databricks Scout should be highlighted as a flagship partner solution
- All image/headshot/video/asset slots use professional branded placeholders (gradients, geometric patterns) — nothing should look broken
- Email template cards with working Copy to Clipboard functionality
- Mobile-first responsive — AEs access this on phones during customer meetings
- No forms or gates on downloadable assets — single click
- NO deal registration form on contact page
- SEO meta tags, Open Graph tags, favicon
- Animated counter components for trust strip statistics

## Definition of Done
1. All 9 pages built and navigable with responsive navbar
2. Homepage renders with hero, trust strip, offers grid, team preview, video placeholder, events section
3. Value-Based Pricing page has visually distinct treatment (badge/banner/accent)
4. All 6 offers displayed with icons, descriptions, CTAs
5. Leadership profiles with placeholder headshots, bios, Calendly + LinkedIn links
6. Email templates have working copy-to-clipboard
7. Fully responsive at desktop (1440px), tablet (768px), mobile (375px)
8. All placeholders are branded and intentional (no broken images)
9. Clean footer with "Powered by Blue Orange Digital · Backed by Oliver Wyman"
10. Deployed and accessible at databricks.blueorange.digital

## Human Checkpoints
1. After homepage + navbar/footer scaffolding — review layout and brand feel
2. After all 9 pages are built — review content and flow
3. After frontend-design plugin polish — review final visual quality

## File Scope
New greenfield project — let metaswarm decide the architecture.

Use the full metaswarm orchestration workflow:
research the codebase, create an implementation plan, run the
design review gate, decompose into work units, and execute each
through the 4-phase loop (implement, validate, adversarial review,
commit).

For all frontend/UI work, use the frontend-design skill to ensure
production-grade, distinctive design (not generic AI aesthetics).

After frontend-design edits are complete, run a visual QA pass:
take screenshots of every key page at desktop (1440px), tablet
(768px), and mobile (375px) using Playwright. Review each for
layout issues, typography, contrast, responsiveness, and polish.
Fix anything that doesn't look production-grade, then re-screenshot
to confirm. Include screenshots in the PR.
