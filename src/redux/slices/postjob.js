import { createSlice } from "@reduxjs/toolkit";
import { contValidation } from "../../description/const";

const initialState = {
  contractValidation: {
    ...contValidation,
    ["1stReplacement"]: [
      { required: true, message: "Please Enter Replacement" },
    ],
  },
  replacementFields: [
    {
      type: "number",
      id: `1stReplacement`,
      name: `1stReplacement`,
      label: `1ST MONTH`,
      placeholder: "Free Replacement",
    },
  ],
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
  },
});

export const { handleReplacementFields, handleContractValidation } =
  postJobSlice.actions;
export default postJobSlice.reducer;
