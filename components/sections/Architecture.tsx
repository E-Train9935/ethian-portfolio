import { Reveal } from "@/components/motion/Reveal";

const principles = [
  ["01", "Model the real workflow", "The system should reflect how work actually moves, including failure paths and handoffs."],
  ["02", "Make state explicit", "Important transitions should be visible, durable, and understandable instead of hidden in UI magic."],
  ["03", "Integrate before replacing", "Existing systems usually contain valuable data and process context. Replacement is not the default."],
  ["04", "Use AI where ambiguity exists", "Deterministic rules should stay deterministic. AI earns its place where interpretation adds value."],
] as const;

export function Architecture() {
  return (
    <section id="architecture" className="architecture-section section-shell">
      <Reveal className="section-heading architecture-heading">
        <div className="section-level">LEVEL -07</div>
        <div>
          <p className="eyebrow">ARCHITECTURE</p>
          <h2>Different products. The same systems discipline underneath.</h2>
        </div>
      </Reveal>

      <div className="architecture-grid">
        <Reveal className="architecture-diagram">
          <div className="diagram-spine" />
          <div className="diagram-node node-input">OPERATIONS</div>
          <div className="diagram-node node-model">SYSTEM MODEL</div>
          <div className="diagram-node node-data">DATA</div>
          <div className="diagram-node node-interface">INTERFACE</div>
          <div className="diagram-node node-output">DECISION / ACTION</div>
          <div className="diagram-light light-a" />
          <div className="diagram-light light-b" />
          <div className="diagram-light light-c" />
        </Reveal>
        <div className="principle-list">
          {principles.map(([index, title, body], order) => (
            <Reveal className="principle" key={index} delay={order * 0.04}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
