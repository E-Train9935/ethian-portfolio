export const navItems = [
  { label: "Systems", href: "/#selected-systems" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Experiments", href: "/#experiments" },
  { label: "Profile", href: "/#profile" },
  { label: "Contact", href: "/#contact" },
] as const;

export const projects = {
  routeflow: {
    slug: "routeflow",
    eyebrow: "01 / Logistics infrastructure",
    sector: "Real-time operations",
    name: "RouteFlow",
    status: "Deployed app",
    year: "2026",
    role: "Product design / full-stack engineering",
    description: "Live worker tracking, multi-stop routing, ETA recalculation, and shareable public tracking views.",
    problem:
      "A manager coordinating several workers and deliveries needs route order, current location, and ETA in one place. Splitting those signals across maps, messages, and manual updates makes dispatch harder than it needs to be.",
    system:
      "A Next.js application with a manager route planner, worker location flow, Supabase-backed realtime state, and tokenized read-only tracking pages for sharing a specific worker or route.",
    architecture: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "MapLibre", "OSRM"],
    decisions: [
      "Use an organization-style manager view for multiple workers, trips, and ordered stops instead of treating tracking as a single-driver map.",
      "Use Supabase Realtime so route and location changes can propagate without requiring manual page refreshes.",
      "Use tokenized public tracking routes so a manager can share a read-only view without exposing the full manager workspace.",
      "Use MapLibre + OSRM to preserve the project's no-paid-mapping-cost constraint instead of depending on a proprietary maps bill from day one.",
    ],
    tradeoff:
      "The open mapping stack keeps the demo inexpensive and portable, but it shifts more responsibility onto the application for routing reliability, service availability, and fallback behavior.",
    detail: {
      thesis:
        "RouteFlow is not a map demo. It is an operations layer built around the questions a manager actually has: where is the worker, what comes next, and what does the current ETA mean for the route?",
      build: [
        "Manager dashboard for multiple workers with multiple trips and stops.",
        "Drag-and-drop route planning, stop reordering, save flows, and live ETA recalculation.",
        "Worker-facing location updates designed to keep the manager view current without manual refreshes.",
        "Tokenized public live pages that expose only the worker or route being shared.",
        "Supabase Auth, PostgreSQL, Realtime, and row-level security as the application data layer.",
        "MapLibre rendering with OSRM routing to keep the demo independent from paid map APIs.",
      ],
      systemFlow: ["Manager plan", "Ordered stops", "Worker location", "Realtime state", "ETA update", "Public live view"],
      next:
        "The most meaningful next step is integrating RouteFlow with an existing telematics or fleet system such as Samsara so it can sit above real operational data instead of requiring a separate tracking source.",
    },
    links: {
      demo: "https://routeflow-psi.vercel.app/" as string | null,
      repository: null as string | null,
    },
  },
  applyos: {
    slug: "applyos",
    eyebrow: "02 / Workflow intelligence",
    sector: "Application workflows",
    name: "ApplyOS",
    status: "Active build",
    year: "2026",
    role: "Product design / backend engineering",
    description: "A job-application workflow platform centered on document ingestion, structured application context, and assistive AI.",
    problem:
      "A job search quickly fragments into postings, resume versions, PDFs, application status, notes, and repeated decisions. The problem is not a lack of AI text generation; it is the lack of one coherent workflow around the application itself.",
    system:
      "An in-progress application with a Python/FastAPI backend that treats resumes, job information, and application state as connected workflow inputs rather than isolated files.",
    architecture: ["Python", "FastAPI", "PyMuPDF", "REST API", "Document parsing"],
    decisions: [
      "Start with a real backend and document pipeline instead of a chat-only prototype.",
      "Treat resume and job documents as structured context that belongs to an application workflow.",
      "Keep document processing behind API boundaries so the product UI can evolve independently of parsing and analysis logic.",
      "Keep AI assistive: recommendations can reduce repetitive work, but the product should never fabricate qualifications or submit claims the user did not approve.",
    ],
    tradeoff:
      "Document and AI automation can save time, but application materials are high-context and representation-sensitive. The system therefore needs more explicit user control than a fully autonomous agent would provide.",
    detail: {
      thesis:
        "ApplyOS is being built as workflow software first and an AI feature second. The useful product is the system that connects documents, job context, analysis, and application state—not another text box that happens to call a model.",
      build: [
        "Python/FastAPI backend for the application service.",
        "PDF ingestion and text extraction pipeline using PyMuPDF.",
        "API structure for turning uploaded documents into reusable application context.",
        "Application-oriented data flow designed to connect job information, documents, analysis, and status.",
        "Clear separation between machine assistance and user-approved representation.",
      ],
      systemFlow: ["Job input", "Resume / PDF", "Document parsing", "Structured context", "Analysis", "User decision"],
      next:
        "The next milestone is a complete end-to-end application workspace: reliable document provenance, explicit workflow states, a polished frontend, and AI assistance that is useful without overstating what the candidate has done.",
    },
    links: { demo: null as string | null, repository: null as string | null },
  },
  finance: {
    slug: "financial-analysis-platform",
    eyebrow: "03 / Financial intelligence",
    sector: "Market + filing analysis",
    name: "FINENGINE",
    status: "Deployed app",
    year: "2026",
    role: "Application engineering / analytics",
    description: "A full-stack company-intelligence platform connecting live market telemetry, SEC fundamentals, peer benchmarking, filing evidence, and transparent valuation scenarios.",
    problem:
      "Company research is usually split across market-data sites, spreadsheets, valuation work, watchlists, and SEC filings. That makes even a straightforward company review more fragmented than it should be.",
    system:
      "A React/TypeScript and FastAPI application that combines Twelve Data market telemetry with SEC EDGAR/XBRL fundamentals, peer comparison, filing evidence retrieval, watchlists, and assumption-driven valuation scenarios.",
    architecture: ["Python", "FastAPI", "React", "TypeScript", "Twelve Data", "SEC EDGAR / XBRL", "Docker"],
    decisions: [
      "Use SEC EDGAR/XBRL as the source of truth for company-reported fundamentals while Twelve Data handles market-price telemetry.",
      "Normalize annual flow metrics separately from point-in-time balance-sheet facts so valuation ratios do not silently mix incompatible periods.",
      "Use deterministic filing retrieval to return evidence passages and direct SEC links before adding any optional LLM layer.",
      "Expose DCF assumptions directly instead of hiding valuation behind an opaque score or recommendation.",
    ],
    tradeoff:
      "Free and low-cost market-data sources vary in coverage, freshness, and rate limits. The application has to surface those boundaries rather than presenting every number as equally authoritative.",
    detail: {
      thesis:
        "FINENGINE turns fragmented public-company research into one traceable workflow: market telemetry, SEC-normalized fundamentals, peer comparison, filing evidence, and transparent valuation scenarios. It is an analytical tool, not a stock-picking engine.",
      build: [
        "FastAPI backend for upstream credentials, SEC retrieval, normalization, analytics, caching, filing extraction, and valuation math.",
        "React/TypeScript interface for company overview, peer comparison, filing search, watchlists, and scenario analysis.",
        "SEC XBRL normalization for revenue, earnings, cash, debt, equity, cash flow, capex, shares, and derived ratios.",
        "Filing Lens for deterministic retrieval of evidence from recent 10-K and 10-Q documents.",
        "Multi-stage Docker deployment that builds the Vite client and serves the SPA and API from one FastAPI origin.",
      ],
      systemFlow: ["Ticker search", "SEC + market data", "Normalization", "Peer / filing analysis", "DCF scenarios", "Research view"],
      next:
        "The next scaling steps are persistent research workspaces, shared caching and rate limiting, scheduled watchlists, richer peer discovery, and optional citation-locked AI analysis built on top of retrieved filing evidence.",
    },
    links: { demo: "https://finengine.onrender.com/" as string | null, repository: null as string | null },
  },
  lingora: {
    slug: "lingora",
    eyebrow: "04 / Language intelligence",
    sector: "Learning systems",
    name: "Lingora",
    status: "Unvalidated build",
    year: "2026",
    role: "Product architecture / full-stack engineering",
    description: "A short-form language-learning video platform designed around word-synced subtitles, contextual vocabulary, and spaced repetition.",
    problem:
      "Video is rich language input, but most viewing experiences separate comprehension from vocabulary capture and later review. Learners end up pausing, translating, saving words elsewhere, and losing the context that made the word memorable.",
    system:
      "An architecture for turning uploaded video into adaptive streams, aligned word-level subtitles, contextual vocabulary, and review items. The codebase has not yet been end-to-end deployed or validated, so the portfolio presents it as an unvalidated build rather than a finished product.",
    architecture: ["Next.js", "FastAPI", "PostgreSQL / pgvector", "RabbitMQ / Celery", "Redis", "FFmpeg", "WhisperX", "Docker"],
    decisions: [
      "Separate video ingestion and media processing from the interactive learning experience so expensive work can run asynchronously.",
      "Use word-level alignment so subtitle interactions can preserve the exact video context around a vocabulary item.",
      "Keep vocabulary review as a first-class system rather than a disconnected flashcard export.",
      "Treat the current implementation as unvalidated until the full stack has been run and tested end to end.",
    ],
    tradeoff:
      "The architecture is intentionally ambitious: media processing, alignment, storage, retrieval, and review scheduling create more operational complexity than a simple video-learning prototype. That complexity is only justified if the end-to-end experience proves useful.",
    detail: {
      thesis:
        "Lingora explores a simple idea: the moment a learner understands a word in context should connect directly to the moment that word is reviewed later.",
      build: [
        "Next.js product surface for a short-form language-learning video experience.",
        "FastAPI service boundaries for media, subtitle, vocabulary, and learning workflows.",
        "Asynchronous processing architecture using RabbitMQ/Celery for media and speech-alignment jobs.",
        "FFmpeg media processing and WhisperX-oriented word-level alignment pipeline.",
        "PostgreSQL/pgvector, Redis, and object-storage-oriented architecture for learning and media state.",
        "Spaced-repetition design intended to turn contextual vocabulary into future review items.",
      ],
      systemFlow: ["Video input", "Media processing", "Word alignment", "Contextual vocabulary", "Learning state", "Spaced review"],
      next:
        "The immediate milestone is not another feature. It is running and testing the full system end to end, validating the ingestion/alignment pipeline, and proving the learning loop before presenting Lingora as deployed software.",
    },
    links: { demo: null as string | null, repository: null as string | null },
  },
} as const;

export type ProjectKey = keyof typeof projects;
export type FeaturedProject = (typeof projects)[ProjectKey];

export const featuredProjectOrder: ProjectKey[] = ["routeflow", "applyos", "finance"];
export const projectPageOrder: ProjectKey[] = ["routeflow", "applyos", "finance", "lingora"];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return projectPageOrder
    .map((key) => projects[key])
    .find((project) => project.slug === slug);
}

export const experiments = [
  {
    name: "IntakeFlow",
    description: "Full-stack project intake gateway from Microsoft 365 Planner approval into centralized API tracking and a live dashboard.",
    stack: "C# / .NET 8 / React / Vite / REST",
    status: "Deployed app",
    href: "https://intakeflow-ppm.netlify.app/",
  },
  {
    name: "RMP Performance Hub",
    description: "Deployed performance-dashboard project for reviewing operational performance through a focused web interface.",
    stack: "Performance analytics / Dashboard",
    status: "Deployed app",
    href: "https://rmp-performance-hub.netlify.app/",
  },
  {
    name: "KOAT",
    description: "Connected asset-tracking system combining GPS and Bluetooth capabilities with a Vue web application for locating and monitoring a KOAT device across dedicated Home, Find, and Track experiences.",
    stack: "GPS / Bluetooth / Vue 3 / Vue Router / Location tracking",
    status: "Personal project / Repository",
    href: "https://github.com/E-Train9935/Programs/tree/860d61bd729442bbb5cf66999466dc342cf66b22/KOAT-main/KOAT-main",
  },
  {
    name: "FINITE FEED",
    description: "Deployed Reddit-intelligence application that retrieves and ranks source posts, then supports citation-grounded deep dives over the retrieved evidence.",
    stack: "React / TypeScript / Express / Retrieval / LLM",
    status: "Deployed app",
    href: "https://finite-feed-web.vercel.app/",
  },
  {
    name: "Lingora",
    description: "Unvalidated language-learning build connecting short-form video, word-synced subtitles, contextual vocabulary, and spaced repetition.",
    stack: "Next.js / FastAPI / FFmpeg / WhisperX / Celery",
    status: "Unvalidated build / Project page",
    internalHref: "/projects/lingora",
  },
  {
    name: "Carefy",
    description: "Hackathon team prototype exploring symptom and image inputs with a machine-learning-assisted healthcare pre-diagnosis concept.",
    stack: "Machine learning / Web prototype / Team project",
    status: "Hackathon project",
    href: "https://github.com/E-Train9935/team214",
  },
] as const;
