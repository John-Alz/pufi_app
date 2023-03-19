import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setInitialProducts : (state, action) => {
            state.products = [...state.products, action.payload];
        }
    }
})

export const { } = productsSlice.actions

export default productsSlice.reducer