import {configureStore, createSelector, createSlice} from "@reduxjs/toolkit";

const employeeSlice = createSlice(({
    name: 'employee',
    initialState: null,
    reducers: {
        addEmployee: (state, action) => {
            if (state === null) {
                localStorage.setItem("allEmployees", [action.payload]);
                return [action.payload]
            }
            localStorage.setItem("allEmployees", [...state, action.payload]);
            return [...state, action.payload]
        }
    },

}))

export const { addEmployee: addEmployee } = employeeSlice.actions;

export const store = configureStore({
    reducer: {
        allEmployees: employeeSlice.reducer,
    }
})