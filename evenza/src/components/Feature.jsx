import React from "react";

const features = [
  {
    icon: "auto_awesome",
    title: "Effortless Event Creation",
    desc: "Launch your event in minutes with intuitive tools.",
  },
  {
    icon: "explore",
    title: "Centralized Event Discovery",
    desc: "A single dynamic calendar for campus happenings.",
  },
  {
    icon: "confirmation_number",
    title: "Easy RSVP & Ticketing",
    desc: "Manage guest lists and ticketing seamlessly.",
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Everything You Need for Amazing Events
      </h2>

      <p className="text-center text-black max-w-2xl mx-auto mb-12">
        Our platform simplifies every step—from organizing to managing events 
      </p>
    </section>
  );
};

export default Features;

