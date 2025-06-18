import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6', 
  shadow = 'shadow-md',
  hover = true,
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${padding} ${shadow} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 