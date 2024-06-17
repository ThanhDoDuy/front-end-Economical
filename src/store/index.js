import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddeware => {
        return getDefaultMiddeware({
            serializableCheck: false
        })
    },
    devTools: true
});

export default store;