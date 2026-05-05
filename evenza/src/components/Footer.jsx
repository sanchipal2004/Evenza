// import React from "react";

// const Footer = () => {
//   return (
//     <footer className=" py-8 bg-white">

//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
//           <p className="font-semibold">Evenza</p>
//         </div>

//         <p className="text-gray-600">© 2024 Evenza. All rights reserved.</p>

//         <div className="flex gap-6 text-black">
//           <a href="#">About Us</a>
//           <a href="#">Contact</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;


//modified

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#05010d] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
              <h2 className="text-xl font-black text-white tracking-tighter">EVENZA</h2>
            </div>
            <p className="text-purple-100/40 text-sm leading-relaxed mb-6">
              The ultimate platform for campus event management. Transform your college life with Evenza.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all cursor-pointer">
                  <div className="w-3 h-3 bg-current rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              {["Features", "Events", "Organizers", "Students"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-purple-100/40 hover:text-purple-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-purple-100/40 hover:text-purple-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5">
            <h4 className="text-white font-bold mb-4 text-sm">Stay Updated</h4>
            <p className="text-purple-100/40 text-xs mb-4">Get the latest event updates right in your inbox.</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Email address" 
                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white text-xs focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-3 bg-purple-600 rounded-lg text-[10px] font-bold text-white uppercase">Go</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-purple-100/20 text-xs font-medium tracking-widest uppercase">
            © 2024 EVENZA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-purple-100/20 text-[10px] font-black uppercase tracking-widest">System Status: Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;