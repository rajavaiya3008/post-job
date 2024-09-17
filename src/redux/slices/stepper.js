import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeForm:1
}

export const stepperSlice = createSlice({
    name:'stepper',
    initialState,
    reducers:{
        handlePrev: (state,action) => {
            state.activeForm = action.payload
        },
        handleNext: (state,action) => {
            state.activeForm = action.payload
        }
    }
})

export const {handlePrev,handleNext} = stepperSlice.actions
export default stepperSlice.reducer