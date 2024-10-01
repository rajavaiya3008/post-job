import React from "react";
import Button from "../shared/Button";
import DropDown from "../shared/DropDown";
// import JobDescription from "./JobDescription";
// import JobSkills from "./JobSkills";
// import ContractType from "./ContractType";
import {
  // jobFormSection,
  // postJobValidation,
  selectJob,
} from "../description/jobForm";
import { JobFormContainer } from "../container/jobFormContainer";
import { NEXT, PREV } from "../utils/constantVariable";
// import { objectEntries } from "../utils/commonFunction";
import FormFields from "./FormFields";
import GeneralReview from "./GeneralReview";
// import RecruitmentInfo from "./RecruitmentInfo";
// import GeneralReview from "./GeneralReview";

const JobForm = () => {
  const {
    activeForm,
    // jobRole,
    jobRoleErr,
    jobOptions,
    formFields,
    formValidation,
    handleChange,
    handleNavigation,
  } = JobFormContainer();
  // const ActiveFormComponent = jobFormSection[activeForm];

  return (
    <div className="w-[700px] mt-[30px]">
      <div>
        <DropDown
          {...{
            ...selectJob,
            // value: jobRole,
            options: jobOptions,
            error: jobRoleErr,
            handleChange,
          }}
          style={
            "bg-blue-100 border border-gray-300 text-gray-400 text-lg rounded-lg w-[686px] p-2.5"
          }
        />
      </div>
      <div className="mt-[20px] h-[785px] overflow-auto">
        {activeForm === 5 ? (
          <GeneralReview />
        ) : (
          <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px]">
            {formFields?.map((section, i) => (
              <FormFields
                key={i}
                {...{ ...section }}
                formValidation={formValidation}
              />
            ))}
          </div>
        )}

        {/* {ActiveFormComponent ? <ActiveFormComponent /> : null} */}
        <div className="mt-[30px] relative flex justify-between">
          <Button
            // text={"Previous"}
            onClick={() => handleNavigation(PREV)}
            disabled={activeForm === 1}
            btnStyle={`text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              activeForm === 1 ? "hidden" : "bg-blue-700"
            }`}
          >
            Previous
          </Button>
          <Button
            // text={"Next"}
            onClick={() => handleNavigation(NEXT)}
            disabled={activeForm === 5}
            btnStyle={`text-white absolute right-[0px] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              activeForm === 5 ? "hidden" : "bg-blue-700"
            }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
