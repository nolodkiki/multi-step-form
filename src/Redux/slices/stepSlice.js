import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeStep: 1
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const {  } = stepSlice.actions

export default stepSlice.reducer