import React from "react";
import Reveal from "../Reveal.jsx";

export default function Officers() {
  const officers = [
    { id: 1, name: "Ethan Wu", role: "Co‑Founder" },
    { id: 2, name: "Brendan Liu", role: "Co‑Founder" },
  ];

  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal><h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Officers</h1></Reveal>
        <div className="reveal-seq" className="officers-grid" style={{ display: "grid", gap: 12 }}>
          {officers.map((o, idx) => (
            <Reveal key={o.id} delay={idx * 80}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
                <div style={{ fontWeight: 800 }}>{o.name}</div>
                <div style={{ color: "#475569" }}>{o.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
