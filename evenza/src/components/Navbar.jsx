import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../assets/pages/Login";

const Navbar = () => {

    const navigate =useNavigate()
      
    
  return (
    <nav className="w-full  bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

       
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <h1 className="text-xl font-bold">Evenza</h1>
        </div>

        
        <div className="hidden md:flex items-center gap-8 text-black">
          
          <a href="#">For Students</a>
          <a href="/">Home</a>
          <a href="/resources">Resources</a>
        </div>


        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border   bg-purple-600 text-white rounded-lg hover:bg-purple-70 " onClick={()=>navigate('/login')}> Log In</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700" onClick={()=>navigate('/signup')}
          
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

