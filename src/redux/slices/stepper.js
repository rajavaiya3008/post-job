import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeForm: 1,
};

export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    handleNavigate: (state, action) => {
      state.activeForm = action.payload;
    },
  },
});

export const { handleNavigate } = stepperSlice.actions;
export default stepperSlice.reducer;
