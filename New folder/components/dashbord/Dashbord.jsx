import React from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNavigation />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
