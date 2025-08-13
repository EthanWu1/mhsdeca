
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, UserPlus, Users, Calendar } from "lucide-react";

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

            {/* Mobile toggle */}
            <button
              className="nav-mobile"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "none",
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
        <div className="nav-mobile" style={{ position: "fixed", top: 92, left: 0, right: 0, zIndex: 49 }}>
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
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#E4405F" }}>
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4a3.54 3.54 0 0 1-1.5-.9c-.4-.4-.7-.9-.9-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm5.3-2.5a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z"/>
              </svg>
            </a>
            <a
              href="https://www.remind.com/join/deca4ever"
              target="_blank"
              rel="noreferrer"
              aria-label="Remind"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 512 512" style={{ color: "#2D77F7" }}>
                <path d="M256 32C132.3 32 32 119.7 32 224c0 62.9 40.1 118.2 101.9 153.4l-18.9 69.8c-4.1 15.1 12.3 27.1 25.1 19.1l82.9-52.1c10.5 1.5 21.3 2.3 32.1 2.3 123.7 0 224-87.7 224-192S379.7 32 256 32z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

