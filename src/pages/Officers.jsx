import React from "react";
import Reveal from "../Reveal.jsx";

export default function Officers() {
  const officers = [
  { name: "Vice President", role: "Open" },
  { name: "Secretary", role: "Open" },
  { name: "Treasurer", role: "Open" },
  { name: "Public Relations", role: "Open" },
    { id: 1, name: "Ethan Wu", role: "Co‑Founder", email: "wueth000@mysbisd.org" },
    { id: 2, name: "Brendan Liu", role: "Co‑Founder", email: "liubre000@mysbisd.org" },
  ];

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("input");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    // Create animated circular toast at center-top
    const toast = document.createElement("div");
    toast.textContent = "Copied!";
    Object.assign(toast.style, {
      position: "fixed",
      top: "40px",
      left: "50%",
      transform: "translateX(-50%) scale(0.9)",
      background: "white",
      color: "#111827",
      border: "2px solid #ef4444",
      width: "100px",
      height: "100px",
      display: "grid",
      placeItems: "center",
      borderRadius: "9999px",
      fontWeight: "800",
      boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
      zIndex: 1000,
      opacity: 0,
      transition: "opacity .12s ease-out, transform .12s ease-out",
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) scale(1)";
    });
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) scale(0.95)";
      setTimeout(() => toast.remove(), 250);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal><h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Officers</h1></Reveal>
        <div className="officers-grid" style={{ display: "grid", gap: 12 }}>
          {officers.map((o, idx) => (
            <Reveal key={o.id} delay={idx * 80}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
                <div style={{ fontWeight: 800, marginBottom: 2 }}>{o.name}</div>
                <div style={{ color: "#475569", marginBottom: 8 }}>{o.role}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <a href={`mailto:${o.email}`} style={{ color: "#2563eb", fontWeight: 600 }}>{o.email}</a>
                  <button
                    onClick={() => copy(o.email)}
                    aria-label={`Copy ${o.name}'s email`}
                    title="Copy email"
                    style={{ border: "1px solid #e5e7eb", background: "#fff", padding: "6px 8px", borderRadius: 8, cursor: "pointer" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}