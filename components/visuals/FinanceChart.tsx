export function FinanceChart() {
  return (
    <div className="finance-visual" aria-label="Financial analysis interface visualization">
      <div className="finance-chart-panel">
        <div className="finance-topline">
          <span>LIVE COMPANY DATA</span>
          <span>TWELVE DATA + SEC EDGAR</span>
        </div>
        <svg viewBox="0 0 640 260" role="img" aria-label="Abstract financial trend chart">
          <g className="chart-grid">
            {Array.from({ length: 7 }, (_, i) => (
              <line key={`h-${i}`} x1="0" x2="640" y1={i * 42} y2={i * 42} />
            ))}
          </g>
          <path className="chart-line" d="M12 224 L70 197 L126 205 L178 153 L226 168 L282 118 L335 135 L389 92 L438 102 L485 62 L530 78 L580 40 L626 54" />
        </svg>
      </div>
      <div className="filing-stack" aria-hidden="true">
        <span>10-K</span>
        <span>MARKET</span>
        <span>SOURCE</span>
      </div>
    </div>
  );
}
