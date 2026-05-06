// import React from "react";
// import { useNavigate } from "react-router-dom";
// import herobg from "../../public/screen.png";
// const Hero = () => {
//    const navigate= useNavigate()
//   const role = localStorage.getItem("role"); 
//   const token = localStorage.getItem("token");

//   const handleFindEvents = () => {
//     if (token && role === "student") {
//       navigate("/Events");
//     } else {
//       alert("Please login as a user to view events");
//       navigate("/login");
//     }
//   };

//   const handleCreateEvent = () => {
//     if (token && role === "club") {
//       navigate("/CreateEvent");
//     } else {
//       alert("Only clubs can create events");
//       navigate("/login");
//     }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">

//       <div
//         className="w-full rounded-xl overflow-hidden bg-cover bg-center p-25  text-center text-white"
//         style={{
          
//             backgroundImage: `url(${herobg})`,}}
//       >

//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           The Hub for Your College Events
//         </h1>

//         <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
//           Discover and manage campus events seamlessly. Find your next adventure
//           or organize the perfect gathering.
//         </p>

//         <div className="flex items-center justify-center gap-4">
//           <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg"onClick={handleFindEvents}>
//             Find Events
//           </button>
//           <button className="px-6 py-3 border rounded-lg bg-white text-black" onClick={handleCreateEvent}>
//             Create an Event
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






//Sakshi

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─── Particle Canvas ─────────────────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      hue: Math.random() > 0.5 ? 270 : 200,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(270, 80%, 70%, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

/* ─── Floating Orbs ───────────────────────────────────────────── */
const Orbs = () => (
  <>
    {[
      { size: 320, top: "-80px", left: "-80px", color: "rgba(139,92,246,0.18)", delay: "0s" },
      { size: 250, bottom: "-60px", right: "-60px", color: "rgba(99,102,241,0.15)", delay: "1.5s" },
      { size: 180, top: "30%", right: "15%", color: "rgba(168,85,247,0.12)", delay: "0.8s" },
      { size: 120, top: "20%", left: "20%", color: "rgba(56,189,248,0.10)", delay: "2s" },
    ].map((orb, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: orb.size,
          height: orb.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          top: orb.top,
          bottom: orb.bottom,
          left: orb.left,
          right: orb.right,
          animation: `orbFloat 8s ease-in-out infinite`,
          animationDelay: orb.delay,
          pointerEvents: "none",
        }}
      />
    ))}
  </>
);
<div style={{
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.08), transparent 60%)",
  animation: "slowGlow 8s ease-in-out infinite alternate",
  pointerEvents: "none",
}} />



/* ─── Hero ────────────────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [hoverFind, setHoverFind] = useState(false);
  const [hoverCreate, setHoverCreate] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const handleFindEvents = () => {
  if (!token) {
    alert("Please login first");
    return navigate("/login");
  }

 
  if (role === "student") {
    navigate("/Events");
  } else {
    alert("Only student can access Events");
  }
};
  const handleCreateEvent = () => {
    if (!token) {
      alert("please login first")
    }
    if(role=== "club"){
      navigate("/CreateEvent")
    }
    else{
      alert("Only Club can access Create")
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.05); }
        }

        @keyframes slowGlow {
          0% { transform: scale(1) translateY(0); opacity: 0.6; }
          100% { transform: scale(1.2) translateY(-10px); opacity: 0.9; }
        }
        @keyframes shineMove {
          0% { left: -60%; }
          100% { left: 120%; }
         }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @keyframes borderSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes badgePop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-tag { animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) 0.1s both; }
        .hero-h1  { animation: fadeUp 0.1s cubic-bezier(.22,1,.36,1) 0.25s both; }
        .hero-sub { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.45s both; }
        .hero-btns { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.6s both; }
        .hero-stats { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.75s both; }

        .shimmer-text {
          background: linear-gradient(90deg, #e2d9f3 0%, #fff 40%, #c4b5fd 60%, #e2d9f3 100%);

          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .btn-find {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-find::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, #a855f7, #6366f1, #38bdf8, #a855f7);
          background-size: 300%;
          animation: borderSpin 3s linear infinite;
          z-index: -1;
        }
        .btn-find:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(139,92,246,0.45); }

        .btn-create {
          transition: transform 0.2s, background 0.3s, box-shadow 0.2s;
        }
        .btn-create:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.18) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .stat-card {
          animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both;
          transition: transform 0.2s;
        }
        .stat-card:hover { transform: translateY(-4px); }

      `}</style>
   
      <section style={{  margin: "0 auto",  fontFamily: "'DM Sans', sans-serif" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 0,
            overflow: "hidden",
            padding: "100px 40px 70px",
            textAlign: "center",
            background: "linear-gradient(135deg, #0d0618 0%, #130a2a 40%, #0a0f2a 70%, #0d0618 100%)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
        >
          {/* Animated background grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }} />

          {/* Glow streak at top */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 600, height: 2,
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(99,102,241,0.8), transparent)",
            //boxShadow: "0 0 40px 8px rgba(139,92,246,0.4)",
            boxShadow: "0 0 80px 20px rgba(139,92,246,0.25), 0 0 120px 40px rgba(99,102,241,0.15)",
          }} />

          <ParticleCanvas />
          <Orbs />

          {/* Badge */}
          {/* <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28, position: "relative" }}>
            <span style={{
              padding: "6px 18px",
              borderRadius: 999,
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#c4b5fd",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#a855f7",
                boxShadow: "0 0 8px #a855f7",
                display: "inline-block",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute", inset: -3, borderRadius: "50%",
                  border: "1px solid rgba(168,85,247,0.5)",
                  animation: "pulseRing 1.8s ease-out infinite",
                }} />
              </span>
              Campus Event Platform
            </span>
          </div> */}

          {/* Badge */}
          <div
            className="hero-tag"
             style={{
             display: "inline-flex",
             alignItems: "center",
             gap: 10,
             marginBottom: 28,
             padding: "8px 18px",
             borderRadius: 999,
             background: "rgba(255,255,255,0.06)",
             border: "1px solid rgba(168,85,247,0.55)",
             backdropFilter: "blur(14px)",
             boxShadow: "0 0 30px rgba(168,85,247,0.25), 0 0 60px rgba(99,102,241,0.15)",
             position: "relative",
             overflow: "hidden",
             }}
>
  {/* moving shine effect */}
  <span
    style={{
      position: "absolute",
      top: 0,
      left: "-60%",
      width: "60%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
      animation: "shineMove 3s infinite",
    }}
  />

  {/* glowing dot */}
  <span
    style={{
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#a855f7",
      boxShadow: "0 0 12px #a855f7",
      position: "relative",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        position: "absolute",
        inset: -4,
        borderRadius: "50%",
        border: "1px solid rgba(168,85,247,0.5)",
        animation: "pulseRing 1.8s infinite",
      }}
    />
  </span>

  {/* text */}
  <span
    style={{
      color: "#ffffff",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      textShadow: "0 0 10px rgba(168,85,247,0.6)",
    }}
  >
    Campus Event Hub
  </span>
</div>

          {/* Headline */}
          <h1
            className="hero-h1 shimmer-text"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            The Hub for Your<br />
            College Events
          </h1>

          {/* Sub */}
          <p
            className="hero-sub"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(196,181,253,0.7)",
              maxWidth: 520,
              margin: "0 auto 44px",
              lineHeight: 1.7,
              fontWeight: 300,
              position: "relative",
            }}
          >
            Discover and manage campus events seamlessly. Find your next adventure or organize the perfect gathering.
          </p>

          {/* Buttons */}
          <div
            className="hero-btns"
            style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", position: "relative" }}
          >
            {/* Find Events */}
            <button
              className="btn-find"
              onClick={handleFindEvents}
              style={{
                padding: "14px 32px",
                borderRadius: 14,
                border: "none",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.01em",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ✦ Find Events
            </button>

            {/* Create Event */}
            <button
              className="btn-create"
              onClick={handleCreateEvent}
              style={{
                padding: "14px 32px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.07)",
                color: "#e2d9f3",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                letterSpacing: "0.01em",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              + Create an Event
            </button>
          </div>

          {/* Stats */}
          </div>
      </section>
    </>
  );
};

export default Hero;

