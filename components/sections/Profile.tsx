import { Reveal } from "@/components/motion/Reveal";

const signals = [
  { index: "01", label: "AGENTIC AI", value: "Amazon AGI support", note: "Evaluation / quality / failure analysis" },
  { index: "02", label: "TEAM", value: "9-person quality team", note: "3,300+ AI tasks supported" },
  { index: "03", label: "RESEARCH", value: "1M+ healthcare records", note: "ML / analytics pipelines" },
  { index: "04", label: "EDUCATION", value: "MBA + BS Information Systems", note: "Business analytics / computer science" },
] as const;

export function Profile() {
  return (
    <section id="profile" className="profile-section section-shell">
      <Reveal className="profile-visual profile-credibility">
        <div className="profile-visual-header">
          <span>LEVEL -18 / PROFILE</span>
          <span>CREDIBILITY SIGNALS</span>
        </div>
        <div className="profile-signal-spine" aria-hidden="true" />
        <div className="profile-signal-list">
          {signals.map((signal) => (
            <div className="profile-signal" key={signal.index}>
              <span className="profile-signal-index">{signal.index}</span>
              <div>
                <small>{signal.label}</small>
                <strong>{signal.value}</strong>
                <p>{signal.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="profile-coordinate" aria-hidden="true">PRODUCT × ENGINEERING × AI × OPERATIONS</div>
      </Reveal>
      <Reveal className="profile-copy" delay={0.08}>
        <p className="eyebrow">THE PERSON BEHIND THE SYSTEMS</p>
        <h2>I work best where product, engineering, analytics, and operations overlap.</h2>
        <p>
          Professionally, I support Amazon AGI agentic-AI evaluation through a Keywords Studios engagement, working across model edge cases, failure analysis, quality workflows, and stakeholder feedback. I lead a 9-person technical quality team that has supported 3,300+ AI tasks, with work that reduced rework by 20%, improved first-pass accuracy to 95%, and increased productivity by 15%.
        </p>
        <p>
          I also bring an MBA focused on Business Analytics from California State University San Marcos and a BS in Information Systems from San Diego State University with a Computer Science minor. My graduate research included ML and analytics pipelines across 1M+ healthcare records. I care about understanding the real process before choosing the technology: sometimes the answer is AI, and sometimes it is a better API boundary, validation rule, dashboard, or data model.
        </p>
      </Reveal>
    </section>
  );
}
