import React from "react";
import Slider from "@mui/material/Slider";

const RangeSlider = () => {
  return (
    <>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={[10, 50]}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </>
  );
};

export default RangeSlider;
