import React, { useState } from "react";

const useHandleChange = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    input,
    handleChange,
  };
};

export default useHandleChange;
