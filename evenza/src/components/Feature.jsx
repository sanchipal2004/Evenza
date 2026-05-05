// import React from "react";

// const features = [
//   {
//     icon: "auto_awesome",
//     title: "Effortless Event Creation",
//     desc: "Launch your event in minutes with intuitive tools.",
//   },
//   {
//     icon: "explore",
//     title: "Centralized Event Discovery",
//     desc: "A single dynamic calendar for campus happenings.",
//   },
//   {
//     icon: "confirmation_number",
//     title: "Easy RSVP & Ticketing",
//     desc: "Manage guest lists and ticketing seamlessly.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">

//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//         Everything You Need for Amazing Events
//       </h2>

//       <p className="text-center text-black max-w-2xl mx-auto mb-12">
//         Our platform simplifies every step—from organizing to managing events 
//       </p>
//     </section>
//   );
// };

// export default Features;



//modified

import React from "react";

const features = [
  {
    // Sparkles Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
    ),
    title: "Effortless Event Creation",
    desc: "Launch your event in minutes with intuitive tools.",
    color: "from-purple-400 to-indigo-500"
  },
  {
    // Compass Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 8.88 9.88 16.24 7.76"/></svg>
    ),
    title: "Centralized Event Discovery",
    desc: "A single dynamic calendar for campus happenings.",
    color: "from-blue-400 to-purple-600"
  },
  {
    // Ticket Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
    ),
    title: "Easy RSVP & Ticketing",
    desc: "Manage guest lists and ticketing seamlessly.",
    color: "from-fuchsia-400 to-purple-700"
  },
];

const Features = () => {
  return (
    <section className="bg-[#05010d] py-24 px-6 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent tracking-tight">
            Everything You Need
          </h2>
          <p className="text-purple-200/50 max-w-xl mx-auto text-lg">
            Our platform simplifies every step—from organizing to managing events 
            with professional-grade tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/50 shadow-2xl"
            >
              {/* Glow effect that appears on hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-500 pointer-events-none"></div>

              {/* Icon */}
              <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {f.icon}
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-200 transition-colors">
                {f.title}
              </h3>
              <p className="text-purple-100/40 leading-relaxed text-base group-hover:text-purple-100/70 transition-colors">
                {f.desc}
              </p>

              {/* Decorative corner glow */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;