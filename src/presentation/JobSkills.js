import React from "react";
import FormFields from "./FormFields";
import { jobSkillData, jobSkillsValidation } from "../description/jobSkills";

const JobSkills = () => {
  return (
    <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px]">
      {jobSkillData.map((section, i) => (
        <FormFields
          key={i}
          {...{ ...section, formValidation: jobSkillsValidation }}
          // formValidation={jobSkillsValidation}
        />
      ))}
    </div>
  );
};

export default JobSkills;
