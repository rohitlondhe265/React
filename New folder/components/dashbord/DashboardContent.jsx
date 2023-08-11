import React from 'react';

const DashboardContent = () => {
  const statistics = [
    { title: 'Total Orders', count: 2354 },
    { title: 'Revenue', count: '$19,876' },
    { title: 'Products', count: 134 },
    { title: 'Customers', count: 186 },
    // Add more statistics as needed
  ];

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Dashboard Overview</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-500 mb-1">{stat.title}</p>
            <h2 className="text-2xl font-bold">{stat.count}</h2>
          </div>
        ))}
      </div>
      {/* Add more content like charts, tables, etc. */}
    </div>
  );
};

export default DashboardContent;
