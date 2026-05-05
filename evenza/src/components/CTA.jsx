// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CTA = () => {
//   const navigate= useNavigate()
//   return (
    
//     <section className="max-w-7xl mx-auto px-6 py-20">

//       <div className="bg-purple-600 text-white rounded-2xl p-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Ready to Transform Your Campus Life?
//         </h2>

//         <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100" onClick={()=>navigate('/signup')}>
//           Sign Up Now
//         </button>
//       </div>

//     </section>
//   );
// };

// export default CTA;



import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#05010d] py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative group p-12 md:p-20 rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl text-center">
          
          {/* Animated Mesh Gradient Background (Inside Box) */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_70%)]"></div>

          <div className="relative z-20">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
              READY TO <span className="text-purple-500">TRANSFORM</span> <br /> 
              YOUR CAMPUS LIFE?
            </h2>
            
            <p className="text-purple-200/60 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium">
              Join thousands of students and organizers building the future of campus engagement. 
              Your next big event starts here.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Highlighted Sign Up Button */}
              <button 
                className="relative px-10 py-5 bg-purple-600 rounded-full font-black uppercase tracking-widest text-white text-sm transition-all duration-300 hover:scale-110 hover:bg-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)] active:scale-95 animate-pulse-slow"
                onClick={() => navigate('/signup')}
              >
                <span className="relative z-10">Get Started for Free</span>
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <button 
                className="px-10 py-5 rounded-full font-black uppercase tracking-widest text-white text-sm border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => navigate('/resources')}
              >
                View Resources
              </button>
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl"></div>
        </div>
      </div>

      {/* Added Tailwind Custom Keyframe in your CSS or style tag */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); shadow-box: 0 0 40px rgba(168,85,247,0.6); }
          50% { transform: scale(1.05); shadow-box: 0 0 60px rgba(168,85,247,0.8); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CTA;