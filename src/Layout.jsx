import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, UserPlus, Users, Calendar } from "lucide-react";

import logoPadded from "./assets/logo_new.png";
import instaImg from "./assets/instagram.webp";
import remindImg from "./assets/remind.webp";

const nav = [
  { title: "Home", url: "/", icon: HomeIcon },
  { title: "Join DECA", url: "/join", icon: UserPlus },
  { title: "Officers", url: "/officers", icon: Users },
  { title: "Events", url: "/events", icon: Calendar },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Top nav */}
      <nav
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "100%",
          maxWidth: 1120,
        }}
      >
        <div
          style={{
            margin: "0 16px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(229,231,235,0.8)",
            borderRadius: 9999,
            padding: "12px 16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            {/* Brand */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e398a9e8_download.png"
                  alt="DECA Logo"
                  className="brand-logo"
                  style={{ height: 28, width: "auto" }}
                />
              </div>
              <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
                Memorial DECA
              </span>
            </Link>

            {/* Desktop links */}
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {nav.map((item) => {
                const active = location.pathname === item.url;
                const Icon = item.icon;
                const cls = active
                  ? {
                      background: "#ef4444",
                      color: "white",
                      boxShadow: "0 6px 16px rgba(239,68,68,0.25)",
                    }
                  : { color: "#475569" };
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 999,
                      transition: "all .2s",
                      ...cls,
                    }}
                  >
                    <Icon size={16} />
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile toggle (CSS will show/hide via .nav-mobile-btn / .nav-links media queries) */}
            <button
              className="nav-mobile-btn"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                border: "1px solid #e5e7eb",
                background: "#fff",
                padding: "8px 10px",
                borderRadius: 8,
                fontWeight: 700,
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 320,
            height: 320,
            background: "rgba(239,68,68,0.1)",
            borderRadius: "9999px",
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 320,
            height: 320,
            background: "rgba(248,113,113,0.12)",
            borderRadius: "9999px",
            filter: "blur(48px)",
          }}
        />
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="mobile-menu-panel"
          style={{
            position: "fixed",
            top: 92,
            left: 0,
            right: 0,
            zIndex: 49,
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              margin: "0 16px",
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              padding: 12,
            }}
          >
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{ padding: "10px 8px" }}>
                  <Link
                    to={item.url}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#111827",
                      fontWeight: 600,
                    }}
                  >
                    <Icon size={16} /> <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 10, paddingTop: 96, flex: 1 }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: 80,
          borderTop: "1px solid #e5e7eb",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "24px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e398a9e8_download.png"
              alt="DECA Logo"
              className="brand-logo"
              style={{ height: 24, width: "auto" }}
            />
            <span style={{ fontWeight: 800 }}>Memorial DECA</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:decamemorialclub@gmail.com" style={{ color: "#64748b", fontSize: 14 }}>
              decamemorialclub@gmail.com
            </a>
            <a
              href="https://www.instagram.com/deca_memorialhs/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <img src={instaImg} alt="Instagram" style={{ width: 22, height: 22, borderRadius: 6 }} />
            </a>
            <a
              href="https://www.remind.com/join/deca4ever"
              target="_blank"
              rel="noreferrer"
              aria-label="Remind"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <img src={remindImg} alt="Remind" style={{ width: 22, height: 22, borderRadius: 6 }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}