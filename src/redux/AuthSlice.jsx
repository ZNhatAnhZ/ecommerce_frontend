import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "authentication",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});