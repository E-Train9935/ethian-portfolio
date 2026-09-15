import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RouteMap } from "@/components/visuals/RouteMap";
import { projects } from "@/data/portfolio";

export function RouteFlowStudy() {
  const project = projects.routeflow;
  return (
    <article className="case-study case-routeflow">
      <Reveal className="case-index">
        <span>{project.eyebrow}</span>
        <div className="case-status-row"><span>{project.status}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p className="case-description">{project.description}</p>
      </Reveal>

      <Reveal className="routeflow-visual" delay={0.08}>
        <div className="visual-label-row">
          <span>LIVE SYSTEM / ROUTE NETWORK</span>
          <span>PUBLIC VIEW + MANAGER VIEW</span>
        </div>
        <RouteMap />
        <div className="visual-annotation annotation-a">REALTIME</div>
        <div className="visual-annotation annotation-b">ETA</div>
      </Reveal>

      <Reveal className="case-copy" delay={0.14}>
        <CaseNarrative project={project} />
      </Reveal>
    </article>
  );
}

function CaseNarrative({ project }: { project: typeof projects.routeflow }) {
  return (
    <div className="case-narrative">
      <div>
        <span className="micro-label">Problem</span>
        <p>{project.problem}</p>
      </div>
      <div>
        <span className="micro-label">System</span>
        <p>{project.system}</p>
      </div>
      <div className="tech-line" aria-label="Technologies">
        {project.architecture.map((item) => <span key={item}>{item}</span>)}
      </div>
      <details>
        <summary>Technical decisions</summary>
        <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
      </details>
      <div className="tradeoff"><span>Tradeoff</span><p>{project.tradeoff}</p></div>
      <div className="case-links">
        <Link href={`/projects/${project.slug}`}>Open case study ↗</Link>
        {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer">Open deployed app / sign-in ↗</a>}
      </div>
    </div>
  );
}
