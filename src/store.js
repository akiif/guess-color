import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "./features/colors/colorsSlice";
import resultReducer from "./features/result/resultSlice";

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
        result: resultReducer,
    },
});
