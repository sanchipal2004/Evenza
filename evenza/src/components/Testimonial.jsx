// import React from "react";

// const testimonials = [
//   {
//     name: "Ashmita Bathre",
//     role: "Student",
//     text: "I found so many cool clubs! This platform changed my first year.",
//   },
//   {
//     name: "Alka Poddar , Sakshi Gupta.",
//     role: "F.I.A.T Club Organizer",
//     text: "Organizing tournaments is a breeze now — ticketing is a lifesaver.",
//   },
//   {
//     name: "Rinci Atrey",
//     role: "Coding Club President",
//     text: "We saw a 50% increase in attendance thanks to EventHub!",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">

//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         What Our Users Say
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {testimonials.map((t, i) => (
//           <div key={i} className="bg-white border rounded-xl p-6 shadow">
//             <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
//             <p className="text-purple-600 text-sm mb-3">{t.role}</p>
//             <p className="text-gray-600">{t.text}</p>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Testimonials;



import React from "react";

const testimonials = [
  {
    name: "Ashmita Bathre",
    role: "Student",
    text: "I found so many cool clubs! This platform changed my first year. The discovery process is finally fun.",
    initials: "AB"
  },
  {
    name: "Alka & Sakshi",
    role: "F.I.A.T Club Organizer",
    text: "Organizing tournaments is a breeze now — the ticketing system is a absolute lifesaver for our team.",
    initials: "AS"
  },
  {
    name: "Rinci Atrey",
    role: "Coding Club President",
    text: "We saw a 50% increase in attendance thanks to Evenza! The reach we get here is unparalleled.",
    initials: "RA"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#05010d] py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-tighter">
            TRUSTED BY VOICES
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:border-purple-500/40 hover:bg-white/[0.06]"
            >
              {/* Quote Icon Glow */}
              <div className="mb-6 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21V18M1 21L1 18C1 16.8954 1.89543 16 3 16H6C7.10457 16 8 16.8954 8 18V21C8 22.1046 7.10457 23 6 23H3C1.89543 23 1 22.1046 1 21ZM1 21V18M14.017 13C14.017 11.1362 14.5373 9.31024 15.5186 7.73031C16.5 6.15039 17.9044 4.87791 19.5668 4.05309L20.5186 6C19.4103 6.54988 18.474 7.3982 17.8197 8.45148C17.1654 9.50476 16.8185 10.722 16.8185 11.9646V13H14.017ZM1 13C1 11.1362 1.52026 9.31024 2.50159 7.73031C3.48291 6.15039 4.8873 4.87791 6.5497 4.05309L7.50159 6C6.39332 6.54988 5.45703 7.3982 4.80274 8.45148C4.14845 9.50476 3.80155 10.722 3.80155 11.9646V13H1ZM10 13H14.017M10 13V11.9646M1 13V11.9646" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Feedback Text */}
              <p className="text-xl italic font-medium text-purple-100/90 mb-10 leading-relaxed group-hover:text-white transition-colors">
                "{t.text}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wide">{t.name}</h3>
                  <p className="text-purple-400 text-xs font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              {/* Glowing Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;