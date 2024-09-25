import React from "react";
import FormFields from "./FormFields";
import { JobDescData, jobDescValidation } from "../description/jobDescription";

const JobDescription = () => {
  return (
    <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px]">
      {JobDescData.map((section, i) => (
        <FormFields
          key={i}
          {...{ ...section }}
          formValidation={jobDescValidation}
        />
      ))}
    </div>
  );
};

export default JobDescription;
