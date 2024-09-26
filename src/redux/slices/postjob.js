import { createSlice } from "@reduxjs/toolkit";
import { contValidation } from "../../description/const";

const initialState = {
  contractValidation: {
    ...contValidation,
    ["1thReplacement"]: [
      { required: true, message: "Please Enter Replacement" },
    ],
  },
  replacementFields: [
    {
      type: "number",
      id: `1thReplacement`,
      name: `1thReplacement`,
      label: `1TH MONTH`,
      placeholder: "Free Replacement",
      disabledByCheckbox: `1thReplacement`,
      min: 0,
      max: 100,
    },
  ],
  finalFormFields: {},
  allJobData: {},
};

export const postJobSlice = createSlice({
  name: "postjob",
  initialState,
  reducers: {
    handleReplacementFields: (state, action) => {
      state.replacementFields = action.payload;
    },
    handleContractValidation: (state, action) => {
      state.contractValidation = action.payload;
    },
    handleFinalFormFields: (state, action) => {
      const { formName, keys } = action.payload;
      state.finalFormFields[formName] = keys;
    },
    resetFinalFormFields: (state, action) => {
      const { formName } = action.payload;
      state.finalFormFields[formName] = [];
    },
    postNewJob: (state, action) => {
      const { id, jobData } = action.payload;
      state.allJobData[id] = jobData;
    },
    resetPostJobData: (state) => {
      state.contractValidation = initialState.contractValidation;
      state.replacementFields = initialState.replacementFields;
      state.finalFormFields = initialState.finalFormFields;
    },
    setPostJobData: (state, action) => {
      const { contractValidation, replacementFields, finalFormFields } =
        action.payload;
      state.contractValidation = contractValidation;
      state.replacementFields = replacementFields;
      state.finalFormFields = finalFormFields;
    },
    deleteJobData: (state, action) => {
      state.allJobData = action.payload;
    },
  },
});

export const {
  handleReplacementFields,
  handleContractValidation,
  handleFinalFormFields,
  resetFinalFormFields,
  postNewJob,
  resetPostJobData,
  setPostJobData,
  deleteJobData,
} = postJobSlice.actions;
export default postJobSlice.reducer;
