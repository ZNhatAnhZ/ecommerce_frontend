import { createSlice } from "@reduxjs/toolkit";

export const ProductOptionSlice = createSlice({
    name: "productOption",
    initialState: {
        setOfSelectedVariationEntity: new Set()
    },
    reducers: {
        setSetOfSelectedVariationEntity: (state, action) => {
            state.setOfSelectedVariationEntity = action.payload;
        }
    },
});