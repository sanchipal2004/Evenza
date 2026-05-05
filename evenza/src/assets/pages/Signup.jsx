// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Navbar';

// import api from '../../api';

// const Signup = () => {
//   const navigate = useNavigate();

//   // State for inputs
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//     const [role,setRole] = useState("student");

//   const isDisabled = !fullName.trim() || !email.trim() || !password.trim();

//   const handleSignup = async () => {

//     try{

//       const res = await api.post("/auth/register",{
//         fullName,
//         email,
//         password,
//         role
//       })

//       console.log(res.data)

//       if(res.data.success){

//         navigate("/login")

//       }

//     }catch(error){
//       console.error(error)
//       alert("Signup failed")
//     }

//   }



//   return (
//     <div className="h-screen flex flex-col overflow-hidden">
//       <Navbar />

//       <div className="flex flex-1 items-center justify-center px-4">
//         <div className="w-full max-w-md shadow-sm rounded-xl p-5 bg-gray-100">

//           <div className="text-center mb-6">
//             <h1 className="text-3xl font-bold">Create your account</h1>
//             <p className="text-gray-500 text-sm mt-1">
//               Join the community and start discovering events!
//             </p>
//           </div>

//           <div className="space-y-4">
       
//             <div>
//               <label className="text-sm font-medium">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
//               />
//             </div>

         
//             <div>
//               <label className="text-sm font-medium">College Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
//               />
//             </div>

       
//             <div>
//               <label className="text-sm font-medium">Password</label>
//               <input
//                 type="password"
//                 placeholder="Create a strong password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
//               />
//             </div>
//           </div>

    
//           <div className="mt-6">
//             <p className="text-sm font-medium mb-2">I am a:</p>

//             <div className="grid grid-cols-2 gap-3">
//               <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
//                 <input type="radio" name="role" value="student" checked={role==="student"}
//                   onChange={(e)=>setRole(e.target.value)} />
//                 <div>
//                   <p className="font-medium">Student</p>
//                   <p className="text-xs text-gray-500">Discover events</p>
//                 </div>
//               </label>

//               <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
//                 <input type="radio" name="role" value="club" checked={role==="club"}
//                   onChange={(e)=>setRole(e.target.value)} />
//                 <div>
//                   <p className="font-medium">Organizer</p>
//                   <p className="text-xs text-gray-500">Create events</p>
//                 </div>
//               </label>
//             </div>
//           </div>

      
//           <button
//             className={`w-full h-10 mt-6 rounded-lg font-semibold 
//               ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-700 text-white hover:bg-purple-800"}`}
//             onClick={handleSignup}
//             disabled={isDisabled}
//           >
//             Create Account
//           </button>

       
//           <p className="text-center text-sm text-gray-900 mt-3">
//             By signing up, you agree to our{" "}
//             <a className="text-purple-600 font-medium" href="#">
//               Terms
//             </a>{" "}
//             and{" "}
//             <a className="text-purple-600 font-medium" href="#">
//               Privacy Policy
//             </a>.
//           </p>

         
//           <p className="text-center text-sm text-gray-900 mt-4">
//             Already have an account?{" "}
//             <a className="text-purple-700 font-semibold" href="/login">
//               Log in
//             </a>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



//modified

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import api from '../../api';

const Signup = () => {
  const navigate = useNavigate();

  // State for inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const isDisabled = !fullName.trim() || !email.trim() || !password.trim();

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/register", {
        fullName,
        email,
        password,
        role
      });

      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please check your details.");
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col bg-[#05010d] overflow-hidden">
      <Navbar />

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-1 w-full max-w-7xl mx-auto z-10 relative overflow-hidden">
        
        {/* Left Side: Branding/Visual */}
        <div className="relative hidden lg:flex w-1/2 flex-col items-center justify-start pt-28 p-12">
          <div className="flex flex-col items-start gap-4 max-w-md w-full">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              START YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">JOURNEY.</span>
            </h2>

            <div className="mt-2 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              <p className="text-purple-100/60 text-xl font-medium leading-relaxed pl-4">
                Join the exclusive network of <span className="text-white">campus leaders</span> and students. <br />
                The stage is set on <span className="text-purple-400 font-black tracking-tight">EVENZA.</span>
              </p>
            </div>
            
            {/* Image Container */}
            <div className="mt-10 relative group animate-float w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-1.5 rounded-[2.2rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2070"
                  alt="Student Community"
                  className="w-full rounded-[1.8rem] object-cover aspect-[16/10] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="flex flex-1 flex-col items-center justify-center p-6 lg:p-12 overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-md p-10 my-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl">
            
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Create <span className="text-purple-500 underline decoration-purple-500/30 underline-offset-8">Account</span></h1>
              <p className="text-purple-100/30 font-bold uppercase tracking-widest text-[10px]">Join the next generation of event management</p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-5 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">College Email</label>
                <input
                  type="email"
                  placeholder="john@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-5 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-sm"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Passcode</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-5 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-sm"
                />
              </div>

              {/* Role Selection - Glass Cards */}
              <div className="pt-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1 mb-3 block">Identity</label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setRole("student")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${role === "student" ? "bg-purple-600/20 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]" : "bg-white/5 border-white/10 hover:border-white/20"}`}
                  >
                    <p className={`text-xs font-black uppercase tracking-widest ${role === "student" ? "text-white" : "text-white/40"}`}>Student</p>
                    <p className="text-[9px] text-purple-100/30 mt-1 uppercase font-bold">Discover Events</p>
                  </div>
                  
                  <div 
                    onClick={() => setRole("club")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${role === "club" ? "bg-purple-600/20 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]" : "bg-white/5 border-white/10 hover:border-white/20"}`}
                  >
                    <p className={`text-xs font-black uppercase tracking-widest ${role === "club" ? "text-white" : "text-white/40"}`}>Organizer</p>
                    <p className="text-[9px] text-purple-100/30 mt-1 uppercase font-bold">Create Events</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={isDisabled}
              onClick={handleSignup}
              className={`w-full h-14 mt-8 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 relative overflow-hidden group
                ${isDisabled 
                  ? "bg-white/5 text-white/10 cursor-not-allowed border border-white/5" 
                  : "bg-purple-600 text-white hover:bg-purple-500 hover:-translate-y-1 shadow-2xl shadow-purple-500/20"
                }`}
            >
              <span className="relative z-10">Construct Account</span>
            </button>

            <div className="mt-6 text-center">
              <p className="text-purple-100/20 text-[10px] font-bold tracking-widest">
                ALREADY A MEMBER?{" "}
                <a href="/login" className="text-white hover:text-purple-400 transition-colors border-b border-white/10 hover:border-purple-500 ml-1 pb-0.5">
                  LOG IN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
};

export default Signup;