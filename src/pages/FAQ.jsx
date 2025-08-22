import React from "react";

export default function FAQ() {
  const items = [
    { q: "What is Ethics Bowl?", a: "A team-based discussion club exploring philosophy and ethical dilemmas in a respectful setting." },
    { q: "Do I need prior experience?", a: "No — beginners are welcome. We’ll help you learn the format and build strong arguments." },
    { q: "What happens at meetings?", a: "We analyze cases, practice argumentation, then finish with a short quiz bowl (with small prizes!)." },
    { q: "How do I join?", a: "Head to the Join page to register. Everyone is welcome." },
  ];
  return (
    <div className="section">
      <div className="container">
        <h1 className="reveal" style={{ fontWeight:900, fontSize:"clamp(22px,5vw,32px)" }}>FAQ</h1>
        <div className="reveal" style={{ display:"grid", gap:12, marginTop:12 }}>
          {items.map((it, idx)=>(
            <details key={idx} className="card" style={{ padding:"14px 16px" }}>
              <summary style={{ cursor:"pointer", fontWeight:800 }}>{it.q}</summary>
              <div style={{ marginTop:8, color:"var(--eb-muted)" }}>{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}