import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    errors: {
        name: false,
        email: false,
        phone: false,
    }
}

export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        addNameValue(state, action) {
            state.name = action.payload
            action.payload === '' ? state.errors.name = true : state.errors.name = false
        },
        addEmailValue(state, action) {
            state.email = action.payload
            action.payload === '' ? state.errors.email = true : state.errors.email = false
        },
        addPhoneValue(state, action) {
            state.phone = action.payload
            action.payload === '' ? state.errors.phone = true : state.errors.phone = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { addNameValue, addEmailValue, addPhoneValue } = personalInfoSlice.actions

export default personalInfoSlice.reducer