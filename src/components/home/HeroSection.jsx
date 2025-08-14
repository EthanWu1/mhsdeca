import logoPadded from "../../assets/logo_new.png";
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section style={{ minHeight: "80vh", display: "grid", placeItems: "center", padding: "0 24px" }}>
      <div style={{ maxWidth: 960, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img className="hero-logo logo-hover-spin" src={logoPadded} alt="DECA Logo" className="hero-logo logo-spin" style={{ height: "clamp(80px, 18vw, 140px)", width: "auto" }} />
        </div>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Memorial High School <span style={{ color: "#ef4444" }}>DECA</span></h1>
        <p style={{ fontSize: 20, color: "#334155", maxWidth: 720, margin: "16px auto 24px" }}>
          Join the premier business and marketing organization where future entrepreneurs and leaders develop real‑world skills.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link to="/join" style={{ padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "white", fontWeight: 700 }}>Join Now</Link>
          <Link to="/events" style={{ padding: "12px 16px", borderRadius: 12, background: "white", border: "1px solid #e5e7eb", color: "#111827", fontWeight: 700 }}>See Events</Link>
        </div>
      </div>
    </section>
  );
}
