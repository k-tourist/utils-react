import React from 'react';

const Input = ({ label, type = "text", className = "", ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:border-transparent
          placeholder-gray-400 dark:placeholder-gray-500
          bg-white dark:bg-gray-700
          text-gray-900 dark:text-white
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input; 