// import React, { useState } from "react";
// import api from "../../api.js";
// import { useNavigate } from "react-router-dom";
// export default function CreateEvent() {
//     const navigate= useNavigate();

//     const [formData, setFormData] = useState({
//         title: "",
//         description: "",
//         date: "",
//         time: "",
//         location: "",
//         googleFormLink:""
//     })
//     const [banner, setBanner] = useState(null);
//     const [preview, setPreview] = useState(null);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleBanner = (e) => {
//         const file = e.target.files[0];
//         setBanner(file);
//         setPreview(URL.createObjectURL(file));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const data = new FormData();

//         Object.keys(formData).forEach((key) => {
//             data.append(key, formData[key]);
//         });

//         data.append("banner", banner);

//         try {
//             await api.post("/events/create", data);

//             alert("Event created successfully");

//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-50">

//             {/* Sidebar */}
//             <div className="hidden md:flex flex-col w-64 bg-white border-r">

//                 <div className="p-8 text-xl font-bold text-purple-600">
//                     ClubHub
//                     <p className="text-sm text-gray-400">Admin Portal</p>
//                 </div>
//                 <nav className="flex flex-col gap-1 px-8"> <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={()=>navigate("/OrganizationDashboard")}> Dashboard </button> <button className="text-left px-4 py-2 rounded bg-purple-100 text-purple-600" onClick={()=>navigate("/CreateEvent")}> Create Events </button> 
//                 <button className="text-left px-4 py-2 rounded bg-purple-100 text-purple-600" onClick={()=>navigate("/Events")}>  Events </button>  </nav>
            
//             </div>

//             {/* Main */}
//             <div className="flex-1 p-6 md:p-10">

//                 {/* Header */}
//                 <div className="mb-8">
//                     <p className="text-sm text-gray-500">
//                         Events &gt; Create New Event
//                     </p>

//                     <h1 className="text-3xl font-bold mt-2">
//                         Create New Club Event
//                     </h1>
//                 </div>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="bg-white rounded-xl shadow p-6 space-y-6"
//                 >

//                     {/* Banner Upload */}
//                     <div>

//                         <p className="text-sm font-semibold mb-2">
//                             EVENT BANNER
//                         </p>

//                         <label className="border-2 border-dashed rounded-lg h-48 flex flex-col items-center justify-center text-gray-400 cursor-pointer">

//                             {preview ? (
//                                 <img
//                                     src={preview}
//                                     className="h-full object-cover"
//                                 />
//                             ) : (
//                                 <>
//                                     <p>Click to upload banner image</p>
//                                     <p className="text-xs">
//                                         SVG, PNG, JPG or GIF (max. 10MB)
//                                     </p>
//                                 </>
//                             )}

//                             <input
//                                 type="file"
//                                 hidden
//                                 onChange={handleBanner}
//                             />

//                         </label>

//                     </div>

//                     {/* Title */}
//                     <div>

//                         <p className="text-sm font-semibold mb-2">
//                             EVENT TITLE
//                         </p>

//                         <input
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="w-full border rounded-lg p-3"
//                             placeholder="e.g. Annual Tech Symposium 2024"
//                         />

//                     </div>

//                     {/* Description */}
//                     <div>

//                         <p className="text-sm font-semibold mb-2">
//                             DESCRIPTION
//                         </p>

//                         <textarea
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             rows="4"
//                             className="w-full border rounded-lg p-3"
//                         />

//                     </div>

//                     {/* Date + Time */}
//                     <div className="grid md:grid-cols-2 gap-4">

//                         <div>
//                             <p className="text-sm font-semibold mb-2">
//                                 DATE
//                             </p>

//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={formData.date}
//                                 onChange={handleChange}
//                                 className="w-full border rounded-lg p-3"
//                             />
//                         </div>

//                         <div>
//                             <p className="text-sm font-semibold mb-2">
//                                 TIME
//                             </p>

//                             <input
//                                 type="time"
//                                 name="time"
//                                 value={formData.time}
//                                 onChange={handleChange}
//                                 className="w-full border rounded-lg p-3"
//                             />
//                         </div>

//                     </div>

//                     {/* Location + Registration */}
//                     <div className="grid md:grid-cols-2 gap-4">

//                         <div>
//                             <p className="text-sm font-semibold mb-2">
//                                 LOCATION
//                             </p>

//                             <input
//                                 name="location"
//                                 value={formData.location}
//                                 onChange={handleChange}
//                                 className="w-full border rounded-lg p-3"
//                             />
//                         </div>

//                         <div>
//                             <p className="text-sm font-semibold mb-2">
//                                 REGISTRATION LINK
//                             </p>

//                             <input
//                                 name="googleFormLink"
//                                 value={formData.googleFormLink}
//                                 onChange={handleChange}
//                                 className="w-full border rounded-lg p-3"
//                             />
//                         </div>

//                     </div>

//                     {/* Submit */}
//                     <div className="flex justify-end">

//                         <button
//                             type="submit"
//                             className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"onClick={()=>{navigate("/")}}
//                         >
//                             Publish Event
//                         </button>

//                     </div>

//                 </form>

//             </div>
//         </div>
//     );
// }


import React, { useState ,useEffect} from "react";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const navigate = useNavigate();

  // --- ORIGINAL STATE PRESERVED ---
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    googleFormLink: ""
  });
  const [banner, setBanner] = useState(null);
  const [preview, setPreview] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get("/auth/me");
                if (res.data.data) {
                    setUser(res.data.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBanner = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("banner", banner);

    try {
      await api.post("/events/create", data);
      alert("Event created successfully");
      navigate("/OrganizationDashboard"); // Added navigation for better UX
    } catch (error) {
      console.log(error);
    }
  };
  // --- END OF ORIGINAL LOGIC ---

  return (
    <div className="flex min-h-screen bg-[#05010d] text-white selection:bg-purple-500/30 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar - Matching Dashboard Style */}
      <aside className="hidden md:flex flex-col w-72 bg-white/[0.01] border-r border-white/5 backdrop-blur-3xl z-20">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="font-black text-xl italic">E</span>
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter">Evenza</h1>
              <p className="text-[10px] font-black text-purple-500 tracking-[0.3em] uppercase"> {user?.fullName|| "Club Organizer"}</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 px-4 mt-4">
          <button onClick={() => navigate("/OrganizationDashboard")} className="text-left px-6 py-4 rounded-2xl text-white/30 hover:text-white hover:bg-white/5 font-bold text-sm uppercase tracking-widest transition-all">
            Dashboard
          </button>
          <button className="text-left px-6 py-4 rounded-2xl bg-purple-600/10 text-purple-400 border border-purple-500/20 font-bold text-sm uppercase tracking-widest transition-all">
            Create Event
          </button>
          <button onClick={() => navigate("/Events")} className="text-left px-6 py-4 rounded-2xl text-white/30 hover:text-white hover:bg-white/5 font-bold text-sm uppercase tracking-widest transition-all">
            All Events
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-12 z-10 overflow-y-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Event Forge</p>
            <h1 className="text-4xl font-black tracking-tight">Deploy New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span></h1>
          </div>
        </div>

        <div className="grid xl:grid-cols-5 gap-12">
          
          {/* Form Side - 3/5 width */}
          <div className="xl:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Banner Upload Area */}
              <div className="group relative">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-3 ml-1">Visual Identity</p>
                <label className="relative border-2 border-dashed border-white/10 rounded-[2rem] h-64 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/40 cursor-pointer transition-all overflow-hidden group">
                  {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                      </div>
                      <p className="text-sm font-bold text-white/40">Drop artwork here or <span className="text-purple-400">browse</span></p>
                      <p className="text-[10px] text-white/10 font-black uppercase mt-2 tracking-widest">SVG, PNG, JPG (Max 10MB)</p>
                    </div>
                  )}
                  <input type="file" hidden onChange={handleBanner} />
                </label>
              </div>

              {/* Title Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Event Designation</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Quantum Code Summit"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all font-medium"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Narrative</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe the experience..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all font-medium resize-none"
                />
              </div>

              {/* Grid Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Calendar Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 transition-all [color-scheme:dark]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Time Horizon</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 transition-all [color-scheme:dark]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Coordinates</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="Main Auditorium" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400/80 ml-1">Registration Portal</label>
                  <input name="googleFormLink" value={formData.googleFormLink} onChange={handleChange} placeholder="https://forms.gle/..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 transition-all" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all hover:-translate-y-1 shadow-2xl shadow-purple-600/30 active:scale-95"
              >
                Launch Event to Orbit
              </button>
            </form>
          </div>

          {/* Live Preview Side - 2/5 width */}
          <div className="xl:col-span-2 hidden xl:block">
            <div className="sticky top-0">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-3 ml-1">Live Hologram</p>
              <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-3xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px]"></div>
                
                {/* Mock Card Preview */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0a0515] border border-white/5 shadow-2xl">
                  <div className="h-44 bg-white/5 overflow-hidden">
                    {preview ? (
                      <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-[8px] font-black uppercase tracking-widest rounded-md border border-purple-500/20">Upcoming</span>
                    </div>
                    <h3 className="text-xl font-black mb-2 truncate">{formData.title || "Event Title"}</h3>
                    <p className="text-white/40 text-xs line-clamp-2 mb-6 min-h-[32px]">{formData.description || "The event description will appear here as you type..."}</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div>
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Date</p>
                        <p className="text-xs font-bold">{formData.date || "TBA"}</p>
                      </div>
                      <div>
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Location</p>
                        <p className="text-xs font-bold truncate">{formData.location || "TBA"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-2">Creator Tip</h4>
                  <p className="text-xs text-white/30 leading-relaxed font-medium">Use high-resolution 16:9 images for the best visual impact on the student feed.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

