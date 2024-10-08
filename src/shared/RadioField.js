import React from "react";

const defaultInputStyle = "w-4 h-4 border-gray-300";
const defaultLabelStyle = "ms-2 font-medium text-gray-900 text-[20px]";

const RadioField = ({
  label,
  error,
  handleChange,
  radioStyle,
  radioLabel,
  isActive,
  activeName,
  ...props
}) => {
  return isActive ? (
    <>
      <input
        {...props}
        onChange={handleChange}
        className={radioStyle || defaultInputStyle}
      />
      <label
        htmlFor={props.id}
        className={`${radioLabel || defaultLabelStyle} ${
          props.checked && radioLabel ? "text-white bg-gray-900" : "text-black bg-gray-100"
        } cursor-pointer`}
      >
        {label}
      </label>
      {/* {error && (
        <span className="text-red-500 text-[12px] mt-[5px]">{error}</span>
      )} */}
    </>
  ) : null;
};
export default RadioField;
