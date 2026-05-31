const certs = [
  {
    title: "Conceptos Básicos de Hardware de Computadora",
    issuer: "Cisco Networking Academy",
    date: "06 Feb 2026",
    color: "#38bdf8",
    icon: "💻",
    description: "Fundamentos del hardware de computadoras: componentes, ensamblaje y mantenimiento de sistemas.",
  },
  {
    title: "Introducción a Ciberseguridad",
    issuer: "Cisco Networking Academy",
    date: "05 May 2026",
    certId: "1c77def4-5be0-4aa8-a9f4-5a81f92ce7fa",
    color: "#818cf8",
    icon: "🔐",
    description: "Principios fundamentales de seguridad informática, amenazas digitales y buenas prácticas de protección.",
  },
  {
    title: "Introducción a Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "13 May 2026",
    certId: "4a0652c1-1468-4e91-8aea-27f4241f3eb8",
    color: "#34d399",
    icon: "🌐",
    description: "Simulación y diseño de redes con Cisco Packet Tracer: topologías, configuración de dispositivos y protocolos.",
  },
];

export default function Certificates() {
  return (
    <section id="certs" style={{
      padding: "8rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{
          fontSize: "0.8rem",
          color: "var(--accent)",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          — Certificaciones
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}>
          Mis <span style={{ color: "var(--accent)" }}>certificados</span>
        </h2>
        <p style={{ color: "var(--text2)", maxWidth: "450px", margin: "0 auto" }}>
          Certificaciones oficiales de Cisco Networking Academy que avalan mi formación en tecnologías de red.
        </p>
      </div>

      {/* Certs grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}
      className="certs-grid"
      >
        {certs.map((c, i) => (
          <div key={i} style={{
            position: "relative",
            padding: "2rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            transition: "all 0.3s",
            overflow: "hidden",
            animation: `fadeUp 0.6s ease ${i * 0.15}s both`,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = c.color + "55";
            e.currentTarget.style.boxShadow = `0 20px 60px ${c.color}18`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            {/* Top accent bar */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "3px",
              background: `linear-gradient(90deg, ${c.color}, transparent)`,
              borderRadius: "20px 20px 0 0",
            }} />

            {/* Cisco badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                width: "42px", height: "42px",
                borderRadius: "10px",
                background: `${c.color}18`,
                border: `1px solid ${c.color}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--text3)", fontWeight: 500 }}>
                  {c.issuer}
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: c.color,
                }}>
                  Certificado oficial ✓
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}>
              {c.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: "0.85rem",
              color: "var(--text3)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}>
              {c.description}
            </p>

            {/* Footer */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                color: "var(--text3)",
              }}>
                <span>📅</span>
                {c.date}
              </div>
              {c.certId && (
                <div style={{
                  fontSize: "0.65rem",
                  color: "var(--text3)",
                  fontFamily: "monospace",
                  maxWidth: "120px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  ID: {c.certId.slice(0, 8)}...
                </div>
              )}
            </div>

            {/* Decorative background */}
            <div style={{
              position: "absolute",
              bottom: "-30px",
              right: "-30px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${c.color}0a, transparent 70%)`,
              pointerEvents: "none",
            }} />
          </div>
        ))}
      </div>

      {/* Cisco Academy banner */}
      <div style={{
        marginTop: "3rem",
        padding: "2rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{
            width: "50px", height: "50px",
            borderRadius: "12px",
            background: "rgba(56,189,248,0.1)",
            border: "1px solid var(--border2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}>
            🎓
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: "2px",
            }}>
              Cisco Networking Academy
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text2)" }}>
              3 certificaciones completadas · Formación continua en networking y ciberseguridad
            </div>
          </div>
        </div>
        <a
          href="https://www.netacad.com"
          target="_blank" rel="noopener noreferrer"
          style={{
            padding: "0.65rem 1.5rem",
            border: "1px solid var(--border2)",
            borderRadius: "8px",
            color: "var(--accent)",
            fontSize: "0.875rem",
            fontWeight: 600,
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(56,189,248,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Ver Plataforma →
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .certs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
