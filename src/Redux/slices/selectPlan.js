import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    plans: {
        plan: ['Arcade', 'Advanced', 'Pro'],
        monthlyPrice: [9, 12, 15],
        yearlyPrice: [90, 120, 150]
    }
}

export const selectPlanSlice = createSlice({
    name: 'selectPlan',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const { } = selectPlanSlice.actions

export default selectPlanSlice.reducer