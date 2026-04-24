export default function EventCard({ event }) {
 const handleRegister = () => {
    if (event.googleFormLink) {
      window.open(event.googleFormLink, "_blank");
    } else {
      alert("Registration link not available");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      <img
        src={`http://localhost:5000/${event.image}`}
        alt={event.title}
        
        className="w-full h-48 object-cover"
        
      />

      <div className="p-5">

        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {event.type}
        </span>

        <h3 className="text-lg font-semibold mt-3">
          {event.title}
        </h3>
        <p className="text-sm font-sans mt-3">{event.description}</p>

        <div className="text-sm text-gray-500 mt-3 space-y-2">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
          <p className="font-medium">🏫 {event.user?.role}</p>
        </div>

        <button className="mt-5 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700" onClick={handleRegister}>
          Register Now
        </button>

      </div>
    </div>
  );
}