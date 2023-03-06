import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addOnlineService: {
        id: 1,
        add: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
        selected: false
    },
    addStorage: {
        id: 2,
        add: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: false
    },
    addCustomProfile: {
        id: 3,
        add: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: false
    }
}

export const additionsSlice = createSlice({
    name: 'additions',
    initialState,
    reducers: {
        selectAdds(state, action) {
            for (const item in state) {
                state[item].id === action.payload && (state[item].selected = !state[item].selected)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { selectAdds } = additionsSlice.actions

export default additionsSlice.reducer