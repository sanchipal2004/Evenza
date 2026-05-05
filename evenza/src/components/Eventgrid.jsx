// import React from "react";
// import clubbg from "../../public/flux.png"
// import fiatbg from "../../public/fiat.png"
// import rudrasbg from "../../public/rudras.png"
// const EventsGrid = () => {
//   return (
//     <section className="w-full bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* CARD 1 */}
//           <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   `url(${clubbg})`,
//               }}
//             ></div>

//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <p className="text-sm font-medium text-primary">Technical Club</p>
//               <h3 className="text-xl font-bold text-gray-900">
//                 Introduction to React Workshop
//               </h3>

//               <p className="text-sm text-gray-600 flex items-center gap-2">
                
               
//               </p>

//               <p className="text-sm text-gray-700 flex-1">
//                 Join us for a beginner-friendly workshop on React.js. Learn the basics and build your first component!
//               </p>

              
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                     `url(${fiatbg})`,
//               }}
//             ></div>

//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <p className="text-sm font-medium text-primary">Speakers and Skill Development Club</p>
//               <h3 className="text-xl font-bold text-gray-900">
//              Enhance Your Personality By Joining F.I.A.T
//               </h3>

//               <p className="text-sm text-gray-600 flex items-center gap-2">
//                 <span className="material-symbols-outlined text-base">
                  
//                 </span>
              
//               </p>

//               <p className="text-sm text-gray-700 flex-1">
//                 Join us for your overall personality development and enhance your communication  and presentation skills
//               </p>

              
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                    `url(${rudrasbg})`,
//               }}
//             ></div>

//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <p className="text-sm font-medium text-primary">Coding Club</p>
//               <h3 className="text-xl font-bold text-gray-900">
//                 Upskill and showcase your dance moves
//               </h3>

//               <p className="text-sm text-gray-600 flex items-center gap-2">
        
                
//               </p>

//               <p className="text-sm text-gray-700 flex-1">
//                 Join our club for showcasing and upskilling your dance moves.
//               </p>
//             </div>
//           </div>

//           {/* Repeat similar cards below… */}
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default EventsGrid;


//modified

import React from "react";
import clubbg from "../../public/flux.png"
import fiatbg from "../../public/fiat.png"
import rudrasbg from "../../public/rudras.png"

const EventsGrid = () => {
  const events = [
    {
      img: clubbg,
      club: "Technical Club",
      title: "Introduction to React Workshop",
      desc: "Join us for a beginner-friendly workshop on React.js. Learn the basics and build your first component!",
      color: "from-blue-500 to-cyan-400"
    },
    {
      img: fiatbg,
      club: "F.I.A.T Club",
      title: "Enhance Your Personality By Joining F.I.A.T",
      desc: "Join us for your overall personality development and enhance your communication and presentation skills.",
      color: "from-purple-500 to-pink-500"
    },
    {
      img: rudrasbg,
      club: "Coding Club",
      title: "Upskill and showcase your dance moves",
      desc: "Join our club for showcasing and upskilling your dance moves and artistic expressions.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="w-full bg-[#05010d] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Upcoming <span className="text-purple-500">Events</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)]"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.img})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md border border-white/20 text-white">
                    {event.club}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {event.title}
                </h3>

                <p className="text-purple-100/50 text-sm leading-relaxed line-clamp-3">
                  {event.desc}
                </p>

                {/* Interactive Footer */}
                <div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400 group-hover:text-purple-300 transition-all">
                    Register Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                  
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color} animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]`}></div>
                </div>
              </div>

              {/* Subtle Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;