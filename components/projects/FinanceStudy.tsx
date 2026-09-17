import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { FinanceChart } from "@/components/visuals/FinanceChart";
import { projects } from "@/data/portfolio";

export function FinanceStudy() {
  const project = projects.finance;
  return (
    <article className="case-study case-finance">
      <Reveal className="case-index">
        <span>{project.eyebrow}</span>
        <div className="case-status-row"><span>{project.status}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p className="case-description">{project.description}</p>
      </Reveal>

      <Reveal className="finance-project-visual" delay={0.08}><FinanceChart /></Reveal>

      <Reveal className="case-copy" delay={0.14}>
        <div className="case-narrative">
          <div><span className="micro-label">Problem</span><p>{project.problem}</p></div>
          <div><span className="micro-label">System</span><p>{project.system}</p></div>
          <div className="tech-line">{project.architecture.map((item) => <span key={item}>{item}</span>)}</div>
          <details><summary>Technical decisions</summary><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></details>
          <div className="tradeoff"><span>Tradeoff</span><p>{project.tradeoff}</p></div>
          <div className="case-links">
            <Link href={`/projects/${project.slug}`}>Explore project ↗</Link>
            {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer">Launch FINENGINE ↗</a>}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
