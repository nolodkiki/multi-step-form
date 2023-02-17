import { configureStore } from "@reduxjs/toolkit";
import value from './slices/valueSlice'
import stepSlice from './slices/valueSlice'

export const store = configureStore({
    reducer: {
        value,
        stepSlice
    }
})