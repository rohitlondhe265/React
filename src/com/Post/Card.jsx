import React from 'react';

const Card = ({ title, date, excerpt }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-800">{excerpt}</p>
    </div>
  );
};

export default Card;
