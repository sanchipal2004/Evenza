import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Login.css";
import api from "../../api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email.trim() || !password.trim();
  const handlelogin= async()=>{
    try{
      const res= await api.post("/auth/login",{
        email,
        password
      });{
        if(res.data.success){
          const user = res.data.data.user;
          localStorage.setItem("token",res.data.data.token);
          localStorage.setItem("role", user.role);
          
          console.log(res.data)
          const role= res.role;
          if(role=="student"){
            navigate("/Events")
          }
          else{
            navigate("/CreateEvent")
          }
        }
      }
      
    }catch(err){
        console.error(err)
        alert("login failed")

      }
    }
  

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <Navbar />

      <div className="flex flex-1 w-full">

        
        <div className="relative hidden lg:flex w-1/2 flex-col items-center justify-center p-12">
          <div className="flex flex-col items-center gap-6 text-center max-w-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxHGzl0p73ojNbZw1ZXM31iiB7MdtoQ1pNn0DJYw8aLd7Tf86tgNoSGqe9xpS9F8eRWTrjdrkz4yDRsYqNMOqVDlyHEoKYKX2FiX15XI4h7rwCB73ExEAVAH1KuUKn28HiG2Y7uQRE0EPcgNYOhDimLpMbBC4_mEkER3o6QFoEx0HezawPbquaqJEHlkxwN3Cb3318GqukrtUCrtdiZMn9uL32SgxAP_rXDIkaxQ5Nob-SbLhxf5wAk0a8e78jxH1wj8CfjQRrKhk"
              alt="Campus Event"
              className="w-full rounded-xl shadow-lg"
            />

            <h2 className="heading text-3xl font-bold">
              Your Campus, Connected.
            </h2>

            <p className="text-black">
              The central hub for college events. Discover, join, and organize events seamlessly.
            </p>
          </div>
        </div>

        
        <div className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-md space-y-6">

            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-bold text-black">Welcome Back</h1>
              <p className="text-black">For Students & Organizers</p>
            </div>

            <div className="flex flex-col gap-4">

            
              <label className="flex flex-col">
                <p className="pb-2 text-slate-800 font-medium ">Collage Email </p>
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="username h-14 rounded-lg border border-slate-300 px-4  focus:ring-2 focus:ring-primary/50 outline-none bg-purple-600 text-gray-800"
                />
              </label>

            
              <label className="flex flex-col">
                <div className="flex justify-between items-center pb-2">
                  <p className="text-black font-medium">Password</p>
                  
                </div>

                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="username h-14 w-full rounded-l-lg border border-slate-300 border-r-0  px-4  focus:ring-2 focus:ring-primary/50 outline-none bg-purple-600 text-gray-800"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="username h-14 px-4 rounded-r-lg border border-slate-200  hover:bg-slate-50 bg-purple-600 text-gray-800"
                  >
                    <span className="material-symbols-outlined ">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </label>
            </div>

          
            <button
              disabled={isDisabled}
              onClick={handlelogin}
              className={`username w-full h-12 rounded-lg font-semibold bg-purple-800 text-gray-900
                ${isDisabled 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-primary text-white hover:bg-primary/90"
                }`}
            >
              Log In
            </button>

            <div className="text-center">
              <p className="text-black text-sm">
                Don't have an account?{" "}
                <a href="/signup" className="text-primary font-semibold underline">
                  Sign Up
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

