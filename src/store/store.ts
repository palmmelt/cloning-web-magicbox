import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import languageReducer from "./slices/languageSlice";

const reducer = {
    languageReducer,
};

export const store = configureStore({
    reducer,
    devTools: import.meta.env.NODE_ENV === "development",
})

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () =>useDispatch<AppDispatch>;

