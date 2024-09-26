import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postJob: {
    jobRole: "",
  },
  jobDescription: {
    jobTitle: "",
    jobDesc: "",
    industry: "",
    engagement: "",
    engagementPSLAjencies: "",
    PSLAgency: "",
    city: "",
    country: "",
    workType: "",
  },
  jobSkills: {
    seniorityLevel: "",
    experience: "",
    management: "",
    skill: "",
    skills: [],
  },
  contractType: {
    employmentType: "",
    requiredTime: "",
    contractLength: "",
    salaryType: "",
    currency: "",
    baseSalary: "",
    salaryRange: [0, 0],
    // salaryRangeFrom: 0,
    // salaryRangeTo: 1000000,
    dailyRate: "",
    rateRange: [0, 0],
    // rateRangeFrom: 0,
    // rateRangeTo: 1000000,
    recruiterFee: "",
    recruiterFeeType: "",
    recruiterFeeAmount: "",
    recruiterFeePercentage: "",
    rebateTime: "",
  },
  recruitmentInfo: {
    cvLimit: "",
    urgency: "",
    recruiterMessage: "",
    termsAndServices: false,
  },
  error: {},
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    onChange: (state, action) => {
      const { name, value, formName } = action.payload;
      state[formName][name] = value;
    },
    handleFormError: (state, action) => {
      const { error, formName } = action.payload;
      state.error[formName] = error;
    },
    clearPslAgency: (state) => {
      state.jobDescription.engagementPSLAjencies = "";
      state.jobDescription.PSLAgency = "";
    },
    resetFormData: () => {
      return initialState;
    },
    setFormData: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  onChange,
  handleFormError,
  clearPslAgency,
  resetFormData,
  setFormData,
} = formSlice.actions;
export default formSlice.reducer;
