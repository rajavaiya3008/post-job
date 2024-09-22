import React from "react";

const InputField = ({isActive,label,error,handleChange,...props}) => {
  return isActive ?(
    <div>
      <label
        htmlFor="first_name"
        className="text-gray-900 text-[12px]"
      >
        {label}
      </label>
      <input
        {...props}
        onChange={(e) => handleChange(e)}
        className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
      />
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  ) : null;
};

export default InputField;
