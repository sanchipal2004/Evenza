// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Login from "../assets/pages/Login";

// const Navbar = () => {

//     const navigate =useNavigate()
      
    
//   return (
//     <nav className="w-full  bg-white">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

       
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
//           <h1 className="text-xl font-bold">Evenza</h1>
//         </div>

        
//         <div className="hidden md:flex items-center gap-8 text-black">
//           <a href="/OrganizationDashboard">For Organizers</a>
//           <a href="#">For Students</a>
//           <a href="/">Home</a>
//           <a href="/resources">Resources</a>
//         </div>


//         <div className="flex items-center gap-3">
//           <button className="px-4 py-2 border   bg-purple-600 text-white rounded-lg hover:bg-purple-70 " onClick={()=>navigate('/login')}> Log In</button>
//           <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700" onClick={()=>navigate('/signup')}
          
//           >
//             Sign Up
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;





//modified
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-purple-950/30 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => navigate('/')}
        >
          <div className="w-9 h-7 bg-gradient-to-br from-purple-400 to-purple-700 rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-center font-sans text-xl font-bold">E</div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-tighter">
            EVENZA
          </h1>
        </div>

        {/* Catchy Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            
            
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" }
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative text-sm font-bold uppercase tracking-widest text-purple-100/70 hover:text-white transition-all duration-300 group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button 
            className="text-sm font-bold uppercase tracking-widest text-white hover:text-purple-300 transition-colors"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          
          <button 
            className="relative px-7 py-2.5 overflow-hidden group bg-purple-600 rounded-full font-bold uppercase tracking-tighter text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            onClick={() => navigate('/signup')}
          >
            <span className="relative z-10">Sign Up</span>
            {/* Glossy shine effect on hover */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
