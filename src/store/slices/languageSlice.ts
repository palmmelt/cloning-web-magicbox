import { RootState } from "../store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type languageState = {
    language: number;
}

const initialValues: languageState = {
    language: 1,
}

//setValue(onChange)
export const setValueAsync = createAsyncThunk(
    "language/setValueAsync",
    async (value: number) => {
        return value
    }
);

const languageSlice = createSlice({
    name: "language",
    initialState: initialValues,
    reducers: {
        changeTH: (state: languageState, action: PayloadAction<void>) => {
            state.language = 2;
        },
        changeEN: (state: languageState, action: PayloadAction<void>) => {
            state.language = 1;
        },
        changeToggle: (state: languageState, action: PayloadAction<void>) => {
            if (state.language === 1) {
                state.language = 2;
            } else {
                state.language = 1
            }
        },
    },
    extraReducers: (builder) => { 
        builder.addCase(setValueAsync.fulfilled, (state,action)=>{
            state.language = action.payload
        })
    },
})

export const { changeTH,changeEN,changeToggle } = languageSlice.actions;
export const languageSelector = (store: RootState) => store.languageReducer;
export default languageSlice.reducer;