import { configureStore } from '@reduxjs/toolkit'
import lappu from "./counterSlice"
export const store = configureStore({
    reducer:{
        counter:lappu,
    },
})