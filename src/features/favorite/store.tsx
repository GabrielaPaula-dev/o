import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./slice";

export const store = configureStore({
    reducer: {
        favorite:favoriteReducer
    }
})
