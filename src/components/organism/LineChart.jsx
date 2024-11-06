// src/organism/LineChart.jsx

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Mei", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Juni", uv: 2390, pv: 3800, amt: 2500 },
  { name: "July", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Agu", uv: 3000, pv: 3200, amt: 2100 },
  { name: "Sept", uv: 2700, pv: 4000, amt: 2200 },
  { name: "Oct", uv: 3500, pv: 3800, amt: 2300 },
  { name: "Nov", uv: 4000, pv: 4100, amt: 2400 },
  { name: "Des", uv: 4200, pv: 4400, amt: 2500 },
];

const LineChartExample = () => {
  return (
    <div className="bg-[#252525] p-3 rounded">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" stroke="#fff" angle={-45} textAnchor="end" interval={0} />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
          <Legend wrapperStyle={{ border: "none", color: "#fff" }} />
          <Line type="monotone" dataKey="uv" stroke="#8c52ff" />
          <Line type="monotone" dataKey="pv" stroke="#ff66c4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartExample;
