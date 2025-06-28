import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todeSlice";
export const store = configureStore({
    reducer : todoReducer
})