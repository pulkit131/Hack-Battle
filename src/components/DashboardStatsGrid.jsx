import React from "react";

// Hero Section Component
function HeroSection() {
  return (
    <div className="bg-green-700 p-20 h-60 w-29  flex items-center justify-start rounded-2xl hover:scale-105 transition ease-in-out duration-300 hover:bg-green-600">

      <div className="relative max-w-5xl px-8">
        {/* Glowing green line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-white shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>

        {/* Text container */}
        <div className="ml-8">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-white">Let's build from here</h1>

          {/* Subheading */}
          <p className="text-xl text-black mt-4">The world's leading AI-powered developer platform.</p>
          <p className="text-xl text-black mt-4">
          <p>To access the Models!<span className=" ml-2 bg-black text-white rounded-2xl p-3 text-sm">Hover the card's below </span></p>
          
          </p>
        </div>
      </div>
    </div>
  );
}

// Dashboard Stats Grid Component
export default function DashboardStatsGrid() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder for the stats grid */}
      {/* <div className="flex gap-4">
        <BuyerProfilePieChart dataSets={[dataSet1]} />
        <BuyerProfilePieChart dataSets={[dataSet2]} />
        <BuyerProfilePieChart dataSets={[dataSet3]} />
      </div> */}
    </>
  );
}

// function BoxWrapper({ children }) {
//   return (
//     <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center h-30 w-1">
//       {children}
//     </div>
//   );
// }
