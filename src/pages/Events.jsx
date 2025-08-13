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
          {"No upcoming events at this time."</div>
      </div>
    </div>
  );
}
