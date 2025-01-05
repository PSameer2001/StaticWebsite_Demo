import React from 'react';
import StatCard from './StatCard';

const stats = [
  { title: 'Total Download', value: '85', average: '91', period: 7 },
  { title: 'Total Registered', value: '41', average: '48', period: 7, isHighlighted: true },
  { title: 'Total DBT Verified', value: '47', average: '16', period: 7 },
  { title: 'Total Active', value: '922', average: '894', period: 7 },
  { title: 'Pack Sold', value: '3753 (7156.50Ltr)', average: '5975', period: 7 },
];

const StatGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatGrid;