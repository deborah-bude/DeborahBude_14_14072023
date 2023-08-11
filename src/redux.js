import {configureStore, createSlice} from "@reduxjs/toolkit";

const allEmployeesSave = JSON.parse(localStorage.getItem("allEmployeesSave"))

const employeeSlice = createSlice(({
    name: 'employee',
    initialState: allEmployeesSave ? allEmployeesSave : null ,
    reducers: {
        addEmployee: (state, action) => {
            if (state === null) {
                localStorage.setItem("allEmployeesSave", JSON.stringify([action.payload]));
                return [action.payload]
            }
            localStorage.setItem("allEmployeesSave", JSON.stringify([...state, action.payload]));
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