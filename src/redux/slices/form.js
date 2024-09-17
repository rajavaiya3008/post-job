import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jobDescription:{
        jobTitle:'',
        jobDesc:'',
        industry:'',
        engagement:'',
        engagementPSLAjencies:'',
        PSLAgency:'',
        location:'',
        workType:''
    },
    error:{

    }
}

export const formSlice = createSlice({
    name:'formData',
    initialState,
    reducers:{
        onChange:(state,action) => {
            const {name,value,formName} = action.payload
            state[formName][name] = value
        },
        handleFormError:(state,action) => {
            const {error,formName} = action.payload
            state.error[formName] = error
        },
        clearPslAgency:(state) => {
            state.jobDescription.engagementPSLAjencies = ''
            state.jobDescription.PSLAgency = ''
        }
    }
})

export const {onChange,handleFormError,clearPslAgency} = formSlice.actions
export default formSlice.reducer