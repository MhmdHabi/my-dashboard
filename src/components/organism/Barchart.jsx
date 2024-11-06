// src/components/organism/BarChart.jsx

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 3000 },
  { name: "Mar", users: 2000 },
  { name: "Apr", users: 2780 },
  { name: "Mei", users: 1890 },
  { name: "Juni", users: 2390 },
  { name: "July", users: 3490 },
  { name: "Agu", users: 3200 },
  { name: "Sept", users: 2100 },
  { name: "Oct", users: 2800 },
  { name: "Nov", users: 3100 },
  { name: "Des", users: 4000 },
];

const BarChartExample = () => {
  return (
    <div className="bg-[#252525] p-3 rounded">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="name" stroke="#fff" angle={-45} textAnchor="end" interval={0} />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#ff66c4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartExample;
