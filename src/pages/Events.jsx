import Reveal from "../Reveal.jsx";

// Inline, styleable SVG so no image files are required
function CalendarIcon({ size = 24, color = "currentColor", strokeWidth = 2, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* calendar outline */}
      <rect x="3" y="5" width="18" height="16" rx="2" />
      {/* binding posts */}
      <line x1="8"  y1="3" x2="8"  y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      {/* top bar */}
      <line x1="3" y1="11" x2="21" y2="11" />
    </svg>
  );
}

export default function Events() {
  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "#ef4444",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 800
            }}
          >
            {/* Small white icon inside the red badge */}
            <CalendarIcon size={22} color="#ffffff" strokeWidth={2.25} />
          </div>

          <div>
            <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Events & Activities</h1>
            <div style={{ color: "#64748b" }}>Stay updated with all DECA chapter events</div>
          </div>
        </div>

        {/* Empty-state card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: 40,
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(2,6,23,0.05)"
          }}
        >
          <div style={{ marginBottom: 12, lineHeight: 0 }}>
            {/* Large gray icon (replaces the big emoji) */}
            <CalendarIcon size={64} color="#cbd5e1" strokeWidth={2} />
          </div>

          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>No Events Scheduled</div>
          <div style={{ color: "#64748b" }}>
            Our calendar is currently clear. Please check back soon for updates on upcoming meetings,
            competitions, and workshops!
          </div>
        </div>
      </div>
    </div>
  );
}
