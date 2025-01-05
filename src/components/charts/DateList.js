import React from 'react';

const dates = [
  { date: '01-01-2025', day: 'Wednesday', value: 45 },
  { date: '31-12-2024', day: 'Tuesday', value: 43 },
  { date: '30-12-2024', day: 'Monday', value: 39 },
  { date: '29-12-2024', day: 'Sunday', value: 41 },
  { date: '28-12-2024', day: 'Saturday', value: 52 },
  { date: '27-12-2024', day: 'Friday', value: 52 },
  { date: '26-12-2024', day: 'Thursday', value: 64 },
];

const DateList = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg min-w-40">
      {dates.map((item) => (
        <div key={item.date} className="flex justify-between py-2 text-sm border-b border-blue-100 last:border-0 px-4">
          <span className="text-gray-600 text-xs">{item.date} - {item.day}</span>
          <span className="font-medium ml-">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default DateList;