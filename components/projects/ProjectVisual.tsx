import { ApplyPipeline } from "@/components/visuals/ApplyPipeline";
import { FinanceChart } from "@/components/visuals/FinanceChart";
import { RouteMap } from "@/components/visuals/RouteMap";
import type { FeaturedProject } from "@/data/portfolio";

export function ProjectVisual({ project }: { project: FeaturedProject }) {
  if (project.slug === "routeflow") {
    return (
      <div className="project-page-visual routeflow-visual">
        <div className="visual-label-row">
          <span>LIVE SYSTEM / ROUTE NETWORK</span>
          <span>MANAGER + PUBLIC VIEW</span>
        </div>
        <RouteMap />
      </div>
    );
  }

  if (project.slug === "applyos") {
    return (
      <div className="project-page-visual applyos-visual">
        <div className="visual-label-row">
          <span>WORKFLOW / ASSISTIVE INTELLIGENCE</span>
          <span>HUMAN CONTROL PRESERVED</span>
        </div>
        <ApplyPipeline />
      </div>
    );
  }

  if (project.slug === "lingora") {
    return (
      <div className="project-page-visual lingora-visual">
        <div className="visual-label-row">
          <span>VIDEO → LANGUAGE CONTEXT</span>
          <span>UNVALIDATED BUILD</span>
        </div>
        <div className="lingora-frame">
          <div className="lingora-video-field" aria-hidden="true">
            <span className="lingora-play">▶</span>
            <div className="lingora-subtitle">
              <span>我</span><span>想</span><strong>学习</strong><span>新的</span><span>语言</span>
            </div>
          </div>
          <div className="lingora-context-panel">
            <span className="micro-label">CONTEXT / VOCABULARY</span>
            <strong>学习 · xuéxí</strong>
            <p>learn / study</p>
            <div className="lingora-timeline"><i /><i /><i /><i /><i /></div>
            <small>WORD ALIGNMENT → REVIEW QUEUE</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page-visual finance-project-visual">
      <FinanceChart />
    </div>
  );
}
