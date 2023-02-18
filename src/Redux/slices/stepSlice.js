import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeStep: 1
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        incrementStep(state) {
            if (state.activeStep < 5) {
                state.activeStep += 1
            }
            
        },
        decrementStep(state) {
            state.activeStep -= 1
        },
        changeStep(state, action) {
            state.activeStep = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { incrementStep, decrementStep, changeStep } = stepSlice.actions

export default stepSlice.reducer