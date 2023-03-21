import { createSlice } from "@reduxjs/toolkit";



export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        selectedId: null,
    },
    reducers: {

        setInitialProducts : (state, action) => {
            state.products = [...action.payload];
        },

        setSelectProductId: (state, action) => {
            state.selectedId = action.payload;
        }

    }
})

export const { setInitialProducts, setSelectProductId } = productsSlice.actions

export default productsSlice.reducer