import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
       px-8 py-3 bg-amber-500 text-white font-medium rounded-lg shadow-black-500/30 hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-amber-500/30
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
