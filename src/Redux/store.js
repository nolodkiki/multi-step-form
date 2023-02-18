import { configureStore } from "@reduxjs/toolkit";
import value from './slices/valueSlice'
import step from './slices/stepSlice'

export const store = configureStore({
    reducer: {
        value,
        step
    }
})