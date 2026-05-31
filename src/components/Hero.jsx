import { useEffect, useState, useRef } from "react";

const roles = [
  "Desarrollador Full Stack",
  "Estudiante de Ing. de Sistemas",
  "Apasionado por la Tecnología",
  "Cisco Networking Academy",
];

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span>
      <span style={{ color: "var(--accent)" }}>{text}</span>
      <span style={{ animation: "blink 1s step-end infinite", color: "var(--accent)" }}>|</span>
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let raf;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${p.a * 0.4})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="hero" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "0 2rem",
    }}>
      {/* Background canvas */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0,
        pointerEvents: "none",
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "400px", height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
        animation: "float 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%",
        width: "350px", height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
        animation: "float 8s ease-in-out infinite reverse",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        textAlign: "center",
        maxWidth: "800px",
        animation: "fadeUp 0.8s ease forwards",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          border: "1px solid var(--border2)",
          borderRadius: "100px",
          marginBottom: "2rem",
          background: "rgba(56,189,248,0.05)",
          fontSize: "0.8rem",
          color: "var(--accent)",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}>
          <span style={{
            width: "8px", height: "8px",
            borderRadius: "50%",
            background: "var(--accent3)",
            display: "inline-block",
            boxShadow: "0 0 8px var(--accent3)",
            animation: "pulse-glow 2s ease infinite",
          }} />
          Disponible para proyectos
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}>
          Miguel Angel
          <br />
          <span style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Muñoz Medrano
          </span>
        </h1>

        {/* Typewriter */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 300,
          color: "var(--text2)",
          marginBottom: "2.5rem",
          minHeight: "2em",
        }}>
          <TypeWriter words={roles} />
        </p>

        {/* Description */}
        <p style={{
          color: "var(--text2)",
          fontSize: "1rem",
          maxWidth: "500px",
          margin: "0 auto 3rem",
          lineHeight: 1.8,
        }}>
          Estudiante de Ingeniería de Sistemas en la Universidad del Sinú, Montería.
          Apasionado por construir soluciones web modernas y escalables.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <a
            href="#contact"
            style={{
              padding: "0.85rem 2.5rem",
              background: "var(--accent)",
              color: "#050a14",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.95rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              boxShadow: "0 0 30px rgba(56,189,248,0.3)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(56,189,248,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(56,189,248,0.3)";
            }}
          >
            Contáctame
          </a>
          <a
            href="#skills"
            style={{
              padding: "0.85rem 2.5rem",
              border: "1px solid var(--border2)",
              color: "var(--text)",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              background: "rgba(56,189,248,0.05)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "rgba(56,189,248,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.background = "rgba(56,189,248,0.05)";
            }}
          >
            Ver tecnologías
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text3)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          animation: "fadeIn 1s ease 1s both",
        }}>
          <span>Scroll</span>
          <div style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--text3), transparent)",
            animation: "float 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}
