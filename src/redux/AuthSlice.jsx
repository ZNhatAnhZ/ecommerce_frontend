import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "authentication",
    initialState: {
        user: {
            id: 47
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});