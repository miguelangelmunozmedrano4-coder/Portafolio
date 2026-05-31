import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Simulate send (replace with EmailJS or your backend)
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  const info = [
    {
      icon: "📧",
      label: "Email",
      value: "miguelangelmunozmedrano4@gmail.com",
      href: "mailto:miguelangelmunozmedrano4@gmail.com",
      color: "#38bdf8",
    },
    {
      icon: "📱",
      label: "WhatsApp / Teléfono",
      value: "+57 301 505 4808",
      href: "https://wa.me/573015054808",
      color: "#34d399",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Miguel Angel Muñoz Medrano",
      href: "https://www.linkedin.com/in/miguel-angel-muñoz-medrano-916970412",
      color: "#818cf8",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "miguelangelmunozmedrano4-coder",
      href: "https://github.com/miguelangelmunozmedrano4-coder",
      color: "#f59e0b",
    },
  ];

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    color: "var(--text)",
    fontSize: "0.95rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{
      padding: "8rem 2rem",
      background: "var(--bg2)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: "absolute",
        bottom: "0", left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "300px",
        background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
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
            — Contacto
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}>
            Hablemos <span style={{ color: "var(--accent)" }}>juntos</span>
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: "450px", margin: "0 auto" }}>
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible y con ganas de construir algo increíble.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="contact-grid"
        >
          {/* Left: Contact info */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "2rem",
            }}>
              Información de contacto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {info.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = item.color + "55";
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${item.color}18`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px",
                    borderRadius: "10px",
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "var(--text3)",
                      fontWeight: 500,
                      marginBottom: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "var(--text2)",
                      fontWeight: 500,
                      wordBreak: "break-all",
                    }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            padding: "2rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "1.75rem",
            }}>
              Envíame un mensaje
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text2)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text2)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text2)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}>
                  Mensaje
                </label>
                <textarea
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: "0.85rem" }}>
                  Por favor completa todos los campos.
                </p>
              )}
              {status === "sent" && (
                <p style={{ color: "var(--accent3)", fontSize: "0.85rem" }}>
                  ✓ Mensaje enviado. ¡Gracias, te respondo pronto!
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  padding: "0.9rem",
                  background: status === "sent" ? "var(--accent3)" : "var(--accent)",
                  color: "#050a14",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                  boxShadow: "0 0 30px rgba(56,189,248,0.3)",
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
                onMouseEnter={e => status !== "sending" && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {status === "sending" ? "Enviando..." : status === "sent" ? "✓ Enviado" : "Enviar mensaje →"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
