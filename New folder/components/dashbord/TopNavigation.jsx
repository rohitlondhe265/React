import React from 'react';

const TopNavigation = () => {
  const user = {
    name: 'John Doe',
    role: 'Admin',
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <div>
          <p className="text-sm">
            Welcome, {user.name} ({user.role})
          </p>
          {/* Add logout or profile options as needed */}
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
