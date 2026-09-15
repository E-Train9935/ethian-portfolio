export function RouteMap() {
  return (
    <svg className="route-map" viewBox="0 0 760 440" role="img" aria-label="Abstract route network visualization">
      <defs>
        <linearGradient id="routeGlow" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g className="map-grid">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v-${i}`} x1={i * 63} x2={i * 63} y1="0" y2="440" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h-${i}`} x1="0" x2="760" y1={i * 63} y2={i * 63} />
        ))}
      </g>
      <g className="map-routes">
        <path d="M48 310 C140 230 190 360 286 250 S460 170 535 205 S652 174 714 108" />
        <path d="M80 120 C160 90 210 170 310 140 S480 65 590 130 S670 275 720 310" />
        <path d="M170 370 C220 310 310 332 360 270 S444 225 504 270 S600 350 682 340" />
      </g>
      <g className="map-nodes">
        {[
          [48, 310], [170, 257], [286, 250], [420, 185], [535, 205], [714, 108], [80, 120], [310, 140],
          [590, 130], [720, 310], [170, 370], [360, 270], [504, 270], [682, 340],
        ].map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r={index % 4 === 0 ? 5 : 3} />
        ))}
      </g>
      <path className="map-highlight" d="M48 310 C140 230 190 360 286 250 S460 170 535 205 S652 174 714 108" />
    </svg>
  );
}
