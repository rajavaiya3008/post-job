import React from "react";
import Section from "./Section";
import { JobDescData, jobDescValidation } from "../description/jobDescription";


const JobDescription = () => {
  return (
    <div className="border-black border-[1px] rounded-[20px] p-[25px]">
      {JobDescData.map((section, i) => (
        <Section key={i} {...{ ...section }} formValidation={jobDescValidation}/>
      ))}
    </div>
  );
};

export default JobDescription;
