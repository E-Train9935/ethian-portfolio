# VERTICAL//CITY — Ethian Chiu Portfolio v1.4

A production-oriented Next.js portfolio built around one idea: the site should feel like descending through a future vertical city, while the actual subject remains real systems work.

## v1.4: curated project archive

This pass keeps the v1.1 visual system and replaces generic / overconfident portfolio copy with project content grounded in the actual builds.

### Flagship systems

#### RouteFlow — deployed app

A real-time worker/location tracking and routing application built with:

- Next.js + TypeScript
- Supabase Auth, PostgreSQL, Realtime, and RLS
- MapLibre
- OSRM
- manager route planning with multiple workers, trips, and stops
- drag-and-drop stop ordering and live ETA recalculation
- tokenized public tracking views

Deployed application (currently lands on the sign-in flow):

`https://routeflow-psi.vercel.app/`

The portfolio intentionally does not invent usage, latency, customer, or business-impact metrics.

#### ApplyOS — active build

An in-progress job-application workflow platform. The current portfolio copy reflects the built foundation rather than pretending the full product is already shipped:

- Python / FastAPI backend
- PDF ingestion and text extraction with PyMuPDF
- document-processing API boundaries
- application-oriented workflow context
- explicit separation between assistive AI and user-approved representation

No public demo or repository is shown until one is ready to publish.

#### FINENGINE — deployed app

A modular Python financial application currently grounded in:

- input parsing, validation, sanitization, and financial calculations
- dynamic conditional workflows for financial metrics / warnings
- live market data via Twelve Data
- SEC EDGAR as the primary-source filing layer

The current roadmap is represented honestly as future evolution: peer/company comparison, valuation metrics, watchlists, and deeper 10-K analysis.

### Archive / experiments

The archive now contains real smaller projects instead of generic placeholders:

- IntakeFlow — deployed C#/.NET 8 + React project-intake proof of concept
- RMP Performance Hub — deployed performance-dashboard project
- KOAT — personal GPS + Bluetooth asset-tracking project with a Vue web app and Home, Find, and Track flows
- Carefy — academic team healthcare/ML prototype (presented as a prototype, not a validated medical product)

The archive is intentionally kept small. Future projects should only be added when they strengthen the portfolio rather than simply increasing the project count.

Public project links included in the archive:

- IntakeFlow: `https://intakeflow-ppm.netlify.app/`
- RMP Performance Hub: `https://rmp-performance-hub.netlify.app/`
- KOAT repository: `https://github.com/E-Train9935/Programs/tree/860d61bd729442bbb5cf66999466dc342cf66b22/KOAT-main/KOAT-main`
- Carefy team repository: `https://github.com/E-Train9935/team214`

## Creative direction

The first viewport is the high-impact VERTICAL//CITY scene: an original WebGL transit megastructure, dense city canyon, elevated infrastructure, and restrained pointer/scroll camera movement. Once the visitor reaches the work, the site becomes much quieter and more editorial.

The city is atmosphere. The projects are the subject.

## Routes

- `/`
- `/projects/routeflow`
- `/projects/applyos`
- `/projects/financial-analysis-platform`

Each flagship case study contains:

- honest project status
- role and year
- problem
- system
- what is actually built
- system flow
- technical decisions
- tradeoffs
- technology
- next evolution
- verified external links only when available

## Architecture

```text
app/
  layout.tsx
  page.tsx
  icon.svg
  not-found.tsx
  robots.ts
  sitemap.ts
  projects/[slug]/page.tsx
  globals.css
components/
  city/
    CityField.tsx
    HeroCity.tsx
  motion/
    Reveal.tsx
  projects/
    RouteFlowStudy.tsx
    ApplyOSStudy.tsx
    FinanceStudy.tsx
    ProjectVisual.tsx
  sections/
    Hero.tsx
    SelectedSystems.tsx
    Architecture.tsx
    Experiments.tsx
    Profile.tsx
    Contact.tsx
  shell/
    SiteHeader.tsx
    LevelRail.tsx
  visuals/
    RouteMap.tsx
    ApplyPipeline.tsx
    FinanceChart.tsx
data/
  portfolio.ts
  site.ts
styles/
  tokens.css
preview/
  index.html
```

Content, presentation, animation, WebGL, visualizations, and design tokens remain separate so new project content does not require redesigning the whole site.

## Technology

- Next.js 16.3.3
- React 19.3.0
- TypeScript
- Motion 13.1.1
- Three.js 0.186.0
- CSS / SVG for the lower-page visual system and WebGL fallback
- Vercel-compatible App Router structure

## Run locally

```bash
npm install
npm run dev
```

Before deployment:

```bash
npm run lint
npm run build
```

## Launch configuration

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/...
NEXT_PUBLIC_GITHUB_URL=https://github.com/E-Train9935
```

GitHub has a verified default in `data/site.ts`; email and LinkedIn intentionally stay blank until the real public values are provided.

## Deploy to Vercel

1. Push this folder to the GitHub repository you want to use for the portfolio.
2. Import it in Vercel.
3. Add the environment variables above.
4. Run the deployment.
5. Test `/`, all three `/projects/...` routes, the RouteFlow deployed-app link, and every external archive link.
6. Connect the custom domain after the preview deployment is clean.

The portfolio itself needs no database or private server-side secret.

## What still needs real assets before the final public launch

The structure is deployable without these, but the strongest final version should still add:

- real RouteFlow screenshots / short screen recording
- real ApplyOS screenshots once the frontend is stable
- real FINENGINE screenshots and interaction media
- final public email
- final LinkedIn URL
- repository links only for repositories you actually want public
- a final OpenGraph/social-sharing image

Do not fill those gaps with fabricated dashboards, fake metrics, or placeholder contact information.
