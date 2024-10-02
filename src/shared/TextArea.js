import React from "react";

const TextArea = ({ error, handleChange, type, ...props }) => {
  return (
    <div className="mt-[15px]">
      <textarea
        {...props}
        onChange={(e) => handleChange(e)}
        rows="4"
        className="p-2.5 w-full text-sm text-gray-900 bg-blue-50 rounded-lg border border-gray-300 "
      ></textarea>
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  );
};

export default TextArea;
