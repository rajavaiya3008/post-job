import { contValidation } from "./const";
import { jobDescValidation } from "./jobDescription";
import { jobSkillsValidation } from "./jobSkills";
import { recruitmentInfoValidation } from "./recruitmentInfo";

export const selectJob = {
  type: "select",
  id: "jobRole",
  name: "jobRole",
  defaultVal: "Choose Job",
  options: ["ReactJs", "Api Testing"],
};

export const postJobData = {
  1: "jobDescription",
  2: "jobSkills",
  3: "contractType",
  4: "recruitmentInfo",
};

export const postJobValidation = {
  1: jobDescValidation,
  2: jobSkillsValidation,
  3: contValidation,
  4: recruitmentInfoValidation,
};
