export default function SGLogo({ size = 40, className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="48%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="sg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0d20" />
          <stop offset="100%" stopColor="#0f1229" />
        </linearGradient>
        <linearGradient id="sg-stroke-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="sg-stroke-bot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="sg-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
        <filter id="sg-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sg-hex-glow" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="200" height="200" rx="26" fill="url(#sg-bg)" />

      {/* Center glow */}
      <circle cx="100" cy="100" r="90" fill="url(#sg-center)" />

      {/* Subtle dot-matrix texture */}
      {[0,1,2,3,4,5,6].flatMap((row) =>
        [0,1,2,3,4,5,6].map((col) => (
          <circle
            key={`d${row}-${col}`}
            cx={20 + col * 26.5}
            cy={20 + row * 26.5}
            r="0.7"
            fill="#ffffff"
            opacity="0.045"
          />
        ))
      )}

      {/* Outer hexagon */}
      <polygon
        points="100,13 175,56 175,144 100,187 25,144 25,56"
        fill="none"
        stroke="url(#sg-grad)"
        strokeWidth="1.6"
        opacity="0.72"
        filter="url(#sg-hex-glow)"
      />

      {/* Second inner hexagon (thin, dashed) */}
      <polygon
        points="100,28 162,63.5 162,136.5 100,172 38,136.5 38,63.5"
        fill="none"
        stroke="url(#sg-grad)"
        strokeWidth="0.5"
        strokeDasharray="3 7"
        opacity="0.18"
      />

      {/* === Vertex dots === */}
      <circle cx="100" cy="13"  r="3" fill="#818cf8" opacity="0.95" />
      <circle cx="175" cy="56"  r="3" fill="#9880fb" opacity="0.95" />
      <circle cx="175" cy="144" r="3" fill="#a78bfa" opacity="0.95" />
      <circle cx="100" cy="187" r="3" fill="#22d3ee" opacity="0.95" />
      <circle cx="25"  cy="144" r="3" fill="#a78bfa" opacity="0.95" />
      <circle cx="25"  cy="56"  r="3" fill="#818cf8" opacity="0.95" />

      {/* === Circuit traces — top (down → right) === */}
      <polyline points="100,13 100,40 122,40"
        fill="none" stroke="#818cf8" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="119" y="37" width="6" height="6" rx="1.2"
        fill="none" stroke="#818cf8" strokeWidth="0.9" opacity="0.6" />
      <circle cx="122" cy="40" r="1.8" fill="#818cf8" opacity="0.85" />

      {/* === Circuit traces — top-right (left → down) === */}
      <polyline points="175,56 150,56 150,78"
        fill="none" stroke="#9880fb" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="147" y="75" width="6" height="6" rx="1.2"
        fill="none" stroke="#9880fb" strokeWidth="0.9" opacity="0.6" />
      <circle cx="150" cy="78" r="1.8" fill="#9880fb" opacity="0.85" />

      {/* === Circuit traces — bottom-right (left → up) === */}
      <polyline points="175,144 150,144 150,122"
        fill="none" stroke="#a78bfa" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="147" y="119" width="6" height="6" rx="1.2"
        fill="none" stroke="#a78bfa" strokeWidth="0.9" opacity="0.6" />
      <circle cx="150" cy="122" r="1.8" fill="#a78bfa" opacity="0.85" />

      {/* === Circuit traces — bottom (up → left) === */}
      <polyline points="100,187 100,160 78,160"
        fill="none" stroke="#22d3ee" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="75" y="157" width="6" height="6" rx="1.2"
        fill="none" stroke="#22d3ee" strokeWidth="0.9" opacity="0.6" />
      <circle cx="78" cy="160" r="1.8" fill="#22d3ee" opacity="0.85" />

      {/* === Circuit traces — bottom-left (right → up) === */}
      <polyline points="25,144 50,144 50,122"
        fill="none" stroke="#a78bfa" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="47" y="119" width="6" height="6" rx="1.2"
        fill="none" stroke="#a78bfa" strokeWidth="0.9" opacity="0.6" />
      <circle cx="50" cy="122" r="1.8" fill="#a78bfa" opacity="0.85" />

      {/* === Circuit traces — top-left (right → down) === */}
      <polyline points="25,56 50,56 50,78"
        fill="none" stroke="#818cf8" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <rect x="47" y="75" width="6" height="6" rx="1.2"
        fill="none" stroke="#818cf8" strokeWidth="0.9" opacity="0.6" />
      <circle cx="50" cy="78" r="1.8" fill="#818cf8" opacity="0.85" />

      {/* Small accent lines inside — left & right mid horizontal */}
      <line x1="25" y1="100" x2="38" y2="100" stroke="#818cf8" strokeWidth="0.8" opacity="0.3" />
      <line x1="162" y1="100" x2="175" y2="100" stroke="#22d3ee" strokeWidth="0.8" opacity="0.3" />
      <circle cx="38"  cy="100" r="1.2" fill="#818cf8" opacity="0.4" />
      <circle cx="162" cy="100" r="1.2" fill="#22d3ee" opacity="0.4" />

      {/* SG initials — main text with glow */}
      <text
        x="100"
        y="121"
        textAnchor="middle"
        fontFamily="system-ui,-apple-system,'Segoe UI',Arial,sans-serif"
        fontSize="76"
        fontWeight="900"
        letterSpacing="-4"
        fill="url(#sg-grad)"
        filter="url(#sg-glow)"
      >SG</text>

      {/* Micro label */}
      <text
        x="100"
        y="152"
        textAnchor="middle"
        fontFamily="monospace,'Courier New',monospace"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="3.5"
        fill="url(#sg-grad)"
        opacity="0.45"
      >DEV</text>
    </svg>
  )
}
