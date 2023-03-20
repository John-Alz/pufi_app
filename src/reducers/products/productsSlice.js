import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    detailProduct: []
}


export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {

        setInitialProducts : (state, action) => {
            state.products = [...action.payload];
        },
        setInitialDetail: (state, action) => {
            state.detailProduct = [...state.detailProduct, action.payload]
        }
    }
})

export const { setInitialProducts, setInitialDetail } = productsSlice.actions

export default productsSlice.reducer