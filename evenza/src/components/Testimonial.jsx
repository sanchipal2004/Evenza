import React from "react";

const testimonials = [
  {
    name: "Ashmita Bathre",
    role: "Student",
    text: "I found so many cool clubs! This platform changed my first year.",
  },
  {
    name: "Alka Poddar , Sakshi Gupta.",
    role: "F.I.A.T Club Organizer",
    text: "Organizing tournaments is a breeze now — ticketing is a lifesaver.",
  },
  {
    name: "Rinci Atrey",
    role: "Coding Club President",
    text: "We saw a 50% increase in attendance thanks to EventHub!",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
            <p className="text-purple-600 text-sm mb-3">{t.role}</p>
            <p className="text-gray-600">{t.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;

