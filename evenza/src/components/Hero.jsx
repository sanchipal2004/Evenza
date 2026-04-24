import React from "react";
import { useNavigate } from "react-router-dom";
import herobg from "../../public/screen.png";
const Hero = () => {
   const navigate= useNavigate()
  const role = localStorage.getItem("role"); 
  const token = localStorage.getItem("token");

  const handleFindEvents = () => {
    if (token && role === "student") {
      navigate("/Events");
    } else {
      alert("Please login as a user to view events");
      navigate("/login");
    }
  };

  const handleCreateEvent = () => {
    if (token && role === "club") {
      navigate("/CreateEvent");
    } else {
      alert("Only clubs can create events");
      navigate("/login");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div
        className="w-full rounded-xl overflow-hidden bg-cover bg-center p-25  text-center text-white"
        style={{
          
            backgroundImage: `url(${herobg})`,}}
      >

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          The Hub for Your College Events
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover and manage campus events seamlessly. Find your next adventure
          or organize the perfect gathering.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg"onClick={handleFindEvents}>
            Find Events
          </button>
          <button className="px-6 py-3 border rounded-lg bg-white text-black" onClick={handleCreateEvent}>
            Create an Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

