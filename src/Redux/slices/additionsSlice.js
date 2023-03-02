import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addOnlineService: {
        id: 1,
        add: 'Online service',
        description: 'Access to multiplayer games',
        price: 1,
        selected: false
    },
    addStorage: {
        id: 2,
        add: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: 2,
        selected: false
    },
    addCustomProfile: {
        id: 3,
        add: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: 2,
        selected: false
    },
}

export const additionsSlice = createSlice({
    name: 'additions',
    initialState,
    reducers: {
        selectOnlineService(state) {
            state.addOnlineService.selected = !state.addOnlineService.selected
        }
    },
})

// Action creators are generated for each case reducer function
export const { selectOnlineService } = additionsSlice.actions

export default additionsSlice.reducer