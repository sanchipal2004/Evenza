// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import "./Login.css";
// import api from "../../api";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setemail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const isDisabled = !email.trim() || !password.trim();
//   const handlelogin= async()=>{
//     try{
//       const res= await api.post("/auth/login",{
//         email,
//         password
//       });{
//         if(res.data.success){
//           const user = res.data.data.user;
//           localStorage.setItem("token",res.data.data.token);
//           localStorage.setItem("role", user.role);
          
//           console.log(res.data)
//           const role= res.role;
//           if(role=="student"){
//             navigate("/Events")
//           }
//           else{
//             navigate("/CreateEvent")
//           }
//         }
//       }
      
//     }catch(err){
//         console.error(err)
//         alert("login failed")

//       }
//     }
  

//   return (
//     <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
//       <Navbar />

//       <div className="flex flex-1 w-full">

        
//         <div className="relative hidden lg:flex w-1/2 flex-col items-center justify-center p-12">
//           <div className="flex flex-col items-center gap-6 text-center max-w-sm">
//             <img
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxHGzl0p73ojNbZw1ZXM31iiB7MdtoQ1pNn0DJYw8aLd7Tf86tgNoSGqe9xpS9F8eRWTrjdrkz4yDRsYqNMOqVDlyHEoKYKX2FiX15XI4h7rwCB73ExEAVAH1KuUKn28HiG2Y7uQRE0EPcgNYOhDimLpMbBC4_mEkER3o6QFoEx0HezawPbquaqJEHlkxwN3Cb3318GqukrtUCrtdiZMn9uL32SgxAP_rXDIkaxQ5Nob-SbLhxf5wAk0a8e78jxH1wj8CfjQRrKhk"
//               alt="Campus Event"
//               className="w-full rounded-xl shadow-lg"
//             />

//             <h2 className="heading text-3xl font-bold">
//               Your Campus, Connected.
//             </h2>

//             <p className="text-black">
//               The central hub for college events. Discover, join, and organize events seamlessly.
//             </p>
//           </div>
//         </div>

        
//         <div className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
//           <div className="w-full max-w-md space-y-6">

//             <div className="flex flex-col gap-2">
//               <h1 className="text-[32px] font-bold text-black">Welcome Back</h1>
//               <p className="text-black">For Students & Organizers</p>
//             </div>

//             <div className="flex flex-col gap-4">

            
//               <label className="flex flex-col">
//                 <p className="pb-2 text-slate-800 font-medium ">Collage Email </p>
//                 <input
//                   type="text"
//                   placeholder="Enter your email or username"
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                   className="username h-14 rounded-lg border border-slate-300 px-4  focus:ring-2 focus:ring-primary/50 outline-none bg-purple-600 text-gray-800"
//                 />
//               </label>

            
//               <label className="flex flex-col">
//                 <div className="flex justify-between items-center pb-2">
//                   <p className="text-black font-medium">Password</p>
                  
//                 </div>

//                 <div className="flex items-center">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="username h-14 w-full rounded-l-lg border border-slate-300 border-r-0  px-4  focus:ring-2 focus:ring-primary/50 outline-none bg-purple-600 text-gray-800"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="username h-14 px-4 rounded-r-lg border border-slate-200  hover:bg-slate-50 bg-purple-600 text-gray-800"
//                   >
//                     <span className="material-symbols-outlined ">
//                       {showPassword ? "visibility_off" : "visibility"}
//                     </span>
//                   </button>
//                 </div>
//               </label>
//             </div>

          
//             <button
//               disabled={isDisabled}
//               onClick={handlelogin}
//               className={`username w-full h-12 rounded-lg font-semibold bg-purple-800 text-gray-900
//                 ${isDisabled 
//                   ? "bg-gray-400 cursor-not-allowed" 
//                   : "bg-primary text-white hover:bg-primary/90"
//                 }`}
//             >
//               Log In
//             </button>

//             <div className="text-center">
//               <p className="text-black text-sm">
//                 Don't have an account?{" "}
//                 <a href="/signup" className="text-primary font-semibold underline">
//                   Sign Up
//                 </a>
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;





//modified

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email.trim() || !password.trim();

  const handlelogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.data.success) {
        const user = res.data.data.user;
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("role", user.role);

        if (user.role === "student") {
          navigate("/Events");
        } else {
          navigate("/CreateEvent");
        }
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
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
        <div className="relative hidden lg:flex w-3/5 flex-col items-center justify-start pt-28 p-12">
          <div className="flex flex-col items-start gap-4 max-w-xl w-full">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              CAMPUS LIFE, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">REIMAGINED.</span>
            </h2>

            {/* Highlighted Sentence Section */}
            <div className="mt-2 relative">
              {/* Vertical Gradient Border Accent */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              
              <p className="text-purple-100/60 text-xl font-medium leading-relaxed max-w-lg pl-4">
                Experience college events like <span className="text-white">never before</span>. <br />
                Find your community on <span className="text-purple-400 font-black tracking-tight">EVENZA.</span>
              </p>
            </div>
            
            {/* Image Container */}
            <div className="mt-10 relative group animate-float w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-1.5 rounded-[2.2rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070"
                  alt="Vibrant Campus Event"
                  className="w-full rounded-[1.8rem] object-cover aspect-[16/10] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-1 flex-col items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl">
            
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                Secure <span className="text-purple-500 underline decoration-purple-500/30 underline-offset-8">Access</span>
              </h1>
              <p className="text-purple-100/30 font-bold uppercase tracking-widest text-[10px]">Portal for authenticated members</p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">
                  Institutional ID
                </label>
                <input
                  type="email"
                  placeholder="yourname@college.edu"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80">
                    Passcode
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 pr-14 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 hover:text-purple-400 transition-colors"
                  >
                    {showPassword ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88L14.12 14.12"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/><circle cx="12" cy="12" r="3"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              disabled={isDisabled}
              onClick={handlelogin}
              className={`w-full h-14 mt-10 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 relative overflow-hidden group
                ${isDisabled 
                  ? "bg-white/5 text-white/10 cursor-not-allowed border border-white/5" 
                  : "bg-purple-600 text-white hover:bg-purple-500 hover:-translate-y-1 shadow-2xl shadow-purple-500/20"
                }`}
            >
              <span className="relative z-10">Initialize Session</span>
            </button>

            <div className="mt-8 text-center">
              <p className="text-purple-100/20 text-[11px] font-bold tracking-wider">
                NOT REGISTERED?{" "}
                <a href="/signup" className="text-white hover:text-purple-400 transition-colors border-b border-white/10 hover:border-purple-500 ml-1 pb-0.5">
                  START HERE
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
      `}</style>
    </div>
  );
};

export default Login;