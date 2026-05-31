export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 2rem",
      textAlign: "center",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
        }}>
          M<span style={{ color: "var(--accent)" }}>.</span>
        </p>
        <p style={{ color: "var(--text3)", fontSize: "0.875rem" }}>
          © 2026 Miguel Angel Muñoz Medrano · Hecho con React & Vite
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          {[
            { icon: "🐙", href: "https://github.com/miguelangelmunozmedrano4-coder", label: "GitHub" },
            { icon: "💼", href: "https://www.linkedin.com/in/miguel-angel-muñoz-medrano-916970412", label: "LinkedIn" },
            { icon: "📧", href: "mailto:miguelangelmunozmedrano4@gmail.com", label: "Email" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: "36px", height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(56,189,248,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
