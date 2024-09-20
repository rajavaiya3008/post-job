import React from "react";

// label name value options onchange
const defaultStyle =
  "bg-blue-50 border border-gray-300 text-gray-400 text-lg rounded-lg w-full p-2.5";

const DropDown = ({
  label,
  options,
  defaultVal,
  handleChange,
  error,
  style,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={props.id} className="text-gray-900 text-[12px]">
        {label}
      </label>
      <select
        {...props}
        onChange={(e) => handleChange(e)}
        className={style ? style : defaultStyle}
      >
        <option value={""}>{defaultVal}</option>
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  );
};

export default DropDown;
