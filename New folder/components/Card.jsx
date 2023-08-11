// components/Card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-background text-text border border-border rounded p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
