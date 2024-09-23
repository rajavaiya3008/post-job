import React from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../redux/slices/form";

const RangeSlider = ({ handleChange, ...props }) => {
  // const dispatch = useDispatch();
  // const value = useSelector((state) => state.formData[formName][name]);

  // const handleRangeChange = (e, value) => {
  //   console.log("RRRRRR", e.target.value);
  //   dispatch(onChange({ name, value, formName }));
  // };

  return (
    <>
      <Slider
        getAriaLabel={() => "Temperature range"}
        {...props}
        onChange={(e) => handleChange(e)}
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default RangeSlider;
