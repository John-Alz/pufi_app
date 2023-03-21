import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from '../reducers/products/productsSlice';
import cartReducer from '../reducers/cart/cartSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
}) 