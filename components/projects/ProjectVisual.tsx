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

  return (
    <div className="project-page-visual finance-project-visual">
      <FinanceChart />
    </div>
  );
}
