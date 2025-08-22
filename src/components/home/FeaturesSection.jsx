import React from "react";
import Reveal from "../../Reveal.jsx";
import { Lightbulb, Users, Briefcase, Globe, Award, GraduationCap } from "lucide-react";

const items = [
  { title: "Competitive Events", desc: "Participate in regional and state competitions across business disciplines including marketing, finance, and entrepreneurship.", icon: Lightbulb },
  { title: "Leadership Development", desc: "Develop essential leadership skills through chapter officer positions, project management, and peer mentoring opportunities.", icon: Users },
  { title: "Professional Network", desc: "Connect with business professionals, alumni, and fellow Ethics Bowl members to build lasting professional relationships.", icon: Briefcase },
  { title: "Real-World Experience", desc: "Gain hands-on experience through internships, business partnerships, and community service projects.", icon: Globe },
  { title: "Recognition & Awards", desc: "Earn recognition for academic and competitive achievements at local, state, and international levels.", icon: Award },
  { title: "College & Career Prep", desc: "Receive guidance on college applications, scholarships, and career planning from advisors and alumni.", icon: GraduationCap },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal><h2 style={{ fontSize: 40, fontWeight: 800, textAlign: "center", marginBottom: 12 }}>Why Join <span style={{ color: "#ef4444" }}>Ethics Bowl</span>?</h2></Reveal>
        <Reveal delay={80}><p style={{ textAlign: "center", color: "#475569", maxWidth: 720, margin: "0 auto 40px" }}>Opportunities to compete, lead, and grow—in and beyond the classroom.</p></Reveal>
        <div className="features-grid" style={{ display: "grid", gap: 16 }}>
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i*60}>
                <div
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 16,
                    padding: 24,
                    boxShadow: "0 8px 20px rgba(2,6,23,0.05)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ background: "transparent", color: "#ef4444", width: 36, height: 36, aspectRatio: "1 / 1", borderRadius: 9999, display: "grid", placeItems: "center", border: "2px solid #ef4444" }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{it.title}</div>
                      <div style={{ color: "#475569", lineHeight: 1.65 }}>{it.desc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
