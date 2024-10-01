import React from "react";

const defaultStyle =
  "text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700";

const Button = ({ children, text, btnStyle, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={`${btnStyle ? btnStyle : defaultStyle} ${
        props.disabled ? "cursor-not-allowed bg-blue-100" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
