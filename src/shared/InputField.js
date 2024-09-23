import React from "react";

const defaultStyle =
  "bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5";

const InputField = ({
  disabledByCheckbox,
  from,
  isActive,
  activeName,
  inputStyle,
  inputDivStyle,
  label,
  error,
  handleChange,
  ...props
}) => {
  return isActive ? (
    <div className={inputDivStyle ?? ""}>
      <label htmlFor="first_name" className="text-gray-900 text-[12px]">
        {label}
      </label>
      <input
        {...props}
        onChange={(e) => handleChange(e)}
        className={inputStyle || defaultStyle}
      />
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  ) : null;
};

export default InputField;
