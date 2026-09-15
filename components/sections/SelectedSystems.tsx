import { ApplyOSStudy } from "@/components/projects/ApplyOSStudy";
import { FinanceStudy } from "@/components/projects/FinanceStudy";
import { RouteFlowStudy } from "@/components/projects/RouteFlowStudy";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedSystems() {
  return (
    <section id="selected-systems" className="systems-section section-shell">
      <Reveal className="section-heading">
        <div className="section-level">LEVEL -03</div>
        <div>
          <p className="eyebrow">SELECTED SYSTEMS</p>
          <h2>Real builds at different stages of maturity.</h2>
        </div>
        <p className="section-note">
          RouteFlow is deployed. ApplyOS and the Financial Analysis Platform are active builds. The portfolio shows that honestly instead of flattening every project into the same “finished product” story.
        </p>
      </Reveal>
      <div className="case-stack">
        <RouteFlowStudy />
        <ApplyOSStudy />
        <FinanceStudy />
      </div>
    </section>
  );
}
