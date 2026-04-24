import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const[events,setEvents]= useState([]);
  const[stats,setStats]= useState(null);
  const[deadlines,setDeadlines] = useState([]);
  const[loading,setLoading]= useState(true)
  const [user,setUser]= useState(null)
 const navigate= useNavigate();
const handleEvent=()=>{
  navigate("/CreateEvent")

}
  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const [eventsRes, statsRes, deadlinesRes,userRes] = await Promise.all([
          api.get("/events"),
          api.get("/events/stats"),
          api.get("/events/upcoming"),
          api.get("/auth/me")
        ]);

        if (eventsRes.data.success) {
          setEvents(eventsRes.data.data);
        }

        if (statsRes.data.success) {
          setStats(statsRes.data.data||statsRes.data.message);
        }

        if (deadlinesRes.data.success) {
          setDeadlines(deadlinesRes.data.data);
        }
        if(userRes.data.success){
            setUser(userRes.data.data)

          
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

    };

    fetchData();

  }, []);
  
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">

        <div className="p-6 font-bold text-purple-600 text-xl">
          ClubHub
          <p className="text-xs text-gray-400">ORGANIZERS ONLY</p>
        </div>

        <nav className="flex flex-col gap-1 px-4">

          <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={()=>navigate("/OrganizationDashboard")}>
            Dashboard
          </button>

          <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={handleEvent} >
            Create Event
          </button>


        </nav>

        {/* User */}
        <div className="mt-auto p-4 border-t flex items-center gap-3">
          
          <div>
            <p className="text-sm font-medium">{user?.fullName}</p>
            <p className="text-xs text-gray-400">Tech Club Lead</p>
          </div>
        </div>

      </aside>


      {/* Main */}
      <div className="flex-1 p-6 md:p-10">

        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <input
            placeholder="Search events or students..."
            className="border rounded-lg p-3 w-full md:w-96"
          />

          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg" onClick={handleEvent}>
            + New Event
          </button>

        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Monitor your club's performance and upcoming activities.
          </p>
        </div>


        {/* Stats Cards */}
        {stats&&(

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          
         

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Events</p>
            <h2 className="text-2xl font-bold mt-2">{stats.totalEvents|| 0}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Upcoming Events</p>
            <h2 className="text-2xl font-bold mt-2">{stats.upcomingEvents|| 0}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Past Events</p>
            <h2 className="text-2xl font-bold mt-2">{stats.pastEvents||0}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Registrations</p>
            <h2 className="text-2xl font-bold mt-2">{stats.registrations||0}</h2>
          </div>
        
        </div>
      )}


        {/* Events Table */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-lg">
              Recent Events List
            </h2>

            <button className="text-purple-600 text-sm">
              View All Events
            </button>
          </div>

          <table className="w-full text-left">

            <thead className="text-gray-500 text-sm">
              <tr>
                <th className="pb-3">Event Name</th>
                <th>Date & Time</th>
                <th>Registrations</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {events.map((event)=>(

              

              <tr key={event._id}className="border-t">
                <td className="py-4">{event.title}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.location}</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                    Active
                  </span>
                </td>
              </tr>
))}

            </tbody>

          </table>

        </div>


        {/* Bottom Section */}
        <div className="grid md:grid-cols-1 gap-6">

          
          


          {/* Deadlines */}
          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-semibold mb-4">
              Upcoming Deadlines
            </h2>
            {loading?(<p className="text-gray-500 text-sm">Loading...</p>
      ) : deadlines.length === 0 ? (
        <p className="text-gray-400 text-sm">No deadlines</p>
      ) : (

            <div className="space-y-6 text-sm">
{deadlines.map((deadline)=>(
              <div className="flex justify-between" key={deadline._id}>
                <span>{deadline.title}</span>
                <button className="text-purple-600">
                  Mark Done
                </button>
              </div>
))}
            </div>
      )}
</div>
        </div>

      </div>
    </div>
  );
}
