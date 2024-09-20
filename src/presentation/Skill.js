import React, { Fragment } from "react";
import { SkillContainer } from "../container/SkillContainer";

const Skill = ({ formName }) => {
  
    const {error,skills,removeSkill} = SkillContainer({formName})

  return (
    <div className="mt-[10px]">
      {skills.map((skill, i) => (
        <Fragment key={i}>
          <span className="border text-[15px] p-[5px] rounded-[20px] bg-blue-100 ml-[5px]">
            {skill} <button onClick={() => removeSkill(skill)}>X</button>
          </span>
        </Fragment>
      ))}
      <br />
      {error?.[formName]?.skills && <span className="text-[12px]"> Note: {error?.[formName]?.skills}</span>}
    </div>
  );
};

export default Skill;
