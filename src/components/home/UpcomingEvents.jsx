import React from "react";

export default function UpcomingEvents({ events = [] }) {
  return (
    <section style={{ padding: "64px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Upcoming Events</h2>
        {events.length === 0 ? (
          <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, textAlign: "center" }}>
            <p style={{ color: "#475569" }}>Our calendar is currently clear. Check back soon!</p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {events.map((ev) => (
              <div key={ev.id} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
                <div style={{ fontWeight: 700 }}>{ev.title}</div>
                <div style={{ color: "#475569" }}>{ev.date} · {ev.location}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
