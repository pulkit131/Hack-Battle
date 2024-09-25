import React from "react";
import BuyerProfilePieChart from "./BuyerProfilePieChart";

const dataSet1 = [
  { name: "Pass", value: 1340 },
  { name: "Fail", value: 260 },
];

const dataSet2 = [
  { name: "Pass", value: 1350 },
  { name: "Fail", value: 150 },
];

const dataSet3 = [
  { name: "Pass", value: 850 },
  { name: "Fail", value: 150 },
];

export default function DashboardStatsGrid() {
  return (
    <>
      <div className="flex gap-4">
        <BuyerProfilePieChart dataSets={[dataSet1]} />

        <BuyerProfilePieChart dataSets={[dataSet2]} />
        <BuyerProfilePieChart dataSets={[dataSet3]} />
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center h-30 w-1">
      {children}
    </div>
  );
}
