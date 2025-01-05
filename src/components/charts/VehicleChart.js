import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
 
const data = [
  { name: 'CAR', value: 25 },
  { name: 'BIKE AND SCOOTER', value: 35 },
  { name: 'TRUCK', value: 20 },
  { name: 'AUTO', value: 15 },
  { name: 'TRACTOR', value: 5 },
];
 
const COLORS = ['#FF69B4', '#FF7F50', '#87CEEB', '#FFD700', '#40E0D0'];
 
const VehicleChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg h-[450px] min-h-fit">
      <h3 className="text-lg font-semibold mb-4 text-center">Vehicle Type › App Registered Users Count Sub Tradewise</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
        <Legend verticalAlign="top"/>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
 
export default VehicleChart;