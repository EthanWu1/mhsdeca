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
    <section style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, textAlign: "center", marginBottom: 24 }}>Why Join <span style={{ color: "#ef4444" }}>DECA</span>?</h2>
        <p style={{ textAlign: "center", color: "#475569", maxWidth: 720, margin: "0 auto 40px" }}>Opportunities inside and outside the classroom to grow as a leader.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }} className="reveal-seq features-grid">
          {items.map((it, idx) => (
            <Reveal key={it.title} delay={idx * 70}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>{it.title}</h3>
                <p style={{ color: "#64748b", margin: 0 }}>{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
