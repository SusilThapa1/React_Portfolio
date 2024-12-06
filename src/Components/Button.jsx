import React from "react";

const Button = ({ type, bg, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-${bg} rounded-full border border-white bg-transparent px-4 py-2 transition-all duration-1000 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default Button;
