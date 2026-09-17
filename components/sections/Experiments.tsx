import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { experiments } from "@/data/portfolio";

export function Experiments() {
  return (
    <section id="experiments" className="experiments-section section-shell">
      <Reveal className="section-heading compact-heading">
        <div className="section-level">LEVEL -11</div>
        <div>
          <p className="eyebrow">EXPERIMENTS / ARCHIVE</p>
          <h2>Smaller systems, prototypes, and technical studies.</h2>
        </div>
      </Reveal>
      <div className="experiment-list">
        {experiments.map((experiment, index) => {
          const externalHref = "href" in experiment ? experiment.href : undefined;
          const internalHref = "internalHref" in experiment ? experiment.internalHref : undefined;
          const hasExternalHref = Boolean(externalHref);
          const hasInternalHref = Boolean(internalHref);
          const row = (
            <div className="experiment-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="experiment-name-block">
                <strong>{experiment.name}</strong>
                <small>{experiment.status}</small>
              </div>
              <div className="experiment-description-block">
                <p>{experiment.description}</p>
                <span>{experiment.stack}</span>
              </div>
              <span aria-hidden="true">{hasExternalHref || hasInternalHref ? "↗" : "—"}</span>
            </div>
          );

          return (
            <Reveal key={experiment.name} delay={index * 0.035}>
              {hasInternalHref ? (
                <Link href={internalHref!} aria-label={`Explore ${experiment.name} project`}>
                  {row}
                </Link>
              ) : hasExternalHref ? (
                <a href={externalHref!} target="_blank" rel="noreferrer" aria-label={`Open ${experiment.name} project`}>
                  {row}
                </a>
              ) : row}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
