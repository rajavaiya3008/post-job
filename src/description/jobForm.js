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
  // options: ["ReactJs", "Api Testing"],
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

export const postJobTitle = {
  1: "Job Description",
  2: "Skills",
  3: "Contract Type",
  4: "Recruitment Info",
};

export const postJobFieldsTitle = {
  jobTitle: "JOB TITLE",
  jobDesc: "JOB DESCRIPTION",
  industry: "INDUSTRY",
  engagement: "ENGAGEMENT",
  engagementPSLAjencies: "ENGAGEMENT PSL AGENCIES",
  PSLAgency: "PSL AGENCY",
  city: "LOCATION",
  country: "",
  workType: "WORKPLACE TYPE",
  seniorityLevel: "SENIORITY LEVEL",
  experience: "REQUIRED YEARS OF EXPERIENCE",
  management: "MANAGEMENT EXPERIENCE REQUIRED",
  skill: "",
  skills: "SKILLS",
  employmentType: "EMPLOYMENT TYPE",
  requiredTime: "REQUIRED TIME LOAD",
  contractLength: "CONTRACT LENGTH",
  salaryType: "SALARY TYPE",
  currency: "CURRENCY",
  baseSalary: "BASE SALARY",
  salaryRange: "SALARY RANGE",
  dailyRate: "DAILY RATE",
  rateRange: "RATE RANGE",
  recruiterFee: "RECRUITER FEE",
  recruiterFeeType: "RECRUITER FEE TYPE",
  recruiterFeeAmount: "RECRUITER FEE AMOUNT",
  recruiterFeePercentage: "RECRUITER FEE PERCENTAGE",
  rebateTime: "REBATE TIME",
  cvLimit: "CV LIMIT",
  urgency: "URGENCY",
  recruiterMessage: "RECRUITER MESSAGE",
};
