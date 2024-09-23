import React from "react";

const CheckBoxField = ({ label, handleChange, checkDivStyle, ...props }) => {
  return (
    <div className={checkDivStyle || ""}>
      <input
        {...props}
        onChange={(e) => handleChange(e)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
      />
      <label htmlFor={props.id} className="ms-2 text-gray-900 text-[17px]">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxField;
