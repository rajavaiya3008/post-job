import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jobDescription:{
        jobTitle:'',
        jobDesc:'',
        industry:'',
        engagement:'',
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
        
    }
})

export const {} = formSlice.actions
export default formSlice.reducer