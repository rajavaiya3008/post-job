import React from "react";
import Section from "./Section";
import {
  recruitmentInfoData,
  recruitmentInfoValidation,
} from "../description/recruitmentInfo";

const RecruitmentInfo = () => {
  return (
    <div className="border-black border-[1px] rounded-[20px] p-[25px]">
      {recruitmentInfoData.map((section, i) => (
        <Section
          key={i}
          {...{ ...section }}
          formValidation={recruitmentInfoValidation}
        />
      ))}
    </div>
  );
};

export default RecruitmentInfo;
