import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: ''
}

export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        addNameValue(state, action) {
            state.name = action.payload
        },
        addEmailValue(state, action) {
            state.email = action.payload
        },
        addPhoneValue(state, action) {
            state.phone = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addNameValue, addEmailValue, addPhoneValue } = personalInfoSlice.actions

export default personalInfoSlice.reducer