import React from "react";
import Reveal from "../Reveal.jsx";
import instaImg from "../assets/instagram.webp";
import remindImg from "../assets/remind.png";

export default function Join() {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "64px 24px" }}>
      <Reveal>
        <div style={{ maxWidth: 720, textAlign: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 24 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Join DECA</h1>
          <p style={{ color: "#475569", marginBottom: 16 }}>Open to all students—no experience required.</p>
          <a href="https://forms.gle/JgPeJ1Arum4HKAtm6" target="_blank" rel="noreferrer" style={{ padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "white", fontWeight: 700, display: "inline-block" }}>
            Open Google Form
          </a>
        </div>
      </Reveal>
    </div>
  );
}
