// import { useState } from "react";
// import Navbar from "../../components/Navbar";

// const subjects = [
//   { id: 1, name: "A Practical Approach to English",          pdfUrl: "/pdfs/APracticalApproachToEng.pdf" },
//   { id: 2, name: "Analysis and Design of Algorithm",         pdfUrl: "/pdfs/AnalysisandDesignofAlgorithm.pdf" },
//   { id: 3, name: "Android Programming",                      pdfUrl: "/pdfs/AndroidProgramming.pdf" },
//   { id: 4, name: "Artificial Intelligence",                  pdfUrl: "/pdfs/ArtificialIntelligence.pdf" },
//   { id: 5, name: "Cloud Computing",                          pdfUrl:"/pdfs/CloudComputing.pdf" },
//   { id: 6, name: "Computer Networks",                        pdfUrl: "/pdfs/ComputerNetworks.pdf" },
//   { id: 7, name: "Data Mining and Warehousing ",             pdfUrl: "/pdfs/DataWare.pdf" },
//   { id: 8, name: "Database Management Systems",              pdfUrl: "/pdfs/Data Base and Management Systems.pdf" },
//   { id: 9, name: "Foundation of Block Chain Technologies",   pdfUrl: "/pdfs/FoundationofBlockchain.pdf" },
//   { id: 10, name: "Information Security",                    pdfUrl: "/pdfs/InformationSecurity.pdf" },
//   { id: 11, name: "Operating Systems",                       pdfUrl: "/pdfs/Operating System.pdf" },
//   { id: 12, name: "Software Engineering",                    pdfUrl: "/pdfs/Software Engineering.pdf" },
//   { id: 13, name: "Web Application Development",             pdfUrl: "/pdfs/WebApplicationDevelopment.pdf" },
// ];

// export default function Resources() {
//   const [selected, setSelected]   = useState(null); 
//   const [search,   setSearch]     = useState("");

//   const filtered = subjects.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const openModal  = (subject) => setSelected(subject);
//   const closeModal = () => setSelected(null);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />

//       <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-gray-700 text-white py-20 px-6 text-center">
//         <div className="absolute inset-0 opacity-10"
//           style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
//         <h1 className="relative text-4xl font-extrabold mb-3 tracking-tight">
//           📚 Academic Resources
//         </h1>
//         <p className="relative text-purple-200 text-lg max-w-xl mx-auto">
//           Browse subject notes & study materials. Click any subject to view or download the PDF.
//         </p>
//       </div>

//       <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-10">
//         <input
//           type="text"
//           placeholder="Search subjects…"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full rounded-xl border border-purple-200 bg-white shadow-lg px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
//         />
//       </div>

//       <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-4">
//         {filtered.length === 0 ? (
//           <p className="text-center text-gray-400 mt-10">No subjects match your search.</p>
//         ) : (
//           filtered.map((subject, i) => (
//             <button
//               key={subject.id}
//               onClick={() => openModal(subject)}
//               className="group flex items-center justify-between w-full bg-purple-700 hover:bg-purple-700 text-white text-lg font-semibold px-7 py-5 rounded-2xl shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-purple-300 hover:shadow-lg"
//               style={{ animationDelay: `${i * 40}ms` }}
//             >
//               <span>{subject.name}</span>
//               <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-white/20 rounded-lg px-3 py-1 ml-4 whitespace-nowrap">
//                 {subject.pdfUrl ? "View PDF →" : "Coming soon"}
//               </span>
//             </button>
//           ))
//         )}
//       </div>

//       {selected && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-purple-900 backdrop-blur-sm p-4"
//           onClick={closeModal}
//         >
//           <div
//           className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between px-6 py-4 bg-purple-700 text-white">
//               <h2 className="text-lg font-bold truncate pr-4">{selected.name}</h2>
//               <div className="flex items-center gap-3">
//                 {selected.pdfUrl && (
//                   <a
//                     href={selected.pdfUrl}
//                     download
//                     className="text-sm bg-white text-purple-700 font-semibold px-4 py-1.5 rounded-lg hover:bg-purple-100 transition"
//                   >
//                     ⬇ Download
//                   </a>
//                 )}
//                 <button
//                   onClick={closeModal}
//                   className="text-white text-2xl leading-none hover:text-purple-200 transition"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>

//             <div className="flex-1 overflow-auto">
//               {selected.pdfUrl ? (
//               <iframe
//                 src={`${selected.pdfUrl}#toolbar=0&navpanes=0`}
//                 title={selected.name}
//                 className="w-full h-full min-h-[82vh]"
//               />
//               ) : (
//                 <div className="flex flex-col items-center justify-center h-72 text-gray-400 gap-4">
//                   <span className="text-6xl">📄</span>
//                   <p className="text-xl font-semibold text-gray-500">PDF not uploaded yet</p>
//                   <p className="text-sm text-center max-w-xs">
//                     Set <code className="bg-gray-100 px-1 rounded text-purple-600">pdfUrl</code> for{" "}
//                     <strong>{selected.name}</strong> in <code className="bg-gray-100 px-1 rounded">Resources.jsx</code> to display it here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import Navbar from "../../components/Navbar";
import { BookOpen } from "lucide-react";

const subjects = [
  { id: 1, name: "A Practical Approach to English", pdfUrl: "/pdfs/APracticalApproachToEng.pdf" },
  { id: 2, name: "Analysis and Design of Algorithm", pdfUrl: "/pdfs/AnalysisandDesignofAlgorithm.pdf" },
  { id: 3, name: "Android Programming", pdfUrl: "/pdfs/AndroidProgramming.pdf" },
  { id: 4, name: "Artificial Intelligence", pdfUrl: "/pdfs/ArtificialIntelligence.pdf" },
  { id: 5, name: "Cloud Computing", pdfUrl: "/pdfs/CloudComputing.pdf" },
  { id: 6, name: "Computer Networks", pdfUrl: "/pdfs/ComputerNetworks.pdf" },
  { id: 7, name: "Data Mining and Warehousing", pdfUrl: "/pdfs/DataWare.pdf" },
  { id: 8, name: "Database Management Systems", pdfUrl: "/pdfs/Data Base and Management Systems.pdf" },
  { id: 9, name: "Foundation of Block Chain Technologies", pdfUrl: "/pdfs/FoundationofBlockchain.pdf" },
  { id: 10, name: "Information Security", pdfUrl: "/pdfs/InformationSecurity.pdf" },
  { id: 11, name: "Operating Systems", pdfUrl: "/pdfs/Operating System.pdf" },
  { id: 12, name: "Software Engineering", pdfUrl: "/pdfs/Software Engineering.pdf" },
  { id: 13, name: "Web Application Development", pdfUrl: "/pdfs/WebApplicationDevelopment.pdf" },
];

export default function Resources() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = subjects.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a103d] to-[#2a0845] text-white relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      {/* Hero */}
      {/* <div className="relative text-center py-20 px-6">
        <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          📚 Academic Resources
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Browse subject notes & study materials. Click any subject to view or download the PDF.
        </p>
      </div> */}
      <div className="relative text-center py-20 px-6">

  <div className="flex items-center justify-center gap-3 mb-3">
    <BookOpen 
      size={34} 
      className="text-purple-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" 
    />

    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
      Academic Resources
    </h1>
  </div>

  <p className="text-gray-300 max-w-xl mx-auto">
    Browse subject notes & study materials. Click any subject to view or download the PDF.
  </p>

</div>

      {/* Search */}
      <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-10">
        <input
          type="text"
          placeholder="Search subjects…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Subject List */}
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No subjects match your search.</p>
        ) : (
          filtered.map((subject, i) => (
            <button
              key={subject.id}
              onClick={() => setSelected(subject)}
              className="group flex items-center justify-between w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-lg font-semibold px-7 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span>{subject.name}</span>

              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-white/20 rounded-lg px-3 py-1 ml-4">
                {subject.pdfUrl ? "View PDF →" : "Coming soon"}
              </span>
            </button>
          ))
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-lg font-bold">{selected.name}</h2>

              <div className="flex items-center gap-3">
                {selected.pdfUrl && (
                  <a
                    href={selected.pdfUrl}
                    download
                    className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 rounded-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
                  >
                    ⬇ Download
                  </a>
                )}

                <button
                  onClick={() => setSelected(null)}
                  className="text-white text-2xl hover:text-purple-400 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto">
              {selected.pdfUrl ? (
                <iframe
                  src={`${selected.pdfUrl}#toolbar=0&navpanes=0`}
                  title={selected.name}
                  className="w-full h-full min-h-[82vh]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-72 text-gray-400 gap-4">
                  <span className="text-6xl">📄</span>
                  <p className="text-xl font-semibold">PDF not uploaded yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}