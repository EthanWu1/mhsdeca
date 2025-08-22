import React from "react";
import ethicsLogo from "../../assets/ethics_logo.webp"; // adjust path if your assets differ

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0,0,0,.35)",
        position: "relative",
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 960, textAlign: "center" }} className="reveal">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img
            src={ethicsLogo}
            alt="Ethics Bowl Logo"
            className="hero-logo logo-hover-spin"
            style={{ height: "clamp(90px, 20vw, 160px)", width: "auto", objectFit: "contain" }}
          />
        </div>

        <h1
          style={{
            margin: 0,
            fontWeight: 900,
            fontSize: "clamp(26px, 6vw, 40px)",
            letterSpacing: "-0.02em",
            color: "#f3f4f6",
          }}
        >
          Ethics Bowl
        </h1>

        <p style={{ maxWidth: 680, margin: "10px auto 0", color: "#e5e7eb", lineHeight: 1.6 }}>
          Where critical thinking meets collaboration. We explore philosophical and real-world
          ethical dilemmas—then close each meeting with a fun quiz bowl and prizes.
        </p>

        <div style={{ marginTop: 20 }}>
          <a href="/join" className="btn" style={{ textDecoration: "none" }}>
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}