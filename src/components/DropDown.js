import React from "react";

// label name value options onchange 

const DropDown = ({label,options,defaultVal,handleChange,error,...props}) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        {...props}
        onChange={(e) => handleChange(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
      <option value={''}>{defaultVal}</option>
        {
            options.map((option,i) => <option value={option} key={i}>{option}</option>)
        }
      </select>
      {error && <span>{error}</span>}
    </div>
  );
};

export default DropDown;
