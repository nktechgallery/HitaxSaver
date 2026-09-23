# HiTaxSaver SEO Audit and Roadmap

Last updated: 2026-09-21

## Implemented in This Codebase

- Fixed button text visibility by forcing accessible foreground colors on CTA variants.
- Replaced hash-only navigation with clean crawlable URLs.
- Added service pages for accounting, auditing, GST compliance, income tax compliance and TDS compliance.
- Added unique title, meta description, canonical and Open Graph handling for indexable pages.
- Added Organization, WebSite, Service, FAQPage and BreadcrumbList JSON-LD where supported by visible content.
- Added `robots.txt` with public crawling allowed and explicit OAI-SearchBot access.
- Added `sitemap.xml` with canonical public pages only.
- Added About, Contact, Resource Centre, Privacy Policy and Terms/Disclaimer pages.
- Added privacy-safe form warning against sending PAN, Aadhaar, OTPs, passwords or confidential documents through the basic form.
- Added internal links from service overview, homepage service details and footer service links.

## P0 / P1 Technical SEO Audit

- Rendering: current site is still a Vite client-rendered React app. Search engines can often render it, but important SEO content is more reliable with static generation or prerendered HTML.
- Recommended architecture: add static prerendering or migrate to a framework with SSG/SSR such as Astro, Next.js or Remix for production service/resource pages.
- URLs: clean URLs now exist in the React app. Hosting must be configured to serve `index.html` fallback for these paths.
- Canonicals: page-level canonicals are generated for the `https://www.hitaxsaver.com` format. Confirm the real production domain before launch.
- Robots: public content is allowed. Do not block CSS, JS, images or key service pages.
- Sitemap: includes canonical public pages. Update automatically during build once resources/articles are added.

## Keyword and Search Intent Map

| Primary keyword | Intent | Target URL | Title | H1 | Supporting resources |
|---|---|---|---|---|---|
| accounting services | Commercial | `/services/accounting-services` | Accounting & Bookkeeping Services \| HiTaxSaver | Accounting & Bookkeeping Services | Bookkeeping guide, bank reconciliation checklist |
| auditing services | Commercial | `/services/auditing-services` | Auditing & Financial Review Services \| HiTaxSaver | Auditing & Financial Review Services | Audit preparation checklist |
| GST compliance services | Commercial | `/services/gst-compliance` | GST Registration & Compliance Services \| HiTaxSaver | GST Compliance Services | GSTR-1 guide, GSTR-3B guide, GST checklist |
| income tax filing services | Transactional | `/services/income-tax-compliance` | Income Tax Filing & Compliance Services \| HiTaxSaver | Income Tax Filing & Compliance Services | ITR documents checklist, freelancer ITR guide |
| TDS filing services | Transactional | `/services/tds-compliance` | TDS Filing & Compliance Services \| HiTaxSaver | TDS Filing & Compliance Services | TDS return guide, Form 16 vs Form 16A |
| tax and compliance resources | Informational | `/resources` | Tax and Compliance Resource Centre \| HiTaxSaver | Tax and Compliance Resource Centre | GST, income tax, TDS and accounting hubs |

## Content Gaps and Resource Strategy

Prioritize a small number of high-quality resources before publishing volume:

- GST compliance checklist for small businesses.
- GST registration documents checklist.
- GSTR-1 and GSTR-3B explainers with official references.
- ITR documents checklist for salaried professionals, freelancers and business owners.
- TDS filing preparation checklist.
- Month-end accounting and bank reconciliation checklist.
- Startup compliance checklist for India.

Each regulatory article should include written by, reviewed by if a real qualified reviewer exists, published date, last updated date, official references and a disclaimer.

## Local SEO Architecture

- Replace `[BUSINESS_ADDRESS]`, `[PHONE_NUMBER]`, `[BUSINESS_EMAIL]` only with verified details.
- Create or optimize Google Business Profile and Bing Places only for genuine office/service areas.
- Keep NAP consistent across website, GBP, Bing Places, LinkedIn and business directories.
- Do not create city landing pages unless HiTaxSaver genuinely serves that city and can provide unique helpful content.

## AEO, GEO and AI Search

- Service pages now answer direct questions via visible FAQs and FAQ schema.
- Entity statements define who HiTaxSaver is, what it does and that it serves India.
- OAI-SearchBot is not blocked in robots.txt.
- `llms.txt` was not added because it is not a Google ranking factor and should not replace crawlable HTML, internal links or structured data.

## Performance and Core Web Vitals

- Keep hero visuals lightweight and avoid layout shift with stable dimensions.
- Consider self-hosting fonts or using system fonts to reduce render-blocking external font requests.
- Lazy load below-the-fold imagery when real images are added.
- Measure mobile LCP, INP and CLS in Lighthouse/PageSpeed Insights after production deployment.

## Analytics and Webmaster Setup

- Configure Google Search Console domain property and submit `/sitemap.xml`.
- Configure Bing Webmaster Tools and submit sitemap.
- Implement privacy-appropriate analytics events for consultation submissions, phone clicks, email clicks and service page CTA clicks.
- Consider IndexNow only after a real API key and URL submission workflow are configured.

## Launch Blockers to Resolve

- Confirm production domain and canonical host.
- Replace placeholder email/form endpoint with a real secure destination.
- Replace placeholder contact/business details with verified details or keep them unpublished.
- Validate structured data in Google Rich Results Test / Schema Markup Validator.
- Ensure hosting fallback supports deep links such as `/services/gst-compliance`.
- Add real Open Graph image.
