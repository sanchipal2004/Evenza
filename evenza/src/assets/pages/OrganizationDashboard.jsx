// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import api from "../../api";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const[events,setEvents]= useState([]);
//   const[stats,setStats]= useState(null);
//   const[deadlines,setDeadlines] = useState([]);
//   const[loading,setLoading]= useState(true)
//   const [user,setUser]= useState(null)
//  const navigate= useNavigate();
// const handleEvent=()=>{
//   navigate("/CreateEvent")

// }
//   useEffect(() => {

//     const fetchData = async () => {

//       try {

//         setLoading(true);

//         const [eventsRes, statsRes, deadlinesRes,userRes] = await Promise.all([
//           api.get("/events"),
//           api.get("/events/stats"),
//           api.get("/events/upcoming"),
//           api.get("/auth/me")
//         ]);

//         if (eventsRes.data.success) {
//           setEvents(eventsRes.data.data);
//         }

//         if (statsRes.data.success) {
//           setStats(statsRes.data.data||statsRes.data.message);
//         }

//         if (deadlinesRes.data.success) {
//           setDeadlines(deadlinesRes.data.data);
//         }
//         if(userRes.data.success){
//             setUser(userRes.data.data)

          
//         }

//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }

//     };

//     fetchData();

//   }, []);
  
//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       {/* Sidebar */}
//       <aside className="hidden md:flex flex-col w-64 bg-white border-r">

//         <div className="p-6 font-bold text-purple-600 text-xl">
//           ClubHub
//           <p className="text-xs text-gray-400">ORGANIZERS ONLY</p>
//         </div>

//         <nav className="flex flex-col gap-1 px-4">

//           <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={()=>navigate("/OrganizationDashboard")}>
//             Dashboard
//           </button>

//           <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={handleEvent} >
//             Create Event
//           </button>


//         </nav>

//         {/* User */}
//         <div className="mt-auto p-4 border-t flex items-center gap-3">
          
//           <div>
//             <p className="text-sm font-medium">{user?.fullName}</p>
//             <p className="text-xs text-gray-400">Tech Club Lead</p>
//           </div>
//         </div>

//       </aside>


//       {/* Main */}
//       <div className="flex-1 p-6 md:p-10">

//         {/* Topbar */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

//           <input
//             placeholder="Search events or students..."
//             className="border rounded-lg p-3 w-full md:w-96"
//           />

//           <button className="bg-purple-600 text-white px-5 py-2 rounded-lg" onClick={handleEvent}>
//             + New Event
//           </button>

//         </div>

//         {/* Title */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold">
//             Dashboard Overview
//           </h1>
//           <p className="text-gray-500">
//             Monitor your club's performance and upcoming activities.
//           </p>
//         </div>


//         {/* Stats Cards */}
//         {stats&&(

//         <div className="grid md:grid-cols-4 gap-6 mb-8">
          
         

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Total Events</p>
//             <h2 className="text-2xl font-bold mt-2">{stats.totalEvents|| 0}</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Upcoming Events</p>
//             <h2 className="text-2xl font-bold mt-2">{stats.upcomingEvents|| 0}</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Past Events</p>
//             <h2 className="text-2xl font-bold mt-2">{stats.pastEvents||0}</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Registrations</p>
//             <h2 className="text-2xl font-bold mt-2">{stats.registrations||0}</h2>
//           </div>
        
//         </div>
//       )}


//         {/* Events Table */}
//         <div className="bg-white rounded-xl shadow p-6 mb-8">

//           <div className="flex justify-between mb-4">
//             <h2 className="font-semibold text-lg">
//               Recent Events List
//             </h2>

//             <button className="text-purple-600 text-sm">
//               View All Events
//             </button>
//           </div>

//           <table className="w-full text-left">

//             <thead className="text-gray-500 text-sm">
//               <tr>
//                 <th className="pb-3">Event Name</th>
//                 <th>Date & Time</th>
//                 <th>Registrations</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody className="text-sm">
//               {events.map((event)=>(

              

//               <tr key={event._id}className="border-t">
//                 <td className="py-4">{event.title}</td>
//                 <td>{new Date(event.date).toLocaleDateString()}</td>
//                 <td>{event.location}</td>
//                 <td>
//                   <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
//                     Active
//                   </span>
//                 </td>
//               </tr>
// ))}

//             </tbody>

//           </table>

//         </div>


//         {/* Bottom Section */}
//         <div className="grid md:grid-cols-1 gap-6">

          
          


//           {/* Deadlines */}
//           <div className="bg-white rounded-xl shadow p-6">

//             <h2 className="font-semibold mb-4">
//               Upcoming Deadlines
//             </h2>
//             {loading?(<p className="text-gray-500 text-sm">Loading...</p>
//       ) : deadlines.length === 0 ? (
//         <p className="text-gray-400 text-sm">No deadlines</p>
//       ) : (

//             <div className="space-y-6 text-sm">
// {deadlines.map((deadline)=>(
//               <div className="flex justify-between" key={deadline._id}>
//                 <span>{deadline.title}</span>
//                 <button className="text-purple-600">
//                   Mark Done
//                 </button>
//               </div>
// ))}
//             </div>
//       )}
// </div>
//         </div>

//       </div>
//     </div>
//   );
// }


//modified

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Dashboard() {
  // --- ORIGINAL LOGIC PRESERVED ---
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState(null);
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleEvent = () => {
    navigate("/CreateEvent");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [eventsRes, statsRes, deadlinesRes, userRes] = await Promise.all([
          api.get("/events"),
          api.get("/events/stats"),
          api.get("/events/upcoming"),
          api.get("/auth/me")
        ]);

        if (eventsRes.data.success) {
          setEvents(eventsRes.data.data);
        }

        if (statsRes.data.success) {
          setStats(statsRes.data.data || statsRes.data.message);
        }

        if (deadlinesRes.data.success) {
          setDeadlines(deadlinesRes.data.data);
        }

        if (userRes.data.success) {
          setUser(userRes.data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // --- END OF ORIGINAL LOGIC ---

  return (
    <div className="flex min-h-screen bg-[#05010d] text-white selection:bg-purple-500/30 font-sans">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar - Enhanced UI */}
      <aside className="hidden md:flex flex-col w-72 bg-white/[0.01] border-r border-white/5 backdrop-blur-3xl z-20">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="font-black text-xl italic">E</span>
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter">Evenza</h1>
              <p className="text-[10px] font-black text-purple-500 tracking-[0.3em] uppercase">Control</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 px-4 mt-4">
          <button 
            className="text-left px-6 py-4 rounded-2xl bg-purple-600/10 text-purple-400 border border-purple-500/20 font-bold text-sm uppercase tracking-widest transition-all" 
            onClick={() => navigate("/OrganizationDashboard")}
          >
            Dashboard
          </button>
          <button 
            className="text-left px-6 py-4 rounded-2xl text-white/30 hover:text-white hover:bg-white/5 font-bold text-sm uppercase tracking-widest transition-all" 
            onClick={handleEvent}
          >
            Create Event
          </button>
        </nav>

        {/* User Profile Info */}
        <div className="mt-auto p-6">
          <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs">
              {user?.fullName?.charAt(0) || "O"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-black truncate">{user?.fullName}</p>
              <p className="text-[10px] font-bold text-purple-400/60 uppercase tracking-widest">Club Lead</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 lg:p-12 z-10 overflow-y-auto">

        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="relative group w-full md:w-96">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-white/20 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <input
              placeholder="Search events or students..."
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-6 text-sm text-white w-full outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all"
            />
          </div>

          <button 
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:-translate-y-1 shadow-2xl shadow-purple-600/30" 
            onClick={handleEvent}
          >
            + New Event
          </button>
        </div>

        {/* Page Title Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tight mb-2 text-white">
            Dashboard <span className="text-purple-500">Overview</span>
          </h1>
          <p className="text-white/20 font-bold uppercase tracking-[0.2em] text-[10px]">
            Monitoring system operations and community interaction.
          </p>
        </div>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Events", value: stats.totalEvents || 0 },
              { label: "Upcoming Events", value: stats.upcomingEvents || 0 },
              { label: "Past Events", value: stats.pastEvents || 0 },
              { label: "Registrations", value: stats.registrations || 0 }
            ].map((stat, i) => (
              <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/30 transition-all duration-500">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">{stat.label}</p>
                <h3 className="text-4xl font-black tracking-tighter group-hover:text-purple-400 transition-colors">{stat.value}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Recent Events Table */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl mb-12">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-sm font-black uppercase tracking-widest">Recent Events Log</h2>
            <button className="text-[10px] font-black text-purple-400 uppercase tracking-widest hover:text-white transition-colors">
              View All Events
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                  <th className="px-8 py-6">Event Identity</th>
                  <th className="px-8 py-6">Scheduled</th>
                  <th className="px-8 py-6">Identity/Loc</th>
                  <th className="px-8 py-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {events.map((event) => (
                  <tr key={event._id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 font-bold text-sm group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </td>
                    <td className="px-8 py-6 text-sm text-white/30 font-medium italic">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-6 text-[10px] text-white/10 uppercase font-black">
                      {event.location}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deadlines Section */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-purple-400">Upcoming Alert Deadlines</h2>
          
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-16 bg-white/5 rounded-2xl"></div>
              <div className="h-16 bg-white/5 rounded-2xl"></div>
            </div>
          ) : deadlines.length === 0 ? (
            <p className="text-white/10 text-xs font-black py-10 uppercase tracking-widest text-center">No critical alerts</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deadlines.map((deadline) => (
                <div key={deadline._id} className="flex justify-between items-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all">
                  <span className="text-sm font-bold">{deadline.title}</span>
                  <button className="text-[10px] font-black text-purple-400 hover:text-white transition-colors uppercase tracking-widest border-b border-purple-500/20">
                    Mark Done
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}