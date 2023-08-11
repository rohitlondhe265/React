import React from 'react';

const Button = ({ text, onClick, color, size, rounded, icon }) => {
  const getButtonColorClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600 text-white';
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  const getButtonSizeClass = () => {
    switch (size) {
      case 'large':
        return 'py-3 px-6 rounded-lg';
      default:
        return 'py-2 px-4 rounded';
    }
  };

  const getButtonShapeClass = () => {
    return rounded ? 'rounded-full' : 'rounded';
  };

  const renderIcon = () => {
    return icon ? <span className="mr-2">{icon}</span> : null;
  };

  return (
    <button
      onClick={onClick}
      className={`font-semibold ${getButtonColorClass()} ${getButtonSizeClass()} ${getButtonShapeClass()}`}
    >
      {renderIcon()}
      {text}
    </button>
  );
};

export default Button;
