import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from '../reducers/products/productsSlice'

export default configureStore({
    reducer: {
        products: productsReducer,
    }
}) 