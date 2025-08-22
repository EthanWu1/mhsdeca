import React from "react";
import Reveal from "../Reveal.jsx";
import instaImg from "../assets/instagram.webp";
import remindImg from "../assets/remind.png";

export default function Join() {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "64px 24px" }}>
      <Reveal>
        <div style={{ maxWidth: 720, textAlign: "center", background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 24 }}>
          \1

{/* CTE Requirement Notice */}
<div style={{ marginTop: 16, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, background: "#fff8f8" }}>
  <strong>Eligibility:</strong> Students must be currently enrolled in, or have previously enrolled in, a <em>CTE‑approved</em> course.
  <div style={{ marginTop: 8 }}>
    You can confirm this by checking the school’s course catalog. If you’re unsure, ask a counselor or Ethics Bowl advisor.
  </div>
</div>

          <p style={{ color: "#475569", marginBottom: 16 }}>Open to all students—no experience required.</p>
          <a href="https://forms.gle/JgPeJ1Arum4HKAtm6" target="_blank" rel="noreferrer" style={{ padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "white", fontWeight: 700, display: "inline-block" }}>
            Register Now
          </a>
        </div>
      </Reveal>
    </div>
  );
}

{/* Stay Connected */}
<div style={{ marginTop: 24, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, background: "#fff" }}>
  <strong>Stay Connected</strong>
  <div style={{ marginTop: 8 }}>
    Follow us on <a href="https://www.instagram.com/deca_memorialhs/" target="_blank" rel="noreferrer" style={{ color: "#db2777", fontWeight: 700 }}>Instagram</a>
    {" "}and join our <a href="https://www.remind.com/join/deca4ever" target="_blank" rel="noreferrer" style={{ color: "#2563eb", fontWeight: 700 }}>Remind</a> for updates.
  </div>
</div>
