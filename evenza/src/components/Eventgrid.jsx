import React from "react";
import clubbg from "../../public/flux.png"
import fiatbg from "../../public/fiat.png"
import rudrasbg from "../../public/rudras.png"
const EventsGrid = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${clubbg})`,
              }}
            ></div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <p className="text-sm font-medium text-primary">Technical Club</p>
              <h3 className="text-xl font-bold text-gray-900">
                Introduction to React Workshop
              </h3>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                
               
              </p>

              <p className="text-sm text-gray-700 flex-1">
                Join us for a beginner-friendly workshop on React.js. Learn the basics and build your first component!
              </p>

              
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                    `url(${fiatbg})`,
              }}
            ></div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <p className="text-sm font-medium text-primary">Speakers and Skill Development Club</p>
              <h3 className="text-xl font-bold text-gray-900">
             Enhance Your Personality By Joining F.I.A.T
              </h3>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  
                </span>
              
              </p>

              <p className="text-sm text-gray-700 flex-1">
                Join us for your overall personality development and enhance your communication  and presentation skills
              </p>

              
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                   `url(${rudrasbg})`,
              }}
            ></div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <p className="text-sm font-medium text-primary">Coding Club</p>
              <h3 className="text-xl font-bold text-gray-900">
                Upskill and showcase your dance moves
              </h3>

              <p className="text-sm text-gray-600 flex items-center gap-2">
        
                
              </p>

              <p className="text-sm text-gray-700 flex-1">
                Join our club for showcasing and upskilling your dance moves.
              </p>
            </div>
          </div>

          {/* Repeat similar cards below… */}
        </div>

       
      </div>
    </section>
  );
};

export default EventsGrid;
