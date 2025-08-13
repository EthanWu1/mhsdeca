import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section style={{ minHeight: "80vh", display: "grid", placeItems: "center", padding: "0 24px" }}>
      <div style={{ maxWidth: 960, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e398a9e8_download.png" alt="DECA Logo" style={{ width: 140 }} />
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Memorial High School <span style={{ color: "#ef4444" }}>DECA</span></h1>
        <p style={{ fontSize: 20, color: "#334155", maxWidth: 720, margin: "16px auto 24px" }}>
          Join the premier business and marketing organization where future entrepreneurs and leaders develop real‑world skills.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <Link to="/join" style={{ padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "white", fontWeight: 700 }}>Join Now</Link>
          <Link to="/events" style={{ padding: "12px 16px", borderRadius: 12, background: "white", border: "1px solid #e5e7eb", color: "#111827", fontWeight: 700 }}>See Events</Link>
        </div>
      </div>
    </section>
  );
}
