import React from "react";
import SingleField from "./SingleField";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useDispatch } from "react-redux";
import { handleNavigate } from "../redux/slices/stepper";

const DisplayData = ({ title, activeForm, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col gap-[15px]">
      <h2>{title.toUpperCase()}</h2>
      <button
        className="w-[40px] h-[40px] absolute right-[0px] top-[-6px] rounded-full bg-slate-100"
        onClick={() => dispatch(handleNavigate(activeForm))}
      >
        <ModeEditOutlineIcon />
      </button>
      {Object.entries(props).map(([key, value], i) => (
        <SingleField key={i} label={key} value={value} />
      ))}
    </div>
  );
};

export default DisplayData;
