import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, title: 'Dashboard', icon: 'dashboard' },
    { id: 2, title: 'Products', icon: 'shopping-cart' },
    { id: 3, title: 'Customers', icon: 'users' },
    { id: 4, title: 'Orders', icon: 'file-text' },
    // Add more menu items as needed
  ];

  return (
    <div className="w-64 bg-gray-800 text-white">
      <ul className="py-4">
        {menuItems.map((item) => (
          <li key={item.id} className="py-2 px-4">
            <i className={`mr-2 feather-icon icon-${item.icon}`}></i>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
