import React from 'react';

const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`
        px-6 py-2 bg-primary dark:bg-primary-600 text-white rounded-lg
        hover:bg-secondary dark:hover:bg-primary-700 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 