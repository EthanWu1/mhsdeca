import React from "react";
import Reveal from "../../Reveal.jsx";

export default function AboutSection() {
  return (
    <section style={{ padding: "56px 24px", background: "white" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>What is DECA?</h2></Reveal>
        <Reveal delay={80}>
          <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6 }}>
            DECA prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management.
            Through competitive events, conferences, and leadership opportunities, members develop real‑world skills for college and careers.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a href="https://www.deca.org" target="_blank" rel="noreferrer" style={{ display:"inline-block", marginTop: 12, padding: "10px 14px", borderRadius: 12, background: "#111827", color: "white", fontWeight: 700 }}>
            Learn more at deca.org
          </a>
        </Reveal>
      </div>
    </section>
  );
}
