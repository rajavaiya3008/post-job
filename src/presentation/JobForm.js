import React from "react";
import Button from "../shared/Button";
import DropDown from "../shared/DropDown";
import JobDescription from "./JobDescription";
import JobSkills from "./JobSkills";
import ContractType from "./ContractType";
import { selectJob } from "../description/jobForm";
import { JobFormContainer } from "../container/JobFormContainer";
import RecruitmentInfo from "./RecruitmentInfo";

const JobForm = () => {
  const { activeForm, handleChange, handleNavigation } = JobFormContainer();

  return (
    <div className="w-[700px] mt-[30px]">
      <div>
        <DropDown
          {...{ ...selectJob, handleChange }}
          style={
            "bg-blue-100 border border-gray-300 text-gray-400 text-lg rounded-lg w-[350px] p-2.5"
          }
        />
      </div>
      <div className="mt-[20px] h-[785px] overflow-auto">
        {activeForm === 1 && <JobDescription />}
        {activeForm === 2 && <JobSkills />}
        {activeForm === 3 && <ContractType />}
        {activeForm === 4 && <RecruitmentInfo />}
        <div className="mt-[30px] flex justify-between">
          <Button
            text={"Previous"}
            onClick={() => handleNavigation("prev")}
            disabled={activeForm === 1}
          />
          <Button
            text={"Next"}
            onClick={() => handleNavigation("next")}
            disabled={activeForm === 5}
          />
        </div>
      </div>
    </div>
  );
};

export default JobForm;
