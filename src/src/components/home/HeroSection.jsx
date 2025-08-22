import ethicsLogo from "../assets/ethics_logo.webp";
import logoPadded from "../assets/logo_padded.webp";
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section style={backgroundImage:`url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop")`,backgroundSize:"cover",backgroundPosition:"center",boxShadow:"inset 0 0 0 2000px rgba(0,0,0,.35)"} style={{ minHeight: "80vh", display: "grid", placeItems: "center", padding: "0 24px" }}>
      <div style={{ maxWidth: 960, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img className="hero-logo logo-hover-spin" src={typeof ethicsLogo!=="undefined"?ethicsLogo:undefined} alt="Ethics Bowl Logo" />
        </div>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Memorial High School <span style={{ color: "#ef4444" }}>DECA</span></h1>
        <p style={{maxWidth:640,lineHeight:1.6}}>Welcome to <strong>Ethics Bowl</strong> — where critical thinking meets collaboration. Each meeting explores philosophical and ethical dilemmas and ends with a fun quiz bowl with prizes.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link to="/join" style={{ padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "white", fontWeight: 700 }}>Join Now</Link>
          <Link to="/events" style={{ padding: "12px 16px", borderRadius: 12, background: "white", border: "1px solid #e5e7eb", color: "#111827", fontWeight: 700 }}>See Events</Link>
        </div>
      </div>
    </section>
  );
}
