import React from "react";

// label name value options onchange 

const DropDown = ({options,name}) => {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select an option
      </label>
      <select
        name={name}
        value={''}
        onChange={() => {}}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {
            options.map((option,i) => <option value={option} key={i}>{option}</option>)
        }
      </select>
    </div>
  );
};

export default DropDown;
