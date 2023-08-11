// components/Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-accent text-white rounded px-4 py-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
