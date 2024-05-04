import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: null,
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        }
    },
});