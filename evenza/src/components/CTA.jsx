import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate= useNavigate()
  return (
    
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="bg-purple-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Campus Life?
        </h2>

        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100" onClick={()=>navigate('/signup')}>
          Sign Up Now
        </button>
      </div>

    </section>
  );
};

export default CTA;
