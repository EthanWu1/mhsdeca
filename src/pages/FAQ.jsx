import React from "react";

export default function FAQ() {
  const items = [
    { q: "What is Ethics Bowl?", a: "Ethics Bowl is a student club that discusses philosophy and real-world ethical dilemmas in a respectful, team-based format." },
    { q: "Do I need prior philosophy experience?", a: "No! We welcome all levels — beginners included." },
    { q: "What happens at meetings?", a: "We analyze cases, practice argumentation, and finish with a short quiz bowl with small prizes." },
    { q: "How do I join?", a: "Head to the Join page to register. Everyone is welcome." },
  ];
  return (
    <div style={{ padding: "120px 16px 48px" }}>
      <h1 style={{fontWeight:900, fontSize:"clamp(22px,5vw,32px)", color:"#f3f4f6"}}>FAQ</h1>
      <div style={{maxWidth:1120, margin:"16px auto", display:"grid", gap:12}}>
        {items.map((it, idx) => (
          <details key={idx} className="card reveal" style={{padding:"14px 16px"}}>
            <summary style={{cursor:"pointer", fontWeight:800, color:"#fca5a5"}}>{it.q}</summary>
            <div style={{marginTop:8, color:"#e5e7eb"}}>{it.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}