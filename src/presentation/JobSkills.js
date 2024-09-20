import React from "react";
import Section from "./Section";
import { jobSkillData, jobSkillsValidation } from "../description/jobSkills";

const JobSkills = () => {
  return (
    <div className="border-black border-[1px] rounded-[20px] p-[25px]">
      {jobSkillData.map((section, i) => (
        <Section
          key={i}
          {...{ ...section }}
          formValidation={jobSkillsValidation}
        />
      ))}
    </div>
  );
};

export default JobSkills;
