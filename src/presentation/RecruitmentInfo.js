import React from "react";
import FormFields from "./FormFields";
import {
  recruitmentInfoData,
  recruitmentInfoValidation,
} from "../description/recruitmentInfo";

const RecruitmentInfo = () => {
  return (
    <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px]">
      {recruitmentInfoData.map((section, i) => (
        <FormFields
          key={i}
          {...{ ...section, formValidation: recruitmentInfoValidation }}
          //   formValidation={recruitmentInfoValidation}
        />
      ))}
    </div>
  );
};

export default RecruitmentInfo;
