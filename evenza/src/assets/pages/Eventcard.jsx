// export default function EventCard({ event }) {
//  const handleRegister = () => {
//     if (event.googleFormLink) {
//       window.open(event.googleFormLink, "_blank");
//     } else {
//       alert("Registration link not available");
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

//       <img
//         src={`http://localhost:5000/${event.image}`}
//         alt={event.title}
        
//         className="w-full h-48 object-cover"
        
//       />

//       <div className="p-5">

//         <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
//           {event.type}
//         </span>

//         <h3 className="text-lg font-semibold mt-3">
//           {event.title}
//         </h3>
//         <p className="text-sm font-sans mt-3">{event.description}</p>

//         <div className="text-sm text-gray-500 mt-3 space-y-2">
//           <p>📅 {event.date}</p>
//           <p>⏰ {event.time}</p>
//           <p>📍 {event.location}</p>
//           <p className="font-medium">🏫 {event.user?.role}</p>
//         </div>

//         <button className="mt-5 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700" onClick={handleRegister}>
//           Register Now
//         </button>

//       </div>
//     </div>
//   );
// }


//modified

import { useState } from "react";

export default function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);

  const handleRegister = () => {
    if (event.googleFormLink) {
      window.open(event.googleFormLink, "_blank");
    } else {
      alert("Registration link not available");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        @keyframes cardShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.4); }
          50%       { box-shadow: 0 0 0 6px rgba(168,85,247,0); }
        }
        @keyframes registerSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .event-card {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #0d0118;
          border: 1px solid rgba(139,92,246,0.18);
          box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: pointer;
          width: 100%;
          max-width: ;
        }
        .event-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(139,92,246,0.25), 0 8px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
          border-color: rgba(168,85,247,0.45);
        }

        .event-card__image-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .event-card__image {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(.25,.46,.45,.94);
          filter: brightness(0.85) saturate(1.1);
        }
        .event-card:hover .event-card__image {
          transform: scale(1.08);
          filter: brightness(0.75) saturate(1.2);
        }
        .event-card__image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 30%,
            rgba(13,1,24,0.6) 70%,
            rgba(13,1,24,0.95) 100%
          );
        }
        .event-card__type-badge {
          position: absolute;
          top: 14px; left: 14px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(139,92,246,0.25);
          border: 1px solid rgba(168,85,247,0.5);
          color: #d8b4fe;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          animation: badgePulse 2.5s ease-in-out infinite;
          font-family: 'DM Sans', sans-serif;
        }
        .event-card__shimmer-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(99,102,241,0.8), transparent);
          background-size: 200% auto;
          animation: cardShimmer 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .event-card:hover .event-card__shimmer-line { opacity: 1; }

        .event-card__body {
          padding: 20px 22px 22px;
          position: relative;
        }

        .event-card__title {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #f3e8ff;
          margin: 0 0 10px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .event-card__desc {
          font-size: 0.83rem;
          color: rgba(196,181,253,0.55);
          font-weight: 300;
          line-height: 1.65;
          margin: 0 0 18px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .event-card__meta {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 20px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(139,92,246,0.12);
        }
        .event-card__meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: rgba(196,181,253,0.65);
          font-weight: 400;
        }
        .event-card__meta-icon {
          width: 26px; height: 26px;
          border-radius: 7px;
          background: rgba(139,92,246,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }
        .event-card__meta-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .event-card__club {
          font-size: 0.75rem;
          color: #a78bfa;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .event-card__btn {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.02em;
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
        }
        .event-card__btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .event-card__btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(124,58,237,0.5);
        }
        .event-card__btn:hover::before { opacity: 1; }
        .event-card__btn:active { transform: translateY(0); }

        .event-card__btn-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .event-card__btn-arrow {
          transition: transform 0.2s;
        }
        .event-card__btn:hover .event-card__btn-arrow {
          transform: translateX(4px);
        }

        /* Corner glow on hover */
        .event-card__corner-glow {
          position: absolute;
          top: -40px; right: -40px;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .event-card:hover .event-card__corner-glow { opacity: 1; }
      `}</style>

      <div
        className="event-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="event-card__image-wrap">
          <img
            src={`http://localhost:5000/${event.image}`}
            alt={event.title}
            className="event-card__image"
          />
          <div className="event-card__image-overlay" />
          <span className="event-card__type-badge">{event.type}</span>
          <div className="event-card__shimmer-line" />
        </div>

        {/* Body */}
        <div className="event-card__body">
          <div className="event-card__corner-glow" />

          <h3 className="event-card__title">{event.title}</h3>
          <p className="event-card__desc">{event.description}</p>

          {/* Meta info */}
          <div className="event-card__meta">
            <div className="event-card__meta-row">
              <span className="event-card__meta-icon">📅</span>
              <span className="event-card__meta-text">{event.date}</span>
            </div>
            <div className="event-card__meta-row">
              <span className="event-card__meta-icon">⏰</span>
              <span className="event-card__meta-text">{event.time}</span>
            </div>
            <div className="event-card__meta-row">
              <span className="event-card__meta-icon">📍</span>
              <span className="event-card__meta-text">{event.location}</span>
            </div>
            <div className="event-card__meta-row">
              <span className="event-card__meta-icon">🏛️</span>
              <span className="event-card__meta-text event-card__club">{event.user?.role}</span>
            </div>
          </div>

          {/* CTA */}
          <button className="event-card__btn" onClick={handleRegister}>
            <span className="event-card__btn-text">
              Register Now
              <span className="event-card__btn-arrow">→</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}