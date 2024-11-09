import React from "react";

const CustomButton = ({ btnTitle, customStyle,onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`${customStyle} w-24 p-1 bg-blue-400 hover:bg-blue-600 text-white rounded-lg shadow-xl border-2`}
    >
      {btnTitle}
    </button>
  );
};

export default CustomButton;
