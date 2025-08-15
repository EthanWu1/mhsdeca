import React from "react";
import Reveal from "../Reveal.jsx";
import logo from "../assets/logo_new.png";

export default function Join() {
  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 820, textAlign: "center" }}>
        {/* Small tilted logo */}
        <img src={logo} alt="DECA" style={{ width: 36, height: 36, margin: "0 auto 12px", transform: "rotate(-20deg)" }} />

        <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, margin: 0 }}>Join Our Chapter</h1>
        <p style={{ color: "#64748b", fontSize: 18, maxWidth: 720, margin: "12px auto 22px", lineHeight: 1.6 }}>
          Ready to become a part of Memorial DECA? Click the button below to fill out our official membership application on Google Forms.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://forms.gle/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(180deg,#ef4444,#dc2626)",
              color: "white",
              fontWeight: 800,
              padding: "16px 28px",
              borderRadius: 999,
              boxShadow: "0 20px 50px rgba(239,68,68,.25)",
            }}
          >
            Go to Application Form
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Bottom CTE eligibility box */}
        <div style={{ marginTop: 28, display: "grid", placeItems: "center" }}>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 18, maxWidth: 820, boxShadow: "0 10px 26px rgba(2,6,23,.06)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9999, background: "#dcfce7", display: "grid", placeItems: "center" }}>
                <span style={{ color: "#16a34a", fontWeight: 900 }}>✓</span>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>CTE Eligibility</div>
                <div style={{ color: "#64748b" }}>
                  Students must be currently enrolled in, or have previously completed, a <em>CTE‑approved</em> course to be eligible for DECA membership.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
