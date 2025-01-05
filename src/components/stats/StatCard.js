import React, { useState } from "react";
import DateList from "../charts/DateList";

const StatCard = ({ title, value, average, period, isHighlighted }) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => {
          setShowData(true);
        }}
        onMouseLeave={() => {
          setShowData(false);
        }}
        className={`flex flex-col justify-between p-6 rounded-lg mb-2 h-full ${
          showData ? "bg-blue-50" : "bg-white"
        }`}
      >
        <div>
        <h3 className="text-gray-600 text-base font-medium">{title}</h3>
          <span className="text-sm font-semibold text-gray-900">{value}</span>
        </div>
        <div className="mt-2 text-sm border-t-2">
          <span className="text-gray-500">Last {period} Days</span>
          <br />
          <span className=" text-green-600">Avg: {average}</span>
        </div>
      </div>
      <div className="absolute z-10">{showData && <DateList />}</div>
    </div>
  );
};

export default StatCard;
