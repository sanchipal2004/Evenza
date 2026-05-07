// import EventCard from "./Eventcard"
// import api from "../../api";
// import { useEffect, useState } from "react";

// export default function Events(){
//   const [events,setEvents] = useState([]);
//   const [loading,setLoading]= useState(true);

//   useEffect(()=>{
//     const fetchevent= async()=>{
//       try{
//         const res= await api.get("/events/");
//         setEvents(res.data.data);

//       }catch(err){
//         console.error(err)
//       }finally{
//         setLoading(false);
//       }
//     }
//     fetchevent();
//   },[])





//   return (
//     <div className="bg-gray-50 min-h-screen">

//       <div className="max-w-6xl mx-auto px-6 py-10">

//         <h1 className="text-3xl font-bold">
//           Upcoming Campus Events
//         </h1>

//         <p className="text-gray-500 mt-2 mb-6">
//           Explore workshops, competitions, and meetups organized by your favorite campus clubs.
//         </p>

//         {/* Search */}
//         <div className="flex gap-4 mb-8">

//           <input
//             placeholder="Search events by title, club, or category"
//             className="border rounded-lg px-4 py-2 w-full"
//           />

//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
//             All Events
//           </button>

//           <button className="bg-gray-200 px-4 py-2 rounded-lg">
//             Technical
//           </button>

//           <button className="bg-gray-200 px-4 py-2 rounded-lg">
//             Cultural
//           </button>

//           <button className="bg-gray-200 px-4 py-2 rounded-lg">
//             Sports
//           </button>

//         </div>

        

//           <div className="mb-12">

//             <h2 className="text-xl font-semibold mb-6">
             
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">

//               {events.map((event) => (
//                 <EventCard key={event._id} event={event} />
//               ))}

//             </div>

//           </div>

//         <div className="text-center mt-10">

//           <button className="border border-purple-400 text-purple-600 px-6 py-2 rounded-lg">
//             Load More Events
//           </button>

//         </div>

//       </div>

//       {/* Footer */}

//       <footer className="border-t py-6 text-center text-gray-500 text-sm">
//         © 2023 University Event Management System
//       </footer>

//     </div>
//   );
// }

//modified

import EventCard from "./Eventcard";
import api from "../../api";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchevent = async () => {
      try {
        const res = await api.get("/events/");
        setEvents(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchevent();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a103d] to-[#2a0845] text-white">

      {/* Glow background effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Upcoming Campus Events
        </h1>

        <p className="text-gray-300 mt-2 mb-8">
          Explore workshops, competitions, and meetups organized by your favorite campus clubs.
        </p>

        {/* Search + Filters */}
        <div className="flex flex-wrap gap-4 mb-10">

          <input
            placeholder="Search events by title, club, or category"
            className="flex-1 backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

         
        </div>

        {/* Events Grid */}
        <div className="mb-12">

          {loading ? (
            <p className="text-gray-400">Loading events...</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all duration-300">
            Load More Events
          </button>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm backdrop-blur-lg bg-white/5">
        © 2026 University Event Management System
      </footer>
    </div>
  );
}