export default function About() {
  const stats = [
    { value: "2024", label: "Inicio en la uni" },
    { value: "2028", label: "Graduación esperada" },
    { value: "3+", label: "Certificaciones Cisco" },
    { value: "15+", label: "Tecnologías" },
  ];

  return (
    <section id="about" style={{
      padding: "8rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}
      className="about-grid"
      >
        {/* Left: Photo + floating badge */}
        <div style={{ position: "relative", animation: "fadeUp 0.8s ease forwards" }}>
          {/* Photo container */}
          <div style={{
            position: "relative",
            width: "fit-content",
            margin: "0 auto",
          }}>
            {/* Decorative ring */}
            <div style={{
              position: "absolute",
              inset: "-16px",
              borderRadius: "50%",
              border: "1px solid var(--border2)",
              animation: "rotate-slow 20s linear infinite",
            }}>
              <div style={{
                position: "absolute",
                top: "0", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "10px", height: "10px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 15px var(--accent)",
              }} />
            </div>

            {/* Photo */}
            <img
              src="/miguel.jpg"
              alt="Miguel Angel Muñoz Medrano"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: "3px solid var(--border2)",
                boxShadow: "0 0 60px rgba(56,189,248,0.2)",
                display: "block",
                animation: "pulse-glow 4s ease infinite",
              }}
            />

            {/* Floating badge */}
            <div style={{
              position: "absolute",
              bottom: "10px",
              right: "-20px",
              background: "var(--surface2)",
              border: "1px solid var(--border2)",
              borderRadius: "12px",
              padding: "10px 16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text3)", marginBottom: "2px" }}>Universidad del Sinú</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-display)" }}>Ing. de Sistemas</div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div style={{ animation: "fadeUp 0.8s ease 0.2s both" }}>
          {/* Label */}
          <p style={{
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            — Sobre mí
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}>
            Construyendo el futuro,{" "}
            <span style={{ color: "var(--accent)" }}>línea a línea</span>
          </h2>

          <p style={{
            color: "var(--text2)",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}>
            Soy Miguel Angel Muñoz Medrano, estudiante de Ingeniería de Sistemas en la
            Universidad del Sinú — Montería, Colombia. Comencé mi carrera en enero de 2024
            y espero graduarme en mayo de 2028.
          </p>

          <p style={{
            color: "var(--text2)",
            lineHeight: 1.85,
            marginBottom: "2rem",
            fontSize: "1rem",
          }}>
            Me apasiona el desarrollo web full stack, la ciberseguridad y las redes.
            Combino el rigor académico con el aprendizaje autodidacta, completando
            certificaciones de Cisco Networking Academy para fortalecer mi perfil profesional.
          </p>

          {/* Stats grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "2rem",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "var(--surface2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text3)", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://github.com/miguelangelmunozmedrano4-coder"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "0.65rem 1.25rem",
                border: "1px solid var(--border2)",
                borderRadius: "8px",
                color: "var(--text2)",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(56,189,248,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--text2)";
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-angel-muñoz-medrano-916970412"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "0.65rem 1.25rem",
                border: "1px solid var(--border2)",
                borderRadius: "8px",
                color: "var(--text2)",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "#0A66C2";
                e.currentTarget.style.background = "rgba(10,102,194,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--text2)";
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
