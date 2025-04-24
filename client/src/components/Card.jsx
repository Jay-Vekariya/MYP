import React from 'react';

const Card = ({ children, className = '', bgColor = 'bg-white', shadow = true }) => {
  return (
    <div className={`p-4 rounded-lg ${shadow ? 'shadow-md' : ''} ${bgColor} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
