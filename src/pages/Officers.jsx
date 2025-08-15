import React from "react";
import Reveal from "../Reveal.jsx";
import audience from "../assets/audience.png";

export default function Officers() {
  const officers = [
    { id: 1, name: "Ethan Wu", role: "Co‑Founder", email: "wueth000@mysbisd.org" },
    { id: 2, name: "Brendan Liu", role: "Co‑Founder", email: "liubre000@mysbisd.org" },
    { id: 3, name: "Vice President", role: "Open", email: "" },
    { id: 4, name: "Secretary", role: "Open", email: "" },
    { id: 5, name: "Treasurer", role: "Open", email: "" },
    { id: 6, name: "Public Relations", role: "Open", email: "" },
  ];

  const gradeOf = (name) => (/(Ethan|Brendan)/i.test(name) ? 10 : null);
  const initials = (name="") => name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const el = document.createElement("input");
      el.value = text; document.body.appendChild(el);
      el.select(); document.execCommand("copy"); document.body.removeChild(el);
    }
    const toast = document.createElement("div");
    toast.textContent = "Copied!";
    Object.assign(toast.style, {
      position: "fixed", top: "28px", left: "50%",
      transform: "translateX(-50%) scale(0.98)",
      background: "#111827", color: "#fff", border: "none",
      padding: "12px 18px", minWidth: "140px", height: "42px",
      display: "grid", placeItems: "center",
      borderRadius: "12px", fontWeight: 800,
      boxShadow: "0 14px 40px rgba(0,0,0,0.2)", zIndex: 1000,
      opacity: 0, transition: "opacity .14s ease-out, transform .14s ease-out",
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) scale(1)";
    });
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) scale(0.95)";
      setTimeout(() => toast.remove(), 220);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#ef4444", display: "grid", placeItems: "center" }}>
            <img src={audience} alt="" width="22" height="22" style={{ filter: "invert(1)", display: "block" }} />
          </div>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Officers</h1>
            <div style={{ color: "#64748b" }}>Manage and view DECA chapter officers</div>
          </div>
        </div>
<div style={{ width: 160, border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 12px", color: "#111827", background: "#fff" }}>All Roles ▾</div>
          <div style={{ width: 160, border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 12px", color: "#111827", background: "#fff" }}>All Grades ▾</div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>Officers ({officers.length})</div>

          <div style={{ display: "grid", gap: 12 }}>
            {officers.map((o, idx) => (
              <Reveal key={(o.id||idx) + o.name} delay={idx * 70}>
                <div className="officer-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 14, boxShadow: "0 8px 22px rgba(2,6,23,0.05)", transition: "transform .14s ease, box-shadow .14s ease, border-color .14s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 999, background: "#ef4444", color: "white", display: "grid", placeItems: "center", fontWeight: 800 }}>
                        {initials(o.name)}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 800, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{o.name}</div>
                        <div style={{ color: "#475569" }}>{o.role}{gradeOf(o.name) ? ` • Grade ${gradeOf(o.name)}` : ""}</div>
                        {o.email && <a href={`mailto:${o.email}`} style={{ color: "#2563eb", fontWeight: 600 }}>{o.email}</a>}
                      </div>
                    </div>
                    {o.email && (
                      <button onClick={() => copy(o.email)} aria-label={`Copy ${o.name}'s email`} title="Copy email"
                        style={{ border: "1px solid #e5e7eb", background: "#fff", padding: "8px 10px", borderRadius: 8, cursor: "pointer" }}>
                        Copy
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
