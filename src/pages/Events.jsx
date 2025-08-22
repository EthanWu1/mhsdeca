import Reveal from "../Reveal.jsx";

export default function Events() {
  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#ef4444", color: "#fff", display:"grid", placeItems: "center", fontWeight:800 }}>📅</div>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Events & Activities</h1>
            <div style={{ color: "#64748b" }}>Stay updated with all Ethics Bowl chapter events</div>
          </div>
        </div>
        <div style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius: 16, padding: 40, textAlign:"center", boxShadow: "0 8px 24px rgba(2,6,23,0.05)" }}>
          <div style={{ fontSize: 64, color: "#cbd5e1", lineHeight: 1, marginBottom: 12 }}>🗓️</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>No Events Scheduled</div>
          <div style={{ color: "#64748b" }}>Our calendar is currently clear. Please check back soon for updates on upcoming meetings, competitions, and workshops!</div>
        </div>
      </div>
    </div>
  );
}

