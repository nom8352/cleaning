# North Lakes Commercial Cleaning - Development History

Last updated: 2026-06-25

This document is the consolidated development history for the North Lakes Commercial Cleaning demo website. It merges the earlier build history with the current multi-page site state, Goodman SEO demo/sales positioning, documentation assets, design-system files, and deployment notes.

## 1. Project Overview

- Project name: North Lakes Commercial Cleaning
- Project type: static HTML/CSS/JavaScript multi-page demo website
- Business category shown: commercial cleaning
- Location focus: North Lakes and surrounding suburbs, QLD
- Owner/agency context: demo website by Goodman SEO
- Intended use: portfolio/sample presentation and potential resale/customisation for a cleaning business buyer
- Local workspace: `F:\Antigravity\cleaning`
- GitHub repository: `https://github.com/nom8352/cleaning.git`
- Current branch: `main`
- Earlier Cloudflare Pages URL recorded: `https://cleaning-1r8.pages.dev/`

## 2. Current Site State

The project is no longer a one-page landing page. It is now a static multi-page commercial cleaning website.

Current public files:

- `index.html`: homepage
- `services/commercial-cleaning.html`: commercial cleaning details, regular scope, process, fit notes, quality/safety/communication, FAQs
- `services/floor-care.html`: floor care details, surface care services, process, quote details, FAQs
- `services/window-cleaning.html`: window cleaning details, internal/external glass scope, quote details, FAQs
- `services/specialised-cleaning.html`: specialised cleaning, handover/reset cleaning, hygiene/high-touch focus, quote details, FAQs
- `industries.html`: industries served and industry-specific cleaning considerations
- `service-areas.html`: local service area coverage and suburb availability guidance
- `styles.css`: design system, layout, responsive CSS, components, footer demo credit styling
- `script.js`: mobile menu, sticky nav state, quote form mailto behaviour
- `favicon.svg`
- `images/`: local logo and generated cleaning imagery

Current generated/local image assets:

- `images/logo.svg`
- `images/hero-office-cleaning.jpg`
- `images/office-desk-cleaning.jpg`
- `images/service-commercial-office.jpg`
- `images/service-floor-care.jpg`
- `images/service-window-cleaning.jpg`
- `images/service-specialised-cleaning.jpg`

## 3. Current Public Contact And Demo Details

- Phone shown on site: `07 0000 0000`
- Phone link: `tel:0700000000`
- Email shown on site: `goodmanseo.sydney@gmail.com`
- Quote form destination: `mailto:goodmanseo.sydney@gmail.com`
- Location shown: `North Lakes, QLD 4509`
- Hours shown: `Mon - Fri: 8:00am - 5:00pm`, `Sat - Sun: Closed`
- Footer demo note: `Demo website by Goodman SEO. Contact Goodman SEO to customise or purchase this site.`
- Footer agency link: `https://goodmanseo.com`

The sample phone number is intentionally obvious. Do not replace it with a realistic-looking placeholder unless the site is being prepared for an actual buyer.

## 4. Development Timeline

### 4.1 Initial Static Website Build

- Built the first version as a mobile-responsive static website using HTML, CSS, and vanilla JavaScript.
- Avoided heavy frontend frameworks to keep the site fast, simple, and reliable for static hosting.
- Implemented homepage sections for hero copy, service summary, trust messaging, quote CTA, testimonials, and footer contact information.
- Established the project as a deployment-focused GitHub repository for public site files.

### 4.2 Rendering Recovery And Simplification

- Detected a blank-render issue in the earlier Cloudflare Pages-hosted site.
- The issue was tied to delayed scroll animation/runtime behaviour from AOS-style animation.
- Removed that dependency and moved the site back to immediate static rendering.
- Kept JavaScript limited to practical behaviour: mobile menu, navbar scroll state, and mailto form handling.

### 4.3 Git Configuration And Contribution-History Work

- Local Git user configuration was adjusted so contributions could be associated with the intended GitHub account:
  - `user.name "nohmark"`
  - `user.email "nom8352@gmail.com"`
- Earlier history work included backfilled commits for missed contribution periods.
- A later 2026-06-25 contribution-history pass recorded a 94-day gap and generated backdated commits in Brisbane time.
- `grass_log.txt` recorded contribution timestamps and was later removed from Git tracking and kept local-only.

Current note: this contribution-history material is historical. New project work should focus on normal source changes and clean deployment commits.

### 4.4 Visual Redesign From Reference Image

- User provided a commercial-cleaning website reference image.
- The site was redesigned to match that clean local-business style:
  - White sticky navigation with logo and phone CTA
  - Left-copy/right-image hero section
  - Green quote CTA and navy secondary CTA
  - Three hero trust signals
  - Four image-led service cards
  - Split image/text trust section
  - Industry icon row
  - Navy quote bar with inline form
  - Three testimonial cards
  - Four-column footer
- A new local SVG logo was created and used in header/footer.
- Local generated images were added for hero, office cleaning, and service cards.

### 4.5 Multi-Page Expansion

The site was expanded from a landing page into a multi-page site:

- Added service pages:
  - Commercial Cleaning
  - Floor Care
  - Window Cleaning
  - Specialised Cleaning
- Added:
  - `industries.html`
  - `service-areas.html`
- Navigation, footer links, service cards, and cross-page paths were updated.
- Page-level hero sections, breadcrumbs, side panels, content bands, service navigation strips, and local imagery were added.

Related commit references:

- `25ba085` - Redesign website structure and styles matching commercial cleaning layout
- `4ef65af` - Expand commercial cleaning site pages

### 4.6 Content Expansion And Australian Business English Pass

- The initial added pages were too thin, so each page was expanded with richer copy.
- Australian business English conventions were applied:
  - `specialised`
  - `sanitised`
  - `amenities`
  - `enquiries`
  - `tailored quote`
- Avoided American/corporate phrases such as `reach out`, `leverage`, `touch base`, and similar phrasing.
- Service pages were expanded with:
  - deeper inclusions
  - periodic work
  - process steps
  - quote-detail checklists
  - quality, safety, and communication notes
  - FAQ content
- Australian commercial-cleaning company content patterns were reviewed and adapted into original site copy.

Related commit reference:

- `a2e5f7d` - Expand cleaning service page content

### 4.7 Goodman SEO Demo And Sales Positioning

- Contact email was changed from the earlier placeholder cleaning-company email to `goodmanseo.sydney@gmail.com`.
- Quote form mailto destination was changed to `goodmanseo.sydney@gmail.com`.
- Phone number was changed from `07 1234 5678` to `07 0000 0000` so it is clearly a sample number.
- Footer demo disclosure was added:
  - `Demo website by Goodman SEO. Contact Goodman SEO to customise or purchase this site.`
- `Goodman SEO` in the footer links to `https://goodmanseo.com`.
- The demo disclosure is intentionally placed only in the footer. This keeps the site credible as a realistic cleaning-business demo while still being transparent.

Related commit reference:

- `bbbdd93` - Update demo contact details

### 4.8 Local Documentation And Impeccable Design System

- Public website copy was archived in Markdown:
  - `docs/site-content.md`
- Current design system was documented in Impeccable/Stitch-compatible form:
  - `DESIGN.md`
- Impeccable sidecar was generated:
  - `.impeccable/design.json`
- Local memory/status docs were updated:
  - `docs/current-status.md`
  - `wiki/sites/cleaning-company.md`
- `DEVELOPMENT_HISTORY.md` was added and then consolidated into this latest version.

Related commit reference:

- `835a5c8` - Add development and commit history logs (DEVELOPMENT_HISTORY.md)

### 4.9 SEO Metadata And Deployment Files

- Added page-specific title tags and meta descriptions across all 7 public pages.
- Added canonical URLs using the current Cloudflare Pages URL:
  - `https://cleaning-1r8.pages.dev/`
- Added Open Graph and Twitter Card tags with page-specific preview images.
- Added JSON-LD structured data:
  - homepage: `WebSite` and `Organization`
  - service pages: `Service` and `BreadcrumbList`
  - industry/service-area pages: `WebPage` and `BreadcrumbList`
- Added public SEO deployment files:
  - `robots.txt`
  - `sitemap.xml`
- `FAQPage` schema was intentionally not added because Google removed the FAQ rich result feature in June 2026.
- Full buyer-grade `LocalBusiness` schema is intentionally deferred until the site has real client contact details and verified business information.

## 5. Technical Specification

### 5.1 Stack

- HTML5
- CSS3 with custom properties
- Vanilla JavaScript
- Font Awesome 6.4.0 via CDN
- Google Fonts:
  - Manrope
  - Space Grotesk

### 5.2 Main CSS Tokens

Current CSS custom properties in `styles.css`:

```css
:root {
    --primary: #073b73;
    --primary-hover: #062d5b;
    --secondary: #18aa72;
    --secondary-hover: #139260;
    --secondary-light: #e6f6f1;
    --bg-light: #f4f8fc;
    --bg-white: #ffffff;
    --bg-footer: #f8fafc;
    --text-dark: #1d2b3d;
    --text-muted: #5f7188;
    --border-color: #d9e4ef;
    --quote-bar-bg: #063f7b;
    --font-body: "Manrope", sans-serif;
    --font-display: "Space Grotesk", sans-serif;
    --container-width: 1120px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-sm: 0 1px 2px rgba(7, 59, 115, 0.08);
    --shadow-md: 0 8px 22px rgba(7, 59, 115, 0.08);
    --shadow-lg: 0 18px 40px rgba(7, 59, 115, 0.12);
}
```

### 5.3 JavaScript Behaviour

`script.js` handles:

- Mobile nav toggle using `.is-active`
- Menu close when a nav link is clicked
- Sticky navbar state using `.is-scrolled`
- Quote form mailto generation with name, email, and phone fields

Current quote form destination:

```text
goodmanseo.sydney@gmail.com
```

## 6. Current Design System Summary

Source documents:

- `DESIGN.md`
- `.impeccable/design.json`
- `docs/sample-site-playbook.md`

Design north star:

- `The Clean Local Operator`

Key design principles:

- Bright white base with blue-tinted service panels
- Navy for authority and green for quote/action moments
- Realistic cleaning photography
- Compact, scan-friendly cards
- Footer-only Goodman SEO demo disclosure

Current major colors:

- Primary navy: `#073b73`
- Deep navy: `#062d5b`
- Quote navy: `#063f7b`
- CTA green: `#18aa72`
- CTA green hover: `#139260`
- Light panel: `#f4f8fc`
- Body text: `#1d2b3d`
- Muted text: `#5f7188`
- Border: `#d9e4ef`

## 7. Validation History

Recent validation performed:

- Local HTML link/reference check across 7 HTML pages: no missing local references
- HTTP check across 17 local URLs/assets: no failures
- Playwright browser load check across all public pages: 0 console errors
- Representative mobile checks on service pages: page structure renders within viewport
- Impeccable detector: only `single-font` warning; accepted because the project intentionally uses Manrope/Space Grotesk as its current brand typography system
- `.impeccable/design.json`: JSON validation passed
- `DESIGN.md`: required six sections present
- SEO metadata check across 7 public pages: title length 47-55 characters, meta description length 141-154 characters, one H1 per page
- JSON-LD parse check: all structured-data blocks parse successfully
- `sitemap.xml` XML parse check: valid

## 8. Git And Deployment Notes

Current remote:

```bash
origin https://github.com/nom8352/cleaning.git
```

Current branch:

```bash
main
```

Important recent commits:

- `835a5c8` - Add development and commit history logs (DEVELOPMENT_HISTORY.md)
- `bbbdd93` - Update demo contact details
- `a2e5f7d` - Expand cleaning service page content
- `4ef65af` - Expand commercial cleaning site pages
- `25ba085` - Redesign website structure and styles matching commercial cleaning layout

The GitHub repository is intended for public website deployment files only.

Local-only files/folders:

- `AGENTS.md`
- `docs/`
- `wiki/`
- `raw/`
- `.agents/`
- `.codex/`
- `.impeccable/`
- `PRODUCT.md`
- `DESIGN.md`
- `grass_log.txt`

These are excluded through `.git/info/exclude` and should remain local unless the user explicitly asks to publish them.

## 9. Handoff Guide For Future Work

Start by reading:

1. `AGENTS.md`
2. `docs/current-status.md`
3. `wiki/index.md`
4. `wiki/sites/cleaning-company.md`
5. `DEVELOPMENT_HISTORY.md`
6. `docs/site-content.md`
7. `DESIGN.md`

If updating public site copy:

- Update the HTML pages.
- Update `docs/site-content.md`.
- Keep Australian business English conventions.
- Preserve Goodman SEO demo/sales positioning unless the user changes the goal.

If updating design:

- Update `styles.css`.
- Update `DESIGN.md`.
- Update `.impeccable/design.json` if components, tokens, colors, shadows, or layout rules change.

If creating another niche demo site:

- Start from `docs/sample-site-playbook.md`.
- Follow `wiki/workflows/create-sample-site.md`.
- Create a site-specific wiki page before writing code.
- Keep the Goodman SEO demo contact and footer disclosure unless the user changes the sales strategy.

If preparing the site for a real cleaning business buyer:

1. Replace `07 0000 0000` with the buyer's real phone number.
2. Replace `goodmanseo.sydney@gmail.com` with the buyer's final receiving email, or keep it if Goodman SEO will handle leads.
3. Replace placeholder testimonials with real testimonials or remove them.
4. Replace `#` social, privacy, and terms links with real links.
5. Confirm whether the Goodman SEO footer credit should remain, be reduced, or be removed.
6. Replace generated imagery with approved client photography if available.
7. Replace the current canonical URL if the buyer uses a custom domain.
8. Add verified buyer-specific `LocalBusiness` schema after final phone, address, hours, and business identity are confirmed.
9. Add an analytics tag if required.

## 10. Open Items

- Final buyer/client details are not yet known.
- Phone number is intentionally sample-only.
- Testimonials may still be placeholder copy.
- Footer social links still use `#`.
- Privacy Policy and Terms & Conditions links still use `#`.
- Current canonical/sitemap domain uses `https://cleaning-1r8.pages.dev/`; replace it if a final custom domain is chosen.
- Generated images are good for the demo but may need replacement for a real buyer.
