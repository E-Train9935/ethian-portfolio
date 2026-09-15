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
    name: "Financial Analysis Platform",
    status: "Active build",
    year: "2026",
    role: "Application engineering / analytics",
    description: "A Python financial application connecting live market data with company research and filing analysis.",
    problem:
      "Company research is usually split across market-data sites, spreadsheets, valuation work, watchlists, and SEC filings. That makes even a straightforward company review more fragmented than it should be.",
    system:
      "A modular Python application that pulls live financial data and is being extended into a unified research workflow for company comparison, valuation, watchlists, and SEC / 10-K analysis.",
    architecture: ["Python", "Twelve Data", "SEC EDGAR", "Validation", "Financial analytics"],
    decisions: [
      "Connect the application to live company data instead of freezing the project around a static CSV.",
      "Use SEC EDGAR as the primary-source filing layer rather than relying only on third-party summaries.",
      "Keep market-data retrieval, calculations, and filing analysis modular so each layer can be tested and changed independently.",
      "Prefer transparent calculations and source context over a single opaque 'buy / sell' score.",
    ],
    tradeoff:
      "Free and low-cost market-data sources vary in coverage, freshness, and rate limits. The application has to surface those boundaries rather than presenting every number as equally authoritative.",
    detail: {
      thesis:
        "The project started as a Python financial application engine and is evolving toward a more coherent research platform. The goal is not to automate judgment; it is to reduce the mechanical work between raw company data, primary-source filings, and a reasoned comparison.",
      build: [
        "Modular Python application logic for parsing, validation, sanitization, and financial calculations.",
        "Dynamic conditional workflows for net/gross metrics and operational logic warnings.",
        "Live company-data integration through Twelve Data.",
        "SEC EDGAR access as the foundation for primary-source 10-K research.",
        "Separable analysis modules so additional research tools do not collapse into one monolithic script.",
      ],
      systemFlow: ["Live market data", "Validated inputs", "Company context", "Financial analysis", "SEC filings", "Research view"],
      next:
        "The current upgrade path is peer/company comparison, valuation metrics, watchlists, and deeper 10-K analysis so the app becomes a real research workflow instead of a polished market-data viewer.",
    },
    links: { demo: null as string | null, repository: null as string | null },
  },
} as const;

export type ProjectKey = keyof typeof projects;
export type FeaturedProject = (typeof projects)[ProjectKey];

export const featuredProjectOrder: ProjectKey[] = ["routeflow", "applyos", "finance"];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjectOrder
    .map((key) => projects[key])
    .find((project) => project.slug === slug);
}

export const experiments = [
  {
    name: "IntakeFlow",
    description: "Full-stack project intake gateway from Microsoft 365 Planner approval into centralized API tracking and a live dashboard.",
    stack: "C# / .NET 8 / React / Vite / REST",
    status: "Deployed demo",
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
    description: "Earlier Vue application organized around Home, Find, and Track flows with client-side routing and a responsive component UI.",
    stack: "Vue 3 / Vue Router / Bootstrap / MDB Vue",
    status: "Course project / Repository",
    href: "https://github.com/E-Train9935/Coding/tree/main/final-project",
  },
  {
    name: "Carefy",
    description: "Team academic prototype exploring a simple web experience around symptom and image inputs with machine-learning-assisted pre-diagnosis concepts.",
    stack: "Machine learning / Web prototype / Team project",
    status: "Academic team project",
    href: "https://github.com/E-Train9935/team214",
  },
] as const;
