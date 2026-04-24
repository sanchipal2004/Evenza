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
    const [role,setRole] = useState("student");

  const isDisabled = !fullName.trim() || !email.trim() || !password.trim();

  const handleSignup = async () => {

    try{

      const res = await api.post("/auth/register",{
        fullName,
        email,
        password,
        role
      })

      console.log(res.data)

      if(res.data.success){

        navigate("/login")

      }

    }catch(error){
      console.error(error)
      alert("Signup failed")
    }

  }



  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md shadow-sm rounded-xl p-5 bg-gray-100">

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-gray-500 text-sm mt-1">
              Join the community and start discovering events!
            </p>
          </div>

          <div className="space-y-4">
       
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

         
            <div>
              <label className="text-sm font-medium">College Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

       
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 mt-1 border rounded-lg px-3 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>
          </div>

    
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">I am a:</p>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                <input type="radio" name="role" value="student" checked={role==="student"}
                  onChange={(e)=>setRole(e.target.value)} />
                <div>
                  <p className="font-medium">Student</p>
                  <p className="text-xs text-gray-500">Discover events</p>
                </div>
              </label>

              <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                <input type="radio" name="role" value="club" checked={role==="club"}
                  onChange={(e)=>setRole(e.target.value)} />
                <div>
                  <p className="font-medium">Organizer</p>
                  <p className="text-xs text-gray-500">Create events</p>
                </div>
              </label>
            </div>
          </div>

      
          <button
            className={`w-full h-10 mt-6 rounded-lg font-semibold 
              ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-700 text-white hover:bg-purple-800"}`}
            onClick={handleSignup}
            disabled={isDisabled}
          >
            Create Account
          </button>

       
          <p className="text-center text-sm text-gray-900 mt-3">
            By signing up, you agree to our{" "}
            <a className="text-purple-600 font-medium" href="#">
              Terms
            </a>{" "}
            and{" "}
            <a className="text-purple-600 font-medium" href="#">
              Privacy Policy
            </a>.
          </p>

         
          <p className="text-center text-sm text-gray-900 mt-4">
            Already have an account?{" "}
            <a className="text-purple-700 font-semibold" href="/login">
              Log in
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
