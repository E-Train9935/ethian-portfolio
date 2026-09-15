import { Reveal } from "@/components/motion/Reveal";

export function Profile() {
  return (
    <section id="profile" className="profile-section section-shell">
      <Reveal className="profile-visual">
        <div className="profile-shaft" />
        <div className="profile-platform" />
        <div className="profile-light" />
        <span>LEVEL -18 / PROFILE</span>
      </Reveal>
      <Reveal className="profile-copy" delay={0.08}>
        <p className="eyebrow">THE PERSON BEHIND THE SYSTEMS</p>
        <h2>I work best where product, engineering, analytics, and operations overlap.</h2>
        <p>
          I have an MBA focused on Business Analytics from California State University San Marcos and a BS in Information Systems from San Diego State University, with a Computer Science minor. My projects usually start with an operational problem and move toward a working system: an interface, a workflow, a data model, an integration, or several of those together.
        </p>
        <p>
          I care about understanding the real process before choosing the technology. Sometimes the answer is AI. Sometimes it is a better API boundary, validation rule, dashboard, or database model. The goal is useful software, not fashionable architecture.
        </p>
      </Reveal>
    </section>
  );
}
