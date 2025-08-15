import React from "react";
import Reveal from "../../Reveal.jsx";

const items = [
  { title: "Competitive Events", desc: "Compete in regional and state competitions across marketing, finance, and entrepreneurship." },
  { title: "Leadership", desc: "Run for officer positions, lead projects, and build confidence." },
  { title: "Networking", desc: "Meet peers, mentors, and industry professionals through conferences and socials." },
  { title: "Community Impact", desc: "Create service initiatives that make a real difference locally." },
  { title: "Career Skills", desc: "Public speaking, project management, teamwork, and more—skills that matter." },
  { title: "College Prep", desc: "Scholarships, resume building, and application support." },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: "56px 24px", background: "white" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, textAlign: "center", marginBottom: 12 }}>
          Why Join <span style={{ color: "#ef4444" }}>DECA</span>?
        </h2>
        <p style={{ textAlign: "center", color: "#475569", maxWidth: 720, margin: "0 auto 32px" }}>
          Opportunities to compete, lead, and grow—in and beyond the classroom.
        </p>
        <div className="features-grid" style={{ display: "grid", gap: 16 }}>
          {items.map((it, i) => (
            <div key={it.title} className="reveal-seq">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: "0 8px 20px rgba(2,6,23,0.05)",
                }}
                className="reveal-base"
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ background: "#ef4444", color: "white", width: 40, height: 40, borderRadius: 12, display: "grid", placeItems: "center", fontWeight: 800 }}>●</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{it.title}</div>
                    <div style={{ color: "#475569", lineHeight: 1.6 }}>{it.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

