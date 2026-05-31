import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Certificados", href: "#certs" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 2rem",
      height: "70px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(5,10,20,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(56,189,248,0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "1.3rem",
        letterSpacing: "0.05em",
        color: "var(--text)",
      }}>
        M<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{
        display: "flex", gap: "2rem", alignItems: "center",
      }} className="nav-desktop">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => handleNav(l.href)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: active === l.href ? "var(--accent)" : "var(--text2)",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
              position: "relative",
            }}
            onMouseEnter={e => e.target.style.color = "var(--text)"}
            onMouseLeave={e => e.target.style.color = active === l.href ? "var(--accent)" : "var(--text2)"}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://github.com/miguelangelmunozmedrano4-coder"
          target="_blank" rel="noopener noreferrer"
          style={{
            padding: "0.5rem 1.25rem",
            border: "1px solid var(--accent)",
            borderRadius: "6px",
            color: "var(--accent)",
            fontSize: "0.875rem",
            fontWeight: 600,
            transition: "all 0.2s",
            background: "transparent",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#050a14";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
          }}
        >
          GitHub
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
        className="nav-mobile-btn"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "var(--accent)",
            transition: "all 0.3s",
            transformOrigin: "center",
            transform: open
              ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
              : i === 1 ? "opacity:0; scaleX(0)"
              : "rotate(-45deg) translate(5px, -5px)"
              : "none",
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", top: "70px", left: 0, right: 0,
          background: "rgba(5,10,20,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1rem",
          animation: "fadeIn 0.2s ease",
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                color: active === l.href ? "var(--accent)" : "var(--text2)",
                fontWeight: 500,
                fontSize: "1.1rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
