// src/pages/Dashboard.jsx
import React from "react";
import LineChartExample from "../components/organism/LineChart";
import BarChartExample from "../components/organism/BarChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Container untuk LineChart dan BarChart */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
        <div className="flex-1">
          <LineChartExample />
        </div>
        <div className="flex-1">
          <BarChartExample />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
