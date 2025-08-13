import React from "react";
import Reveal from "../Reveal.jsx";
import { events } from "../data/events.js";

export default function Events() {
  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Reveal><h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Events</h1></Reveal>
        <Reveal delay={120}><p style={{ color: "#475569" }}>No events scheduled yet—stay tuned.</p></Reveal>
              <div className="reveal-seq" style={{ display: "grid", gap: 12, marginTop: 16 }}>
          {events.map((ev, idx) => (
            <Reveal key={ev.id} delay={idx * 80}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
                <div style={{ fontWeight: 700 }}>{ev.title}</div>
                <div style={{ color: "#475569" }}>{ev.date} · {ev.location}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
