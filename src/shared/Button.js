import React from "react";

const Button = ({text,...props}) => {
  return (
    <button
      type="button"
      {...props}
      className={`text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${props.disabled ? 'cursor-not-allowed bg-blue-300' : ''}`}
    >
      {text}
    </button>
  );
};

export default Button;
