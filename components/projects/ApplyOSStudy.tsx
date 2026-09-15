import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ApplyPipeline } from "@/components/visuals/ApplyPipeline";
import { projects } from "@/data/portfolio";

export function ApplyOSStudy() {
  const project = projects.applyos;
  return (
    <article className="case-study case-applyos">
      <Reveal className="case-index">
        <span>{project.eyebrow}</span>
        <div className="case-status-row"><span>{project.status}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p className="case-description">{project.description}</p>
      </Reveal>

      <Reveal className="case-copy apply-copy" delay={0.08}>
        <div className="case-narrative">
          <div><span className="micro-label">Problem</span><p>{project.problem}</p></div>
          <div><span className="micro-label">System</span><p>{project.system}</p></div>
          <div className="tech-line">{project.architecture.map((item) => <span key={item}>{item}</span>)}</div>
          <details><summary>Technical decisions</summary><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></details>
          <div className="tradeoff"><span>Tradeoff</span><p>{project.tradeoff}</p></div>
          <div className="case-links">
            <Link href={`/projects/${project.slug}`}>Open case study ↗</Link>
            <span>{project.status} / public demo not published yet</span>
          </div>
        </div>
      </Reveal>

      <Reveal className="applyos-visual" delay={0.14}>
        <div className="visual-label-row"><span>DOCUMENT → CONTEXT → DECISION</span><span>ACTIVE BUILD</span></div>
        <ApplyPipeline />
      </Reveal>
    </article>
  );
}
