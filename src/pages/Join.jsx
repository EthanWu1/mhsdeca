import React from "react";
import Reveal from "../Reveal.jsx";
import fire from "../assets/fire.png";
import check from "../assets/check.png";
import external from "../assets/external.png";

export default function Join() {
  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 820, textAlign: "center" }}>
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
              gap: 10,
              background: "linear-gradient(180deg,#ef4444,#dc2626)",
              color: "white",
              fontWeight: 800,
              padding: "16px 28px",
              borderRadius: 999,
              boxShadow: "0 20px 50px rgba(239,68,68,.25)",
              transform: "translateZ(0)",
              transition: "transform .15s ease",
            }}
            onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.03)"}
            onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
          >
            Go to Application Form
            <img src={external} alt="" width="18" height="18" style={{ filter: "invert(1)" }} />
          </a>
        </div>

        {/* Bottom CTE eligibility box */}
        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 18, maxWidth: 820, margin: "0 auto",
                        boxShadow: "0 10px 26px rgba(2,6,23,.06)", transition: "transform .15s ease" }}
               onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.01)"} onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <img src={check} alt="" width="28" height="28" style={{ marginTop: 2 }} />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>CTE Eligibility</div>
                <div style={{ color: "#64748b" }}>
                  Students must be currently enrolled in, or have previously completed, a <em>CTE‑approved</em> course to be eligible for DECA membership.
                </div>
              </div>
            </div>
          </div>

          {/* Remind & Instagram boxes */}
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16, maxWidth: 820, margin: "0 auto",
                          boxShadow: "0 8px 20px rgba(2,6,23,.05)", transition: "transform .15s ease" }}
                 onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.01)"} onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={fire} alt="" width="28" height="28" />
                  <div style={{ fontWeight: 800 }}>Join our Remind</div>
                </div>
                <a href="https://www.remind.com/join/deca4ever" target="_blank" rel="noreferrer"
                   style={{ color: "#2563eb", fontWeight: 800 }}>remind.com/join/deca4ever ↗</a>
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16, maxWidth: 820, margin: "0 auto",
                          boxShadow: "0 8px 20px rgba(2,6,23,.05)", transition: "transform .15s ease" }}
                 onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.01)"} onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={fire} alt="" width="28" height="28" />
                  <div style={{ fontWeight: 800 }}>Follow our Instagram</div>
                </div>
                <a href="https://www.instagram.com/deca_memorialhs/" target="_blank" rel="noreferrer"
                   style={{ color: "#db2777", fontWeight: 800 }}>@deca_memorialhs ↗</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
