import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    plans: {
        arcade: {
            title: 'Arcade',
            monthlyPrice: 9,
            yearlyPrice: 90
        },
        advanced: {
            title: 'Advanced',
            monthlyPrice: 12,
            yearlyPrice: 120
        },
        pro: {
            title: 'Pro',
            monthlyPrice: 15,
            yearlyPrice: 150
        }
    },
    period: true,
    selectedPlan: '',
    selectedPrice: 0
}

export const selectPlanSlice = createSlice({
    name: 'selectPlan',
    initialState,
    reducers: {
        changePeriod(state) {
            state.period = !state.period
        },
        selectedPlan(state, action) {
            state.selectedPlan = action.payload
        },
        selectedPrice(state, action) {
            state.selectedPrice = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changePeriod, selectedPlan, selectedPrice } = selectPlanSlice.actions

export default selectPlanSlice.reducer