export function ApplyPipeline() {
  const steps = ["Job input", "Resume / PDF", "Document parsing", "Structured context", "User decision"];

  return (
    <div className="apply-pipeline" aria-label="ApplyOS workflow diagram">
      {steps.map((step, index) => (
        <div className="pipeline-step" key={step}>
          <span className="pipeline-index">0{index + 1}</span>
          <strong>{step}</strong>
          <span className="pipeline-node" aria-hidden="true" />
          {index < steps.length - 1 && <span className="pipeline-connector" aria-hidden="true" />}
        </div>
      ))}
      <div className="pipeline-orbit" aria-hidden="true" />
    </div>
  );
}
