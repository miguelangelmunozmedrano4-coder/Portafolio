const categories = [
  {
    title: "Frontend",
    color: "#38bdf8",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Vite", level: 70 },
    ],
  },
  {
    title: "Backend",
    color: "#818cf8",
    icon: "⚙️",
    skills: [
      { name: "Java", level: 75 },
      { name: "PHP", level: 70 },
      { name: "Python", level: 72 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    title: "Bases de Datos",
    color: "#34d399",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 72 },
      { name: "SQL", level: 78 },
      { name: "Prisma ORM", level: 65 },
    ],
  },
  {
    title: "Herramientas & DevOps",
    color: "#f59e0b",
    icon: "🔧",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 75 },
    ],
  },
];

const techIcons = [
  { name: "Java", bg: "#f89820", icon: "☕" },
  { name: "PHP", bg: "#777bb4", icon: "🐘" },
  { name: "Python", bg: "#3776ab", icon: "🐍" },
  { name: "HTML", bg: "#e34f26", icon: "🌐" },
  { name: "CSS", bg: "#1572b6", icon: "🎨" },
  { name: "JavaScript", bg: "#f7df1e", icon: "⚡" },
  { name: "React", bg: "#61dafb", icon: "⚛️" },
  { name: "PostgreSQL", bg: "#336791", icon: "🐘" },
  { name: "SQL", bg: "#025e8c", icon: "📊" },
  { name: "VS Code", bg: "#0078d4", icon: "💻" },
  { name: "Vercel", bg: "#000", icon: "▲" },
  { name: "Git", bg: "#f05032", icon: "🔀" },
  { name: "GitHub", bg: "#24292e", icon: "🐙" },
  { name: "Vite", bg: "#646cff", icon: "⚡" },
  { name: "Prisma", bg: "#0c344b", icon: "◈" },
];

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: "6px",
        fontSize: "0.875rem",
        color: "var(--text2)",
        fontWeight: 500,
      }}>
        <span>{name}</span>
        <span style={{ color, fontSize: "0.8rem" }}>{level}%</span>
      </div>
      <div style={{
        height: "4px",
        background: "var(--surface2)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${level}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          borderRadius: "2px",
          boxShadow: `0 0 8px ${color}66`,
          transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "8rem 2rem",
      background: "var(--bg2)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grid background decoration */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            — Stack Tecnológico
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}>
            Tecnologías que <span style={{ color: "var(--accent)" }}>domino</span>
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: "500px", margin: "0 auto" }}>
            Un ecosistema completo desde el frontend hasta la base de datos.
          </p>
        </div>

        {/* Tech pills */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
          marginBottom: "4rem",
        }}>
          {techIcons.map((t, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text2)",
              transition: "all 0.2s",
              cursor: "default",
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,189,248,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <span>{t.icon}</span>
              {t.name}
            </div>
          ))}
        </div>

        {/* Skill bars grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
        className="skills-grid"
        >
          {categories.map((cat, i) => (
            <div key={i} style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cat.color + "44";
              e.currentTarget.style.boxShadow = `0 0 30px ${cat.color}11`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                marginBottom: "1.75rem",
              }}>
                <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: cat.color,
                }}>
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((s, j) => (
                <SkillBar key={j} {...s} color={cat.color} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
