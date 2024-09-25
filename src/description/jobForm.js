import ContractType from "../presentation/ContractType";
import GeneralReview from "../presentation/GeneralReview";
import JobDescription from "../presentation/JobDescription";
import JobSkills from "../presentation/JobSkills";
import RecruitmentInfo from "../presentation/RecruitmentInfo";
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

export const selectJobValidation = {
  jobRole: [{ required: true, message: "Please Select Job" }],
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

export const jobFormSection = {
  1: JobDescription,
  2: JobSkills,
  3: ContractType,
  4: RecruitmentInfo,
  5: GeneralReview,
};
