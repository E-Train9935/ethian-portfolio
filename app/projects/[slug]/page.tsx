import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CityField } from "@/components/city/CityField";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { SiteHeader } from "@/components/shell/SiteHeader";
import {
  projectPageOrder,
  getProjectBySlug,
  projects,
} from "@/data/portfolio";

export function generateStaticParams() {
  return projectPageOrder.map((key) => ({ slug: projects[key].slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} — Ethian Chiu`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
    return null;
  }

  const currentIndex = projectPageOrder.findIndex(
    (key) => projects[key].slug === project.slug,
  );
  const nextKey = projectPageOrder[(currentIndex + 1) % projectPageOrder.length];
  const nextProject = projects[nextKey];

  return (
    <main className="site-shell project-page-shell">
      <CityField />
      <SiteHeader />

      <article className="project-page section-shell">
        <header className="project-page-hero">
          <div className="project-page-breadcrumb">
            <Link href="/#selected-systems">← Selected systems</Link>
            <span>{project.eyebrow}</span>
          </div>
          <div className="project-page-title-grid">
            <div>
              <p className="eyebrow">{project.sector}</p>
              <h1>{project.name}</h1>
            </div>
            <div className="project-page-intro">
              <p className="project-page-deck">{project.description}</p>
              <dl className="project-page-meta">
                <div><dt>Status</dt><dd>{project.status}</dd></div>
                <div><dt>Year</dt><dd>{project.year}</dd></div>
                <div><dt>Role</dt><dd>{project.role}</dd></div>
              </dl>
            </div>
          </div>
          <ProjectVisual project={project} />
          {(project.links.demo || project.links.repository) && (
            <div className="project-external-links">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer">Launch project ↗</a>
              )}
              {project.links.repository && (
                <a href={project.links.repository} target="_blank" rel="noreferrer">Repository ↗</a>
              )}
            </div>
          )}
        </header>

        <section className="project-page-section project-page-thesis">
          <div className="section-level">SYSTEM / 01</div>
          <h2>{project.detail.thesis}</h2>
        </section>

        <section className="project-page-section project-page-two-col">
          <div>
            <span className="micro-label">Problem</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="micro-label">System</span>
            <p>{project.system}</p>
          </div>
        </section>

        <section className="project-page-section project-build-section">
          <div className="project-page-section-heading">
            <span className="section-level">SYSTEM / 02</span>
            <h2>What the system contains.</h2>
          </div>
          <div className="project-build-grid">
            {project.detail.build.map((item, index) => (
              <div className="project-build-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-page-section project-flow-section">
          <div className="project-page-section-heading">
            <span className="section-level">SYSTEM / 03</span>
            <h2>System flow.</h2>
          </div>
          <div className="project-flow" aria-label={`${project.name} system flow`}>
            {project.detail.systemFlow.map((step, index) => (
              <div className="project-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < project.detail.systemFlow.length - 1 && (
                  <i aria-hidden="true">→</i>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="project-page-section project-page-decisions">
          <div className="project-page-section-heading">
            <span className="section-level">SYSTEM / 04</span>
            <h2>Technical decisions.</h2>
          </div>
          <div className="project-decision-list">
            {project.decisions.map((decision, index) => (
              <div key={decision}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{decision}</p>
              </div>
            ))}
          </div>
          <div className="project-tradeoff">
            <span>TRADEOFF</span>
            <p>{project.tradeoff}</p>
          </div>
        </section>

        <section className="project-page-section project-stack-section">
          <span className="micro-label">Technology</span>
          <div className="project-stack-list">
            {project.architecture.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="project-page-section project-next-section">
          <span className="section-level">NEXT / EVOLUTION</span>
          <p>{project.detail.next}</p>
        </section>

        <nav className="project-page-footer" aria-label="Project navigation">
          <Link href="/#selected-systems">Back to selected systems</Link>
          <Link href={`/projects/${nextProject.slug}`}>
            Next project / {nextProject.name} →
          </Link>
        </nav>
      </article>
    </main>
  );
}
