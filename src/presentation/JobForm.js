import React from "react";
import Button from "../shared/Button";
import DropDown from "../shared/DropDown";
// import JobDescription from "./JobDescription";
// import JobSkills from "./JobSkills";
// import ContractType from "./ContractType";
import { jobFormSection, selectJob } from "../description/jobForm";
import { JobFormContainer } from "../container/JobFormContainer";
// import RecruitmentInfo from "./RecruitmentInfo";
// import GeneralReview from "./GeneralReview";

const JobForm = () => {
  const { activeForm, jobRole, jobRoleErr, handleChange, handleNavigation } =
    JobFormContainer();
  const ActiveFormComponent = jobFormSection[activeForm];

  return (
    <div className="w-[700px] mt-[30px]">
      <div>
        <DropDown
          {...{ ...selectJob, value: jobRole, error: jobRoleErr, handleChange }}
          style={
            "bg-blue-100 border border-gray-300 text-gray-400 text-lg rounded-lg w-[686px] p-2.5"
          }
        />
      </div>
      <div className="mt-[20px] h-[785px] overflow-auto">
        {ActiveFormComponent ? <ActiveFormComponent /> : null}
        <div className="mt-[30px] flex justify-between">
          <Button
            text={"Previous"}
            onClick={() => handleNavigation("prev")}
            disabled={activeForm === 1}
            btnStyle={`text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              activeForm === 1
                ? "cursor-not-allowed bg-blue-100"
                : "bg-blue-700"
            }`}
          />
          <Button
            text={"Next"}
            onClick={() => handleNavigation("next")}
            disabled={activeForm === 5}
            btnStyle={`text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              activeForm === 5
                ? "cursor-not-allowed bg-blue-100"
                : "bg-blue-700"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default JobForm;
