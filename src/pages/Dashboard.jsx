import React from "react";

export default function Dashboard() {
  const members = [
    { id: 1, first_name: "Alex", last_name: "Kim", grade_level: "11", status: "active" },
    { id: 2, first_name: "Jordan", last_name: "Nguyen", grade_level: "10", status: "pending" },
  ];

  return (
    <div style={{ minHeight: "60vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Members</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {members.map((m) => (
            <div key={m.id} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
              <div style={{ fontWeight: 800 }}>{m.first_name} {m.last_name}</div>
              <div style={{ color: "#475569" }}>Grade {m.grade_level} · {m.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
