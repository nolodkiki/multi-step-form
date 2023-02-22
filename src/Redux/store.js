import { configureStore } from "@reduxjs/toolkit";
import personalInfo from './slices/personalInfoSlice'
import step from './slices/stepSlice'
import selectPlan from './slices/selectPlan'

export const store = configureStore({
    reducer: {
        personalInfo,
        step,
        selectPlan
    }
})