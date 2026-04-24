import EventCard from "./Eventcard"
import api from "../../api";
import { useEffect, useState } from "react";

export default function Events(){
  const [events,setEvents] = useState([]);
  const [loading,setLoading]= useState(true);

  useEffect(()=>{
    const fetchevent= async()=>{
      try{
        const res= await api.get("/events/");
        setEvents(res.data.data);

      }catch(err){
        console.error(err)
      }finally{
        setLoading(false);
      }
    }
    fetchevent();
  },[])





  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Upcoming Campus Events
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Explore workshops, competitions, and meetups organized by your favorite campus clubs.
        </p>

        {/* Search */}
        <div className="flex gap-4 mb-8">

          <input
            placeholder="Search events by title, club, or category"
            className="border rounded-lg px-4 py-2 w-full"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            All Events
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded-lg">
            Technical
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded-lg">
            Cultural
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded-lg">
            Sports
          </button>

        </div>

        

          <div className="mb-12">

            <h2 className="text-xl font-semibold mb-6">
             
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}

            </div>

          </div>

        <div className="text-center mt-10">

          <button className="border border-purple-400 text-purple-600 px-6 py-2 rounded-lg">
            Load More Events
          </button>

        </div>

      </div>

      {/* Footer */}

      <footer className="border-t py-6 text-center text-gray-500 text-sm">
        © 2023 University Event Management System
      </footer>

    </div>
  );
}