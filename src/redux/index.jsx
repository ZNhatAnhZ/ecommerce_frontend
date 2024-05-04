import { configureStore } from "@reduxjs/toolkit";
import { ProductOptionSlice } from "./ProductOptionSlice";
import { AuthSlice } from "./AuthSlice";
import { CartSlice } from "./CartSlice";

export const store = configureStore({
    reducer: {
        productOption: ProductOptionSlice.reducer,
        authentication: AuthSlice.reducer,
        cart: CartSlice.reducer,
    },
});